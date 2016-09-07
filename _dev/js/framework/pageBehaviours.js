var PageBehaviours = {

	distanceFromTop : 0,

	onScroll : function() {

		// $('main img.load-fadein').load(function(){
		// 	$(this).removeClass("load-fadein");
		// 	$(this).addClass("animated fadeInDown");
		// });

		if (PageBehaviours.distanceFromTop > 100) {
			$(".BuildHeader").addClass("scrolled");
		}
		else
		{
			$(".BuildHeader").removeClass("scrolled");
		}
	}

};

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 65
        }, 1000);
        return false;
      }
    }
  });
});

$('main img.load-fadein').load(function(){
	// $(this).removeClass("load-fadein").addClass("animated fadeInDown")
});

$(document).ready(function() {
	
	// Animations
	// JQuery Plugin Initialisation.
	// $('.fancybox').fancybox();
	
	$('.fancybox[data-action="TriggerVideoModal"]').fancybox({
		openEffect : "elastic",
		closeEffect : "elastic",
		helpers : {
			overlay : {
				css : {
					"background" : 'rgba(0,0,0,0.75)'
				}
			}
		}
	});

	$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
	$("[data-toggle='tooltip']").tooltip();

	$("body").on("click", "[data-action='BuildAWebsite']", function(){} );

}); 

$(document).on("scroll", function(){
	
	PageBehaviours.distanceFromTop = parseInt($(window).scrollTop());
	// PageBehaviours.distanceFromBottom = parseInt($(window).scrollBottom());
	PageBehaviours.onScroll();

});