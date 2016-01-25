Framework = {

    UI: {

        PageLoadNotifications: {

            get: function(){

                var nbCodes = "";
                var nbArray = [];
                var nbObject = {};

                nbCodes = Framework.Utilities.getQueryStringVars().nbCodes;
                
                if (typeof nbCodes === "undefined") {
                    return;
                }

                nbArray = nbCodes.split(',');
                console.log(nbArray);

                for (i = 0; i <= nbArray.length - 1; i++) {

                    var myNBCode = nbArray[i];
                    var myNBObject = this.lookup(myNBCode);

                    if (typeof myNBObject !== "undefined") {
                        this.fire(myNBObject);
                    }

                }

            },

            lookup : function(nbCode){

                var nbObject = {};

                switch(nbCode) {

                //  case "page-x-num", 
                //      where page is page used on (or "global"),
                //      where x is type of notification (e = error, w = warning, s = success, i = info),
                //      where num is the code for the notification.

                    case "ind2-w-001":
                        nbObject.type = "warning";
                        nbObject.text = "Sorry, it looks like you haven't selected a template. Please select a template now.";
                        break;

                    default:
                        return;

                }

                return nbObject;

            },

            fire : function(nbObject) {

                /*
                nbObject = {
                    type: "",
                    text: "",
                }
                */

                if (typeof nbObject === "undefined") {
                    throw "ArgumentError: Must pass 'nbObject' as type 'object'.";
                }

                Framework.UI.NotificationBanner.fire(nbObject);

            },

        },

        banner: {

            print: function(options) {
                /*
				options = {
					type : "",
					animation : "",
					icon : "",
					text : "",
				};
				*/
                if (options === undefined) {
                    throw "ArgumentError: Must pass 'options' as 'Object'.";
                }
                if (options.type === undefined) {
                    throw "ArgumentError: Must pass 'options.type' as 'String'.";
                }

                var returnHTML = "";

                var messageType = options.type || "default";
                var messageText;
                var messageIcon;
                var messageAnimation;

                var myTypeHTML;
                var myTextHTML;
                var myIconHTML;
                var myAnimationHTML;

                if (messageType === "success") {
                    messageText = options.text !== undefined ? options.text : "Well done, you did the thing!";
                    messageIcon = options.icon !== undefined ? options.icon : "glyphicons ok";
                    messageAnimation = options.animation !== undefined ? options.animation : "fadeIn";
                } else if (messageType === "danger") {
                    messageText = options.text !== undefined ? options.text : "Sorry, something went wrong! Please try again later";
                    messageIcon = options.icon !== undefined ? options.icon : "glyphicons remove";
                    messageAnimation = options.animation !== undefined ? options.animation : "shake";
                } else if (messageType === "warning") {
                    messageText = options.text !== undefined ? options.text : "Woah, hold on there, sparky.";
                    messageIcon = options.icon !== undefined ? options.icon : "glyphicons exclamation";
                    messageAnimation = options.animation !== undefined ? options.animation : "fadeIn";
                } else {
                    messageText = options.text !== undefined ? options.text : "This is a message";
                    messageIcon = options.icon !== undefined ? options.icon : "glyphicons remove";
                    messageAnimation = options.animation !== undefined ? options.animation : "fadeIn";
                }

                myTypeHTML = messageType;
                myIconHTML = '<span class="' + messageIcon + ' icon"></span>';
                myTextHTML = '<span class="banner-text">' + messageText + "</span>";
                myAnimationHTML = "animated " + messageAnimation;
                returnHTML += '<div class="banner ' + myTypeHTML + " " + myAnimationHTML + '">';
                returnHTML += myIconHTML;
                returnHTML += myTextHTML;
                returnHTML += "</div>";

                return returnHTML;
            }
        },
        
        loadingOverlay: {
            add: function(options) {
                if ($(".loading-overlay").length <= 0) {
                    $("body").prepend(Framework.UI.loadingOverlay.print(options));
                    Framework.UI.loadingOverlay.show();
                } else {
                    if (options !== undefined && options.text !== undefined && typeof options.text === "string") {
                        Framework.UI.loadingOverlay.text(options.text);
                    }
                }
            },
            show: function() {
                $("body > .loading-overlay").fadeIn(500);
            },
            hide: function() {
                $("body > .loading-overlay").fadeOut(500, Framework.UI.loadingOverlay.remove);
            },
            remove: function() {
                $("body > .loading-overlay").remove();
            },
            text: function(string) {
                $(".loader-text").text(string);
            },
            print: function(options) {
                var myLoaderText;
                var myLoaderNumber;
                if (options !== undefined) {
                    if (options.text !== undefined && typeof options.text === "string") {
                        myLoaderText = options.text;
                    } else {
                        myLoaderText = "";
                    }
                } else {
                    myLoaderText = "";
                }
                myLoaderNumber = $(".loading-overlay").length + 1;
                returnHTML = "";
                returnHTML += '<div id="loading-overlay-' + myLoaderNumber + '" class="loading-overlay" style="display:none;">';
                returnHTML += '<div class="loader">Loading...</div>';
                returnHTML += '<div class="loader-text">' + myLoaderText + "</div>";
                returnHTML += "</div>";
                return returnHTML;
            }
        },

        tooltips: {

            add: function() {

                $(".holygrail-container > .content .tooltip").tooltipster({
                    position: "bottom",
                    theme: "tooltipster-omarket",
                    delay: 0,
                    offsetY: 10
                });

                $(".sidebar-menu .tooltip").tooltipster({
                    position: "right",
                    theme: "tooltipster-omarket",
                    delay: 0
                });

            },

            UploadProgress: {

                print: function() {

                    var myUploadUINumber = $(".upload-progress").length + 1;
                    var returnHTML = "";

                    returnHTML +=   '<div id="upload-progress-' + myUploadUINumber + '" class="upload-progress">';
                    returnHTML +=     '<span class="upload-progress-message">';
                    returnHTML +=         'Upload Progress: <span class="bold" data-content="Progress">0</span>% Complete';
                    returnHTML +=     "</span>";
                    returnHTML +=     '<span class="upload-progress-meter" style="width:0%"></span>';
                    returnHTML +=   "</div>";

                    return returnHTML;
                }
            }
        },

        NotificationBanner: {

            fire: function(options) {

                if (typeof options === "undefined" || typeof options !== "object") {
                    throw "ArgumentError: argument 'options' must be passed as 'object'.";
                }

                if (typeof options.type === "undefined" || typeof options.type !== "string") {
                    throw "ArgumentError: argument 'options.type' must be passed as 'string'.";
                }

                var myAnimations = {};
                var myType = options.type;
                var myText = "";

                if (typeof options.animation === "undefined") {
                    myAnimations = {
                        open: "animated fadeInDown",
                        close: "animated fadeOut"
                    };
                }
                else
                {
                    myAnimations = {
                        open: options.animation.open || "animated fadeInDown",
                        close: options.animation.close || "animated fadeOut"
                    };
                }

                if (typeof options.text === "undefined") {
                    switch (myType) {
                        case "success":
                            myText = "Success!";
                            break;
                        case "warning":
                            myText = "Better check yourself... you're not looking too good.";
                            break;
                        case "error":
                            myText = "Oops! Sorry, something went wrong. Probably nothing you did, though. Please check back later - we're working on it!";
                            break;
                        default:
                            throw "ArgumentError: Argument 'option.text' must be passed as string, or options.type must be passed as 'success', 'warning' or 'error'.";
                    }
                }
                else
                {
                    myText = options.text;
                }

                var n = noty({
                    theme: options.theme || "relax",
                    layout: options.layout || "bottomCenter",
                    text: myText,
                    type: options.type || "default",
                    animation: myAnimations,
                    timeout: options.timeout || 5000
                });

            }

        },

    },

    Utilities: {

        getSize: function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        },
        
        getWordCount: function(wordString) {
          var words = wordString.split(" ");
          words = words.filter(function(words) { 
            return words.length > 0;
          }).length;
          return words;
        },

        // Takes an object and converts it into an encoded query string.

        querify: function(obj){
            
            var myArray = [];
            var myString;

            for(var p in obj) {

                if (obj.hasOwnProperty(p)) {
                    myArray.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }

            }

            myString = myArray.join("&");
            myString = myString.replace(/\s+/g, '');
            myString = myString.replace(/^"(.+(?="$))"$/, '$1');

            return myString;
        },

        getQueryStringVars : function () {
            a = window.location.search.substr(1).split('&');
            if (a === "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        },

    },

};

Framework.UI.PageLoadNotifications.get();

$(document).ready(function(){

});

$(window).load(function(){

});