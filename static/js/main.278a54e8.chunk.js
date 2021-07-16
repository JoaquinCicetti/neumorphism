(this.webpackJsonpneumorphism=this.webpackJsonpneumorphism||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(19),c=n.n(o),i=n(5),s=n(11),u=n(4),l=n(6);function h(e){if("number"!==typeof e)throw new TypeError("Value is not a number")}function b(e,t,n){if(e<t||e>n)throw new TypeError("Value is not in range")}function d(e,t){if(!(e in t))throw new TypeError("Missing key ".concat(e))}var f,v=function(){function e(t,n,r,a){Object(u.a)(this,e),this.r=t,this.g=n,this.b=r,this.a=a}return Object(l.a)(e,[{key:"hex",get:function(){var e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16),r=(255*this.a).toString(16);return 1===e.length&&(e="0"+e),1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),"#"+e+t+n+r}},{key:"shortHex",get:function(){var e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16);return 1===e.length&&(e="0"+e),1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),"#"+e+t+n}},{key:"rgba",get:function(){return{r:this.r,g:this.g,b:this.b,a:this.a}}},{key:"hsla",get:function(){var e,t,n=this.r/255,r=this.g/255,a=this.b/255,o=Math.min(n,r,a),c=Math.max(n,r,a),i=c-o,s=0;return s=0===i?0:c===n?(r-a)/i%6:c===r?(a-n)/i+2:(n-r)/i+4,(s=Math.round(60*s))<0&&(s+=360),t=(c+o)/2,e=0===i?0:i/(1-Math.abs(2*t-1)),{h:s,s:Math.round(100*e),l:Math.round(100*t)}}},{key:"complementary",get:function(){var t=this.hsla,n=t.h,r=t.s,a=t.l,o=t.a;return e.fromHSLA(n+180,r,a,o)}},{key:"opacity",value:function(t){return b(t,0,1),new e(this.r,this.g,this.b,t)}},{key:"lighten",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.s,o=n.a,c=Math.min(100,this.hsla.l+t);return e.fromHSLA(r,a,c,o)}},{key:"darken",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.s,o=n.a,c=Math.max(0,this.hsla.l-t);return e.fromHSLA(r,a,c,o)}},{key:"saturate",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.l,o=n.a,c=Math.min(100,this.hsla.s+t);return e.fromHSLA(r,c,a,o)}},{key:"desaturate",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.l,o=n.a,c=Math.max(0,this.hsla.s-t);return e.fromHSLA(r,c,a,o)}}],[{key:"fromRGBA",value:function(t){var n;return new e(t.r,t.g,t.b,null!==(n=t.a)&&void 0!==n?n:1)}},{key:"fromHEX",value:function(t){var n,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);if(null===r)throw new TypeError("Invalid hex ".concat(t));return new e(parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),parseInt(null!==(n=r[4])&&void 0!==n?n:"FF",16))}},{key:"fromHSLA",value:function(t,n,r,a){var o=n/100,c=r/100,i=t%360,s=(1-Math.abs(2*c-1))*o,u=s*(1-Math.abs(i/60%2-1)),l=c-s/2,h=0,b=0,d=0;return 0<=i&&i<60?(h=s,b=u,d=0):60<=i&&i<120?(h=u,b=s,d=0):120<=i&&i<180?(h=0,b=s,d=u):180<=i&&i<240?(h=0,b=u,d=s):240<=i&&i<300?(h=u,b=0,d=s):300<=i&&i<360&&(h=s,b=0,d=u),new e(h=Math.round(255*(h+l)),b=Math.round(255*(b+l)),d=Math.round(255*(d+l)),null!==a&&void 0!==a?a:1)}},{key:"validateRGBA",value:function(e){d("r",e),d("g",e),d("b",e),d("a",e);var t=e.r,n=e.g,r=e.b,a=e.a;h(t),h(n),h(r),h(a),b(t,0,255),b(n,0,255),b(r,0,255),b(a,0,1)}},{key:"validateHSLA",value:function(e){d("h",e),d("s",e),d("l",e);var t=e.h,n=e.s,r=e.l;h(t),h(n),h(r),b(t,0,255),b(n,0,100),b(r,0,100)}},{key:"linearPickerFromHSL",value:function(t,n,r,a){var o=Math.trunc(360/a);return Object(s.a)(new Array(a)).map((function(r,a){var c=a*o;return e.fromHSLA(c,t,n).rgba}))}}]),e}();!function(e){e.CONVEX="Convex",e.CONCAVE="Concave",e.FLAT="Flat"}(f||(f={}));var x=Object.values(f),g=function(e){var t=e.color,n=e.elevation,r=e.inverted,a=v.fromRGBA(t).lighten(10).opacity(.6).hex,o=v.fromRGBA(t).darken(10).opacity(.6).hex,c=-1*Math.abs(n)*2,i=2*Math.abs(n),s=Math.abs(1.5*n*2),u="".concat(c,"px ").concat(c,"px ").concat(s,"px ").concat(a),l="".concat(i,"px ").concat(i,"px ").concat(s,"px ").concat(o);return r?"inset ".concat(u,", inset ").concat(l):"".concat(u,", ").concat(l)},m=n(2),j=function(e){var t=v.fromHEX(e).rgba,n=function(e){var t=v.fromRGBA(e).complementary;return t.hsla.l>=50?t.darken(50).desaturate(40).rgba:t.lighten(50).desaturate(40).rgba}(t);return{background:n,text:function(e){var t=v.fromRGBA(e).complementary;return t.hsla.l<=50?t.lighten(50).rgba:t.darken(50).rgba}(n),brand:t}},O=j("#92354c"),p={theme:O,setBrand:function(e){return console.warn("Context not intialized")}},k=a.a.createContext(p),y=function(e){var t=a.a.useState(O),n=Object(i.a)(t,2),r=n[0],o=n[1],c={theme:r,setBrand:function(e){var t=j(e);o(t)}};return Object(m.jsx)(k.Provider,{value:c,children:e.children})},A=function(){return a.a.useContext(k)},S=n(10),H=(n(34),function(e,t){switch(e){case f.FLAT:return function(e){var t=v.fromRGBA(e).shortHex;return"linear-gradient(0deg, ".concat(t,", ").concat(t,")")}(t);case f.CONVEX:return function(e){var t=v.fromRGBA(e).darken(10),n=v.fromRGBA(e).lighten(10);return"linear-gradient(-45deg, ".concat(t.shortHex,", ").concat(n.shortHex)}(t);case f.CONCAVE:return function(e){var t=v.fromRGBA(e).darken(10),n=v.fromRGBA(e).lighten(20);return"linear-gradient(135deg, ".concat(t.shortHex,", ").concat(n.shortHex)}(t);default:console.warn("TODO: assert unreachable")}return""}),B=function(e){var t=e.shape,n=A().theme,r=v.fromRGBA(n.brand),a=v.fromRGBA(n.background),o=g({color:a.rgba,elevation:2}),c=H(t,a.rgba),i=Object(S.useSpring)({to:{background:c,boxShadow:o,color:r.shortHex}});return Object(m.jsxs)(S.animated.div,{className:"brand",style:i,children:[Object(m.jsx)("h3",{className:"title",children:"Neumorphism"}),Object(m.jsx)("small",{className:"subtitle",children:"0xfafafa"})]})},w=(n(35),function(e){var t=e.value,n=A().theme,r=g({color:n.background,elevation:1,inverted:!1}),a={boxShadow:g({color:n.background,elevation:1,inverted:!0})},o={background:v.fromRGBA(n.background).shortHex,"--bg":v.fromRGBA(n.background).shortHex,"--boxShadow":r};return Object(m.jsx)("div",{className:"colorPicker",style:a,children:Object(m.jsx)("input",{type:"color",onChange:function(t){var n=t.target,r=v.fromHEX(n.value).rgba;e.onChange(r)},value:v.fromRGBA(t).shortHex,style:o})})}),C=(n(36),function(e){var t=e.elevation,n=e.inverted,r=e.isFake,a=A().theme,o=v.fromRGBA(a.background),c=v.fromRGBA(a.text),i=g({color:o.rgba,inverted:n,elevation:0}),s=g({color:o.rgba,elevation:t,inverted:n}),u=Object(S.useSpring)({from:{boxShadow:i,background:o.shortHex,borderColor:o.shortHex,color:c.shortHex},to:{boxShadow:s,background:o.shortHex,borderColor:o.shortHex,color:c.shortHex}}),l=e.className?"container ".concat(e.className):"container";return Object(m.jsx)(S.animated.div,{style:u,className:l,children:r?Object(m.jsxs)("span",{className:"code",children:[Object(m.jsx)("b",{children:"box-shadow:"})," ",s]}):e.children})}),G=(n(37),function(e){var t=e.value,n=e.options,r=A().theme,a={boxShadow:g({color:r.background,elevation:2,inverted:!0})},o=n.join("-");return Object(m.jsx)("div",{className:"radio",style:a,onChange:function(t){var n=t.target.value;e.onChange(n)},children:n.map((function(e,n){var r="".concat(e,"-").concat(n);return Object(m.jsx)(R,{value:e,isSelected:e===t,name:o},r)}))})}),R=function(e){var t=e.value,n=e.name,r=e.isSelected,a=A().theme,o=g({color:a.background,elevation:0}),c=g({color:a.background,elevation:1}),i=v.fromRGBA(a.brand).shortHex,s=v.fromRGBA(a.text).shortHex,u={duration:200},l=Object(S.useSpring)({to:{boxShadow:r?o:c,color:r?i:s},config:u}),h=Object(S.useSpring)({to:{width:r?"32px":"0px",borderColor:i},config:u}),b="radiobutton-".concat(t);return Object(m.jsxs)(S.animated.label,{style:l,className:"option",htmlFor:b,children:[Object(m.jsx)("input",{id:b,type:"radio","aria-label":t,value:t,name:n}),r&&Object(m.jsx)(S.animated.div,{style:h,className:"activeIndicator"}),Object(m.jsx)("span",{children:t})]})},M=(n(38),function(e){var t=e.value,n=e.max,r=e.min,a=e.step,o=void 0===a?1:a,c=A().theme,i=g({color:c.background,elevation:2,inverted:!1}),s=g({color:c.background,elevation:1,inverted:!0}),u={borderColor:v.fromRGBA(c.brand).shortHex},l={boxShadow:s,background:v.fromRGBA(c.background).shortHex,"--bg":v.fromRGBA(c.text).shortHex,"--boxShadow":i};return Object(m.jsx)("div",{className:"rangeInput",style:u,children:Object(m.jsx)("input",{type:"range",onChange:function(t){var n=t.target,r=parseInt(n.value);e.onChange(r)},value:t,style:l,max:n,min:r,step:o})})}),N=(n(39),x[2]),F=function(){var e=A(),t=e.theme,n=e.setBrand,r=a.a.useState(1),o=Object(i.a)(r,2),c=o[0],s=o[1],u=a.a.useState(N),l=Object(i.a)(u,2),h=l[0],b=l[1],d={background:v.fromRGBA(t.background).shortHex,color:v.fromRGBA(t.text).shortHex};return Object(m.jsxs)("div",{className:"shadowGenerator",style:d,children:[Object(m.jsx)(B,{shape:h}),Object(m.jsxs)(C,{elevation:1,inverted:!0,children:[Object(m.jsx)("b",{children:"Radio button"}),Object(m.jsx)(G,{options:x,value:h,onChange:function(e){b(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Color picker"}),Object(m.jsx)(w,{value:t.brand,onChange:function(e){n(v.fromRGBA(e).shortHex)}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Slider:"}),Object(m.jsx)(M,{step:1,min:0,max:5,value:c,onChange:function(e){s(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Container:"}),Object(m.jsx)(C,{elevation:c,isFake:!0}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Inverted container:"}),Object(m.jsx)(C,{elevation:c,inverted:!0,isFake:!0})]})]})},L=(n(40),function(){return Object(m.jsx)(y,{children:Object(m.jsx)(F,{})})}),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),E()}},[[41,1,2]]]);
//# sourceMappingURL=main.278a54e8.chunk.js.map