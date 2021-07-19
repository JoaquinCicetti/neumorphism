(this.webpackJsonpneumorphism=this.webpackJsonpneumorphism||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(19),c=n.n(o),i=n(5),s=n(11),u=n(4),l=n(6);function h(e){if("number"!==typeof e)throw new TypeError("Value is not a number")}function b(e,t,n){if(e<t||e>n)throw new TypeError("Value is not in range")}function d(e,t){if(!(e in t))throw new TypeError("Missing key ".concat(e))}var x,j=function(){function e(t,n,r,a){Object(u.a)(this,e),this.r=t,this.g=n,this.b=r,this.a=a}return Object(l.a)(e,[{key:"hex",get:function(){var e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16),r=(255*this.a).toString(16);return 1===e.length&&(e="0"+e),1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),"#"+e+t+n+r}},{key:"shortHex",get:function(){var e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16);return 1===e.length&&(e="0"+e),1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),"#"+e+t+n}},{key:"rgba",get:function(){return{r:this.r,g:this.g,b:this.b,a:this.a}}},{key:"hsla",get:function(){var e,t,n=this.r/255,r=this.g/255,a=this.b/255,o=Math.min(n,r,a),c=Math.max(n,r,a),i=c-o,s=0;return s=0===i?0:c===n?(r-a)/i%6:c===r?(a-n)/i+2:(n-r)/i+4,(s=Math.round(60*s))<0&&(s+=360),t=(c+o)/2,e=0===i?0:i/(1-Math.abs(2*t-1)),{h:s,s:Math.round(100*e),l:Math.round(100*t)}}},{key:"complementary",get:function(){var t=this.hsla,n=t.h,r=t.s,a=t.l,o=t.a;return e.fromHSLA(n+180,r,a,o)}},{key:"opacity",value:function(t){return b(t,0,1),new e(this.r,this.g,this.b,t)}},{key:"lighten",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.s,o=n.a,c=Math.min(100,this.hsla.l+t);return e.fromHSLA(r,a,c,o)}},{key:"darken",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.s,o=n.a,c=Math.max(0,this.hsla.l-t);return e.fromHSLA(r,a,c,o)}},{key:"saturate",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.l,o=n.a,c=Math.min(100,this.hsla.s+t);return e.fromHSLA(r,c,a,o)}},{key:"desaturate",value:function(t){b(t,0,100);var n=this.hsla,r=n.h,a=n.l,o=n.a,c=Math.max(0,this.hsla.s-t);return e.fromHSLA(r,c,a,o)}}],[{key:"fromRGBA",value:function(t){var n;return new e(t.r,t.g,t.b,null!==(n=t.a)&&void 0!==n?n:1)}},{key:"fromHEX",value:function(t){var n,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);if(null===r)throw new TypeError("Invalid hex ".concat(t));return new e(parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),parseInt(null!==(n=r[4])&&void 0!==n?n:"FF",16))}},{key:"fromHSLA",value:function(t,n,r,a){var o=n/100,c=r/100,i=t%360,s=(1-Math.abs(2*c-1))*o,u=s*(1-Math.abs(i/60%2-1)),l=c-s/2,h=0,b=0,d=0;return 0<=i&&i<60?(h=s,b=u,d=0):60<=i&&i<120?(h=u,b=s,d=0):120<=i&&i<180?(h=0,b=s,d=u):180<=i&&i<240?(h=0,b=u,d=s):240<=i&&i<300?(h=u,b=0,d=s):300<=i&&i<360&&(h=s,b=0,d=u),new e(h=Math.round(255*(h+l)),b=Math.round(255*(b+l)),d=Math.round(255*(d+l)),null!==a&&void 0!==a?a:1)}},{key:"validateRGBA",value:function(e){d("r",e),d("g",e),d("b",e),d("a",e);var t=e.r,n=e.g,r=e.b,a=e.a;h(t),h(n),h(r),h(a),b(t,0,255),b(n,0,255),b(r,0,255),b(a,0,1)}},{key:"validateHSLA",value:function(e){d("h",e),d("s",e),d("l",e);var t=e.h,n=e.s,r=e.l;h(t),h(n),h(r),b(t,0,255),b(n,0,100),b(r,0,100)}},{key:"linearPickerFromHSL",value:function(t,n,r,a){var o=Math.trunc(360/a);return Object(s.a)(new Array(a)).map((function(r,a){var c=a*o;return e.fromHSLA(c,t,n).rgba}))}}]),e}();!function(e){e.CONVEX="Convex",e.CONCAVE="Concave",e.FLAT="Flat"}(x||(x={}));var f=Object.values(x),m=function(e){var t=e.color,n=e.elevation,r=e.inverted,a=j.fromRGBA(t).lighten(10).opacity(.6).hex,o=j.fromRGBA(t).darken(10).opacity(.6).hex,c=-1*Math.abs(n)*1,i=1*Math.abs(n),s=Math.abs(1.5*n*1),u="".concat(c,"px ").concat(c,"px ").concat(s,"px ").concat(a),l="".concat(i,"px ").concat(i,"px ").concat(s,"px ").concat(o);return r?"inset ".concat(u,", inset ").concat(l):"".concat(u,", ").concat(l)},v=n(1),g=function(e){var t=e,n=function(e){var t=j.fromRGBA(e).complementary;return t.hsla.l>=50?t.darken(50).desaturate(30).rgba:t.lighten(50).desaturate(30).rgba}(t);return{background:n,text:function(e){var t=j.fromRGBA(e).complementary;return t.hsla.l<=50?t.lighten(50).rgba:t.darken(50).rgba}(n),accent:t}},O=g(j.fromHEX("#a2dcbd").rgba),p={theme:O,setAccent:function(e){return console.warn("Context not intialized")}},k=a.a.createContext(p),y=function(e){var t=a.a.useState(O),n=Object(i.a)(t,2),r=n[0],o=n[1],c={theme:r,setAccent:function(e){var t,n=g(e);(o(n),document instanceof Document)&&(null===(t=document.querySelector('meta[name="theme-color"]'))||void 0===t||t.setAttribute("content","#fa0000"))}};return Object(v.jsx)(k.Provider,{value:c,children:e.children})},A=function(){return a.a.useContext(k)},H=n(10),S=(n(35),function(e,t){switch(e){case x.FLAT:return function(e){var t=j.fromRGBA(e).shortHex;return"linear-gradient(0deg, ".concat(t,", ").concat(t,")")}(t);case x.CONVEX:return function(e){var t=j.fromRGBA(e).darken(10),n=j.fromRGBA(e).lighten(10);return"linear-gradient(-45deg, ".concat(t.shortHex,", ").concat(n.shortHex)}(t);case x.CONCAVE:return function(e){var t=j.fromRGBA(e).darken(10),n=j.fromRGBA(e).lighten(20);return"linear-gradient(135deg, ".concat(t.shortHex,", ").concat(n.shortHex)}(t);default:console.warn("TODO: assert unreachable")}return""}),C=function(e){var t=e.shape,n=A().theme,r=j.fromRGBA(n.accent),a=j.fromRGBA(n.background),o=m({color:a.rgba,elevation:2}),c=S(t,a.rgba),i=Object(H.useSpring)({to:{background:c,boxShadow:o,color:r.shortHex}});return Object(v.jsxs)(H.animated.div,{className:"logo",style:i,children:[Object(v.jsx)("h3",{className:"title",children:"Neumorphism"}),Object(v.jsx)("small",{className:"subtitle",children:"0xfafafa"})]})},w=(n(36),function(e){var t=e.value,n=A().theme,r=m({color:n.background,elevation:1,inverted:!1}),a={boxShadow:m({color:n.background,elevation:1,inverted:!0})},o={background:j.fromRGBA(n.background).shortHex,"--bg":j.fromRGBA(n.background).shortHex,"--boxShadow":r};return Object(v.jsx)("div",{className:"colorPicker",style:a,children:Object(v.jsx)("input",{type:"color",onChange:function(t){var n=t.target,r=j.fromHEX(n.value).rgba;e.onChange(r)},value:j.fromRGBA(t).shortHex,style:o})})}),B=(n(37),function(e){var t=e.elevation,n=e.inverted,r=e.isFake,a=A().theme,o=j.fromRGBA(a.background),c=j.fromRGBA(a.text),i=m({color:o.rgba,inverted:n,elevation:0}),s=m({color:o.rgba,elevation:t,inverted:n}),u=Object(H.useSpring)({from:{boxShadow:i,background:o.shortHex,borderColor:o.shortHex,color:c.shortHex},to:{boxShadow:s,background:o.shortHex,borderColor:o.shortHex,color:c.shortHex}}),l=e.className?"container ".concat(e.className):"container";return Object(v.jsx)(H.animated.div,{style:u,className:l,children:r?Object(v.jsxs)("span",{className:"code",children:[Object(v.jsx)("b",{children:"box-shadow:"})," ",s]}):e.children})}),R=(n(38),function(e){var t=e.value,n=e.options,r=A().theme,a={boxShadow:m({color:r.background,elevation:4,inverted:!0})},o=n.join("-");return Object(v.jsx)("div",{className:"radio",style:a,onChange:function(t){var n=t.target.value;e.onChange(n)},children:n.map((function(e,n){var r="".concat(e,"-").concat(n);return Object(v.jsx)(G,{value:e,isSelected:e===t,name:o},r)}))})}),G=function(e){var t=e.value,n=e.name,r=e.isSelected,a=A().theme,o=m({color:a.background,elevation:0}),c=m({color:a.background,elevation:3}),i=j.fromRGBA(a.accent).shortHex,s=j.fromRGBA(a.text).shortHex,u=Object(H.useSpring)({to:{boxShadow:r?o:c,color:r?i:s}}),l=Object(H.useSpring)({to:{width:r?"32px":"0px",borderColor:i}}),h="radiobutton-".concat(t);return Object(v.jsxs)(H.animated.label,{style:u,className:"option",htmlFor:h,children:[Object(v.jsx)("input",{id:h,type:"radio","aria-label":t,value:t,name:n}),r&&Object(v.jsx)(H.animated.div,{style:l,className:"activeIndicator"}),Object(v.jsx)("span",{children:t})]})},N=(n(39),function(e){var t=e.value,n=e.max,r=e.min,a=e.step,o=void 0===a?1:a,c=A().theme,i=m({color:c.background,elevation:1,inverted:!1}),s=m({color:c.background,elevation:2,inverted:!0}),u={borderColor:j.fromRGBA(c.accent).shortHex},l={boxShadow:s,background:j.fromRGBA(c.background).shortHex,"--bg":j.fromRGBA(c.text).shortHex,"--boxShadow":i};return Object(v.jsx)("div",{className:"slider",style:u,children:Object(v.jsx)("input",{type:"range",onChange:function(t){var n=t.target,r=parseInt(n.value);e.onChange(r)},value:t,style:l,max:n,min:r,step:o})})}),M=(n(40),function(e){var t=e.value,n=e.onTextChange,r=A().theme,a={boxShadow:m({color:r.background,elevation:4,inverted:!0}),background:j.fromRGBA(r.background).shortHex,color:j.fromRGBA(r.text).shortHex,"--border":j.fromRGBA(r.accent).shortHex};return Object(v.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;n(t)},value:t,style:a,className:"textInput"})}),F=(n(41),n(24)),T=(n(42),function(e){var t=e.value,n=e.onNumberChange,r=A().theme,a={boxShadow:m({color:r.background,elevation:4,inverted:!0}),background:j.fromRGBA(r.background).shortHex,color:j.fromRGBA(r.text).shortHex,"--border":j.fromRGBA(r.accent).shortHex};return Object(v.jsxs)("div",{className:"numericInput",children:[Object(v.jsx)(L,{type:"DOWN",onPress:function(){n(t-1)}}),Object(v.jsx)("input",{type:"number",onChange:function(e){var t=e.target,r=Number(t.value);n(r)},value:t,style:a}),Object(v.jsx)(L,{type:"UP",onPress:function(){n(t+1)}})]})}),L=function(e){var t=A().theme,n={boxShadow:m({color:t.background,elevation:3}),background:j.fromRGBA(t.background).shortHex,color:j.fromRGBA(t.text).shortHex},r="button ".concat("UP"===e.type?"right":"left");return Object(v.jsx)("button",{className:r,onClick:function(t){e.onPress()},style:n,children:"UP"===e.type?Object(v.jsx)(F.b,{}):Object(v.jsx)(F.a,{})})},E=f[2],I=function(){var e=A(),t=e.theme,n=e.setAccent,r=a.a.useState(1),o=Object(i.a)(r,2),c=o[0],s=o[1],u=a.a.useState(E),l=Object(i.a)(u,2),h=l[0],b=l[1],d=a.a.useState("type something.."),x=Object(i.a)(d,2),m=x[0],g=x[1],O=function(e){s(e)},p={background:j.fromRGBA(t.background).shortHex,color:j.fromRGBA(t.text).shortHex};return Object(v.jsxs)("div",{className:"playground",style:p,children:[Object(v.jsx)(C,{shape:h}),Object(v.jsxs)(B,{elevation:3,inverted:!0,children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Radio button"}),Object(v.jsx)("small",{children:"- Change the brand shape -"})]}),Object(v.jsx)(R,{options:f,value:h,onChange:function(e){b(e)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Color picker"}),Object(v.jsx)("small",{children:"- Choose an accent -"})]}),Object(v.jsx)(w,{value:t.accent,onChange:function(e){n(j.fromRGBA(e).rgba)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Text input"}),Object(v.jsx)("small",{children:"- Type to generate a new theme -"})]}),Object(v.jsx)(M,{value:m,onTextChange:function(e){g(e);var t=function(e){var t=Array.from(e).reduce((function(e,t){return t.charCodeAt(0)+((e<<5)-e)}),0);return new j(t>>8&255,t>>16&255,t>>24&255,255).rgba}(e);n(t)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Numeric input"}),Object(v.jsx)("small",{children:"- Type to generate a new theme -"})]}),Object(v.jsx)(T,{value:c,min:-6,max:8,onNumberChange:O}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Slider"}),Object(v.jsx)("small",{children:"- Change the elevation of the container shadows -"})]}),Object(v.jsx)(N,{step:1,min:0,max:8,value:c,onChange:O}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"Container"}),Object(v.jsx)(B,{elevation:c,isFake:!0}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"Inverted container:"}),Object(v.jsx)(B,{elevation:c,inverted:!0,isFake:!0})]})]})},P=(n(43),function(){return Object(v.jsx)(y,{children:Object(v.jsx)(I,{})})}),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),V()}},[[44,1,2]]]);
//# sourceMappingURL=main.1013668b.chunk.js.map