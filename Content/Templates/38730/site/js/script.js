﻿$(function(){var n=document.querySelector&&document.querySelector('meta[name="viewport"]'),t=navigator.userAgent,u=function(){n.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},f=function(){n&&/iPhone|iPad/.test(t)&&!/Opera Mini/.test(t)&&(n.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",document.addEventListener("gesturestart",u,!1))},i,r;f();i=navigator.userAgent.toLowerCase();r=i.indexOf("android")>-1;r&&$(".sf-menu").responsiveMenu({autoArrows:!0})});$(window).load(function(){$().UItoTop({min:300,easingType:"easeOutQuart"})});