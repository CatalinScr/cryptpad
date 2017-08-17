define(['jquery'], function ($) {
    var module = {};

    module.create = function (cfg, onLocal, Common, metadataMgr) {
        var exp = {};

        exp.defaultTitle = Common.getDefaultTitle();

        exp.title = document.title; // TOOD slides

        cfg = cfg || {};

        var getHeadingText = cfg.getHeadingText || function () { return; };

        var updateLocalTitle = function (newTitle) {
            console.log(newTitle);
            exp.title = newTitle;
            onLocal();
            if (typeof cfg.updateLocalTitle === "function") {
                cfg.updateLocalTitle(newTitle);
            } else {
                document.title = newTitle;
            }
        };

        var $title;
        exp.setToolbar = function (toolbar) {
            $title = toolbar && toolbar.title;
        };

        exp.getTitle = function () { return exp.title; };
        var isDefaultTitle = exp.isDefaultTitle = function (){return exp.title === exp.defaultTitle;};

        var suggestTitle = exp.suggestTitle = function (fallback) {
            if (isDefaultTitle()) {
                return getHeadingText() || fallback || "";
            } else {
                return exp.title || getHeadingText() || exp.defaultTitle;
            }
        };

        var renameCb = function (err, newTitle) {
            if (err) { return; }
            updateLocalTitle(newTitle);
            onLocal();
        };

        // update title: href is optional; if not specified, we use window.location.href
        exp.updateTitle = function (newTitle, cb) {
            cb = cb || $.noop;
            if (newTitle === exp.title) { return; }
            // Change the title now, and set it back to the old value if there is an error
            var oldTitle = exp.title;
            Common.setPadTitleInDrive(newTitle, function (err, data) {
                if (err) {
                    console.log("Couldn't set pad title");
                    console.error(err);
                    updateLocalTitle(oldTitle);
                    return void cb(err);
                }
                updateLocalTitle(data);
                cb(null, data);
                if (!$title) { return; }
                $title.find('span.title').text(data);
                $title.find('input').val(data);
            });
        };

        // TODO not needed?
        /*exp.updateDefaultTitle = function (newDefaultTitle) {
            exp.defaultTitle = newDefaultTitle;
            if (!$title) { return; }
            $title.find('input').attr("placeholder", exp.defaultTitle);
        };*/

        metadataMgr.onChange(function () {
            var md = metadataMgr.getMetadata();
            exp.updateTitle(md.title || md.defaultTitle);
        });

        exp.getTitleConfig = function () {
            return {
                onRename: renameCb,
                suggestName: suggestTitle,
                defaultName: exp.defaultTitle
            };
        };

        return exp;
    };

    return module;
});
