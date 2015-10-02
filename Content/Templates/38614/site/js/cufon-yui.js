﻿var Cufon=function(){function p(n){var t=this.face=n.face,i={" ":1," ":1,"　":1};this.glyphs=n.glyphs;this.w=n.w;this.baseSize=parseInt(t["units-per-em"],10);this.family=t["font-family"].toLowerCase();this.weight=t["font-weight"];this.style=t["font-style"]||"normal";this.viewBox=function(){var i=t.bbox.split(/\s+/),n={minX:parseInt(i[0],10),minY:parseInt(i[1],10),maxX:parseInt(i[2],10),maxY:parseInt(i[3],10)};return n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")},n}();this.ascent=-parseInt(t.ascent,10);this.descent=-parseInt(t.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(n,t,r){for(var l=this.glyphs,u,o,h,f=[],s=0,a=-1,c=-1,e;e=n[++a];)(u=l[e]||this.missingGlyph,u)&&(o&&(s-=h=o[e]||0,f[c]-=h),s+=f[++c]=~~(u.w||this.w)+t+(i[e]?r:0),o=u.k);return f.total=s,f}}function w(){var n={},t={oblique:"italic",italic:"oblique"};this.add=function(t){(n[t.style]||(n[t.style]={}))[t.weight]=t};this.get=function(i,r){var f=n[i]||n[t[i]]||n.normal||n.italic||n.oblique,h,c,e,s,u;if(!f)return null;if(r={normal:400,bold:700}[r]||parseInt(r,10),f[r])return f[r];h={1:1,99:0}[r%100];c=[];h===undefined&&(h=r>400);r==500&&(r=400);for(u in f)o(f,u)&&(u=parseInt(u,10),(!e||u<e)&&(e=u),(!s||u>s)&&(s=u),c.push(u));return r<e&&(r=e),r>s&&(r=s),c.sort(function(n,t){return(h?n>=r&&t>=r?n<t:n>t:n<=r&&t<=r?n>t:n<t)?-1:1}),f[c[0]]}}function b(){function f(n,t){return n.contains?n.contains(t):n.compareDocumentPosition(t)&16}function t(n){var t=n.relatedTarget;t&&!f(this,t)&&u(this,n.type=="mouseover")}function i(n){u(this,n.type=="mouseenter")}function u(t,i){setTimeout(function(){var r=a.get(t).options;n.replace(t,i?l(r,r.hover):r,!0)},10)}this.attach=function(n){n.onmouseenter===undefined?(r(n,"mouseover",t),r(n,"mouseout",t)):(r(n,"mouseenter",i),r(n,"mouseleave",i))}}function k(){function r(n){for(var u=[],f,r=0;f=n[r];++r)u[r]=t[i[f]];return u}var t=[],i={};this.add=function(n,r){i[n]=t.push(r)-1};this.repeat=function(){for(var u=arguments.length?r(arguments):t,i,f=0;i=u[f++];)n.replace(i[0],i[1],!0)}}function d(){function i(n){return n.cufid||(n.cufid=++t)}var n={},t=0;this.get=function(t){var r=i(t);return n[r]||(n[r]={})}}function s(n){var i={},r={};this.extend=function(n){for(var t in n)o(n,t)&&(i[t]=n[t]);return this};this.get=function(t){return i[t]!=undefined?i[t]:n[t]};this.getSize=function(n,i){return r[n]||(r[n]=new t.Size(this.get(n),i))};this.isUsable=function(){return!!n}}function r(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent&&n.attachEvent("on"+t,function(){return i.call(n,window.event)})}function g(n,t){var i=a.get(n);return i.options?n:(t.hover&&t.hoverables[n.nodeName.toLowerCase()]&&ut.attach(n),i.options=t,n)}function i(n){var t={};return function(i){return o(t,i)||(t[i]=n.apply(null,arguments)),t[i]}}function nt(n,i){for(var e=t.quotedList(i.get("fontFamily").toLowerCase()),r,f=0;r=e[f];++f)if(u[r])return u[r].get(i.get("fontStyle"),i.get("fontWeight"));return null}function e(n){return document.getElementsByTagName(n)}function o(n,t){return n.hasOwnProperty(t)}function l(){for(var r={},n,t,i=0,u=arguments.length;n=arguments[i],i<u;++i)for(t in n)o(n,t)&&(r[t]=n[t]);return r}function tt(n,i,r,u,f,e){var l=document.createDocumentFragment(),a,o,h;if(i==="")return l;var v=u.separate,s=i.split(ft[v]),y=v=="words";for(y&&rt&&(/^\s/.test(i)&&s.unshift(""),/\s$/.test(i)&&s.push("")),o=0,h=s.length;o<h;++o)a=c[u.engine](n,y?t.textAlign(s[o],r,o,h):s[o],r,u,f,e,o<h-1),a&&l.appendChild(a);return l}function it(n,i){var h=n.nodeName.toLowerCase();if(!i.ignore[h]){var a=!i.textless[h],f=t.getStyle(g(n,i)).extend(i),e=nt(n,f),r,o,s,u,l;if(e)for(r=n.firstChild;r;r=s)(o=r.nodeType,s=r.nextSibling,a&&o==3&&(u?(u.appendData(r.data),n.removeChild(r)):u=r,s))||(u&&(n.replaceChild(tt(e,t.whiteSpace(u.data,f,u,l),f,i,r,n),u),u=null),o==1&&(r.firstChild&&(r.nodeName.toLowerCase()=="cufon"?c[i.engine](e,null,f,i,r,n):arguments.callee(r,i)),l=r))}}var n=function(){return n.replace.apply(null,arguments)},f=n.DOM={ready:function(){var t=!1,u={loaded:1,complete:1},i=[],n=function(){if(!t){t=!0;for(var n;n=i.shift();n());}};return document.addEventListener&&(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("pageshow",n,!1)),!window.opera&&document.readyState&&function(){u[document.readyState]?n():setTimeout(arguments.callee,10)}(),document.readyState&&document.createStyleSheet&&function(){try{document.body.doScroll("left");n()}catch(t){setTimeout(arguments.callee,1)}}(),r(window,"load",n),function(r){arguments.length?t?r():i.push(r):n()}}(),root:function(){return document.documentElement||document.body}},t=n.CSS={Size:function(n,t){this.value=parseFloat(n);this.unit=String(n).match(/[a-z%]*$/)[0]||"px";this.convert=function(n){return n/t*this.value};this.convertFrom=function(n){return n/this.value*t};this.toString=function(){return this.value+this.unit}},addClass:function(n,t){var i=n.className;return n.className=i+(i&&" ")+t,n},color:i(function(n){var t={};return t.color=n.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(n,i,r){return t.opacity=parseFloat(r),"rgb("+i+")"}),t}),fontStretch:i(function(n){return typeof n=="number"?n:/%$/.test(n)?parseFloat(n)/100:{"ultra-condensed":.5,"extra-condensed":.625,condensed:.75,"semi-condensed":.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[n]||1}),getStyle:function(n){var t=document.defaultView;return t&&t.getComputedStyle?new s(t.getComputedStyle(n,null)):n.currentStyle?new s(n.currentStyle):new s(n.style)},gradient:i(function(n){for(var r={id:n,type:n.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},u=n.substr(n.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig),t=0,f=u.length,i;t<f;++t)i=u[t].split("=",2).reverse(),r.stops.push([i[1]||t/(f-1),i[0]]);return r}),quotedList:i(function(n){for(var i=[],r=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,t;t=r.exec(n);)i.push(t[3]||t[1]);return i}),recognizesMedia:i(function(n){var t=document.createElement("style"),r,i,u;t.type="text/css";t.media=n;try{t.appendChild(document.createTextNode("/**/"))}catch(f){}return i=e("head")[0],i.insertBefore(t,i.firstChild),r=t.sheet||t.styleSheet,u=r&&!r.disabled,i.removeChild(t),u}),removeClass:function(n,t){var i=RegExp("(?:^|\\s+)"+t+"(?=\\s|$)","g");return n.className=n.className.replace(i,""),n},supports:function(n,t){var i=document.createElement("span").style;return i[n]===undefined?!1:(i[n]=t,i[n]===t)},textAlign:function(n,t,i,r){return t.get("textAlign")=="right"?i>0&&(n=" "+n):i<r-1&&(n+=" "),n},textShadow:i(function(n){if(n=="none")return null;for(var r=[],t={},i,u=0,f=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;i=f.exec(n);)i[0]==","?(r.push(t),t={},u=0):i[1]?t.color=i[1]:t[["offX","offY","blur"][u++]]=i[2];return r.push(t),r}),textTransform:function(){var n={uppercase:function(n){return n.toUpperCase()},lowercase:function(n){return n.toLowerCase()},capitalize:function(n){return n.replace(/\b./g,function(n){return n.toUpperCase()})}};return function(t,i){var r=n[i.get("textTransform")];return r?r(t):t}}(),whiteSpace:function(){var t={inline:1,"inline-block":1,"run-in":1},n=/^\s+/,i=/\s+$/;return function(r,u,f,e){return(e&&e.nodeName.toLowerCase()=="br"&&(r=r.replace(n,"")),t[u.get("display")])?r:(f.previousSibling||(r=r.replace(n,"")),f.nextSibling||(r=r.replace(i,"")),r)}}()};t.ready=function(){function u(n){return n.disabled||o(n.sheet,n.media||"screen")}function o(n,i){var r,u,f,e;if(!t.recognizesMedia(i||"all"))return!0;if(!n||n.disabled)return!1;try{if(r=n.cssRules,r)n:for(f=0,e=r.length;u=r[f],f<e;++f)switch(u.type){case 2:break;case 3:if(!o(u.styleSheet,u.media.mediaText))return!1;break;default:break n}}catch(s){}return!0}function l(){if(document.createStyleSheet)return!0;for(var t,n=0;t=h[n];++n)if(t.rel.toLowerCase()=="stylesheet"&&!u(t))return!1;for(n=0;t=c[n];++n)if(!u(t))return!1;return!0}var n=!t.recognizesMedia("all"),i=!1,r=[],s=function(){n=!0;for(var t;t=r.shift();t());},h=e("link"),c=e("style");return f.ready(function(){i||(i=t.getStyle(document.body).isUsable());n||i&&l()?s():setTimeout(arguments.callee,10)}),function(t){n?t():r.push(t)}}();var rt=" ".split(/\s+/).length==0,a=new d,ut=new b,h=new k,v=!1,c={},u={},y={autoDetect:!1,engine:null,forceHitArea:!1,hover:!1,hoverables:{a:!0},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:!0,selector:window.Sizzle||window.jQuery&&function(n){return jQuery(n)}||window.dojo&&dojo.query||window.Ext&&Ext.query||window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query||window.$$&&function(n){return $$(n)}||window.$&&function(n){return $(n)}||document.querySelectorAll&&function(n){return document.querySelectorAll(n)}||e,separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"},ft={words:/\s/.test(" ")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};return n.now=function(){return f.ready(),n},n.refresh=function(){return h.repeat.apply(h,arguments),n},n.registerEngine=function(t,i){return i?(c[t]=i,n.set("engine",t)):n},n.registerFont=function(t){if(!t)return n;var r=new p(t),i=r.family;return u[i]||(u[i]=new w),u[i].add(r),n.set("fontFamily",'"'+i+'"')},n.replace=function(i,r,u){return(r=l(y,r),!r.engine)?n:(v||(t.addClass(f.root(),"cufon-active cufon-loading"),t.ready(function(){t.addClass(t.removeClass(f.root(),"cufon-loading"),"cufon-ready")}),v=!0),r.hover&&(r.forceHitArea=!0),r.autoDetect&&delete r.fontFamily,typeof r.textShadow=="string"&&(r.textShadow=t.textShadow(r.textShadow)),typeof r.color=="string"&&/^-/.test(r.color)?r.textGradient=t.gradient(r.color):delete r.textGradient,u||h.add(i,arguments),(i.nodeType||typeof i=="string")&&(i=[i]),t.ready(function(){for(var u,t=0,f=i.length;t<f;++t)u=i[t],typeof u=="string"?n.replace(r.selector(u),r,!0):it(u,r)}),n)},n.set=function(t,i){return y[t]=i,n},n}();Cufon.registerEngine("vml",function(){function e(n,t){return u(n,/(?:em|ex|%)$|^[a-z-]+$/i.test(t)?"1em":t)}function u(n,t){var i,r,u;return t==="0"?0:/px$/i.test(t)?parseFloat(t):(i=n.style.left,r=n.runtimeStyle.left,n.runtimeStyle.left=n.currentStyle.left,n.style.left=t.replace("%","em"),u=n.style.pixelLeft,n.style.left=i,n.runtimeStyle.left=r,u)}function f(n,t,i,r){var e="computed"+r,f=t[e];return isNaN(f)&&(f=t.get(r),t[e]=f=f=="normal"?0:~~i.convertFrom(u(n,f))),f}function o(n){var f=n.id,u,e;if(!t[f]){var r=n.stops,i=document.createElement("cvml:fill"),o=[];for(i.type="gradient",i.angle=180,i.focus="0",i.method="sigma",i.color=r[0][1],u=1,e=r.length-1;u<e;++u)o.push(r[u][0]*100+"% "+r[u][1]);i.colors=o.join(",");i.color2=r[e][1];t[f]=i}return t[f]}var i=document.namespaces,n,r,t;if(i)return(i.add("cvml","urn:schemas-microsoft-com:vml"),i=null,n=document.createElement("cvml:shape"),n.style.behavior="url(#default#VML)",!n.coordsize)?void 0:(n=null,r=(document.documentMode||0)<8,document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(r?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}<\/style>").replace(/;/g,"!important;")),t={},function(n,t,i,s,h,c,l){var et=t===null,k,y,p,w,ot,rt,a,at,v,yt,pt,d,g;et&&(t=h.alt);k=n.viewBox;y=i.computedFontSize||(i.computedFontSize=new Cufon.CSS.Size(e(c,i.get("fontSize"))+"px",n.baseSize));et?(p=h,w=h.firstChild):(p=document.createElement("cufon"),p.className="cufon cufon-vml",p.alt=t,w=document.createElement("cufoncanvas"),p.appendChild(w),s.printable&&(ot=document.createElement("cufontext"),ot.appendChild(document.createTextNode(t)),p.appendChild(ot)),l||p.appendChild(document.createElement("cvml:shape")));var nt=p.style,st=w.style,wt=y.convert(k.height),it=Math.ceil(wt),si=it/wt,bt=si*Cufon.CSS.fontStretch(i.get("fontStretch")),ht=k.minX,kt=k.minY;st.height=it;st.top=Math.round(y.convert(kt-n.ascent));st.left=Math.round(y.convert(ht));nt.height=y.convert(n.height)+"px";var hi=i.get("color"),ct=Cufon.CSS.textTransform(t,i).split(""),tt=n.spacing(ct,f(c,i,y,"letterSpacing"),f(c,i,y,"wordSpacing"));if(!tt.length)return null;for(var dt=tt.total,gt=-ht+dt+(k.width-tt[tt.length-1]),ci=y.convert(gt*bt),ni=Math.round(ci),ti=gt+","+k.height,ii,li="r"+ti+"ns",ri=s.textGradient&&o(s.textGradient),ai=n.glyphs,ui=0,lt=s.textShadow,fi=-1,ei=0,vi;vi=ct[++fi];)if(rt=ai[ct[fi]]||n.missingGlyph,rt){if(et)for(a=w.childNodes[ei];a.firstChild;)a.removeChild(a.firstChild);else a=document.createElement("cvml:shape"),w.appendChild(a);if(a.stroked="f",a.coordsize=ti,a.coordorigin=ii=ht-ui+","+kt,a.path=(rt.d?"m"+rt.d+"xe":"")+"m"+ii+li,a.fillcolor=hi,ri&&a.appendChild(ri.cloneNode(!1)),at=a.style,at.width=ni,at.height=it,lt){var vt=lt[0],ut=lt[1],oi=Cufon.CSS.color(vt.color),ft,b=document.createElement("cvml:shadow");b.on="t";b.color=oi.color;b.offset=vt.offX+","+vt.offY;ut&&(ft=Cufon.CSS.color(ut.color),b.type="double",b.color2=ft.color,b.offset2=ut.offX+","+ut.offY);b.opacity=oi.opacity||ft&&ft.opacity||1;a.appendChild(b)}ui+=tt[ei++]}return v=a.nextSibling,s.forceHitArea?(v||(v=document.createElement("cvml:rect"),v.stroked="f",v.className="cufon-vml-cover",yt=document.createElement("cvml:fill"),yt.opacity=0,v.appendChild(yt),w.appendChild(v)),pt=v.style,pt.width=ni,pt.height=it):v&&w.removeChild(v),nt.width=Math.max(Math.ceil(y.convert(dt*bt)),0),r&&(d=i.computedYAdjust,d===undefined&&(g=i.get("lineHeight"),g=="normal"?g="1em":isNaN(g)||(g+="em"),i.computedYAdjust=d=.5*(u(c,g)-parseFloat(nt.height))),d&&(nt.marginTop=Math.ceil(d)+"px",nt.marginBottom=d+"px")),p})}());Cufon.registerEngine("canvas",function(){function u(n,t){var f=0,e=0,u=[],s=/([mrvxe])([^a-z]*)/g,o,r,i;n:for(r=0;o=s.exec(n);++r){i=o[2].split(",");switch(o[1]){case"v":u[r]={m:"bezierCurveTo",a:[f+~~i[0],e+~~i[1],f+~~i[2],e+~~i[3],f+=~~i[4],e+=~~i[5]]};break;case"r":u[r]={m:"lineTo",a:[f+=~~i[0],e+=~~i[1]]};break;case"m":u[r]={m:"moveTo",a:[f=~~i[0],e=~~i[1]]};break;case"x":u[r]={m:"closePath"};break;case"e":break n}t[u[r].m].apply(t,u[r].a)}return u}function f(n,t){for(var r,i=0,u=n.length;i<u;++i)r=n[i],t[r.m].apply(t,r.a)}var n=document.createElement("canvas");if(n&&n.getContext&&n.getContext.apply){n=null;var t=Cufon.CSS.supports("display","inline-block"),r=!t&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId)),i=document.createElement("style");return i.type="text/css",i.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(r?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(t?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;"))),document.getElementsByTagName("head")[0].appendChild(i),function(n,i,r,e,o){function gt(){var r=n.glyphs,i=-1,e=-1,o,t;for(s.scale(wt,1);o=tt[++i];)(t=r[tt[i]]||n.missingGlyph,t)&&(t.d&&(s.beginPath(),t.code?f(t.code,s):t.code=u("m"+t.d,s),s.fill()),s.translate(b[++e],0));s.restore()}var at=i===null,tt,b,yt,a,v,et,st,s,ht,nt,ct,lt,ut,c,ni;at&&(i=o.getAttribute("alt"));var l=n.viewBox,h=r.getSize("fontSize",n.baseSize),y=0,g=0,ft=0,p=0,w=e.textShadow,vt=[];if(w)for(c=w.length;c--;){var nt=w[c],k=h.convertFrom(parseFloat(nt.offX)),d=h.convertFrom(parseFloat(nt.offY));vt[c]=[k,d];d<y&&(y=d);k>g&&(g=k);d>ft&&(ft=d);k<p&&(p=k)}if(tt=Cufon.CSS.textTransform(i,r).split(""),b=n.spacing(tt,~~h.convertFrom(parseFloat(r.get("letterSpacing"))||0),~~h.convertFrom(parseFloat(r.get("wordSpacing"))||0)),!b.length)return null;yt=b.total;g+=l.width-b[b.length-1];p+=l.minX;at?(a=o,v=o.firstChild):(a=document.createElement("cufon"),a.className="cufon cufon-canvas",a.setAttribute("alt",i),v=document.createElement("canvas"),a.appendChild(v),e.printable&&(et=document.createElement("cufontext"),et.appendChild(document.createTextNode(i)),a.appendChild(et)));var it=a.style,rt=v.style,ot=h.convert(l.height),ti=Math.ceil(ot),pt=ti/ot,wt=pt*Cufon.CSS.fontStretch(r.get("fontStretch")),bt=yt*wt,kt=Math.ceil(h.convert(bt+g-p)),dt=Math.ceil(h.convert(l.height-y+ft));if(v.width=kt,v.height=dt,rt.width=kt+"px",rt.height=dt+"px",y+=l.minY,rt.top=Math.round(h.convert(y-n.ascent))+"px",rt.left=Math.round(h.convert(p))+"px",st=Math.max(Math.ceil(h.convert(bt)),0)+"px",t?(it.width=st,it.height=h.convert(n.height)+"px"):(it.paddingLeft=st,it.paddingBottom=h.convert(n.height)-1+"px"),s=v.getContext("2d"),ht=ot/l.height,s.scale(ht,ht*pt),s.translate(-p,-y),s.save(),w)for(c=w.length;c--;)nt=w[c],s.save(),s.fillStyle=nt.color,s.translate.apply(s,vt[c]),gt();if(ct=e.textGradient,ct){for(lt=ct.stops,ut=s.createLinearGradient(0,l.minY,0,l.maxY),c=0,ni=lt.length;c<ni;++c)ut.addColorStop.apply(ut,lt[c]);s.fillStyle=ut}else s.fillStyle=r.get("color");return gt(),a}}}());