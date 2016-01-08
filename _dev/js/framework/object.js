Framework = {

    UI: {

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
                    returnHTML += '<div id="upload-progress-' + myUploadUINumber + '" class="upload-progress">';
                    returnHTML += '<span class="upload-progress-message">';
                    returnHTML += 'Upload Progress: <span class="bold" data-content="Progress">0</span>% Complete';
                    returnHTML += "</span>";
                    returnHTML += '<span class="upload-progress-meter" style="width:0%"></span>';
                    returnHTML += "</div>";
                    return returnHTML;
                }
            }
        }
    }
};