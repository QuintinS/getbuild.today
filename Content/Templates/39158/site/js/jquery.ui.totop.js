﻿(function(n){n.fn.UItoTop=function(t){function s(){n(window).width()<=h&&n(window).width()>=u.min_width?n(r).stop().animate({marginRight:l,right:"50%"}):n(window).width()<=u.min_width?n(r).stop().css({marginRight:0,right:10}):n(r).stop().animate({marginRight:c,right:"50%"})}var u={text:"",min:200,scrollSpeed:800,containerID:"toTop",containerHoverID:"toTopHover",easingType:"linear",min_width:parseInt(n("body").css("min-width"),10),main_width:parseInt(n("body").css("min-width"),10)/2},i=n.extend(u,t),r="#"+i.containerID,f="#"+i.containerHoverID,e,o;n("body").append('<a href="#" id="'+i.containerID+'">'+i.text+"<\/a>");e=parseInt(n(r).css("width"))+90;o=n.browser.msie&&n.browser.version<"9.0"?parseInt(n(r).css("width"))+20:parseInt(n(r).css("width"))+320;var h=u.min_width+e,c=-(u.main_width+o),l=-(u.main_width-20);s();n(r).hide().click(function(){return n("html, body").stop().animate({scrollTop:0},i.scrollSpeed,i.easingType),n("#"+i.containerHoverID,this).stop().animate({opacity:0},i.inDelay,i.easingType),!1}).prepend('<span id="'+i.containerHoverID+'"><\/span>').hover(function(){n(f,this).stop().animate({opacity:1},600,"linear")},function(){n(f,this).stop().animate({opacity:0},700,"linear")});n(window).scroll(function(){var t=n(window).scrollTop();typeof document.body.style.maxHeight=="undefined"&&n(r).css({position:"absolute",top:n(window).scrollTop()+n(window).height()-50});t>i.min?n(r).stop(!0,!0).fadeIn(400):n(r).fadeOut(600)});n(window).resize(function(){s()})}})(jQuery);