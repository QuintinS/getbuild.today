﻿(function(n){function i(){return url=location.href,hashtag=url.indexOf("#!")!=-1?decodeURI(url.substring(url.indexOf("#!")+2,url.length)):!1}function r(){typeof theRel!="undefined"&&(location.hash="!"+theRel+"/"+rel_index+"/")}function t(n,t){n=n.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r="[\\?&]"+n+"=([^&#]*)",u=new RegExp(r),i=u.exec(t);return i==null?"":i[1]}n.prettyPhoto={version:"3.1.2"};n.fn.prettyPhoto=function(u){function w(){n(".pp_loaderIcon").hide();projectedTop=scroll_pos.scrollTop+(o/2-f.containerHeight/2);projectedTop<0&&(projectedTop=0);$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:f.contentHeight,width:f.contentWidth},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:s/2-f.containerWidth/2,width:f.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);isSet&&b(pp_images[set_position])=="image"?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide();f.resized?n("a.pp_expand,a.pp_contract").show():n("a.pp_expand").hide();!settings.autoplay_slideshow||l||y||n.prettyPhoto.startSlideshow();settings.deeplinking&&r();settings.changepicturecallback();y=!0});ft()}function g(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){n(".pp_loaderIcon").show();t()})}function rt(t){t>1?n(".pp_nav").show():n(".pp_nav").hide()}function e(n,t){if(resized=!1,nt(n,t),imageWidth=n,imageHeight=t,(c>s||h>o)&&doresize&&settings.allow_resize&&!a){for(resized=!0,fitting=!1;!fitting;)c>s?(imageWidth=s-200,imageHeight=t/n*imageWidth):h>o?(imageHeight=o-200,imageWidth=n/t*imageHeight):fitting=!0,h=imageHeight,c=imageWidth;nt(imageWidth,imageHeight);(c>s||h>o)&&e(c,h)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(c)+settings.horizontal_padding*2,contentHeight:Math.floor(p),contentWidth:Math.floor(d),resized:resized}}function nt(t,i){t=parseFloat(t);i=parseFloat(i);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(n("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;n.browser.msie&&n.browser.version==7&&(detailsHeight+=8);$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(n("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();p=i+detailsHeight;d=t;h=p+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();c=t}function b(n){return n.match(/youtube\.com\/watch/i)?"youtube":n.match(/vimeo\.com/i)?"vimeo":n.match(/\b.mov\b/i)?"quicktime":n.match(/\b.swf\b/i)?"flash":n.match(/\biframe=true\b/i)?"iframe":n.match(/\bajax=true\b/i)?"ajax":n.match(/\bcustom=true\b/i)?"custom":n.substr(0,1)=="#"?"inline":"image"}function k(){if(doresize&&typeof $pp_pic_holder!="undefined"){if(scroll_pos=tt(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=o/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>o)return;$pp_pic_holder.css({top:projectedTop,left:s/2+scroll_pos.scrollLeft-contentwidth/2})}}function tt(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function ut(){o=n(window).height();s=n(window).width();typeof $pp_overlay!="undefined"&&$pp_overlay.height(n(document).height()).width(s)}function ft(){isSet&&settings.overlay_gallery&&b(pp_images[set_position])=="image"&&settings.ie6_fallback&&!(n.browser.msie&&parseInt(n.browser.version)==6)?(itemWidth=57,navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30,itemsPerPage=Math.floor((f.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,totalPage==0?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,n.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function it(){if(settings.markup=settings.markup.replace("{pp_social}",settings.social_tools?settings.social_tools:""),n("body").append(settings.markup),$pp_pic_holder=n(".pp_pic_holder"),$ppt=n(".ppt"),$pp_overlay=n("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var t=0;t<pp_images.length;t++)pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[t]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /><\/a><\/li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=n(".pp_pic_holder .pp_gallery");$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){return n.prettyPhoto.changeGalleryPage("next"),n.prettyPhoto.stopSlideshow(),!1});$pp_gallery.find(".pp_arrow_previous").click(function(){return n.prettyPhoto.changeGalleryPage("previous"),n.prettyPhoto.stopSlideshow(),!1});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=57;$pp_gallery_li.each(function(t){n(this).find("a").click(function(){return n.prettyPhoto.changePage(t),n.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play<\/a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return n.prettyPhoto.startSlideshow(),!1}));$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:n(document).height(),width:n(window).width()}).bind("click",function(){settings.modal||n.prettyPhoto.close()});n("a.pp_close").bind("click",function(){return n.prettyPhoto.close(),!1});n("a.pp_expand").bind("click",function(){return n(this).hasClass("pp_expand")?(n(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(n(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),g(function(){n.prettyPhoto.open()}),!1});$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return n.prettyPhoto.changePage("previous"),n.prettyPhoto.stopSlideshow(),!1});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return n.prettyPhoto.changePage("next"),n.prettyPhoto.stopSlideshow(),!1});k()}u=jQuery.extend({animation_speed:"fast",slideshow:0,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!1,modal:!1,deeplinking:!1,overlay_gallery:!1,keyboard_shortcuts:!1,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;<\/div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"><\/div> \t\t\t\t\t\t\t<div class="pp_middle"><\/div> \t\t\t\t\t\t\t<div class="pp_right"><\/div> \t\t\t\t\t\t<\/div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"><\/div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand<\/a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next<\/a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous<\/a> \t\t\t\t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"><\/div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous<\/a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0<\/p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next<\/a> \t\t\t\t\t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"><\/p> \t\t\t\t\t\t\t\t\t\t\t {pp_social}\t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close<\/a> \t\t\t\t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t<\/div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"><\/div> \t\t\t\t\t\t\t<div class="pp_middle"><\/div> \t\t\t\t\t\t\t<div class="pp_right"><\/div> \t\t\t\t\t\t<\/div> \t\t\t\t\t<\/div> \t\t\t\t\t<div class="pp_overlay"><\/div>',gallery_markup:'<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous<\/a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t<\/ul> \t\t\t\t\t\t\t\t<\/div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next<\/a> \t\t\t\t\t\t\t<\/div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"><\/embed><\/object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"><\/embed><\/object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"><\/iframe>',inline_markup:'<div class="pp_inline">{content}<\/div>',custom_markup:"",social_tools:""},u);var v=this,a=!1,f,y,p,d,h,c,o=n(window).height(),s=n(window).width(),l;return doresize=!0,scroll_pos=tt(),n(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){k();ut()}),u.keyboard_shortcuts&&n(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:n.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:n.prettyPhoto.changePage("next");t.preventDefault();break;case 27:settings.modal||n.prettyPhoto.close();t.preventDefault()}}),n.prettyPhoto.initialize=function(){return settings=u,settings.theme=="pp_default"&&(settings.horizontal_padding=16),settings.ie6_fallback&&n.browser.msie&&parseInt(n.browser.version)==6&&(settings.theme="light_square"),theRel=n(this).attr("data-gal"),galleryRegExp=/\[(?:.*)\]/,isSet=galleryRegExp.exec(theRel)?!0:!1,pp_images=isSet?jQuery.map(v,function(t){if(n(t).attr("data-gal").indexOf(theRel)!=-1)return n(t).attr("href")}):n.makeArray(n(this).attr("href")),pp_titles=isSet?jQuery.map(v,function(t){if(n(t).attr("data-gal").indexOf(theRel)!=-1)return n(t).find("img").attr("alt")?n(t).find("img").attr("alt"):""}):n.makeArray(n(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(v,function(t){if(n(t).attr("data-gal").indexOf(theRel)!=-1)return n(t).attr("title")?n(t).attr("title"):""}):n.makeArray(n(this).attr("title")),set_position=jQuery.inArray(n(this).attr("href"),pp_images),rel_index=isSet?set_position:n("a[data-gal^='"+theRel+"']").index(n(this)),it(this),settings.allow_resize&&n(window).bind("scroll.prettyphoto",function(){k()}),n.prettyPhoto.open(),!1},n.prettyPhoto.open=function(i){return typeof settings=="undefined"&&(settings=u,n.browser.msie&&n.browser.version==6&&(settings.theme="light_square"),pp_images=n.makeArray(arguments[0]),pp_titles=arguments[1]?n.makeArray(arguments[1]):n.makeArray(""),pp_descriptions=arguments[2]?n.makeArray(arguments[2]):n.makeArray(""),isSet=pp_images.length>1?!0:!1,set_position=0,it(i.target)),n.browser.msie&&n.browser.version==6&&n("select").css("visibility","hidden"),settings.hideflash&&n("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),rt(n(pp_images).size()),n(".pp_loaderIcon").show(),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+n(pp_images).size()),pp_descriptions[set_position]!=""?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(t("width",pp_images[set_position]))?t("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(t("height",pp_images[set_position]))?t("height",pp_images[set_position]):settings.default_height.toString(),a=!1,movie_height.indexOf("%")!=-1&&(movie_height=parseFloat(n(window).height()*parseFloat(movie_height)/100-150),a=!0),movie_width.indexOf("%")!=-1&&(movie_width=parseFloat(n(window).width()*parseFloat(movie_width)/100-150),a=!0),$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;");imgPreloader="";skipInjection=!1;switch(b(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;isSet&&set_position<n(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]);prevImage=new Image;isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){f=e(imgPreloader.width,imgPreloader.height);w()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");n.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":f=e(movie_width,movie_height);movie="http://www.youtube.com/embed/"+t("v",pp_images[set_position]);movie+=t("data-gal",pp_images[set_position])?"?data-gal="+t("data-gal",pp_images[set_position]):"?data-gal=1";settings.autoplay&&(movie+="&autoplay=1");toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":f=e(movie_width,movie_height);movie_id=pp_images[set_position];var i=movie_id.match(/http:\/\/(www\.)?vimeo.com\/(\d+)/);movie="http://player.vimeo.com/video/"+i[2]+"?title=0&amp;byline=0&amp;portrait=0";settings.autoplay&&(movie+="&autoplay=1;");vimeo_width=f.width+"/embed/?moog_width="+f.width;toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,f.height).replace(/{path}/g,movie);break;case"quicktime":f=e(movie_width,movie_height);f.height+=15;f.contentHeight+=15;f.containerHeight+=15;toInject=settings.quicktime_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":f=e(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":f=e(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1;f=e(movie_width,movie_height);doresize=!0;skipInjection=!0;n.get(pp_images[set_position],function(n){toInject=settings.inline_markup.replace(/{content}/g,n);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;w()});break;case"custom":f=e(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=n(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"><\/div><\/div>').appendTo(n("body")).show();doresize=!1;f=e(n(myClone).width(),n(myClone).height());doresize=!0;n(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,n(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,w())}),!1},n.prettyPhoto.changePage=function(t){currentGalleryPage=0;t=="previous"?(set_position--,set_position<0&&(set_position=n(pp_images).size()-1)):t=="next"?(set_position++,set_position>n(pp_images).size()-1&&(set_position=0)):set_position=t;rel_index=set_position;doresize||(doresize=!0);n(".pp_contract").removeClass("pp_contract").addClass("pp_expand");g(function(){n.prettyPhoto.open()})},n.prettyPhoto.changeGalleryPage=function(n){n=="next"?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):n=="previous"?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=n;slide_speed=n=="next"||n=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},n.prettyPhoto.startSlideshow=function(){typeof l=="undefined"?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return n.prettyPhoto.stopSlideshow(),!1}),l=setInterval(n.prettyPhoto.startSlideshow,settings.slideshow)):n.prettyPhoto.changePage("next")},n.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return n.prettyPhoto.startSlideshow(),!1});clearInterval(l);l=undefined},n.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(n.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),n("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){n(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){n.browser.msie&&n.browser.version==6&&n("select").css("visibility","visible");settings.hideflash&&n("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");n(this).remove();n(window).unbind("scroll.prettyphoto");settings.callback();doresize=!0;y=!1;delete settings}))},!pp_alreadyInitialized&&i()&&(pp_alreadyInitialized=!0,hashIndex=i(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){n("a[data-gal^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",n.prettyPhoto.initialize)}})(jQuery);var pp_alreadyInitialized=!1;