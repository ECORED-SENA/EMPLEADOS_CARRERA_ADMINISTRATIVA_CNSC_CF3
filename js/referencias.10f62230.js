(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(t,e,n){"use strict";n("95c5")},"04d1":function(t,e,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),c=n("1d80"),l=n("4840"),o=n("8aa5"),u=n("50c4"),s=n("14c3"),f=n("9263"),d=n("9f7f"),p=d.UNSUPPORTED_Y,h=[].push,v=Math.min,g=4294967295;r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),a=void 0===n?g:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);var l,o,u,s=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");while(l=f.call(v,r)){if(o=v.lastIndex,o>p&&(s.push(r.slice(p,l.index)),l.length>1&&l.index<r.length&&h.apply(s,l.slice(1)),u=l[0].length,p=o,s.length>=a))break;v.lastIndex===l.index&&v.lastIndex++}return p===r.length?!u&&v.test("")||s.push(""):s.push(r.slice(p)),s.length>a?s.slice(0,a):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var c=n(r,t,this,i,r!==e);if(c.done)return c.value;var f=a(t),d=String(this),h=l(f,RegExp),x=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"g":"y"),E=new h(p?"^(?:"+f.source+")":f,b),_=void 0===i?g:i>>>0;if(0===_)return[];if(0===d.length)return null===s(E,d)?[d]:[];var m=0,y=0,R=[];while(y<d.length){E.lastIndex=p?0:y;var C,I=s(E,p?d.slice(y):d);if(null===I||(C=v(u(E.lastIndex+(p?y:0)),d.length))===m)y=o(d,y,x);else{if(R.push(d.slice(m,y)),R.length===_)return R;for(var w=1;w<=I.length-1;w++)if(R.push(I[w]),R.length===_)return R;y=m=C}}return R.push(d.slice(m)),R}]}),p)},"13aa":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?n("div",{staticClass:"banner-interno__titulo__icono me-3"},[n("i",{class:t.icono})]):t._e(),n("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},i=[],a={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=a,l=(n("0095"),n("2877")),o=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=o.exports},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"3cb4":function(t,e,n){"use strict";n("ddc8")},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),c=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"4e82":function(t,e,n){"use strict";var r=n("23e7"),i=n("1c0b"),a=n("7b0b"),c=n("50c4"),l=n("d039"),o=n("addb"),u=n("a640"),s=n("04d1"),f=n("d998"),d=n("2d00"),p=n("512c"),h=[],v=h.sort,g=l((function(){h.sort(void 0)})),x=l((function(){h.sort(null)})),b=u("sort"),E=!l((function(){if(d)return d<70;if(!(s&&s>3)){if(f)return!0;if(p)return p<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)h.push({k:e+r,v:n})}for(h.sort((function(t,e){return e.v-t.v})),r=0;r<h.length;r++)e=h[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),_=g||!x||!b||!E,m=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}};r({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&i(t);var e=a(this);if(E)return void 0===t?v.call(e):v.call(e,t);var n,r,l=[],u=c(e.length);for(r=0;r<u;r++)r in e&&l.push(e[r]);l=o(l,m(t)),n=l.length,r=0;while(r<n)e[r]=l[r++];while(r<u)delete e[r++];return e}})},"512c":function(t,e,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},"64ef":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container referencias"},[n("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(e){return n("div",{key:e.link,staticClass:"referencias__item"},[t._v(" "+t._s(e.referencia)+" "),e.link?n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link)+" "),n("i",{staticClass:"fas fa-external-link-alt"})]):t._e(),n("hr",{staticClass:"my-3"})])})),0)],1)},i=[],a=n("2909"),c=(n("4e82"),n("ac1f"),n("1276"),n("13aa")),l=n("ecc5"),o={name:"Referencias",components:{BannerInterno:c["default"]},mixins:[l["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,e=Object(a["a"])(this.referenciasData).sort((function(e,n){var r=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase()),i=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase());return r<i?-1:r>i?1:0}));return e}}},u=o,s=(n("3cb4"),n("2877")),f=Object(s["a"])(u,r,i,!1,null,null,null);e["default"]=f.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=n("5692"),c=RegExp.prototype.exec,l=a("native-string-replace",String.prototype.replace),o=c,u=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=u||f||s;d&&(o=function(t){var e,n,i,a,o=this,d=s&&o.sticky,p=r.call(o),h=o.source,v=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",p)),f&&(n=new RegExp("^"+h+"$(?!\\s)",p)),u&&(e=o.lastIndex),i=c.call(d?n:o,g),d?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=o.lastIndex,o.lastIndex+=i[0].length):o.lastIndex=0:u&&i&&(o.lastIndex=o.global?i.index+i[0].length:e),f&&i&&i.length>1&&l.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=o},"95c5":function(t,e,n){},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e){var n=Math.floor,r=function(t,e){var c=t.length,l=n(c/2);return c<8?i(t,e):a(r(t.slice(0,l),e),r(t.slice(l),e),e)},i=function(t,e){var n,r,i=t.length,a=1;while(a<i){r=a,n=t[a];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==a++&&(t[r]=n)}return t},a=function(t,e,n){var r=t.length,i=e.length,a=0,c=0,l=[];while(a<r||c<i)a<r&&c<i?l.push(n(t[a],e[c])<=0?t[a++]:e[c++]):l.push(a<r?t[a++]:e[c++]);return l};t.exports=r},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),a=n("d039"),c=n("b622"),l=n("9112"),o=c("species"),u=RegExp.prototype,s=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var v=c(t),g=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),x=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!x||"replace"===t&&(!s||!f||p)||"split"===t&&!h){var b=/./[v],E=n(v,""[t],(function(t,e,n,r,a){var c=e.exec;return c===i||c===u.exec?g&&!a?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=E[0],m=E[1];r(String.prototype,t,_),r(u,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}d&&l(u[v],"sham",!0)}},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},ddc8:function(t,e,n){}}]);
//# sourceMappingURL=referencias.10f62230.js.map