_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{RNiq:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),o=t.n(r);function c(e,n,t,r,o,c,a){try{var i=e[c](a),u=i.value}catch(s){return void t(s)}i.done?n(u):Promise.resolve(u).then(r,o)}var a=t("nKUr"),i=(t("q1tI"),t("YFqc")),u=t.n(i);function s(e){var n=e.props.pokemons;return Object(a.jsxs)("div",{children:["Pok\xe9dex",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.a,{href:"/",children:Object(a.jsx)("a",{children:"Home"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.a,{href:"/sobre",children:Object(a.jsx)("a",{children:"Sobre o projeto"})})})]}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(u.a,{href:"/pokemon/".concat(e.entry_number),children:Object(a.jsx)("a",{children:e.pokemon_species.name})})},e.entry_number)}))})]})}s.getInitialProps=function(){var e,n=(e=o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokedex/2");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",{props:{pokemons:r.pokemon_entries}});case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){c(a,r,o,i,u,"next",e)}function u(e){c(a,r,o,i,u,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();n.default=s},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),u=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,b=e.shallow,j=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=c.Children.only(v),x=y&&"object"===typeof y&&y.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),w=r(_,2),O=w[0],g=w[1],k=c.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,c.useEffect)((function(){var e=g&&n&&(0,a.isLocalURL)(p),r="undefined"!==typeof m?m:t&&t.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(t,p,d,{locale:r})}),[d,p,g,m,n,t]);var E={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,p,d,h,b,j,m)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var L="undefined"!==typeof m?m:t&&t.locale,M=(0,a.getDomainLocale)(d,L,t&&t.locales,t&&t.domainLocales);E.href=M||(0,a.addBasePath)((0,a.addLocale)(d,L,t&&t.defaultLocale))}return c.default.cloneElement(y,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,o=(0,c.useRef)(),s=(0,c.useState)(!1),l=r(s,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){i||f||(0,a.default)((function(){return p(!0)}))}),[f]),[d,f]};var c=t("q1tI"),a=o(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);