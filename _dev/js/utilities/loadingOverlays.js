PageLoadingOverlay = {
	
	add : function() {
        if ( $(".loading-overlay").length <= 0 ) {
            $("body").prepend(PageLoadingOverlay.print());
            PageLoadingOverlay.show();
        }
    },

    show : function() {
        $("body > .loading-overlay").fadeIn(500);
    },

    hide : function() {
        $("body > .loading-overlay").fadeOut(500, PageLoadingOverlay.remove);
    },

    remove : function() {
        $("body > .loading-overlay").remove();
    },

    print : function() {
        returnHTML = '';
        returnHTML +=   '<div class="loading-overlay" style="display:none;">';
        returnHTML +=       '<div class="loader">Loading...</div>';
        returnHTML +=   '</div>';
        return returnHTML;
    }


};