BuildModal = function(options) {
    if (options !== undefined) {
        if (options.content === undefined && options.load === undefined) {
            throw "ArgumentError: Must specify argument 'options.content' as type Stirng or 'load' as type String (URL).";
        }
    } else {
        throw "ArgumentError: Must specify argument 'options.content', as either URL or string.";
    }
    var $this = this, $options = options, $breadcrumbs = [], $content = [], // {},
    $history = [], contentType = "", contentArray = [], currentSection = {}, currentBodyContent = "", sidebarOpen = false, templateModal = $options.modaltemplate || '<div class="modal" id="buildModal"></div><!-- /.modal -->';
    var $defaults = {
        animateIn: "zoomIn",
        animateOut: "fadeOutUp",
        trip: null,
        // null or trip.js Trip object.
        backdrop: false,
        bsoptions: {
            backdrop: true,
            keyboard: true,
            show: true
        },
        showProgressBar: true,
        // showToolbar: true,
        // showBody: true,
        // showFooter: true,
        content: {}
    };
    this.reset = function() {
        // $this = this;
        // $options = options;
        $breadcrumbs = [];
        $history = [];
        contentType = "";
        contentArray = [];
        sidebarOpen = false;
        templateModal = $options.modaltemplate || '<div class="modal" id="buildModal"></div>';
        // Set defaults
        if (!options) {
            // Not Applicable if content is required to fire modal.
            $options = options = $defaults;
        } else {
            for (var property in $defaults) {
                if ($options.hasOwnProperty(property) === false) {
                    $options[property] = $defaults[property];
                }
            }
        }
    };
    this.init = function() {
        var contentRemote = false;
        if (typeof $options === "string") {
            // Not Applicable if content is required to fire modal.
            switch ($options) {
              case "show":
                this.show();
                break;

              case "hide":
                this.hide();
                break;

              default:
                break;
            }
        } else if (typeof $options === "object") {
            if ($options.header === undefined) {
                throw "ArgumentError: Must specify 'options.header', as Object.";
            }
            if ($options.content === undefined) {
                throw "ArgumentError: Must specify 'options.content', as Object.";
            }
            if (typeof $options.content === "object") {
                if (Array.isArray($options.content) === true) {
                    contentType = "array";
                    contentArray = $options.content;
                    contentRemote = true;
                    sidebarOpen = true;
                } else {
                    // Validate Header
                    if ($options.header.title === undefined || typeof $options.header.title !== "string") {
                        throw "ArgumentError: Must specify 'options.header.title', as String.";
                    }
                    // Validate Body
                    if ($options.content.title === undefined || typeof $options.content.title !== "string") {
                        throw "ArgumentError: Must specify 'options.content.title', as String.";
                    }
                    if ($options.content.body === undefined) {
                        throw "ArgumentError: Must specify 'options.content.body', as String or Object.";
                    }
                    if (typeof $options.content.body !== "string" && typeof $options.content.body !== "object") {
                        throw "ArgumentError: Must specify argument 'options.content.body', as Object or String.";
                    } else if (typeof $options.content.body === "object") {
                        contentType = "object";
                        if ($options.content.body.url !== undefined) {
                            if (typeof $options.content.body.url !== "string") {
                                throw "ArgumentError: Must specify argument 'options.content.body.url', String.";
                            } else {
                                contentRemote = true;
                            }
                        } else {
                            currentBodyContent = $options.content.body;
                        }
                    }
                }
            } else if (typeof $options.content === "string") {
                contentType = "simple";
            } else {
                throw "ArgumentError: Must specify 'options.content' as String, or Object, or Array.";
            }
        } else {
            throw "ArgumentError: Must specify argument 'options.content', as either content.url for remote loading or content string.";
        }
        if (contentRemote === true) {
            var myURL;
            if (contentType === "array") {
                var myContentArray = $options.content;
                for (i = 0; i <= myContentArray.length - 1; i++) {
                    if (myContentArray[i].active === true) {
                        currentSection = myContentArray[i];
                        myURL = currentSection.body.url;
                        break;
                    }
                    if (i >= myContentArray.length - 1) {
                        currentSection = myContentArray[0];
                        myURL = currentSection.body.url;
                    }
                }
            } else if (contentType === "object") {
                currentSection = $options.content;
                myURL = $options.content.body.url;
            }
            load({
                url: myURL,
                success: function(response) {
                    currentBodyContent = response;
                    initContent();
                }
            });
        } else if (contentRemote === false) {
            contentType = "simple";
            currentBodyContent = $options.content.body;
            initContent();
        }
    };
    this.content = {
        clear: function() {},
        reset: function() {},
        refresh: function() {}
    };
    this.breadcrumbs = {
        init: function() {
            var returnHTML = "";
            for (var i = 0; i <= $breadcrumbs.length - 1; i++) {
                if (i < $breadcrumbs.length - 1) {
                    returnHTML += printBreadcrumb({
                        type: "link",
                        text: $breadcrumbs[i].title
                    });
                    returnHTML += printBreadcrumbDivider();
                } else {
                    returnHTML += printBreadcrumb({
                        type: "final",
                        text: $breadcrumbs[i].title
                    });
                }
            }
            return returnHTML;
        },
        add: function(sectionTitle) {
            if (typeof sectionTitle !== "string") {
                throw "ArgumentError: must specify sectionTitle as String.";
            }
            $breadcrumbs.push({
                title: sectionTitle
            });
            return $breadcrumbs;
        },
        remove: function() {
            $breadcrumbs.pop();
            return $breadcrumbs;
        },
        reset: function() {
            $breadcrumbs = [ {
                title: $options.header.title
            } ];
            return $breadcrumbs;
        },
        clear: function() {
            $("#buildModal .modal-toolbar-breadcrumbs").empty();
        },
        refresh: function() {
            $("#buildModal .modal-toolbar-breadcrumbs").empty();
            $("#buildModal .modal-toolbar-breadcrumbs").append(breadcrumbs.init());
        }
    };
    this.footer = {
        init: function() {
            var returnHTML = "";
            if ($options.footer !== undefined) {
                var footerActions = $options.footer.actions || undefined;
                if (footerActions !== undefined) {
                    var footerActionOptions;
                    for (var i = 0; i <= footerActions.length - 1; i++) {
                        footerActionOptions = footerActions[i];
                        returnHTML += printButton(footerActionOptions);
                    }
                }
            }
            return returnHTML;
        }
    };
    this.initContent = function() {
        if ($(document).find("#buildModal").length < 1) {
            $("body").prepend(templateModal);
        } else {
            $("#buildModal").empty();
        }
        breadcrumbs.reset();
        breadcrumbs.add(currentSection.title || "");
        breadcrumbs.refresh();
        var contentHeaderIcon = $options.header.icon || "";
        var contentHeaderTitle = $options.header.title || "";
        var contentBodyContent = loadContentSection(currentBodyContent) || currentSection.body || "";
        var contentSidebar = "";
        var contentToolbar = "";
        var contentBreadcrumbs = "";
        var contentBreadcrumbActions = "";
        var contentFooter = footer.init() || "";
        var templateModalDialog = "";
        var templateModalHeader = "";
        var templateModalProgressBar = "";
        var templateModalToolbar = "";
        var templateModalSidebar = "";
        var templateModalBody = "";
        var templateModalFooter = "";
        var layoutContentClass = "clear";
        var layoutSidebarClass = "closed";
        currentBodyContent = undefined;
        if (contentType === "array") {
            layoutContentClass = "pushed";
            layoutSidebarClass = "open";
            contentSidebar = initSidebar() || "";
            contentBreadcrumbs = breadcrumbs.init() || "";
            contentBreadcrumbActions = breadcrumbActions.init() || "";
        }
        templateModalHeader += '<div class="modal-header">';
        templateModalHeader += '<div class="modal-header-actions">';
        if ($options.trip !== null) {
            templateModalHeader += '<button type="button" class="help" data-toggle="tooltip" data-placement="bottom" title="Help" data-action="ModalHelp" aria-label="Help"><span aria-hidden="true" class="glyphicon glyphicon-question-sign"></span></button>';
        }
        templateModalHeader += '<button type="button" class="close" data-toggle="tooltip" data-placement="bottom" title="Close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>';
        templateModalHeader += "</div>";
        templateModalHeader += '<h4 class="modal-title"><span class="' + contentHeaderIcon + '"></span><span class="title">' + contentHeaderTitle + "</span></h4>";
        templateModalHeader += "</div>";
        templateModalProgressBar += '<div class="modal-progressbar">';
        templateModalProgressBar += '<div class="modal-progressbar-progress"></div>';
        templateModalProgressBar += "</div>";
        if (contentType === "array") {
            templateModalToolbar += '<div class="modal-toolbar">';
            templateModalToolbar += '<div class="modal-toolbar-breadcrumbs">';
            templateModalToolbar += contentBreadcrumbs;
            templateModalToolbar += "</div>";
            templateModalToolbar += '<div class="modal-toolbar-actions">';
            templateModalToolbar += contentBreadcrumbActions;
            templateModalToolbar += "</div>";
            templateModalToolbar += "</div>";
            templateModalSidebar = "";
            templateModalSidebar += contentSidebar;
        }
        templateModalBody += '<div class="modal-body">';
        templateModalBody += contentBodyContent;
        templateModalBody += "</div>";
        if (contentFooter !== "") {
            templateModalFooter += '<div class="modal-footer">';
            templateModalFooter += contentFooter;
            templateModalFooter += "</div>";
        }
        templateModalDialog += '<div class="modal-dialog">';
        templateModalDialog += '<div class="modal-content">';
        templateModalDialog += templateModalHeader;
        templateModalDialog += '<div class="modal-sidebar-layout">';
        templateModalDialog += '<div class="modal-sidebar ' + layoutSidebarClass + '">';
        templateModalDialog += templateModalSidebar;
        templateModalDialog += "</div>";
        templateModalDialog += '<div class="modal-maincontent ' + layoutContentClass + '">';
        templateModalDialog += templateModalProgressBar;
        templateModalDialog += templateModalToolbar;
        templateModalDialog += templateModalBody;
        templateModalDialog += templateModalFooter;
        templateModalDialog += "</div>";
        templateModalDialog += "</div>";
        templateModalDialog += "</div><!-- /.modal-content -->";
        templateModalDialog += "</div><!-- /.modal-dialog -->";
        $("#buildModal").append(templateModalDialog);
        // $options.showProgressBar !== true ? $("#buildModal .modal-progressbar").hide() : $("#buildModal .modal-progressbar").show();
        // $options.showToolbar !== true ? $("#buildModal .modal-toolbar").hide() : $("#buildModal .modal-toolbar").show();
        // $options.showBody !== true ? $("#buildModal .modal-body").hide() : $("#buildModal .modal-content").show();
        // $options.showFooter !== true ? $("#buildModal .modal-footer").hide() : $("#buildModal .modal-content").show();
        $("#buildModal").on("click", "[data-action~='LoadingOverlay']", showLoadingOverlay);
        $("#buildModal").on("click", "[data-action~='ToggleSidebar']", toggleSidebar);
        $("#buildModal").on("click", "[data-action~='SidebarLinkClick']", onSidebarLinkClick);
        $("#buildModal").on("click", "[data-action~='ModalHelp']", triggerModalHelp);
        $("#buildModal").on("click", "[data-action~='ModalClose']", modalClose);
        $("#buildModal").on("hidden.bs.modal", this.modalDestroy);
        $("[data-toggle='tooltip']").tooltip();
        this.show();
    };
    this.initSidebar = function() {
        var returnHTML = "";
        var myActiveContent;
        var hasActiveSection = false;
        var myTitle;
        var myIcon;
        var myBadge;
        var myActive;
        var myActions;
        $("#buildModal .modal-sidebar").empty();
        returnHTML += '<nav id="modal-sidebar-nav" class="modal-sidebar-nav">';
        if (myActiveContent === undefined) {
            myActiveContent = 0;
        }
        for (var i = 0; i < contentArray.length; i++) {
            myTitle = contentArray[i].title || "";
            myIcon = contentArray[i].icon || "";
            myActive = contentArray[i].active === true;
            myBadge = contentArray[i].badge || "";
            myActions = contentArray[i].actions || "";
            myOptions = {
                isActive: myActive,
                icon: myIcon,
                title: myTitle,
                badge: myBadge,
                actions: myActions
            };
            returnHTML += printSidebarLink(myOptions);
            if (myActive === true) {
                hasActiveSection = true;
            }
        }
        $("#buildModal .modal-sidebar").empty();
        returnHTML += "</nav>";
        if (hasActiveSection === false) {
            var myFound = $(returnHTML).find(".sidebar-nav-link");
            console.log(myFound);
            $(returnHTML).find("a.sidebar-nav-link:first-child").addClass("active");
        }
        return returnHTML;
    };
    breadcrumbActions = {
        init: function() {
            var myBreadcrumbActions = currentSection.body.actions || [];
            var actionsHTML = "";
            var returnHTML = "";
            if (myBreadcrumbActions.length > 0) {
                for (i = 0; i <= myBreadcrumbActions.length - 1; i++) {
                    actionsHTML += printBreadcrumbAction(myBreadcrumbActions[i]);
                }
                returnHTML += '<div class="modal-toolbar-actions-mobile">';
                returnHTML += actionsHTML;
                returnHTML += "</div>";
                returnHTML += '<div class="modal-toolbar-actions-large">';
                returnHTML += actionsHTML;
                returnHTML += "</div>";
                return returnHTML;
            }
        },
        refresh: function() {
            $("#buildModal .modal-toolbar-actions").empty();
            $("#buildModal .modal-toolbar-actions").append(breadcrumbActions.init());
        }
    };
    this.show = function() {
        $("#buildModal").modal($options.bsoptions);
        // $("#buildModal").modal($options.bsoptions);
        $("#buildModal > .modal-dialog").addClass("animated");
        $("#buildModal > .modal-dialog").addClass($options.animateIn || $defaults.animateIn);
        $("#buildModal > .modal-backdrop").css("opacity: 0");
        $("#buildModal > .modal-backdrop").animate({
            opacity: .5
        });
    };
    this.hide = function() {
        $("#buildModal > .modal-dialog").removeClass("animated");
        $("#buildModal > .modal-dialog").removeClass($options.animateOut || $defaults.animateOut);
        $("#buildModal > .modal-backdrop").removeClass("animated");
        $("#buildModal > .modal-backdrop").removeClass("fadeIn");
        $("#buildModal").modal("hide");
    };
    this.load = function(options) {
        /*
		{
			url: "includes/dummy.html",
			method: "POST" || "GET",
			data: {
				PostData1 : "1",
				PostData2 : "2",
			}
		}
		*/
        // console.log(options);
        if (options === undefined) {
            throw "ArgumentError: Must specify argument 'options' as type Object.";
        }
        if (options.hasOwnProperty("url") === true) {
            if (options.url === undefined || typeof options.url !== "string") {
                throw "ArgumentError: Must specify argument 'options.url' as type String (URL).";
            }
            $.ajax({
                url: options.url,
                method: options.method || "GET",
                data: options.data,
                beforeSend: onContentLoadBeforeSend,
                success: options.success || onContentLoadSuccess,
                error: options.error || onContentLoadError,
                xhr: contentLoadXHR
            });
        } else if (options.hasOwnProperty("body") === true) {
            $.ajax({
                url: options.body.url,
                method: options.method || "GET",
                // data: options.data || ,
                beforeSend: onContentLoadBeforeSend,
                success: options.success || onContentLoadSuccess,
                error: options.error || onContentLoadError,
                xhr: contentLoadXHR
            });
        } else {
            throw "ArgumentError: Must specify argument 'options' as an Ajax call object or as a content object.";
        }
    };
    this.contentLoadXHR = function() {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener("progress", progressUpload, false);
        xhr.addEventListener("progress", onContentLoadProgress, false);
        return xhr;
    }, this.onContentLoadBeforeSend = function() {
        $("#buildModal .modal-progressbar-progress").removeClass("moving");
        $("#buildModal .modal-progressbar-progress").removeClass("error");
        $("#buildModal .modal-progressbar-progress").removeClass("transition");
        $("#buildModal .modal-progressbar-progress").css("width", "0px");
        $("#buildModal .modal-body").removeClass("loaded");
        $("#buildModal .modal-body").addClass("loading");
        $("#buildModal .modal-body").prepend(printLoadingMessage());
    };
    this.onContentLoadProgress = function(response) {
        $("#buildModal .modal-progressbar-progress").addClass("moving");
        $("#buildModal .modal-body").addClass("loaded");
        $("#buildModal .modal-body").removeClass("loading");
        $("#buildModal .modal-body .loading-message").remove();
        $("#buildModal .modal-body").append(response);
        breadcrumbs.refresh();
        breadcrumbActions.refresh();
    };
    this.onContentLoadSuccess = function(response) {
        $("#buildModal .modal-progressbar-progress").removeClass("moving");
        $("#buildModal .modal-progressbar-progress").removeClass("error");
        $("#buildModal .modal-progressbar-progress").addClass("transition");
        $("#buildModal .modal-progressbar-progress").css("width", "100%");
        $("#buildModal .modal-body").addClass("loaded");
        $("#buildModal .modal-body").removeClass("loading");
        $("#buildModal .modal-body .loading-message").remove();
        $("#buildModal .modal-body").append(response);
        breadcrumbs.refresh();
        breadcrumbActions.refresh();
    };
    this.onContentLoadError = function() {
        $("#buildModal .modal-progressbar-progress").removeClass("transition");
        $("#buildModal .modal-progressbar-progress").addClass("error");
        $("#buildModal .modal-body").empty();
        $("#buildModal .modal-body").prepend(printLoadingMessage({
            icon: "<span class='glyphicon glyphicon-remove-circle'></span>",
            title: "Oops!",
            message: "Sorry, something went wrong. Probably nothing you did though. We're looking into it.",
            classes: "animated pulse",
            actionsMessage: "Please try again later!"
        }));
        $("#buildModal .modal-body .loading-message").addClass("error");
    };
    this.showLoadingOverlay = function(event) {
        loadingOverlay("create");
        loadingOverlay("show");
    };
    var toggleSidebar = function(event) {
        if (sidebarOpen === true) {
            $("#buildModal .modal-sidebar").addClass("closed");
            $("#buildModal .modal-maincontent").addClass("clear");
            $("#buildModal .modal-sidebar").removeClass("open");
            $("#buildModal .modal-maincontent").removeClass("pushed");
            sidebarOpen = false;
        } else if (sidebarOpen === false) {
            $("#buildModal .modal-sidebar").addClass("open");
            $("#buildModal .modal-maincontent").addClass("pushed");
            $("#buildModal .modal-sidebar").removeClass("closed");
            $("#buildModal .modal-maincontent").removeClass("clear");
            sidebarOpen = true;
        }
    };
    this.onSidebarLinkClick = function(event) {
        if ($(event.currentTarget).hasClass("active") === true) {} else {
            var sidebarNav = document.getElementById("modal-sidebar-nav");
            var sidebarNavChildren = sidebarNav.children;
            var myIndex = Array.prototype.indexOf.call(sidebarNavChildren, event.currentTarget);
            currentSection = contentArray[myIndex];
            breadcrumbs.reset();
            breadcrumbs.add(currentSection.title);
            breadcrumbs.refresh();
            breadcrumbActions.refresh();
            $("#buildModal .modal-body").empty();
            loadContentSection(currentSection);
            $("#buildModal .modal-sidebar nav > a.active").removeClass("active");
            $(event.currentTarget).addClass("active");
        }
    };
    this.loadContentSection = function(option) {
        if (option === undefined) {
            throw "ArgumentError: Must specify 'option' as contentSection:Object or contentArrayIndex:Number";
        }
        $("#buildModal .modal-body").removeClass("loaded");
        $("#buildModal .modal-body").addClass("loading");
        if (typeof option === "string") {
            var myContent = option;
            $("#buildModal .modal-body").empty();
            $("#buildModal .modal-body").append(myContent);
            return myContent;
        } else if (typeof option === "number") {
            var myIndex = option;
            var myCurrentSection = contentArray[myIndex];
            load(myCurrentSection);
        } else if (typeof option === "object") {
            var myCurrentSection = option;
            load(myCurrentSection);
        } else {
            throw "ArgumentError: Must specify 'option' as contentString:String, contentSection:Object or contentArrayIndex:Number";
        }
    };
    this.triggerModalHelp = function(event) {
        console.log("triggerModalHelp");
        console.log($options.trip);
        // console.log($options.trip.steps);
        // console.log($options.trip.options);
        var Walkthrough = new Trip($options.trip.steps, $options.trip.options);
    };
    this.modalDestroy = function(event) {
        reset();
        $("#buildModal").modal("hide");
        $("#buildModal").remove();
    };
    this.modalClose = function(event) {
        reset();
        $("#buildModal").modal("hide");
    };
    this.progressUpload = function(event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            $("#buildModal .modal-progressbar .modal-progressbar-progress").css({
                width: percentComplete
            });
        }
    };
    this.progressDownload = function(event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            $("#buildModal .modal-progressbar .modal-progressbar-progress").css({
                width: percentComplete
            });
        }
    };
    this.loadingOverlay = function(options) {
        var myTimeout;
        switch (options) {
          case "show":
            this.createLoadingOverlay();
            $("#buildModal .modal-content > .loading-overlay").fadeIn(250);
            break;

          case "hide":
            $("#buildModal .modal-content > .loading-overlay").fadeOut(250);
            break;

          case "create":
            this.createLoadingOverlay();
            break;

          case "remove":
            $("#buildModal > .loading-overlay").remove();
            break;

          default:
            throw "ArgumentError: must be either 'show', 'hide', 'create', or 'remove'.";
        }
    };
    this.createLoadingOverlay = function() {
        if ($("#buildModal .modal-content > .loading-overlay").length === 0) {
            $("#buildModal .modal-content").prepend(printLoadingOverlay());
        }
    };
    var printLoadingOverlay = function() {
        myHTML = "";
        myHTML += '<div class="loading-overlay" style="display:none;">';
        myHTML += "</div>";
        return myHTML;
    };
    this.printButton = function(options) {
        options = options === undefined ? {} : options;
        defaults = {
            title: "Save",
            // Button Title
            icon: "",
            // Icon Classes
            actions: "",
            // Function Event Listener Names 
            type: "button",
            // ONLY button || submit
            classes: "btn btn-primary"
        };
        var myTitle = options.title || defaults.title;
        var myIcon = options.icon || defaults.icon;
        var myActions = options.actions || defaults.actions;
        var myType = options.type || defaults.type;
        var myClasses = options.classes || defaults.classes;
        var returnHTML = "";
        if (myType !== "button" && myType !== "submit") {
            throw "ArgumentError: must specify 'type' as 'submit' or 'button'.";
        }
        if (myIcon === "" && myTitle === "") {
            throw "ArgumentError: must specify at least one of 'icon' or 'title'.";
        }
        returnHTML += '<button type="' + myType + '" data-action="' + myActions + '" class="' + myClasses + '">';
        if (myIcon !== "") {
            returnHTML += '<span class="build-button-icon ' + myIcon + '"></span>';
        }
        if (myTitle !== "") {
            returnHTML += '<span class="build-button-label">' + myTitle + "</span>";
        }
        returnHTML += "</button>";
        return returnHTML;
    };
    this.printLoadingMessage = function(options) {
        options = options === undefined ? {} : options;
        defaults = {
            icon: "<span class='glyphicon glyphicon-question-sign'></span>",
            title: "Loading",
            message: "Please wait while this section loads.",
            classes: "animated fadeInUp",
            actionsMessage: ""
        };
        // var myIcon = options.icon ? '<span class="' + options.icon + '"></span>' : "";
        var myIcon = options.icon || defaults.icon;
        var myTitle = options.title || defaults.title;
        var myMessage = options.message || defaults.message;
        var myClasses = options.classes || defaults.classes;
        var myActionsMessage = options.actionsMessage || defaults.actionsMessage;
        var returnHTML = "";
        var contentTitle = "";
        var contentText = "";
        var contentIcon = "";
        var contentActions = "";
        if (myIcon !== "") {
            contentTitle += '<div class="loading-message-title">';
            contentTitle += "<h3>" + myTitle + "</h3>";
            contentTitle += "</div>";
        }
        if (myIcon !== "") {
            contentIcon += '<div class="loading-message-icon">';
            contentIcon += myIcon;
            contentIcon += "</div>";
        }
        if (myMessage !== "") {
            contentText += '<div class="loading-message-text">';
            contentText += "<p>" + myMessage + "</p>";
            contentActions += "<hr>";
            contentText += "</div>";
        }
        if (myActionsMessage !== "") {
            contentActions += '<div class="loading-message-actions">';
            contentActions += "<p>" + myActionsMessage + "</p>";
            contentActions += "</div>";
        }
        returnHTML += '<div class="loading-message ' + myClasses + '"">';
        returnHTML += contentTitle;
        returnHTML += contentIcon;
        returnHTML += contentText;
        returnHTML += contentActions;
        returnHTML += "</div>";
        return returnHTML;
    };
    var printSidebarLink = function(options) {
        var returnHTML = "";
        var myActive = "";
        var myActions = "";
        var myBadge = "";
        // console.log(options);
        /*
		{
			isActive: true,
			icon: "glyphicon glyphicon-send",
			title: "Send",
			action: "",
			badge: "1",
		}
		*/
        if (options === undefined) {
            throw "ArgumentError: must specify options.isActive:Boolean, options.icon:String, options.title:String";
        }
        if (options.isActive === undefined || typeof options.isActive !== "boolean") {
            throw "ArgumentError: must specify options.isActive:Boolean.";
        }
        if (options.icon === undefined || typeof options.icon !== "string") {
            throw "ArgumentError: must specify options.icon:String.";
        }
        if (options.title === undefined || typeof options.title !== "string") {
            throw "ArgumentError: must specify options.title:String.";
        }
        if (options.isActive === true) {
            myActive = "active";
        }
        if (options.badge !== undefined && typeof options.badge === "number") {
            myBadge = '<span class="badge">' + options.badge + "</span>";
        }
        if (options.actions !== undefined && typeof options.actions === "string") {
            myActions = options.actions;
        }
        returnHTML += '<a class="sidebar-nav-link ' + myActive + '" data-action="SidebarLinkClick ' + myActions + '" data-toggle="tooltip" data-placement="right" title="' + options.title + '" href="javascript:;">';
        returnHTML += '<span class="' + options.icon + '"></span>';
        returnHTML += '<span class="nav-title">' + options.title + "</span>";
        returnHTML += myBadge;
        returnHTML += "</a>";
        return returnHTML;
    };
    var printBreadcrumb = function(options) {
        var myType;
        var returnHTML;
        if (options.type === "link") {
            myType = "a";
        } else if (options.type === "final") {
            myType = "span";
        }
        returnHTML = "";
        returnHTML += "<" + myType;
        if (myType === "a") {
            returnHTML += ' class="modal-toolbar-breadcrumb" href="javascript:;"';
        } else {
            returnHTML += ' class="modal-toolbar-breadcrumb"';
        }
        returnHTML += ">";
        returnHTML += options.text;
        returnHTML += "</";
        returnHTML += myType;
        returnHTML += ">";
        return returnHTML;
    };
    var printBreadcrumbDivider = function() {
        return '<span class="modal-toolbar-breadcrumb-divider"> / </span>';
    };
    var printBreadcrumbAction = function(options) {
        if (options.title === undefined) {
            throw "ArgumentError: Must specify 'options.title' as String.";
        }
        if (options.actions === undefined) {
            throw "ArgumentError: Must specify 'options.actions' as String.";
        }
        var returnHTML = "";
        var myTitle;
        var myIcon;
        var myClasses;
        var myActions;
        myTitle = options.title;
        myActions = options.actions;
        myIcon = options.icon || "";
        myClasses = options.classes || "btn btn-link";
        returnHTML += '<button type="button" data-action="' + myActions + '" class="' + myClasses + '"><span class="' + myIcon + '"></span><span class="">' + myTitle + "</span></button>";
        return returnHTML;
    };
    this.reset();
    this.init();
};

var myDebug;