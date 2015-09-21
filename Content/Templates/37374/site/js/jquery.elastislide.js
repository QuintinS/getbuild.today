﻿(function(n,t,i){t.fn.touchwipe=function(n){var i={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!0};return n&&t.extend(i,n),this.each(function(){function u(){this.removeEventListener("touchmove",f);n=null;t=!1}function f(f){if(i.preventDefaultEvents&&f.preventDefault(),t){var s=f.touches[0].pageX,h=f.touches[0].pageY,e=n-s,o=r-h;Math.abs(e)>=i.min_move_x?(u(),e>0?i.wipeLeft():i.wipeRight()):Math.abs(o)>=i.min_move_y&&(u(),o>0?i.wipeDown():i.wipeUp())}}function e(i){i.touches.length==1&&(n=i.touches[0].pageX,r=i.touches[0].pageY,t=!0,this.addEventListener("touchmove",f,!1))}var n,r,t=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this};t.elastislide=function(n,i){this.$el=t(i);this._init(n)};t.elastislide.defaults={speed:450,easing:"",imageW:190,margin:3,border:2,minItems:1,current:0,onClick:function(){return!1}};t.elastislide.prototype={_init:function(n){this.options=t.extend(!0,{},t.elastislide.defaults,n);this.$slider=this.$el.find("ul");this.$items=this.$slider.children("li");this.itemsCount=this.$items.length;this.$esCarousel=this.$slider.parent();this._validateOptions();this._configure();this._addControls();this._initEvents();this.$slider.show();this._slideToCurrent(!1)},_validateOptions:function(){this.options.speed<0&&(this.options.speed=450);this.options.margin<0&&(this.options.margin=4);this.options.border<0&&(this.options.border=1);(this.options.minItems<1||this.options.minItems>this.itemsCount)&&(this.options.minItems=1);this.options.current>this.itemsCount-1&&(this.options.current=0)},_configure:function(){this.current=this.options.current;this.visibleWidth=this.$esCarousel.width();this.visibleWidth<this.options.minItems*(this.options.imageW+2*this.options.border)+(this.options.minItems-1)*this.options.margin?(this._setDim((this.visibleWidth-(this.options.minItems-1)*this.options.margin)/this.options.minItems),this._setCurrentValues(),this.fitCount=this.options.minItems):(this._setDim(),this._setCurrentValues());this.$slider.css({width:this.sliderW})},_setDim:function(n){this.$items.css({marginRight:this.options.margin,width:n?n:this.options.imageW+2*this.options.border}).children("a").css({borderWidth:this.options.border})},_setCurrentValues:function(){this.itemW=this.$items.outerWidth(!0);this.sliderW=this.itemW*this.itemsCount;this.visibleWidth=this.$esCarousel.width();this.fitCount=Math.floor(this.visibleWidth/this.itemW)},_addControls:function(){this.$navNext=t('<span class="es-nav-next">Next<\/span>');this.$navPrev=t('<span class="es-nav-prev">Previous<\/span>');t('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)},_toggleControls:function(n,t){n&&t?t===1?n==="right"?this.$navNext.show():this.$navPrev.show():n==="right"?this.$navNext.hide():this.$navPrev.hide():(this.current===this.itemsCount-1||this.fitCount>=this.itemsCount)&&this.$navNext.hide()},_initEvents:function(){var i=this;t(n).bind("resize.elastislide",function(){i._setCurrentValues();i.visibleWidth<i.options.minItems*(i.options.imageW+2*i.options.border)+(i.options.minItems-1)*i.options.margin?(i._setDim((i.visibleWidth-(i.options.minItems-1)*i.options.margin)/i.options.minItems),i._setCurrentValues(),i.fitCount=i.options.minItems):(i._setDim(),i._setCurrentValues());i.$slider.css({width:i.sliderW+10});clearTimeout(i.resetTimeout);i.resetTimeout=setTimeout(function(){i._slideToCurrent()},200)});this.$navNext.bind("click.elastislide",function(){i._slide("right")});this.$navPrev.bind("click.elastislide",function(){i._slide("left")});this.$items.bind("click.elastislide",function(){i.options.onClick(t(this));return!1});i.$slider.touchwipe({wipeLeft:function(){i._slide("right")},wipeRight:function(){i._slide("left")}})},_slide:function(n,r,u,f){var s,e,r,o,h,c;if(this.$slider.is(":animated"))return!1;if(s=parseFloat(this.$slider.css("margin-left")),r===i){if(e=this.fitCount*this.itemW,e<0)return!1;n==="right"&&this.sliderW-(Math.abs(s)+e)<this.visibleWidth?(e=this.sliderW-(Math.abs(s)+this.visibleWidth)-this.options.margin,this._toggleControls("right",-1),this._toggleControls("left",1)):n==="left"&&Math.abs(s)-e<0?(e=Math.abs(s),this._toggleControls("left",-1),this._toggleControls("right",1)):(o=n==="right"?Math.abs(s)+this.options.margin+Math.abs(e):Math.abs(s)-this.options.margin-Math.abs(e),o>0?this._toggleControls("left",1):this._toggleControls("left",-1),o<this.sliderW-this.visibleWidth?this._toggleControls("right",1):this._toggleControls("right",-1));r=n==="right"?"-="+e:"+="+e}else o=Math.abs(r),Math.max(this.sliderW,this.visibleWidth)-o<this.visibleWidth&&(r=-(Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth),r!==0&&(r+=this.options.margin),this._toggleControls("right",-1),o=Math.abs(r)),o>0?this._toggleControls("left",1):this._toggleControls("left",-1),Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth>o+this.options.margin?this._toggleControls("right",1):this._toggleControls("right",-1);t.fn.applyStyle=u===i?t.fn.animate:t.fn.css;h={marginLeft:r};c=this;this.$slider.applyStyle(h,t.extend(!0,[],{duration:this.options.speed,easing:this.options.easing,complete:function(){f&&f.call()}}))},_slideToCurrent:function(n){var t=this.current*this.itemW;this._slide("",-t,n)},add:function(n,t){this.$items=this.$items.add(n);this.itemsCount=this.$items.length;this._setDim();this._setCurrentValues();this.$slider.css({width:this.sliderW});this._slideToCurrent();t&&t.call(n)},destroy:function(n){this._destroy(n)},_destroy:function(i){this.$el.unbind(".elastislide").removeData("elastislide");t(n).unbind(".elastislide");i&&i.call()}};var r=function(n){this.console&&console.error(n)};t.fn.elastislide=function(n){if(typeof n=="string"){var i=Array.prototype.slice.call(arguments,1);this.each(function(){var u=t.data(this,"elastislide");if(!u){r("cannot call methods on elastislide prior to initialization; attempted to call method '"+n+"'");return}if(!t.isFunction(u[n])||n.charAt(0)==="_"){r("no such method '"+n+"' for elastislide instance");return}u[n].apply(u,i)})}else this.each(function(){var i=t.data(this,"elastislide");i||t.data(this,"elastislide",new t.elastislide(n,this))});return this}})(window,jQuery);$(function(){$("#carousel").elastislide({imageW:140,minItems:3,easing:"",margin:20,border:0})});