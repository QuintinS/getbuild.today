﻿$(document).ready(function(){$("ul.menu").superfish({delay:600,animation:{opacity:"show",height:"show"},speed:"normal",autoArrows:!1,dropShadows:!1});$("a[data-gal^='prettyPhoto']").prettyPhoto({theme:"facebook"});$(".lightbox-image").prepend('<img class="magnify" src="images/magnify.png" alt="">');$(".lightbox-image").live("mouseenter",function(){$(this).find("img.magnify").stop().animate({width:45,height:60,marginLeft:-23,marginTop:-30},200)}).live("mouseleave",function(){$(this).find("img.magnify").stop().animate({width:0,height:0,marginLeft:0,marginTop:0},200)})});$(function(){$("#accordion dt").click(function(){return $(this).next("#accordion dd").slideToggle("slow").siblings("#accordion dd:visible").slideUp("slow"),$(this).toggleClass("active"),$(this).siblings("#accordion dt").removeClass("active"),!1})});$(document).ready(function(){$("#accordion dd").hide();$("#accordion dt").eq(1).addClass("active");$("#accordion dd").eq(1).show();$("#accordion dt").click(function(){return!1})});$(function(){var n=document.querySelector&&document.querySelector('meta[name="viewport"]'),t=navigator.userAgent,u=function(){n.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},f=function(){n&&/iPhone|iPad/.test(t)&&!/Opera Mini/.test(t)&&(n.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",document.addEventListener("gesturestart",u,!1))},i,r;f();i=navigator.userAgent.toLowerCase();r=i.indexOf("android")>-1;r&&$(".menu").responsiveMenu({autoArrows:!0});$("#slides").slides({effect:"fade",fadeSpeed:700,preload:!0,play:4e3,pause:4e3,generateNextPrev:!1,generatePagination:!0,crossfade:!0,hoverPause:!0,animationStart:function(n){$(".caption").animate({opacity:0});window.console&&console.log&&console.log("animationStart on slide: ",n)},animationComplete:function(n){$(".caption").animate({opacity:1});window.console&&console.log&&console.log("animationComplete on slide: ",n)},slidesLoaded:function(){$(".caption").animate({opacity:1})}})});