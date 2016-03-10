/*
 * Copyright 2014 XWiki SAS
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
define([
    '/common/messages.js',
    '/common/netflux.js',
    '/common/crypto.js',
    '/common/toolbar.js',
    '/common/sharejs_textarea.js',
    '/common/chainpad.js',
    '/bower_components/jquery/dist/jquery.min.js',
], function (Messages, Netflux, Crypto, Toolbar, sharejs) {
    var $ = window.jQuery;
    var ChainPad = window.ChainPad;
    var PARANOIA = true;
    var module = { exports: {} };

    var debug = function (x) { console.log(x); },
        warn = function (x) { console.error(x); },
        verbose = function (x) { console.log(x); };
    verbose = function () {}; // comment out to enable verbose logging

    // ------------------ Trapping Keyboard Events ---------------------- //

    var bindEvents = function (element, events, callback, unbind) {
        for (var i = 0; i < events.length; i++) {
            var e = events[i];
            if (element.addEventListener) {
                if (unbind) {
                    element.removeEventListener(e, callback, false);
                } else {
                    element.addEventListener(e, callback, false);
                }
            } else {
                if (unbind) {
                    element.detachEvent('on' + e, callback);
                } else {
                    element.attachEvent('on' + e, callback);
                }
            }
        }
    };

    var bindAllEvents = function (textarea, docBody, onEvent, unbind)
    {
        /*
            we use docBody for the purposes of CKEditor.
            because otherwise special keybindings like ctrl-b and ctrl-i
            would open bookmarks and info instead of applying bold/italic styles
        */
        if (docBody) {
            bindEvents(docBody,
               ['textInput', 'keydown', 'keyup', 'select', 'cut', 'paste'],
               onEvent,
               unbind);
        }
        bindEvents(textarea,
                   ['mousedown','mouseup','click','change'],
                   onEvent,
                   unbind);
    };
    
    var getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    var start = module.exports.start =
        function (config)
    {
        var textarea = config.textarea;
        var websocketUrl = config.websocketURL;
        var webrtcUrl = config.webrtcURL;
        var userName = config.userName;
        var channel = config.channel;
        var cryptKey = config.cryptKey;

        var passwd = 'y';

        // make sure configuration is defined
        config = config || {};

        var doc = config.doc || null;

        // trying to deprecate onRemote, prefer loading it via the conf
        onRemote = config.onRemote || null;

        transformFunction = config.transformFunction || null;

        // define this in case it gets called before the rest of our stuff is ready.
        var onEvent = function () { };

        var allMessages = [];
        var initializing = true;

        var bump = function () {};
        
        var messagesHistory = [];

        var options = {
          key: channel
        }

        var rtc = true;
        var connected = false;
        var realtime;

        if(!getParameterByName("webrtc")) {
          rtc = false;
          options.signaling = websocketUrl;
          options.topology = 'StarTopologyService';
          options.protocol = 'WebSocketProtocolService';
          options.connector = 'WebSocketService';
          options.openWebChannel = true;
        }
        else {
          options.signaling = webrtcUrl;
        }

        if(rtc) {
          // Check if the WebRTC channel exists and create it if necessary
          var webchannel = Netflux.create();
          webchannel.openForJoining(options).then(function(data) {
              connected = true;
              onOpen(webchannel);
          }, function(error) {
              warn(error);
          });
        }
        if(!connected) {
          // Connect to the WebSocket/WebRTC channel
          Netflux.join(channel, options).then(function(wc) {
              connected = true;
              onOpen(wc);
          }, function(error) {
              warn(error);
          });
        }
        
        var onOpen = function(wc) {
            // Add the handlers to the WebChannel
            wc.onmessage = onMessage; // On receiving message
            wc.onJoining = onJoining; // On user joining the session
            wc.onLeaving = onLeaving; // On user leaving the session
            wc.onPeerMessage = function(peerId, type) {
              onPeerMessage(peerId, type, wc);
            }

            // Open a Chainpad session
            realtime = createRealtime();
            
            // we're fully synced
            initializing = false;

            // execute an onReady callback if one was supplied
            if (config.onReady) {
                config.onReady();
            }
            
            // On sending message
            realtime.onMessage(function(message) {
              // Prevent Chainpad from sending authentication messages since it is handled by Netflux
              var parsed = parseMessage(message);
              if (parsed.content[0] !== 0) {
                message = Crypto.encrypt(message, cryptKey);
                wc.send(message).then(function() {
                  // Send the message back to Chainpad once it is sent to all peers if using the WebRTC protocol
                  if(rtc) { onMessage('', message); }
                });
              }
            });

            // Get the channel history
            var hc;
            if(rtc) {
              for (let c of wc.channels) { hc = c; break; }
              if(hc) {
                wc.getHistory(hc.peerID);
              }
            }
            else {
              // TODO : Improve WebSocket service to use the latest Netflux's API
              wc.peers.forEach(function (p) { if (!hc || p.linkQuality > hc.linkQuality) { hc = p; } });
              hc.send(JSON.stringify(['GET_HISTORY', wc.id]));
            }
            
            // Check the connection to the channel
            if(!rtc) {
              // TODO
              // checkConnection(wc);
            }

            bindAllEvents(textarea, doc, onEvent, false);

            sharejs.attach(textarea, realtime);
            bump = realtime.bumpSharejs;

            realtime.start();
          
        } 

        var createRealtime = function() {
            return ChainPad.create(userName,
                                        passwd,
                                        channel,
                                        $(textarea).val(),
                                        {
                                        transformFunction: config.transformFunction
                                        });
        }

        var whoami = new RegExp(userName.replace(/[\/\+]/g, function (c) {
            return '\\' +c;
        }));
        
        var onPeerMessage = function(peerID, type, wc) {
            if(type === 6) {
                messagesHistory.forEach(function(msg) {
                  console.log(msg);
                  wc.sendTo(peerID, msg);
                });
            }
        };

        var onMessage = function(peer, msg) {
          
            // remove the password
            messagesHistory.push(msg);
            var passLen = msg.substring(0,msg.indexOf(':'));
            var message = msg.substring(passLen.length+1 + Number(passLen));
            
            message = Crypto.decrypt(message, cryptKey);
            
            verbose(message);
            allMessages.push(message);
            if (!initializing) {
                if (PARANOIA) {
                    onEvent();
                }
            }
            realtime.message(message);
            if (/\[5,/.test(message)) { verbose("pong"); }

            if (!initializing) {
                if (/\[2,/.test(message)) {
                    //verbose("Got a patch");
                    if (whoami.test(message)) {
                        //verbose("Received own message");
                    } else {
                        //verbose("Received remote message");
                        // obviously this is only going to get called if
                        if (onRemote) { onRemote(realtime.getUserDoc()); }
                    }
                }
            }
        }
        
        var onJoining = function(peer, channel) {
          console.log('Someone joined : '+peer)
        }

        var onLeaving = function(peer, channel) {
          console.log('Someone left : '+peer)
        }

        var checkConnection = function(wc) {
            if(wc.channels && wc.channels.size > 0) {
                var channels = Array.from(wc.channels);
                var channel = channels[0];
                
                var socketChecker = setInterval(function () {
                    if (channel.checkSocket(realtime)) {
                        warn("Socket disconnected!");

                        recoverableErrorCount += 1;

                        if (recoverableErrorCount >= MAX_RECOVERABLE_ERRORS) {
                            warn("Giving up!");
                            realtime.abort();
                            try { channel.close(); } catch (e) { warn(e); }
                            if (config.onAbort) {
                                config.onAbort({
                                    socket: channel
                                });
                            }
                            if (socketChecker) { clearInterval(socketChecker); }
                        }
                    } else {
                        // it's working as expected, continue
                    }
                }, 200);
            }
        }

        var parseMessage = function (msg) {
            var res ={};
            // two or more? use a for
            ['pass','user','channelId','content'].forEach(function(attr){
                var len=msg.slice(0,msg.indexOf(':')),
                // taking an offset lets us slice out the prop
                // and saves us one string copy
                    o=len.length+1,
                    prop=res[attr]=msg.slice(o,Number(len)+o);
                // slice off the property and its descriptor
                msg = msg.slice(prop.length+o);
            });
            // content is the only attribute that's not a string
            res.content=JSON.parse(res.content);
            return res;
        };

        return {
            onEvent: function () {
                onEvent();
            },
            bumpSharejs: function () { bump(); }
        };
    };
    return module.exports;
});
