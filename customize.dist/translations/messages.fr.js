define(function () {
    var out = {};

    out.main_title = "CryptPad : Éditeur collaboratif en temps réel, zero knowledge";

    out.type = {};
    out.type.pad = 'Texte';
    out.type.code = 'Code';
    out.type.poll = 'Sondage';
    out.type.kanban = 'Kanban';
    out.type.slide = 'Présentation';
    out.type.drive = 'CryptDrive';
    out.type.whiteboard = "Tableau Blanc";
    out.type.file = "Fichier";
    out.type.media = "Média";
    out.type.todo = "Todo";
    out.type.contacts = "Contacts";

    out.button_newpad = 'Nouveau document texte';
    out.button_newcode = 'Nouvelle page de code';
    out.button_newpoll = 'Nouveau sondage';
    out.button_newslide = 'Nouvelle présentation';
    out.button_newwhiteboard = 'Nouveau tableau blanc';
    out.button_newkanban = 'Nouveau kanban';

    out.updated_0_common_connectionLost = "<b>Connexion au serveur perdue</b><br>Vous êtes désormais en mode lecture seule jusqu'au retour de la connexion.";
    out.common_connectionLost = out.updated_0_common_connectionLost;

    out.websocketError = 'Impossible de se connecter au serveur WebSocket...';
    out.typeError = "Ce pad n'est pas compatible avec l'application sélectionnée";
    out.onLogout = 'Vous êtes déconnecté de votre compte utilisateur, {0}cliquez ici{1} pour vous authentifier<br>ou appuyez sur <em>Échap</em> pour accéder au pad en mode lecture seule.';
    out.wrongApp = "Impossible d'afficher le contenu de ce document temps-réel dans votre navigateur. Vous pouvez essayer de recharger la page.";
    out.padNotPinned = 'Ce pad va expirer après 3 mois d\'inactivité, {0}connectez-vous{1} ou {2}enregistrez-vous{3} pour le préserver.';
    out.anonymousStoreDisabled = "L'administrateur de cette instance de CryptPad a désactivé le drive pour les utilisateurs non enregistrés. Vous devez vous connecter pour pouvoir utiliser CryptDrive.";
    out.expiredError = "Ce pad a atteint sa date d'expiration est n'est donc plus disponible.";
    out.deletedError = 'Ce pad a été supprimé par son propriétaire et n\'est donc plus disponible.';
    out.inactiveError = 'Ce pad a été supprimé en raison de son inactivité. Appuyez sur Échap pour créer un nouveau pad.';
    out.chainpadError = 'Une erreur critique est survenue lors de la mise à jour du contenu. Le pad est désormais en mode lecture seule afin de s\'assurer que vous ne perdiez pas davantage de données.<br>' +
                        'Appuyez sur <em>Échap</em> pour voir le pad ou rechargez la page pour pouvoir le modifier à nouveau.';
    out.errorCopy = ' Vous pouvez toujours copier son contenu ailleurs en appuyant sur <em>Échap</em>.<br> Dés que vous aurez quitté la page, il sera impossible de le récupérer.';
    out.errorRedirectToHome = 'Appuyez sur <em>Échap</em> pour retourner vers votre CryptDrive.';
    out.newVersionError = "Une nouvelle version de CryptPad est disponible.<br>" +
                          "<a href='#'>Rechargez la page</a> pour utiliser la nouvelle version, ou appuyez sur Échap pour accéder au contenu actuel en <b>mode hors-ligne</b>.";

    out.loading = "Chargement...";
    out.error = "Erreur";
    out.saved = "Enregistré";
    out.synced = "Tout est enregistré";
    out.deleted = "Pad supprimé de votre CryptDrive";
    out.deletedFromServer = "Pad supprimé du serveur";

    out.realtime_unrecoverableError = "Le moteur temps-réel a rencontré une erreur critique. Cliquez sur OK pour recharger la page.";

    out.disconnected = 'Déconnecté';
    out.synchronizing = 'Synchronisation';
    out.reconnecting = 'Reconnexion';
    out.typing = "Édition";
    out.initializing = "Initialisation...";
    out.forgotten = 'Déplacé vers la corbeille';
    out.errorState = 'Erreur critique : {0}';
    out.lag = 'Latence';
    out.readonly = 'Lecture seule';
    out.anonymous = "Anonyme";
    out.yourself = "Vous-même";
    out.anonymousUsers = "éditeurs anonymes";
    out.anonymousUser = "éditeur anonyme";
    out.users = "Utilisateurs";
    out.and = "Et";
    out.viewer = "lecteur";
    out.viewers = "lecteurs";
    out.editor = "éditeur";
    out.editors = "éditeurs";
    out.userlist_offline = "Vous êtes actuellement hors-ligne, la liste des utilisateurs n'est pas disponible.";

    out.language = "Langue";

    out.comingSoon = "Bientôt disponible...";

    out.newVersion = '<b>CryptPad a été mis à jour !</b><br>' +
                     'Découvrez les nouveautés de la dernière version :<br>'+
                     '<a href="https://github.com/xwiki-labs/cryptpad/releases/tag/{0}" target="_blank">Notes de version pour CryptPad {0}</a>';

    out.upgrade = "Augmenter votre limite";
    out.upgradeTitle = "Améliorer votre compte pour augmenter la limite de stockage";

    out.upgradeAccount = "Améliorer le compte";
    out.MB = "Mo";
    out.GB = "Go";
    out.KB = "Ko";

    out.supportCryptpad = "Soutenir CryptPad";

    out.formattedMB = "{0} Mo";
    out.formattedGB = "{0} Go";
    out.formattedKB = "{0} Ko";

    out.greenLight = "Tout fonctionne bien";
    out.orangeLight = "Votre connexion est lente, ce qui réduit la qualité de l'éditeur";
    out.redLight = "Vous êtes déconnecté de la session";

    out.pinLimitReached = "Vous avez atteint votre limite de stockage";
    out.updated_0_pinLimitReachedAlert = "Vous avez atteint votre limite de stockage. Les nouveaux pads ne seront pas enregistrés dans votre CryptDrive.<br>" +
        'Vous pouvez soit supprimer des pads de votre CryptDrive, soit vous <a href="https://accounts.cryptpad.fr/#!on={0}" target="_blank">abonner à une offre premium</a> pour augmenter la limite maximale.';
    out.pinLimitReachedAlert = out.updated_0_pinLimitReachedAlert;
    out.pinLimitReachedAlertNoAccounts = out.pinLimitReached;
    out.pinLimitNotPinned = "Vous avez atteint votre limite de stockage.<br>"+
                            "Ce pad n'est pas enregistré dans votre CryptDrive.";
    out.pinLimitDrive = out.pinLimitReached+ ".<br>" +
                        "Vous ne pouvez pas créer de nouveaux pads.";

    out.moreActions = "Autres actions";

    out.importButton = "Importer";
    out.importButtonTitle = 'Importer un pad depuis un fichier local';

    out.exportButton = "Exporter";
    out.exportButtonTitle = 'Exporter ce pad vers un fichier local';
    out.exportPrompt = 'Comment souhaitez-vous nommer ce fichier ?';

    out.changeNamePrompt = 'Changer votre nom (laisser vide pour rester anonyme) : ';
    out.user_rename = "Changer le nom affiché";
    out.user_displayName = "Nom affiché";
    out.user_accountName = "Nom d'utilisateur";

    out.clickToEdit = 'Cliquer pour modifier';
    out.saveTitle = "Enregistrer le titre (Entrée)";

    out.forgetButton = "Supprimer";
    out.forgetButtonTitle = 'Déplacer ce pad vers la corbeille';
    out.forgetPrompt = 'Cliquer sur OK déplacera ce pad vers la corbeille de votre CryptDrive, êtes-vous sûr ?';
    out.movedToTrash = 'Ce pad a été déplacé vers la corbeille.<br><a href="/drive/">Accéder à mon Drive</a>';

    out.shareButton = 'Partager';
    out.shareSuccess = 'Lien copié dans le presse-papiers';

    out.userListButton = "Liste d'utilisateurs";

    out.userAccountButton = "Votre compte";

    out.newButton = 'Nouveau';
    out.newButtonTitle = 'Créer un nouveau pad';
    out.uploadButton = 'Importer des fichiers';
    out.uploadButtonTitle = 'Importer un nouveau fichier dans le dossier actuel';

    out.saveTemplateButton = "Sauver en tant que modèle";
    out.saveTemplatePrompt = "Choisir un titre pour ce modèle";
    out.templateSaved = "Modèle enregistré !";
    out.selectTemplate = "Sélectionner un modèle ou appuyer sur Échap";
    out.useTemplate = "Commencer avec un modèle?";
    out.useTemplateOK = 'Choisir un modèle (Entrée)';
    out.useTemplateCancel = 'Document vierge (Échap)';
    out.template_import = "Importer un modèle";
    out.template_empty = "Aucun modèle disponible";

    out.previewButtonTitle = "Afficher ou cacher la prévisualisation de Markdown";

    out.presentButtonTitle = "Entrer en mode présentation";

    out.backgroundButtonTitle = 'Changer la couleur de fond de la présentation';
    out.colorButtonTitle = 'Changer la couleur du texte en mode présentation';

    out.propertiesButton = "Propriétés";
    out.propertiesButtonTitle = 'Voir les propriétés de ce pad';

    out.printText = "Imprimer";
    out.printButton = "Imprimer (Entrée)";
    out.printButtonTitle = "Imprimer votre présentation ou l'enregistrer au format PDF";
    out.printOptions = "Options de mise en page";
    out.printSlideNumber = "Afficher le numéro des slides";
    out.printDate = "Afficher la date";
    out.printTitle = "Afficher le titre du pad";
    out.printCSS = "Personnaliser l'apparence (CSS):";
    out.printTransition = "Activer les animations de transition";
    out.printBackground = "Utiliser une image d'arrière-plan";
    out.printBackgroundButton = "Choisir une image";
    out.printBackgroundValue = "<b>Arrière-plan actuel:</b> <em>{0}</em>";
    out.printBackgroundNoValue = "<em>Aucun arrière-plan affiché</em>";
    out.printBackgroundRemove = "Supprimer cet arrière-plan";

    out.filePickerButton = "Intégrer un fichier stocké dans CryptDrive";
    out.filePicker_close = "Fermer";
    out.filePicker_description = "Choisissez un fichier de votre CryptDrive pour l'intégrer ou importez-en un nouveau";
    out.filePicker_filter = "Filtrez les fichiers par leur nom";
    out.or = 'ou';

    out.tags_title = "Mots-clés du pad (pour vous uniquement)";
    out.tags_add = "Modifier les mots-clés du pad";
    out.tags_searchHint = "Commencez une recherche par # dans votre CryptDrive pour retrouver vos pads par mot-clé.";
    out.tags_notShared = "Vos mots-clés ne sont pas partagés avec les autres utilisateurs.";
    out.tags_duplicate = "Mot-clé déjà présent : {0}";
    out.tags_noentry = "Vous ne pouvez pas ajouter de mots-clés à un pad supprimé!";

    out.slideOptionsText = "Options";
    out.slideOptionsTitle = "Personnaliser la présentation";
    out.slideOptionsButton = "Enregistrer (Entrée)";
    out.slide_invalidLess = "Feuille de style non valide";

    out.languageButton = "Langage";
    out.languageButtonTitle = "Sélectionner le langage à utiliser pour la coloration syntaxique";
    out.themeButton = "Thème";
    out.themeButtonTitle = "Sélectionner le thème de couleurs à utiliser pour les éditeurs de code et de présentations";

    out.editShare = "Lien d'édition";
    out.editShareTitle = "Copier le lien d'édition dans le presse-papiers";
    out.editOpen = "Éditer dans un nouvel onglet";
    out.editOpenTitle = "Ouvrir le lien d'édition dans un nouvel onglet";
    out.viewShare = "Lien de lecture-seule";
    out.viewShareTitle = "Copier lien d'accès en lecture seule dans le presse-papiers";
    out.viewOpen = "Voir dans un nouvel onglet";
    out.viewOpenTitle = "Ouvrir le lien en lecture seule dans un nouvel onglet";
    out.fileShare = "Copier le lien";
    out.getEmbedCode = "Obtenir le code d'intégration";
    out.viewEmbedTitle = "Intégrer le pad dans une page web";
    out.viewEmbedTag = "Pour intégrer ce pad, veuillez inclure l'iframe suivant dans votre page là où vous souhaitez l'afficher. Vous pouvez changer sa taille en utilisant du code CSS ou des attributs HTML.";
    out.fileEmbedTitle = "Intégrer le fichier dans une page web";
    out.fileEmbedScript = "Pour intégrer un fichier, veuillez inclure le script suivant une fois dans votre page afin de pouvoir charger le Media Tag :";
    out.fileEmbedTag = "Ensuite vous pouvez placer ce Media Tag où vous souhaitez dans votre page pour l'intégrer :";

    out.notifyJoined = "{0} a rejoint la session collaborative";
    out.notifyRenamed = "{0} a changé son nom en {1}";
    out.notifyLeft = "{0} a quitté la session collaborative";

    out.okButton = 'OK (Entrée)';

    out.cancel = "Annuler";
    out.cancelButton = 'Annuler (Échap)';
    out.doNotAskAgain = "Ne plus demander (Échap)";

    out.show_help_button = "Afficher l'aide";
    out.hide_help_button = "Cacher l'aide";
    out.help_button = "Aide";

    out.historyText = "Historique";
    out.historyButton = "Afficher l'historique du document";
    out.history_next = "Voir la version suivante";
    out.history_prev = "Voir la version précédente";
    out.history_goTo = "Voir la version sélectionnée";
    out.history_close = "Retour";
    out.history_closeTitle = "Fermer l'historique";
    out.history_restore = "Restaurer";
    out.history_restoreTitle = "Restaurer la version du document sélectionnée";
    out.history_restorePrompt = "Êtes-vous sûr de vouloir remplacer la version actuelle du document par la version affichée ?";
    out.history_restoreDone = "Document restauré";
    out.history_version = "Version :";

    // Ckeditor
    out.openLinkInNewTab = "Ouvrir le lien dans un nouvel onglet";
    out.pad_mediatagTitle = "Options du Media-Tag";
    out.pad_mediatagWidth = "Largeur (px)";
    out.pad_mediatagHeight = "Hauteur (px)";

    // Kanban
    out.kanban_newBoard = "Nouveau tableau";
    out.kanban_item = "Élément {0}"; // Item number for initial content
    out.kanban_todo = "À faire";
    out.kanban_done = "Terminé";
    out.kanban_working = "En cours";
    out.kanban_deleteBoard = "Êtes-vous sûr de vouloir supprimer ce tableau ?";
    out.kanban_addBoard = "Ajouter un tableau";
    out.kanban_removeItem = "Supprimer cet élément";
    out.kanban_removeItemConfirm = "Êtes-vous sûr de vouloir supprimer cet élément ?";

    // Polls

    out.poll_title = "Sélecteur de date Zero Knowledge";
    out.poll_subtitle = "Planification de rendez-vous et sondages en <em>temps-réel</em> et Zero Knowledge";

    out.poll_p_save = "Vos modifications sont mises à jour instantanément, donc vous n'avez jamais besoin de sauver le contenu.";
    out.poll_p_encryption = "Tout ce que vous entrez est chiffré donc seules les personnes possédant le lien du sondage y ont accès. Même le serveur ne peut pas voir le contenu.";

    out.wizardLog = "Cliquez sur le bouton dans le coin supérieur gauche pour retourner au sondage";
    out.wizardTitle = "Utiliser l'assistant pour créer votre sondage";
    out.wizardConfirm = "Êtes-vous vraiment prêt à ajouter ces options au sondage ?";

    out.poll_publish_button = "Publier";
    out.poll_admin_button = "Administrer";
    out.poll_create_user = "Ajouter un utilisateur";
    out.poll_create_option = "Ajouter une option";
    out.poll_commit = "Ajouter";

    out.poll_closeWizardButton = "Fermer l'assistant";
    out.poll_closeWizardButtonTitle = "Fermer l'assistant";
    out.poll_wizardComputeButton = "Générer les options";
    out.poll_wizardClearButton = "Vider le tableau";
    out.poll_wizardDescription = "Créer automatiquement des options en entrant des dates et des horaires correspondant";
    out.poll_wizardAddDateButton = "+ Dates";
    out.poll_wizardAddTimeButton = "+ Horaires";

    out.poll_optionPlaceholder = "Option";
    out.poll_userPlaceholder = "Votre nom";
    out.poll_removeOption = "Êtes-vous sûr de vouloir supprimer cette option ?";
    out.poll_removeUser = "Êtes-vous sûr de vouloir supprimer cet utilisateur ?";

    out.poll_titleHint = "Titre";
    out.poll_descriptionHint = "Décrivez votre sondage puis cliquer sur le bouton ✓ (Publier).\n" +
                               "La description peut contenir de la syntaxe markdown, et vous pouvez y ajouter des images stockées dans votre CryptDrive.\n" +
                               "Toutes les personnes possédant le lien d'édition de ce sondage peuvent modifier la description, bien que ce soit déconseillé.";

    out.poll_remove = "Supprimer";
    out.poll_edit = "Modifier";
    out.poll_locked = "Verrouillé";
    out.poll_unlocked = "Déverrouillé";

    out.poll_bookmark_col = "Marquer cette colonne comme favorite pour qu'elle soit toujours déverouillée et affichée en première position.";
    out.poll_bookmarked_col = "Voici votre colonne favorite ; elle sera toujours dévérouillée et affichée en première position.";
    out.poll_total = 'TOTAL';

    out.poll_comment_list = "Commentaires";
    out.poll_comment_add = "Ajouter un commentaire";
    out.poll_comment_submit = "Envoyer";
    out.poll_comment_remove = "Supprimer ce commentaire";
    out.poll_comment_placeholder = "Votre commentaire";

    out.poll_comment_disabled = "Publiez ce sondage en utilisant le bouton ✓ afin d'activer les commentaires.";

    // Canvas
    out.canvas_clear = "Nettoyer";
    out.canvas_delete = "Supprimer la sélection";
    out.canvas_disable = "Désactiver le dessin";
    out.canvas_enable = "Activer le dessin";
    out.canvas_width = "Taille";
    out.canvas_opacity = "Opacité";
    out.canvas_opacityLabel = "Opacité : {0}";
    out.canvas_widthLabel = "Taille : {0}";
    out.canvas_saveToDrive = "Sauvegarder cette image en tant que fichier dans CryptDrive";
    out.canvas_currentBrush = "Pinceau actuel";
    out.canvas_chooseColor = "Choisir une couleur";
    out.canvas_imageEmbed = "Intégrer une image de votre ordinateur";

    // Profile
    out.profileButton = "Profil"; // dropdown menu
    out.profile_urlPlaceholder = 'URL';
    out.profile_namePlaceholder = 'Nom ou pseudo pour le profil';
    out.profile_avatar = "Avatar";
    out.profile_upload = " Importer un nouvel avatar";
    out.profile_uploadSizeError = "Erreur : votre avatar doit avoir une taille inférieure à {0}";
    out.profile_uploadTypeError = "Erreur : le format de votre avatar est invalide. Les formats autorisés sont : {0}";
    out.profile_error = "Erreur lors de la création du profil : {0}";
    out.profile_register = "Vous devez vous inscrire pour pouvoir créer un profil !";
    out.profile_create = "Créer un profil";
    out.profile_description = "Description";
    out.profile_fieldSaved = 'Nouvelle valeur enregistrée : {0}';

    out.profile_inviteButton = "Inviter";
    out.profile_inviteButtonTitle = 'Créer un lien pour inviter cet utilisateur à se connecter avec vous.';
    out.profile_inviteExplanation = "Cliquer sur <strong>OK</strong> créera un lien vers une session de messagerie sécurisée <em>uniquement accessible par {0}.</em><br><br>Le lien peut être copié et partagé de manière publique.";
    out.profile_viewMyProfile = "Voir mon profil";

    // contacts/userlist
    out.userlist_addAsFriendTitle = 'Ajouter « {0} » comme contact';
    out.userlist_thisIsYou = 'Vous (« {0} »)';
    out.userlist_pending = "En attente...";
    out.contacts_title = "Contacts";
    out.contacts_addError = "Erreur lors de l'ajout de ce contact dans votre liste";
    out.contacts_added = 'Invitation de contact acceptée';
    out.contacts_rejected = 'Invitation de contact rejetée';
    out.contacts_request = '<em>{0}</em> souhaite vous ajouter en tant que contact. <b>Accepter<b> ?';
    out.contacts_send = 'Envoyer';
    out.contacts_remove = 'Supprimer ce contact';
    out.contacts_confirmRemove = 'Êtes-vous sûr de vouloir supprimer <em>{0}</em> de vos contacts ?';
    out.contacts_typeHere = "Entrez un message ici...";


    out.contacts_info1 = "Voici vos contacts. Ici, vous pouvez :";
    out.contacts_info2 = "Cliquer sur le nom d'un contact pour discuter avec lui";
    out.contacts_info3 = "Double-cliquer sur son nom pour voir son profil";
    out.contacts_info4 = "Chaque participant peut nettoyer définitivement l'historique d'une discussion";

    out.contacts_removeHistoryTitle = "Supprimer l'historique du chat";
    out.contacts_confirmRemoveHistory = 'Êtes-vous sûr de vouloir supprimer définitivement l\'historique de votre chat ? Les messages ne pourront pas être restaurés.';
    out.contacts_removeHistoryServerError = 'Une erreur est survenue lors de la supprimer de l\'historique du chat. Veuillez réessayer plus tard.';
    out.contacts_fetchHistory = "Récupérer l'historique plus ancien";

    // File manager

    out.fm_rootName = "Documents";
    out.fm_trashName = "Corbeille";
    out.fm_unsortedName = "Fichiers non triés";
    out.fm_filesDataName = "Tous les fichiers";
    out.fm_templateName = "Modèles";
    out.fm_searchName = "Recherche";
    out.fm_recentPadsName = "Pads récents";
    out.fm_ownedPadsName = "Pads en votre possession";
    out.fm_tagsName = "Mots-clés";
    out.fm_searchPlaceholder = "Rechercher...";
    out.fm_newButton = "Nouveau";
    out.fm_newButtonTitle = "Créer un nouveau pad ou un dossier, importer un fichier dans le dossier courant";
    out.fm_newFolder = "Nouveau dossier";
    out.fm_newFile = "Nouveau pad";
    out.fm_folder = "Dossier";
    out.fm_folderName = "Nom du dossier";
    out.fm_numberOfFolders = "# de dossiers";
    out.fm_numberOfFiles = "# de fichiers";
    out.fm_fileName = "Nom du fichier";
    out.fm_title = "Titre";
    out.fm_type = "Type";
    out.fm_lastAccess = "Dernier accès";
    out.fm_creation = "Création";
    out.fm_forbidden = "Action interdite";
    out.fm_originalPath = "Chemin d'origine";
    out.fm_openParent = "Montrer dans le dossier";
    out.fm_noname = "Document sans titre";
    out.fm_emptyTrashDialog = "Êtes-vous sûr de vouloir vider la corbeille ?";
    out.fm_removeSeveralPermanentlyDialog = "Êtes-vous sûr de vouloir supprimer ces {0} éléments de votre CryptDrive de manière permanente ?";
    out.fm_removePermanentlyDialog = "Êtes-vous sûr de vouloir supprimer cet élément de votre CryptDrive de manière permanente ?";
    out.fm_deleteOwnedPad = "Êtes-vous sûr de vouloir supprimer définitivement ce pad du serveur ?";
    out.fm_deleteOwnedPads = "Êtes-vous sûr de vouloir supprimer définitivement ces pads du serveur ?";
    out.fm_restoreDialog = "Êtes-vous sûr de vouloir restaurer {0} à son emplacement précédent ?";
    out.fm_removeSeveralDialog = "Êtes-vous sûr de vouloir déplacer ces {0} éléments vers la corbeille ?";
    out.fm_removeDialog = "Êtes-vous sûr de vouloir déplacer {0} vers la corbeille ?";
    out.fm_unknownFolderError = "Le dossier sélectionné ou le dernier dossier visité n'existe plus. Ouverture du dossier parent...";
    out.fm_contextMenuError = "Impossible d'ouvrir le menu contextuel pour cet élément. Si le problème persiste, essayez de rechercher la page.";
    out.fm_selectError = "Impossible de sélectionner l'élément ciblé. Si le problème persiste, essayez de recharger la page.";
    out.fm_categoryError = "Impossible d'afficher la catégorie sélectionnée, affichage de Documents";
    out.fm_info_root = "Créez ici autant de dossiers que vous le souhaitez pour trier vos fichiers.";
    out.fm_info_unsorted = 'Contient tous les pads que vous avez ouvert et qui ne sont pas triés dans "Documents" ou déplacés vers la "Corbeille".'; // "My Documents" should match with the "out.fm_rootName" key, and "Trash" with "out.fm_trashName"
    out.fm_info_template = "Contient tous les fichiers que vous avez sauvés en tant que modèle afin de les réutiliser lors de la création d'un nouveau pad.";
    out.fm_info_recent = "Liste les derniers pads que vous avez modifiés ou ouverts.";
    out.updated_0_fm_info_trash = "Vider la corbeille permet de libérer de l'espace dans votre CryptDrive";
    out.fm_info_trash = out.updated_0_fm_info_trash;
    out.fm_info_allFiles = 'Contient tous les fichiers de "Documents", "Fichiers non triés" et "Corbeille". Vous ne pouvez pas supprimer ou déplacer des fichiers depuis cet endroit.'; // Same here
    out.fm_info_anonymous = 'Vous n\'êtes pas connecté, ces pads seront donc supprimés après 3 mois d\'inactivité (<a href="https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/" target="_blank">découvrez pourquoi</a>). ' +
                            'Ils sont stockés dans votre navigateur donc nettoyer votre historique peut les faire disparaître.<br>' +
                            '<a href="/register/">Inscrivez-vous</a> ou <a href="/login/">connectez-vous</a> pour les maintenir en vie.';
    out.fm_info_owned = "Vous êtes propriétaire des pads affichés dans cette catégorie. Cela signifie que vous pouvez choisir de les supprimer définitivement du serveur à n'importe quel moment. Ils seront alors inaccessibles pour tous les autres utilisateurs.";
    out.fm_alert_backupUrl = "Lien de secours pour ce CryptDrive.<br>" +
                             "Il est <strong>fortement recommandé</strong> de garder ce lien pour vous-même.<br>" +
                             "Il vous servira en cas de perte des données de votre navigateur afin de retrouver vos fichiers.<br>" +
                             "Quiconque se trouve en possession de celui-ci peut modifier ou supprimer tous les fichiers de ce gestionnaire.<br>";
    out.fm_alert_anonymous = "Bonjour ! Vous utilisez actuellement Cryptpad de manière anonyme, ce qui ne pose pas de problème mais vos pads peuvent être supprimés après un certain temps " +
                             "d'inactivité. Nous avons désactivé certaines fonctionnalités avancées de CryptDrive pour les utilisateurs anonymes afin de rendre clair le fait que ce n'est pas " +
                             'un endroit sûr pour le stockage des documents. Vous pouvez <a href="https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/" target="_blank">en lire plus</a> concernant ' +
                             'nos raisons pour ces changements et pourquoi vous devriez vraiment <a href="/register/">vous enregistrer</a> et <a href="/login/">vous connecter</a>.';
    out.fm_backup_title = 'Lien de secours';
    out.fm_nameFile = 'Comment souhaitez-vous nommer ce fichier ?';
    out.fm_error_cantPin = "Erreur interne du serveur. Veuillez recharger la page et essayer de nouveau.";
    out.fm_viewListButton = "Liste";
    out.fm_viewGridButton = "Grille";
    out.fm_renamedPad = "Vous avez renommé ce pad dans votre Drive. Son titre est:<br><b>{0}</b>";
    out.fm_prop_tagsList = "Mots-clés";
    out.fm_burnThisDriveButton = "Effacer toutes les informations stockées par CryptPad dans votre navigateur";
    out.fm_burnThisDrive = "Êtes-vous sûr de vouloir supprimmer tout ce qui est stocké par CryptPad dans votre navigateur ?<br>" +
                           "Cette action supprimera votre CryptDrive et son historique de votre navigateur, mais les pads existeront toujours (de manière chiffrée) sur notre serveur.";
    out.fm_padIsOwned = "Vous êtes le propriétaire de ce pad";
    out.fm_padIsOwnedOther = "Ce pad est la propriété d'un autre utilisateur";
    out.fm_deletedPads = "Ces pads n'existent plus sur le serveur, ils ont été supprimés de votre CryptDrive: {0}";
    out.fm_tags_name = "Mot-clé";
    out.fm_tags_used = "Nombre d'utilisations";
    // File - Context menu
    out.fc_newfolder = "Nouveau dossier";
    out.fc_rename = "Renommer";
    out.fc_open = "Ouvrir";
    out.fc_open_ro = "Ouvrir (lecture seule)";
    out.fc_delete = "Déplacer vers la corbeille";
    out.fc_delete_owned = "Supprimer du serveur";
    out.fc_restore = "Restaurer";
    out.fc_remove = "Supprimer de votre CryptDrive";
    out.fc_empty = "Vider la corbeille";
    out.fc_prop = "Propriétés";
    out.fc_hashtag = "Mots-clés";
    out.fc_sizeInKilobytes = "Taille en kilo-octets";
    // fileObject.js (logs)
    out.fo_moveUnsortedError = "La liste des éléments non triés ne peut pas contenir de dossiers.";
    out.fo_existingNameError = "Ce nom est déjà utilisé dans ce répertoire. Veuillez en choisir un autre.";
    out.fo_moveFolderToChildError = "Vous ne pouvez pas déplacer un dossier dans un de ses descendants";
    out.fo_unableToRestore = "Impossible de restaurer ce fichier à son emplacement d'origine. Vous pouvez essayer de le déplacer à un nouvel emplacement.";
    out.fo_unavailableName = "Un fichier ou dossier avec le même nom existe déjà au nouvel emplacement. Renommez cet élément avant d'essayer à nouveau.";

    out.fs_migration = "Votre CryptDrive est en train d'être mis à jour vers une nouvelle version. Cela implique que cette page doive être rechargée.<br><strong>Veuillez recharger la page pour pouvoir continuer à l'utiliser.</<strong>";

    // login
    out.login_login = "Connexion";
    out.login_makeAPad = 'Créer un pad anonymement';
    out.login_nologin = "Voir les pads récents";
    out.login_register = "Inscription";
    out.logoutButton = "Déconnexion";
    out.settingsButton = "Préférences";

    out.login_username = "Nom d'utilisateur";
    out.login_password = "Mot de passe";
    out.login_confirm = "Confirmer votre mot de passe";
    out.login_remember = "Se souvenir de moi";

    out.login_hashing = "Traitement de vos identifiants, cela peut nécessiter quelques instants.";

    out.login_hello = 'Bonjour {0},'; // {0} is the username
    out.login_helloNoName = 'Bonjour,';
    out.login_accessDrive = 'Accédez à votre drive';
    out.login_orNoLogin = 'ou';

    out.login_noSuchUser = "Nom d'utilisateur ou mot de passe invalide. Veuillez vous inscrire ou réessayer.";
    out.login_invalUser = "Nom d'utilisateur requis";
    out.login_invalPass = 'Mot de passe requis';
    out.login_unhandledError = "Une erreur inattendue s'est produite :(";

    out.register_importRecent = "Importer les pads de votre session anonyme";
    out.register_acceptTerms = "J'accepte <a href='/terms.html' tabindex='-1'>les conditions d'utilisation</a>";
    out.register_passwordsDontMatch = "Les mots de passe doivent être identiques!";
    out.register_passwordTooShort = "Les mots de passe doivent contenir au moins {0} caractères.";

    out.register_mustAcceptTerms = "Vous devez accepter les conditions d'utilisation.";
    out.register_mustRememberPass = "Nous ne pouvons pas réinitialiser votre mot de passe si vous l'oubliez. C'est important que vous vous en souveniez! Veuillez cocher la case pour confirmer.";
    out.register_writtenPassword = "J'ai bien noté mon nom d'utilisateur et mon mot de passe, continuer";
    out.register_cancel = "Retour";
    out.register_warning = "Zero Knowledge signifie que nous ne pouvons pas récupérer vos données si vous perdez vos identifiants.";
    out.register_alreadyRegistered = "Cet utilisateur existe déjà, souhaitez-vous vous connecter ?";

    out.register_whyRegister = "Pourquoi s'inscrire ?";
    out.register_header = "Bienvenue dans CryptPad";
    out.register_explanation = [
        "<p>Faisons d'abord le point sur certaines choses</p>",
        "<ul>",
            "<li>Votre mot de passe est la clé secrète de tous vos pads. Si vous le perdez, il n'y a aucun moyen de récupérer vos données.</li>",
            "<li>Vous pouvez importer les pads récents de ce navigateur pour les avoir dans votre compte utilisateur.</li>",
            "<li>Si vous utilisez un ordinateur partagé, vous devez vous déconnecter avant de partir, fermer l'onglet n'est pas suffisant.</li>",
        "</ul>"
    ].join('');

    // Settings
    out.settings_cat_account = "Compte";
    out.settings_cat_drive = "CryptDrive";
    out.settings_cat_code = "Code";
    out.settings_cat_pad = "Documents texte";
    out.settings_cat_creation = "Nouveau pad";
    out.settings_cat_subscription = "Abonnement";
    out.settings_title = "Préférences";
    out.settings_save = "Sauver";

    out.settings_backupCategory = "Sauvegarde";
    out.settings_backupTitle = "Créer ou restaurer une sauvegarde de vos données";
    out.settings_backup = "Sauvegarder";
    out.settings_restore = "Restaurer";

    out.settings_resetNewTitle = "Vider CryptDrive";
    out.settings_resetButton = "Supprimer";
    out.settings_reset = "Supprimer tous les fichiers et dossiers de votre CryptDrive";
    out.settings_resetPrompt = "Cette action va supprimer tous les pads de votre drive.<br>"+
                               "Êtes-vous sûr de vouloir continuer ?<br>" +
                               "Tapez « <em>I love CryptPad</em> » pour confirmer.";
    out.settings_resetDone = "Votre drive est désormais vide!";
    out.settings_resetError = "Texte de vérification incorrect. Votre CryptDrive n'a pas été modifié.";

    out.settings_resetTipsAction  ="Réinitialiser";
    out.settings_resetTips = "Astuces";
    out.settings_resetTipsButton = "Réinitialiser les astuces visibles dans CryptDrive";
    out.settings_resetTipsDone = "Toutes les astuces sont de nouveau visibles.";

    out.settings_thumbnails = "Miniatures";
    out.settings_disableThumbnailsAction = "Désactiver la création de miniatures dans CryptDrive";
    out.settings_disableThumbnailsDescription = "Des miniatures de vos pads sont automatiquement créées et stockées dans votre navigateur. Vous pouvez désactiver cette fonctionnalité.";
    out.settings_resetThumbnailsAction = "Nettoyer";
    out.settings_resetThumbnailsDescription = "Nettoyer toutes les miniatures stockées dans votre navigateur.";
    out.settings_resetThumbnailsDone = "Toutes les miniatures ont été effacées.";

    out.settings_importTitle = "Importer les pads récents de ce navigateur dans votre CryptDrive";
    out.settings_import = "Importer";
    out.settings_importConfirm = "Êtes-vous sûr de vouloir importer les pads récents de ce navigateur dans le CryptDrive de votre compte utilisateur ?";
    out.settings_importDone = "Importation terminée";

    out.settings_userFeedbackTitle = "Retour d'expérience";
    out.settings_userFeedbackHint1 = "CryptPad peut envoyer des retours d'expérience très limités vers le serveur, de manière à nous permettre d'améliorer l'expérience des utilisateurs. ";
    out.settings_userFeedbackHint2 = "Le contenu de vos pads et les clés de déchiffrement ne seront jamais partagés avec le serveur.";
    out.settings_userFeedback = "Activer l'envoi de retours d'expérience";

    out.settings_deleteTitle = "Suppression du compte";
    out.settings_deleteHint = "La suppression de votre compte utilisateur est permanente. Votre CryptDrive et votre liste de pads seront supprimés du serveur. Le reste de vos pads sera supprimé après 90 jours d'inactivité si personne ne les a stockés dans leur CryptDrive.";
    out.settings_deleteButton = "Supprimer votre compte";
    out.settings_deleteModal = "Veuillez envoyer les informations suivantes à votre administrateur CryptPad afin que vos données soient supprimées du serveur.";
    out.settings_deleteConfirm = "Êtes-vous sûr de vouloir supprimer votre compte utilisateur ? Cette action est irréversible.";
    out.settings_deleted = "Votre compte utilisateur a été supprimé. Appuyez sur OK pour être rédirigé(e) vers la page d'accueil.";

    out.settings_anonymous = "Vous n'êtes pas connecté. Ces préférences seront utilisées pour ce navigateur.";
    out.settings_publicSigningKey = "Clé publique de signature";

    out.settings_usage = "Utilisation";
    out.settings_usageTitle = "Voir la taille totale de vos pads épinglés en Mo";
    out.settings_pinningNotAvailable = "Les pads épinglés sont disponibles uniquement pour les utilisateurs enregistrés.";
    out.settings_pinningError = "Un problème est survenu";
    out.settings_usageAmount = "Vos pads épinglés occupent {0} Mo";

    out.settings_logoutEverywhereButton = "Se déconnecter";
    out.settings_logoutEverywhereTitle = "Se déconnecter partout";
    out.settings_logoutEverywhere = "Se déconnecter de force de toutes les autres sessions.";
    out.settings_logoutEverywhereConfirm = "Êtes-vous sûr ? Vous devrez vous reconnecter sur tous vos autres appareils.";

    out.settings_codeIndentation = "Indentation dans l'éditeur de code (nombre d'espaces)";
    out.settings_codeUseTabs = "Utiliser des tabulations au lieu d'espaces";

    out.settings_padWidth = "Largeur de l'éditeur de texte";
    out.settings_padWidthHint = "L'éditeur de documents texte occupe toute la largeur de l'écran disponible par défaut, ce qui peut rendre le texte difficile à lire. Vous pouvez ici réduire la largeur de l'éditeur.";
    out.settings_padWidthLabel = "Réduire la largeur de l'éditeur";

    out.settings_creationSkip = "Passer l'écran de création de pad";
    out.settings_creationSkipHint = "L'écran de création de pad offre de nouvelles options pour créer un pad, permettant d'avoir plus de contrôle et de sécurité concernant vos données. Toutefois, il peut ralentir votre travail en ajoutant une étape supplémentaire et donc, ici, vous avez la possibilité de choisir de passer cet écran et d'utiliser les paramètres par défaut choisis au-dessus.";
    out.settings_creationSkipTrue = "Passer";
    out.settings_creationSkipFalse = "Afficher";

    out.settings_templateSkip = "Passer la fenêtre de choix d'un modèle";
    out.settings_templateSkipHint = "Quand vous créez un nouveau pad, et si vous possédez des modèles pour ce type de pad, une fenêtre peut apparaître pour demander si vous souhaitez importer un modèle. Ici vous pouvez choisir de ne jamais montrer cette fenêtre et donc de ne jamais utiliser de modèle.";

    out.upload_title = "Hébergement de fichiers";
    out.upload_modal_title = "Options d'importation du fichier";
    out.upload_modal_filename = "Nom (extension <em>{0}</em> ajoutée automatiquement)";
    out.upload_modal_owner = "Être propriétaire du fichier";
    out.upload_serverError = "Erreur interne: impossible d'importer le fichier pour l'instant.";
    out.upload_uploadPending = "Vous avez déjà un fichier en cours d'importation. Souhaitez-vous l'annuler et importer ce nouveau fichier ?";
    out.upload_success = "Votre fichier ({0}) a été importé avec succès et ajouté à votre CryptDrive.";
    out.upload_notEnoughSpace = "Il n'y a pas assez d'espace libre dans votre CryptDrive pour ce fichier.";
    out.upload_notEnoughSpaceBrief = "Pas assez d'espace";
    out.upload_tooLarge = "Ce fichier dépasse la taille maximale autorisée.";
    out.upload_tooLargeBrief = 'Fichier trop volumineux';
    out.upload_choose = "Choisir un fichier";
    out.upload_pending = "En attente";
    out.upload_cancelled = "Annulé";
    out.upload_name = "Nom du fichier";
    out.upload_size = "Taille";
    out.upload_progress = "État";
    out.upload_mustLogin = "Vous devez vous connecter pour importer un fichier";
    out.download_button = "Déchiffrer et télécharger";
    out.download_mt_button = "Télécharger";
    out.download_resourceNotAvailable = "Le fichier demandé n'est pas disponible... Appuyez sur Échap pour continuer.";

    out.todo_title = "CryptTodo";
    out.todo_newTodoNamePlaceholder = "Décrivez votre tâche...";
    out.todo_newTodoNameTitle = "Ajouter cette tâche à votre liste";
    out.todo_markAsCompleteTitle = "Marquer cette tâche comme terminée";
    out.todo_markAsIncompleteTitle = "Marquer cette tâche comme incomplète";
    out.todo_removeTaskTitle = "Enlever cette tâche de votre liste";

    // pad
    out.pad_showToolbar = "Afficher la barre d'outils";
    out.pad_hideToolbar = "Cacher la barre d'outils";

    // markdown toolbar
    out.mdToolbar_button = "Afficher ou cacher la barre d'outils Markdown";
    out.mdToolbar_defaultText = "Votre texte ici";
    out.mdToolbar_help = "Aide";
    out.mdToolbar_tutorial = "https://blog.wax-o.com/2014/04/tutoriel-un-guide-pour-bien-commencer-avec-markdown/";
    out.mdToolbar_bold = "Gras";
    out.mdToolbar_italic = "Italique";
    out.mdToolbar_strikethrough = "Barré";
    out.mdToolbar_heading = "Titre";
    out.mdToolbar_link = "Lien";
    out.mdToolbar_quote = "Citation";
    out.mdToolbar_nlist = "Liste ordonnée";
    out.mdToolbar_list = "Liste à puces";
    out.mdToolbar_check = "Liste de tâches";
    out.mdToolbar_code = "Code";

    // index.html

    //about.html
    out.about_intro = 'CryptPad est développé au sein de l\'équipe Recherche d\'<a href="http://xwiki.com">XWiki SAS</a>, une petite entreprise située à Paris en France et à Iasi en Roumanie. Il y a 3 développeurs principaux qui travaillent sur CryptPad, ainsi que quelques contributeurs à la fois dans et en dehors d\'XWiki SAS';
    out.about_core = 'Développeurs principaux';
    out.about_contributors = 'Contributeurs clés';

    //contact.html
    out.main_about_p22 = 'Tweetez nous';
    out.main_about_p23 = 'Ouvrez un ticket (GitHub)';
    out.main_about_p24 = 'Dites Bonjour (Matrix)';
    out.main_about_p25 = 'Envoyez-nous un email';
    out.main_about_p26 = 'Si vous avez une question ou des remarques, n\'hésitez pas à nous contacter !';

    out.main_info = "<h2>Collaborez avec confiance</h2><br>Développez vos idées en groupe avec des documents partagés; la technologie <strong>Zero Knowledge</strong> sécurise vos données.";
    out.main_catch_phrase = "Le Cloud Zero Knowledge";

    out.main_richText = 'Éditeur de texte';
    out.main_code = 'Éditeur de code';
    out.main_slide = 'Présentations';
    out.main_poll = 'Sondages';
    out.main_drive = 'CryptDrive';

    out.main_richTextPad = 'Pad de Texte Riche';
    out.main_codePad = 'Pad de Code';
    out.main_slidePad = 'Présentation Markdown';
    out.main_pollPad = 'Sondage ou Planning';
    out.main_whiteboardPad = 'Tableau blanc';
    out.main_kanbanPad = 'Kanban';
    out.main_localPads = 'Pads Locaux';
    out.main_yourCryptDrive = 'Votre CryptDrive';
    out.main_footerText = "Avec CryptPad, vous pouvez créer des documents collaboratifs rapidement pour prendre des notes à plusieurs.";

    out.footer_applications = "Applications";
    out.footer_contact = "Contact";
    out.footer_aboutUs = "À propos";

    out.about = "À propos";
    out.privacy = "Confidentialité";
    out.contact = "Contact";
    out.terms = "Conditions";
    out.blog = "Blog";

    out.topbar_whatIsCryptpad = "Qu'est-ce que CryptPad";

    // what-is-cryptpad.html

    out.whatis_title = "Qu'est-ce que CryptPad";
    out.whatis_collaboration = 'Collaboration rapide, facile';
    out.whatis_collaboration_p1 = "Avec CryptPad, vous pouvez créer rapidement des documents collaboratifs pour prendre des notes à plusieurs. Quand vous vous enregistrez et vous vous connectez, vous obtenez la possibilité d'importer des fichiers dans un CryptDrive où vous pouvez organiser tous vos pads (documents). En tant qu'utilisateur enregistré, vous possédez 50 Mo de stockage gratuit.";
    out.whatis_collaboration_p2 = "Vous pouvez partager l'accès à un document simplement en partageant le lien. Vous pouvez aussi partager un lien spécial fournissant un accès <em>en lecture seule</em> au pad, permettant de publier des travaux collaboratifs tout en restant maître de l'édition.";
    out.whatis_collaboration_p3 = "Vous pouvez créer des documents de texte avec <a href=\"http://ckeditor.com/\">CKEditor</a> tout comme des documents Markdown qui sont rendus en temps-réel pendant que vous tapez. Vous pouvez aussi utiliser l'application de sondage pour planifier des évènements avec plusieurs participants.";
    out.whatis_zeroknowledge = 'Zero Knowledge';
    out.whatis_zeroknowledge_p1 = "Nous ne souhaitons pas connaître ce que vous tapez et grâce à la cryptographie moderne, vous pouvez être assuré que nous ne le <b>pouvons</b> pas. CryptPad utilise <b>un chiffrement à 100% côté client</b> pour protéger le contenu que vous tapez de nous, les personnes contrôlant le serveur.";
    out.whatis_zeroknowledge_p2 = "Quand vous vous enregistrez et vous vous connectez, votre nom d'utilisateur et votre mot de passe sont transformés en une clé secrète grâce à la <a href=\"https://fr.wikipedia.org/wiki/Scrypt\">fonction de dérivation de clé Scrypt</a>. Ni cette clé, ni le nom d'utilisateur ou le mot de passe, ne sont envoyés au serveur. À la place, elle est utilisée côté client pour chiffrer et déchiffrer le contenu de votre CryptDrive, qui contient toutes les clés permettant d'accéder à vos pads.";
    out.whatis_zeroknowledge_p3 = "Quand vous partagez le lien vers un document, vous partagez la clé cryptographique permettant de déchiffrer le document, mais puisque cette clé se trouve dans l'<a href=\"https://en.wikipedia.org/wiki/Fragment_identifier\">identificateur de fragment</a>, elle n'est jamais envoyée au serveur. Venez lire notre <a href=\"https://blog.cryptpad.fr/2017/07/07/cryptpad-analytics-what-we-cant-know-what-we-must-know-what-we-want-to-know/\">article de blog sur la vie privée</a> pour en apprendre davantage sur le type de métadonnées auxquelles nous avons ou n'avons pas accès.";
    out.whatis_drive = "Organisation avec CryptDrive";
    out.whatis_drive_p1 = "Dés que vous accédez à un pad dans CryptPad, celui-ci est automatiquement ajouté à votre CryptDrive, dans le dossier principal. Vous pouvez alors ranger ce pad dans un dossier ou le déplacer vers la corbeille. CryptDrive vous permet de rechercher parmi vos pads et de les organiser quand vous le souaitez, comme vous le souhaitez.";
    out.whatis_drive_p2 = "Avec le glisser-déposer intuitif, vous pouvez déplacer vos pads dans votre drive tout en conservant les liens vers ces pads pour que vos collaborateurs n'en perdent pas l'accès";
    out.whatis_drive_p3 = "Vous pouvez également importer des fichiers dans votre CryptDrive et les partager avec des collègues. Les fichiers importés peuvent être rangés de la même manière que vos pads collaboratifs.";
    out.whatis_business = 'CryptPad for Business';
    out.whatis_business_p1 = "Le chiffrement Zero Knowledge de CryptPad excelle pour multiplier l'efficacité des protocoles de sécurité existants en recréant les contrôles d'accès organisationnels de manière cryptographique. Puisque les données sensibles ne peuvent être déchiffrées qu'en utilisant les identifiants d'un employé, CryptPad empêche d'éventuels hackers ayant réussi à s'introduire dans le serveur d'avoir accès en clair à ces données. Découvrez-en plus sur la manière dont CryptPad peut aider votre entreprise en lisant le <a href=\"https://blog.cryptpad.fr/images/CryptPad-Whitepaper-v1.0.pdf\">CryptPad Whitepaper</a>.";
    out.whatis_business_p2 = "CryptPad est déployable sur site et les <a href=\"https://cryptpad.fr/about.html\">développeurs CryptPad</a> chez XWiki SAS peuvent effectuer du développement, des personnalisations et du support commercial. Contactez-nous à <a href=\"mailto:sales@cryptpad.fr\">sales@cryptpad.fr</a> pour plus d'informations.";

    // privacy.html

    out.policy_title = 'Politique de confidentialité de CryptPad';
    out.policy_whatweknow = 'Ce que nous savons de vous';
    out.policy_whatweknow_p1 = 'En tant qu\'application hébergée sur le web, CryptPad a accès aux meta-données exposées par le protocole HTTP. Ceci inclus votre adresse IP et d\'autres en-têtes HTTP qui peuvent être utilisées pour identifier votre propre navigateur. Vous pouvez voir quelles informations votre navigateur partage en visitant <a target="_blank" rel="noopener noreferrer" href="https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending" title="what http headers is my browser sending">WhatIsMyBrowser.com</a>.';
    out.policy_whatweknow_p2 = 'Nous utilisons <a href="https://piwik.org/" target="_blank" rel="noopener noreferrer" title="open source analytics platform">Piwik</a>, une plateforme open source d\'analytique, afin d\'en apprendre plus sur nos utilisateurs. Piwik nous indique comment vous avez trouvé CryptPad, que ce soit par une entrée directe, par un moteur de recherche ou depuis un lien provenant d\'un autre site web tel que Reddit ou Twitter. Nous savons également quand vous visitez le site, sur quels liens vous cliquez dans les pages informatives et combien de temps vous restez sur une page donnée.';
    out.policy_howweuse = 'Comment nous utilisons ce que nous apprenons';
    out.policy_howweuse_p1 = 'Nous utilisons ces informations pour prendre de meilleures décisions concernant la communication autour de CryptPad, en évaluant le succès de ce qui a été realisé par le passé. Les informations concernant votre localisation nous permettent de savoir si nous devons considérer l\'ajout de traductions de CryptPad dans d\'autres langues que l\'anglais.';
    out.policy_howweuse_p2 = "Les informations concernant votre navigateur (que ce soit un système d\'exploitation de bureau ou d\'appareil portable) nous aident à prendre des décisions lors de la priorisation des ajouts et améliorations de fonctionnalités. Notre équipe de développement est petite, et nous essayons de prendre des décisions qui amélioreront l\'expérience du plus grand nombre d\'utilisateurs possible.";
    out.policy_whatwetell = 'Ce que nous dévoilons à d\'autres à propos de vous';
    out.policy_whatwetell_p1 = 'Nous ne fournissons aucune information que nous récoltons ou que vous nous fournissez à des tierces parties à moins d\'y être contraints par la loi.';
    out.policy_links = 'Liens vers d\'autres sites';
    out.policy_links_p1 = 'Ce site contient des liens vers d\'autres sites, certains étant produits par d\'autres organisations. Nous ne sommes responsables des pratiques de confidentialité ou du contenu d\'aucun site externe. De manière générale, les liens vers des sites externes sont lancés dans une nouvelle fenêtre (ou onglet) du navigateur, pour rendre clair le fait que vous quittez CryptPad.fr.';
    out.policy_ads = 'Publicité';
    out.policy_ads_p1 = 'Nous n\'affichons pas de publicité en ligne, bien que nous puissions afficher des liens vers les sites des organisations qui financent nos recherches.';
    out.policy_choices = 'Vos choix';
    out.policy_choices_open = 'Notre code est open source, ce qui signifie que vous avez toujours la possibilité d\'héberger votre propre instance de CryptPad.';
    out.policy_choices_vpn = 'Si vous souhaitez utiliser notre instance hébergée (cryptpad.fr) mais que vous ne souhaitez pas exposer votre adresse IP, vous pouvez la protéger en utilisant le <a href="https://www.torproject.org/projects/torbrowser.html.en" title="téléchargements du projet Tor" target="_blank" rel="noopener noreferrer">navigateur Tor</a>, ou un <a href="https://riseup.net/fr/vpn" title="VPNs fournis par Riseup" target="_blank" rel="noopener noreferrer">VPN</a>.';
    out.policy_choices_ads = 'Si vous souhaitez uniquement bloquer notre plateforme d\'analytique, vous pouvez utiliser un bloqueur de publicités tel que <a href="https://www.eff.org/fr/privacybadger" title="télécharger privacy badger" target="_blank" rel="noopener noreferrer">Privacy Badger</a>.';

    // features.html

    out.features = "Fonctionnalités";
    out.features_title = "Tableau des fonctionnalités";
    out.features_feature = "Fonctionnalité";
    out.features_anon = "Utilisateur anonyme";
    out.features_registered = "Utilisateur enregistré";
    out.features_notes = "Notes";
    out.features_f_pad = "Créer/modifier/voir un pad";
    out.features_f_pad_notes = "Texte, Code, Présentation, Sondage et Tableau blanc";
    out.features_f_history = "Historique";
    out.features_f_history_notes = "Voir et restaurer n'importe quelle version d'un pad";
    out.features_f_todo = "Créer une TODO-list";
    out.features_f_drive = "Fonctionnalités CryptDrive limitées";
    out.features_f_drive_full = "Fonctionnalités CryptDrive limitées";
    out.features_f_export = "Export/Import";
    out.features_f_export_notes = "Pour les pads et CryptDrive";
    out.features_f_viewFiles = "Voir des fichiers";
    out.features_f_uploadFiles = "Importer des fichiers";
    out.features_f_embedFiles = "Intégrer des fichiers";
    out.features_f_embedFiles_notes = "Intégrer un fichier de CryptDrive dans un pad";
    out.features_f_multiple = "Appareils multiples";
    out.features_f_multiple_notes = "Moyen facile de voir vos pads depuis n'importe quel appareil";
    out.features_f_logoutEverywhere = "Se déconnecter partout";
    out.features_f_logoutEverywhere_notes = "Se déconnecter des autres appareils utilisés";
    out.features_f_templates = "Utiliser les modèles";
    out.features_f_templates_notes = "Créer des modèles et créer des pads basés sur ces modèles";
    out.features_f_profile = "Créer un profil";
    out.features_f_profile_notes = "Page personnelle contenant un avatar et une description";
    out.features_f_tags = "Utiliser les tags";
    out.features_f_tags_notes = "Permet la recherche de documents par tags dans CryptDrive";
    out.features_f_contacts = "Application Contacts";
    out.features_f_contacts_notes = "Ajouter des contacts et discuter avec eux de manière sécurisée";
    out.features_f_storage = "Stockage";
    out.features_f_storage_anon = "Pads supprimés après 3 mois";
    out.features_f_storage_registered = "Gratuit: 50Mo<br>Premium: 5Go/20Go/50Go";
    out.features_f_register = "S'inscrire gratuitement";

    // faq.html

    out.faq_link = "FAQ";
    out.faq_title = "Foire Aux Questions";
    out.faq_whatis = "Qu'est-ce que <span class='cp-brand-font'>CryptPad</span> ?";
    out.faq = {};
    out.faq.keywords = {
        title: 'Termes spéciaux',
        pad: {
            q: "Qu'est-ce qu'un pad ?",
            a: '<em>Pad</em> est un terme popularisé par <a href="http://etherpad.org/" target="_blank">Etherpad</a> un éditeur collaboratif en temps-réel. ' +
               'Il désigne un document que vous pouvez modifier dans votre navigateur et, en général, vous pouvez voir les modifications effectuées par les autres utilisateurs de manière quasiment instantanée.'
        },
        owned: {
            q: "Qu'est-ce qu'un pad avec propriétaire ?",
            a: "Être <em>propriétaire</em> d'un pad signifie que vous êtes identifié comme tel par le serveur avec à votre <em>clé de signature publique</em>.<br>" +
               "Le propriétaire d'un pad peut décider de supprimer ce pad du serveur de manière permanente, afin de le rendre inaccessible aux autres collaborateurs même s'ils possédent le lien dans leur CryptDrive."
        },
        expiring: {
            q: "Qu'est-ce qu'un pad à durée de vie ?",
            a: "Un <em>pad à durée de vie</em> est un pad créé avec une date définie à partir de laquelle il sera supprimé automatiquement du serveur. Ils peuvent être configurés pour avoir une durée de vie comprise entre une heure et cent mois. Le pad et tout son historique sera alors inaccessible, de manière permanente, même s'il est en cours d'édition à sa date d'expiration.<br>" +
               "Si un pad possède une date d'expiration, vous pouvez la vérifier en regardant les <em>propriétés</em> du pad, soit avec un clic-droit sur le pad dans votre CryptDrive, ou soit en cliquant sur Propriétés dans le sous-menu de la barre d'outils de l'application."
        },
        tag: {
            q: "Comment utiliser les mots-clés ?",
            a: "Vous pouvez ajouter des <em>mots-clés</em> aux pads ou aux fichiers depuis votre CryptDrive et depuis le document en utilisant le bouton <span class=\"fa fa-hashtag\"></span> (<em>Mots-clés</em>) de la barre d'outils des éditeurs.<br>" +
               "Il est ensuite possible de rechercher des pads et des fichiers dans votre CryptDrive en tapant un mot-clé, précédé de <em>#</em>, dans la barre de recherche (exemple: #crypto)."
        },
        template: {
            q: "Qu'est-ce qu'un modèle ?",
            a: "Un <em>modèle</em> est un pad qui peut être utilisé pour définir le contenu initial d'un nouveau pad du même type quand vous le créez.<br>" +
               "Les pads existant dans votre CryptDrive peuvent être transformés en tant que modèle en les déplaçant dans la catégorie <em>Modèles</em> du CryptDrive.<br>" +
               "Il est également possible de créer une copie d'un pad en tant que modèle en cliquant sur le bouton <span class=\"fa fa-bookmark\"></span> (<em>Sauver en tant que modèle</em>) dans la barre d'outils des éditeurs."
        },
    };
    out.faq.privacy = {
        title: 'Confidentialité',
        different: {
            q: "Comment Cryptpad est-il différent des autres services de pads ?",
            a: "CryptPad chiffre les changements effectués dans vos pads avant de les envoyer au serveur pour qu'il soient stockés, nous ne pouvons donc pas lire le contenu que vous avez tapé."
        },
        me: {
            q: "Quelles informations le serveur possède-t-il sur moi ?",
            a: "Les administrateurs du serveur peuvent voir les <b>adresses IP</b> des utilisateurs de CryptPad.<br>" +
               "Nous n'enregistrons pas les pads visités par chaque adresse IP mais nous le pouvons, bien que nous n'aurions pas accès au contenu déchiffré de ces pads.<br>" +
               "Si vous avez des inquiétudes à ce sujet, il est préférable de considérer que nous collectons ces informations puisque nous n'avons aucun moyen de prouver que ce n'est pas le cas.<br><br>" +
               "Nous collectons toutefois certaines <b>données de télémétrie</b> concernant la façon dont les gens utilisent CryptPad, par exemple la résolution de l'écran utilisé ou l'utilisation des boutons de la barre d'outils. Ces données nous aident à améliorer le produit, mais il est possible de désactiver l'envoi de telles informations au serveur en décochant la case <em>Activer l'envoi de retours d'expérience</em> dans vos <em>Préférences</em>.<br><br>" +
               "Enfin, nous gardons une trace des pads stockés dans le CryptDrive des utilisateurs afin de pouvoir imposer les limites de stockage, mais nous n'avons, encore une fois, pas accès au contenu ou au type de ces pads. Ces limites sont toutefois associées à la clé publique des utilisateurs, nous ne pouvons donc pas les relier à un nom ou une adresse email.<br><br>" +
               "Nous avons écrit un <a href=\"https://blog.cryptpad.fr/2017/07/07/cryptpad-analytics-what-we-cant-know-what-we-must-know-what-we-want-to-know/\" target=\"_blank\">article de blog</a> (en anglais) à ce sujet si vous souhaitez en apprendre davantage."
        },
        register: {
            q: "Qu'est-ce que le serveur apprend à mon sujet si je m'inscrit ?",
            a: "Nous ne demandons pas aux utilisateurs d'entrer une adresse email pour s'enregistrer, et le serveur ne connaît pas votre nom d'utilisateur ni votre mot de passe.<br>" +
               "Les formulaires d'inscription et de connexion génèrent à la place un ensemble de clés uniques, créées à partir de vos identifiants, et le serveur ne connaît donc que votre signature cryptographique.<br>" +
               "Nous utilisons cette information principalement pour mesurer combien de données vous avez stocké sur nos serveurs, afin de pouvoir limiter chaque utilisateur à son quota.<br><br>" +
               "Nous utilisons également notre fonctionnalité de <em>retour d'expérience</em> pour indiquer au serveur que quelqu'un avec votre adresse IP a créé un compte utilisateur, bien que nous ne sachions pas lequel. Cela nous permet de mesurer le nombre d'inscriptions sur CryptPad mais aussi de voir dans quelles régions du monde se trouvent les utilisateurs, afin de déterminer les langues dans lesquelles traduire CryptPad.<br><br>" +
               "Enfin, les clés générées à l'inscription permettent d'indiquer au serveur que les pads dans votre CryptDrive ne doivent pas être supprimés, même s'ils sont inactifs. Ce système a l'inconvénient de nous fournir davantage d'informations sur la façon dont vous utilisez CryptPad, mais il est nécessaire pour que nous puissions supprimer du serveur les pads inactifs dont personne n'a besoin."
        },
        other: {
            q: "Que peuvent apprendre les autres collaborateurs à mon sujet ?",
            a: "Quand vous éditez un pad avec quelqu'un d'autre, vous communiquez en passant par notre serveur, nous sommes donc les seuls à connaître votre adresse IP.<br>" +
               "Les autres utilisateurs ont accès à votre pseudonyme, votre avatar, le lien vers votre profil (si vous en avez un) et votre <em>clé publique</em> (qui est utilisée pour le chiffrement des communications entre utilisateurs)."
        },
        anonymous: {
            q: "CryptPad me rend-il anonyme ?",
            a: "Bien que CryptPad soit conçu pour en savoir le moins possible à votre sujet, il ne fournit pas un anonymat complet.<br>" +
               "Nos serveurs ont accès à votre adresse IP, mais vous pouvez la cacher en utilisant, par exemple, Tor pour accéder à CryptPad.<br>" +
               "Utiliser Tor sans changer votre comportement ne garantira toutefois pas votre anonymat, puisque notre serveur est en mesure d'identifier des utilisateurs avec leur identifiant cryptoraphique unique. Si vous utilisez le même compte utilisateur avec et sans Tor, il serait donc possible de désanonymiser votre session.<br><br>" +
               "Pour les utilisateurs qui n'ont pas besoin d'un niveau de confidentialité aussi élevé, Tor n'est pas nécessaire puisque CryptPad ne nécessite pas la saisie d'un nom réel, d'un numéro de téléphone ou même d'une adresse email comme de nombreux autres services."
        },
        policy: {
            q: "Avez-vous une politique de confidentialité des données ?",
            a: 'Oui ! Elle est disponible <a href="/privacy.html" target="_blank">ici</a>.'
        },
    };
    out.faq.security = {
        title: 'Sécurité',
        proof: {
            q: "Comment utilisez-vous les preuves à divulgation nulle de connaissance (Zero Knowledge proofs) ?",
            a: "Quand nous utilisons le terme <em>Zero Knowledge</em>, ce n'est pas une référence aux <em>Zero Knowledge proofs</em>, mais aux <em>Services Web Zero Knowledge</em>.<br>" +
               "Les <em>Services Web Zero Knowledge</em> chiffrent les données des utilisateurs dans le navigateur, de manière à ce que le serveur n'aie pas accès au contenu déchiffré ni aux clés de chiffrement.<br><br>" +
               "Nous avons établi une courte liste de Services Zero Knowledge <a href=\"https://blog.cryptpad.fr/2017/02/20/Time-to-Encrypt-the-Cloud/#Other-Zero-Knowledge-Services\" target=\"_blank\">sur notre blog</a>."
        },
        why: {
            q: "Pourquoi devrais-je utiliser CryptPad ?",
            a: "Notre position est que les services cloud ne devraient pas nécessiter l'accès à vos données afin que vous puissiez les partager avec vos amis ou vos collègues. Si vous utilisez un autre service pour le travail collaboratif et qu'il n'indique pas clairement que le serveur n'a pas accès aux informations, il est très probable que vos données soient utilisées pour faire du profit."
        },
        compromised: {
            q: "CryptPad me protège-t-il si mon ordinateur est compromis ?",
            a: "Dans le cas où votre ordinateur ou téléphone serait volé, CryptPad vous permet de déclencher une déconnexion à distance de votre compte CryptPad sur tous les appareils, excepté celui sur lequel vous vous trouvez. Pour ce faire, vous pouvez cliquer sur <b>Se déconnecter partout</b> dans votre page de <b>Préférences</b>.<br>" +
               "Tous les appareils qui sont actuellement connectés sur CryptPad à votre compte seront déconnectés. Tous les appareils qui se sont connectés au compte et ne vous demandent plus vos identifiants vous forceront à vous identifier de nouveau lorsque vous visiterez CryptPad.<br>" +
               "Actuellement, la <em>déconnexion à distance</em> est implémentée dans votre navigateur et non avec le serveur. Cela signifie que cette fonction devrait être suffisante pour protéger vos données si vous oubliez de vous déconnecter après l'utilisation sur un ordinateur partagé, mais elle ne vous protègera pas des agences gouvernementales."
        },
        crypto: {
            q: "Quelle cryptographie utilisez-vous ?",
            a: 'CryptPad est basé sur deux librairies open-source de cryptographie : <a href="https://github.com/dchest/tweetnacl-js" target="_blank">tweetnacl.js</a> et <a href="https://github.com/dchest/scrypt-async-js" target="_blank">scrypt-async.js</a>.<br>' +
               '<b>Scrypt</b> est une <em>fonction de dérivation de clé</em> basée sur un mot de passe. Nous l\'utilisons pour transformer votre nom d\'utilisateur et votre mot de passe en un unique ensemble de clés qui sécurise l\'accès à votre CryptDrive afin que vous seul puissiez accéder à votre liste de pads.<br>' +
               'Nous utilisons les outils de chiffrement <em>xsalsa20-poly1305</em> et <em>x25519-xsalsa20-poly1305</em> fournis par <b>tweetnacl</b> pour chiffrer vos pads et l\'historique du chat respectivement.'
        }
    };
    out.faq.usability = {
        title: 'Utilisation',
        register: {
            q: "Qu'est-ce que je gagne en créant un compte utilisateur ?",
            a: 'Les utilisateurs enregistrés ont accès à un certain nombre de nouvelles fonctionnalités inaccessibles aux utilisateurs non connectés. Un tableau récapitulatif est disponible <a href="/features.html">ici</a>.'
        },
        share: {
            q: "Comment partager des pads chiffrés avec mes amis ?",
            a: "CryptPad stocke la clé secrète de chiffrement des pads après le symbole `#` dans l'URL. " +
               "Tout ce qui se trouve après ce symbole n'est jamais envoyé au serveur, ainsi nous n'avons pas accès à vos clés de chiffrement. " +
               "Partager le lien d'un pad revient donc à permettre la lecture ou la modification du contenu."
        },
        remove: {
            q: "J'ai supprimé un pad ou un fichier de mon CryptDrive, mais le contenu est encore disponible. Comment le supprimer ?",
            a: "Seuls les <em>pads avec propriétaire</em> (introduits en février 2018) peuvent être supprimés du serveur. Ils ne peuvent d'ailleurs être supprimés du serveur que par leur <em>propriétaire</em> (l'utilisateur ayant créé le pad).<br>" +
               "Si vous n'êtes pas le créateur du pad, vous devrez demander au propriétaire de le supprimer pour vous.<br>" +
               "Pour les pads dont vous êtes le propriétaire, vous pouvez effectuer un <b>clic-droit sur le pad dans votre CryptDrive</b>, et sélectionner <b>Supprimer du serveur</b>."
        },
        forget: {
            q: "Que faire si j'oublie mon mot de passe ?",
            a: "Malheureusement, si nous avions la possibilité de retrouver ou de modifier votre mot de passe, cela signifierait que nous avons accès à vos pads, ce n'est donc pas le cas.<br>" +
               "Si vous n'avez pas noté votre nom d'utilisateur et votre mot de passe, et que vous ne vous en souvenez pas, il est peut-être possible de retrouver l'accès à certains pads grâce à l'historique de votre navigateur."
        },
        change: {
            q: "Que faire si je souhaite changer de mot de passe ?",
            a: "Il n'est actuellement pas possible de changer votre mot de passe sur CryptPad, mais nous comptons développer cette fonctionnalité très bientôt."
        },
        devices: {
            q: "Je suis connecté sur deux appareils mais avec deux CryptDrive différents, comment est-ce possible ?",
            a: "Il est possible que vous ayez enregistré le même nom d'utilisateur 2 fois, mais avec des mots de passe différents.<br>" +
               "Puisque le serveur de CryptPad vous identifie avec une clé cryptographique et non avec votre nom d'utilisateur, il ne peut pas empêcher la création d'autres comptes avec le même nom. Ainsi, chaque utilisateur possède une combinaison nom d'utilisateur / mot de passe unique.<br>" +
               "Les utilisateurs enregistrés peuvent voir leur nom de compte en haut de la page de préférences."
        },
        folder: {
            q: "Puis-je partager des dossiers complets de mon CryptDrive ?",
            a: "Nous travaillons sur l'ajout d'une fonctionnalité <em>workgroups</em> (ou groupes de travail), qui permettrait aux collaborateurs de partager une structure de type dossier, avec tous les pads contenus dans cette structure."
        },
        feature: {
            q: "Pouvez-vous ajouter une fonctionnalité particulière dont j'ai besoin ?",
            a: 'Beaucoup de fonctionnalités de CryptPad existent parce que des utilisateurs les ont demandées.<br>' +
               'Notre <a href="https://cryptpad.fr/contact.html" target="_blank">page de contact</a> liste les différentes manières de nous joindre.<br><br>' +
               'Malheureusement, nous ne pouvons pas garantir que nous allons implémenter toutes les fonctionnalités demandées.<br>' +
               'Si une fonctionnalité particulière est nécessaire pour votre organisation, vous pouvez sponsoriser son développement pour s\'assurer de sa réalisation. Veuillez contacter <a href="mailto:sales@cryptpad.fr" target="_blank">sales@cryptpad.fr</a> pour plus d\'informations.<br><br>' +
               "Si vous n'avez pas la possibilité de sponsoriser du développement, nous sommes toujours intéressés par de nouvelles idées et des retours d'expérience qui peuvent nous aider à améliorer CryptPad. N'hésitez pas à nous contacter, avec les méthodes données précédemment, à n'importe quel moment."
        },
    };
    out.faq.other = {
        title: "Autres questions",
        pay: {
            q: "Pourquoi payer alors que toutes les fonctionnalités sont gratuites ?",
            a: "Un compte premium permet d'<b>augmenter la limite de stockage</b> dans le CryptDrive, ainsi que celle de ses amis (<a href=\"https://accounts.cryptpad.fr/#/faq\" target=\"_blank\">en savoir plus</a>).<br>" +
               "En plus des ces avantages directs, l'abonnement premium permet aussi de <b>financer le développement</b> actif et de manière continue de CryptPad. Cela comprend la correction de bugs, l'ajout de nouvelles fonctionnalités et rendre plus facile l'hébergement de CryptPad par d'autres personnes.<br>" +
               "Avec un abonnement, vous aidez aussi à prouver aux autres fournisseurs de services que les gens sont prêts à supporter les technologies améliorant le respect de leur vie privée. Nous espérons qu'un jour, les entreprises ayant pour revenu principal la revente de données des utilisateurs soient de l'histoire ancienne.<br>" +
               "Enfin, nous offrons la plupart des fonctionnalités gratuitement parce que nous croyons que tout le monde mérite le respect de la vie privée. En souscrivant à un compte premium, vous nous aider à maintenir ces fonctionnalités basiques accessibles aux populations défavorisées."
        },
        goal: {
            q: "Quel est votre objectif ?",
            a: "En développant une technologie de collaboration qui respecte la vie privée, nous espérons augmenter les attentes des utilisateurs en ce qui concerne les plateformes de services \"cloud\" et leur politique de confidentialité. Nous souhaitons que notre travail conduise les autres fournisseurs de services, quel que soit leur domaine, à égaler voire dépasser nos efforts.<br>" +
               "Malgré notre optimisme, nous savons que la plupart du Web est financé par les publicités ciblées. Il y a encore beaucoup de travail à effectuer que l'on peut faire de nous-mêmes, et nous apprécions le support, la promotion et les contributions de notre communauté envers cet objectif."
        },
        jobs: {
            q: "Est-ce que vous embauchez ?",
            a: 'Oui ! Vous pouvez envoyer un email à <a href="mailto:jobs@xwiki.com">jobs@xwiki.com</a>.'
        },
        host: {
            q: "Pouvez-vous m'aider à installer ma propre instance de CryptPad ?",
            a: 'Nous serions heureux de fournir du support pour l\'installation de CryptPad au sein de votre organisation. Veuillez contacter <a href="mailto:sales@cryptpad.fr">sales@cryptpad.fr</a> pour plus d\'informations.'
        },
        revenue: {
            q: "Comment participer au système de partage des revenus ?",
            a: "Si vous possédez votre propre instance de CryptPad et que vous souhaitez activer les comptes payant et partager les revenus avec les développeurs, votre serveur devra être configuré comme un service partenaire.<br>" +
            'Dans votre répertoire CryptPad, le fichier <code>config.example.js</code> devrait contenir des explications concernant les étapes à suivre pour configurer votre serveur. Vous devrez aussi contacter <a href="mailto:sales@cryptpad.fr">sales@cryptpad.fr</a> pour vérifier  que votre serveur est configuré correctement et pour discuter des méthodes de paiement.'
        },
    };
    // terms.html

    out.tos_title = "Conditions d'utilisation de CryptPad";
    out.tos_legal = "Veuillez ne pas être malveillant, abusif, ou faire quoi que ce soit d'illégal.";
    out.tos_availability = "Nous espérons que vous trouvez ce service utile, mais nous ne pouvons garantir ses performances et disponibilités. Nous vous recommandons d'exporter vos données régulièrement.";
    out.tos_e2ee = "Le contenu sur CryptPad peuvent être lus et modifiés par quiconque est en mesure de deviner ou d'obtenir de quelque manière que ce soit l'identificateur de fragment du pad. Nous vous recommandons d'utiliser des technologies de messagerie chiffrées de bout à bout (end-to-end encryption ou e2ee) pour partager les liens, et déclinons toute responsabilité dans le cas ou un tel lien serait divulgué.";
    out.tos_logs = "Les meta-données fournies par votre navigateur au serveur peuvent être enregistrées dans le but de maintenir le service.";
    out.tos_3rdparties = "Nous ne fournissons aucune donnée individuelle à des tierces parties à moins d'y être contraints par la loi.";

    // 404 page
    out.four04_pageNotFound = "Nous n'avons pas trouvé la page que vous cherchez.";

    // Header.html

    out.updated_0_header_logoTitle = 'Retourner vers votre CryptDrive';
    out.header_logoTitle = out.updated_0_header_logoTitle;
    out.header_homeTitle = "Aller sur la page d'accueil";

    // Initial states

    out.help = {};

    out.help.title = "Pour bien démarrer";
    out.help.generic = {
        more: 'Apprenez-en davantage sur le fonctionnement de CryptPad en lisant notre <a href="/faq.html" target="_blank">FAQ</a>',
        share: 'Utilisez le menu partage (<span class="fa fa-share-alt"></span>) pour générer un lien d\'accès ou d\'édition  pad',
        stored: 'Chaque pad que vous visitez est stocké automatiquement dans votre <a href="/drive/" target="_blank">CryptDrive</a>'
    };

    out.help.text = {
        formatting: 'Vous pouvez afficher ou cacher la barre d\'outils de texte en cliquant sur les boutons <span class="fa fa-caret-down"></span> ou <span class="fa fa-caret-up"></span>',
        embed: 'Les utilisateurs enregistrés peuvent intégrer un fichier de leur CryptDrive en utilisant le bouton <span class="fa fa-image"></span>',
        history: 'Vous pouvez utiliser l\'historique (<span class="fa fa-history"></span>) pour voir ou restaurer les versions précédentes du pad'
    };

    out.help.pad = {
        export: 'Vous pouvez exporter le contenu en tant que PDF avec le bouton <span class="fa fa-print"></span> de la barre d\'outils de mise en forme du texte'
    };

    out.help.code = {
        modes: 'Utilisez le sous-menu <span class="fa fa-ellipsis-h"></span> pour changer le mode de coloration syntaxique ou le thème de couleur'
    };

    out.help.slide = {
        markdown: 'Rédigez vos slides en <a href="http://www.markdowntutorial.com/">Markdown</a> et séparez les avec une ligne contenant <code>---</code>',
        present: 'Démarrez la présentation en utilisant le bouton <span class="fa fa-play-circle"></span>',
        settings: 'Modifiez les préférences de la présentation (image de fond, transitions, numéro de pages, ...) avec le bouton <span class="fa fa-cog"></span> dans le sous-menu <span class="fa fa-ellipsis-h"></span>',
        colors: 'Modifiez la couleur du texte ou du fond en utilisant les boutons <span class="fa fa-i-cursor"></span> et <span class="fa fa-square"></span>'
    };

    out.help.poll = {
        decisions: 'Prenez des décisions en privé avec des personnes de confiance',
        options: 'Proposez des options et exprimez vos préférences',
        choices: 'Cliquez sur les cellules de votre colonne pour modifier leur valeur entre oui (<strong>✔</strong>), peut-être (<strong>~</strong>) ou non (<strong>✖</strong>)',
        submit: 'Cliquez sur <b>Ajouter</b> pour rendre vos choix visibles aux autres'
    };

    out.help.whiteboard = {
        colors: 'Double-cliquez sur les couleurs pour changer la palette',
        mode: 'Vous pouvez désactiver le mode dessin pour déplacer, redimensionner, ou supprimer des éléments du dessin',
        embed: 'Intégrez des images de votre disque <span class="fa fa-file-image-o"></span> ou de votre CryptDrive <span class="fa fa-image"></span> et exporter le contenu en tant que PNG sur votre disque <span class="fa fa-download"></span> ou votre CryptDrive <span class="fa fa-cloud-upload"></span>'
    };

    out.help.kanban = {
        add: 'Ajoutez un tableau en utilisant le bouton <span class="fa fa-plus"></span> dans le coin supérieur-droit',
        task: 'Déplacez les éléments en les faisant glisser d\'un tableau à l\'autre',
        color: 'Modifiez les couleurs en cliquant sur les parties colorées à côté du titre de chaque tableau'
    };

    out.initialState = [
        '<p>',
        'Voici <strong>CryptPad</strong>, l\'éditeur collaboratif en temps-réel Zero Knowledge. Tout est sauvegardé dés que vous le tapez.',
        '<br>',
        'Partagez le lien vers ce pad avec des amis ou utilisez le bouton <span class="fa fa-share-alt"></span> pour obtenir le <em>lien de lecture-seule</em>, qui permet la lecture mais non la modification.',
        '</p>',
    ].join('');

    out.codeInitialState = [
        '# Éditeur de code collaboratif et Zero Knowledge de CryptPad\n',
        '\n',
        '* Ce que vous tapez ici est chiffré de manière que seules les personnes avec le lien peuvent y accéder.\n',
        '* Vous pouvez choisir le langage de programmation pour la coloration syntaxique, ainsi que le thème de couleurs, dans le coin supérieur droit.'
    ].join('');

    out.slideInitialState = [
        '# CryptSlide\n',
        '1. Écrivez le contenu de votre présentation avec la syntaxe Markdown\n',
        '  - Apprenez à utiliser markdown en cliquant [ici](http://www.markdowntutorial.com/)\n',
        '2. Séparez vos slides avec ---\n',
        '3. Cliquez sur la bouton "lecture" pour afficher le résultat en mode présentation',
        '  - La présentation est mise à jour en temps-réel'
    ].join('');

    out.driveReadmeTitle = "Qu'est-ce que CryptPad ?";
    out.readme_welcome = "Bienvenue dans CryptPad !";
    out.readme_p1 = "Bienvenue dans CryptPad, le lieu où vous pouvez prendre des notes seul ou avec des amis.";
    out.readme_p2 = "Ce pad va vous donner un aperçu de la manière dont vous pouvez utiliser CryptPad pour prendre des notes, les organiser et travailler en groupe sur celles-ci.";
    out.readme_cat1 = "Découvrez votre CryptDrive";
    out.readme_cat1_l1 = "Créer un pad : Dans votre CryptDrive, cliquez sur {0} puis {1} et vous obtenez un nouveau pad."; // 0: New, 1: Rich Text
    out.readme_cat1_l2 = "Ouvrir des pads depuis votre CryptDrive : Double-cliquez sur l'icone d'un pad pour l'ouvrir.";
    out.readme_cat1_l3 = "Organiser vos pads : Quand vous êtes connecté, tous les pads auquel vous accédez sont ajoutés dans la section {0} de votre CryptDrive."; // 0: Unsorted files
    out.readme_cat1_l3_l1 = "Vous pouvez cliquer et faire glisser des fichiers dans des dossiers dans la section {0} de votre CryptDrive, et créer de nouveaux dossiers."; // 0: Documents
    out.readme_cat1_l3_l2 = "N'hésitez pas à utiliser le clic droit sur les icones puisque des menus sont souvent disponibles.";
    out.readme_cat1_l4 = "Déplacer des pads vers la corbeille : Vous pouvez cliquer et faire glisser vos pads dans la {0} de la même manière que vous pouvez les déposer dans des dossiers."; // 0: Trash
    out.readme_cat2 = "Créer des pads comme un pro";
    out.edit = "éditer";
    out.view = "voir";
    out.readme_cat2_l1 = "Le bouton {0} dans votre pad vous permet de donner l'accès à vos collaborateurs que ce soit pour l'{1} ou pour le {2}."; // 0: Share, 1: edit, 2: view
    out.readme_cat2_l2 = "Vous pouvez changer le titre d'un pad en cliquant sur le crayon";
    out.readme_cat3 = "Découvrez les autres applications CryptPad";
    out.readme_cat3_l1 = "Avec l'éditeur de code de CryptPad, vous pouvez collaborer sur du code comme Javascript ou des langages comme HTML ou Markdown.";
    out.readme_cat3_l2 = "Avec l'éditeur de présentations de CryptPad, vous pouvez réaliser des présentations rapides en utilisant Markdown";
    out.readme_cat3_l3 = "Avec CryptPoll vous pouvez créer rapidement des sondages, et en particulier plannifier des meetings qui rentrent dans l'agenda de tout ceux qui souhaitent participer.";

    // Tips
    out.tips = {};
    out.tips.shortcuts = "`ctrl+b`, `ctrl+i` et `ctrl+u` sont des raccourcis rapides pour mettre en gras, en italique ou souligner.";
    out.tips.indent = "Dans les listes à puces ou numérotées, vous pouvez utiliser `Tab` ou `Maj+Tab` pour augmenter ou réduire rapidement l'indentation.";
    out.tips.store = "Dès que vous ouvrez un nouveau pad, il est automatiquement stocké dans votre CryptDrive si vous êtes connecté.";
    out.tips.marker = "Vous pouvez surligner du texte dans un pad en utilisant l'option \"marker\" dans le menu déroulant des styles.";
    out.tips.driveUpload = "Les utilisateurs enregistrés peuvent importer des fichiers en les faisant glisser et en les déposant dans leur CryptDrive.";
    out.tips.filenames = "Vous pouvez renommer les fichiers de votre CryptDrive, ce nom ne sera visible que par vous.";
    out.tips.drive = "Les utilisateurs enregistrés peuvent organiser leurs fichiers dans leur CryptDrive, accessible depuis l'icône CryptPad dans le coin supérieur gauche des pads.";
    out.tips.profile = "Les utilisateurs enregistrés peuvent créer un profil depuis le menu utilisateur, dans le coin supérieur droit.";
    out.tips.avatars = "Vous pouvez uploader un avatar dans votre profil. Les autres personnes le verront dans la liste d'utilisateurs des pads.";
    out.tips.tags = "Ajoutez des mots-clés aux pads et effectuer une recherche commençant par # dans votre CryptDrive pour les retrouver.";

    out.feedback_about = "Si vous lisez ceci, vous vous demandez probablement pourquoi CryptPad envoie des requêtes vers des pages web quand vous realisez certaines actions.";
    out.feedback_privacy = "Nous prenons au sérieux le respect de votre vie privée, et en même temps nous souhaitons rendre CryptPad très simple à utiliser. Nous utilisons cette page pour comprendre quelles fonctionnalités dans l'interface comptent le plus pour les utilisateurs, en l'appelant avec un paramètre spécifiant quelle action a été réalisée.";
    out.feedback_optout = "Si vous le souhaitez, vous pouvez désactiver ces requêtes en vous rendant dans <a href='/settings/'>votre page de préférences</a>, où vous trouverez une case à cocher pour désactiver le retour d'expérience.";

    // Creation page
    out.creation_404 = "Ce pad n'existe plus. Vous pouvez créer un nouveau pad en utilisant le formulaire suivant.";
    out.creation_ownedTitle = "Type de pad";
    out.creation_owned = "Être propriétaire de ce pad";
    out.creation_ownedTrue = "Être propriétaire";
    out.creation_ownedFalse = "Pas de propriétaire";
    out.creation_owned1 = "Être <b>propriétaire</b> d'un pad signifie que vous pouvez le supprimer du serveur à tout moment. Une fois supprimé, il disparaît du CryptDrive des autres utilisateurs.";
    out.creation_owned2 = "Un pad <b>sans propriétaire</b> ne peut pas être supprimé du serveur à moins d'avoir dépassé son éventuelle date d'expiration.";
    out.creation_expireTitle = "Durée de vie";
    out.creation_expire = "Ajouter une durée de vie";
    out.creation_expireTrue = "Ajouter durée de vie";
    out.creation_expireFalse = "Illimité";
    out.creation_expireHours = "Heure(s)";
    out.creation_expireDays = "Jour(s)";
    out.creation_expireMonths = "Mois";
    out.creation_expire1 = "Un pad <b>illimité</b> ne sera pas supprimé du serveur à moins que son propriétaire ne le décide.";
    out.creation_expire2 = "Un pad <b>à durée de vie</b> sera supprimé automatiquement du serveur et du CryptDrive des utilisateurs lorsque cette durée sera dépassée.";
    out.creation_password = "Ajouter un mot de passe";
    out.creation_noTemplate = "Pas de modèle";
    out.creation_newTemplate = "Nouveau modèle";
    out.creation_create = "Créer";
    out.creation_saveSettings = "Ne plus me demander";
    out.creation_settings = "Voir davantage de préférences";
    out.creation_rememberHelp = "Ouvrez votre page de Préférences pour voir ce formulaire à nouveau.";
    // Properties about creation data
    out.creation_owners = "Propriétaires";
    out.creation_ownedByOther = "Appartient à un autre utilisateur";
    out.creation_noOwner = "Pas de propriétaire";
    out.creation_expiration = "Date d'expiration";
    out.creation_passwordValue = "Mot de passe";
    out.creation_propertiesTitle = "Disponibilité";
    out.creation_appMenuName = "Mode avancé (Ctrl + E)";
    out.creation_newPadModalDescription = "Cliquez sur un type de pad pour le créer. Vous pouvez aussi appuyer sur <b>Tab</b> pour sélectionner un type et appuyer sur <b>Entrée</b> pour valider.";
    out.creation_newPadModalDescriptionAdvanced = "Cochez la case si vous souhaitez voir l'écran de création de pads (pour les pads avec propriétaire ou à durée de vie). Vous pouvez appuyer sur <b>Espace</b> pour changer sa valeur.";
    out.creation_newPadModalAdvanced = "Afficher l'écran de création de pads";

    // Password prompt on the loadind screen
    out.password_info = "Le pad auquel vous essayez d'accéder est protégé par un mot de passe. Entrez le bon mot de passe pour accéder à son contenu.";
    out.password_error = "Pad introuvable !<br>Cette erreur peut provenir de deux facteurs. Soit le mot de passe est faux, soit le pad a été supprimé du serveur.";
    out.password_placeholder = "Tapez le mot de passe ici...";
    out.password_submit = "Valider";
    out.password_show = "Afficher";

    // New share modal
    out.share_linkCategory = "Partage";
    out.share_linkAccess = "Droits d'accès";
    out.share_linkEdit = "Édition";
    out.share_linkView = "Lecture-seule";
    out.share_linkOptions = "Options du lien";
    out.share_linkEmbed = "Mode intégration (barre d'outils cachée)";
    out.share_linkPresent = "Mode présentation (sections d'édition cachées)";
    out.share_linkOpen = "Ouvrir le lien";
    out.share_linkCopy = "Copier le lien";
    out.share_embedCategory = "Intégration";
    out.share_mediatagCopy = "Copier le mediatag";

    // Loading info
    out.loading_pad_1 = "Initialisation du pad";
    out.loading_pad_2 = "Chargement du contenu du pad";
    out.loading_drive_1 = "Chargement des données";
    out.loading_drive_2 = "Mise à jour du format des données";
    out.loading_drive_3 = "Vérification de l'intégrité des données";

    return out;
});
