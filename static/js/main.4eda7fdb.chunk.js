(this["webpackJsonpac-critters"]=this["webpackJsonpac-critters"]||[]).push([[0],{38:function(e,t,a){e.exports=a(57)},43:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(43),a(9)),s=a(8),o=a(37),m=a(21),u=a(35);a(44);function h(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],h=function(t){var a=t.target.value;l(a),e.onSubmitFromApp(c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/search",className:"noUnderline"},r.a.createElement(o.a,{inline:!0,className:"search-form-mobile"},r.a.createElement(m.a,{type:"text",placeholder:"Find an animal",className:"mr-sm-2",value:c,onChange:h,onBlur:h}),r.a.createElement(u.a,{onClick:function(e){e.preventDefault(),l("")},variant:"success",type:"submit"},"Search"))))}a(51);function f(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://i.imgur.com/GXXSS53.png",alt:"Animal Crossing New Horizons logo"}),r.a.createElement("div",{className:"imgBlurbTwo"},r.a.createElement("img",{src:"https://i.imgur.com/WMQtYml.png",alt:"Isabell"}),r.a.createElement("p",null,"Hi! This is Pallie from Tobey Town. Look up prices and where to find the critters and fish from the game Animal Crossing! You can also check which animals are available during each month."))))}var p=a(11),b=a.n(p),v=a(16),E={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},d=(a(53),function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),u=m[0],h=m[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),d=p[0],g=p[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),w=O[0],N=O[1],x=e.match.path;"/critters"===x&&(x="/bugs"),Object(n.useEffect)((function(){var e="https://acnhapi.com/v1".concat(x);(function(){var t=Object(v.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,l(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[x]);var S=Object.values(c).map((function(e){return r.a.createElement(s.b,{to:"/"+e["file-name"],key:Math.random(5e3)},r.a.createElement("div",{className:"critters-border"},w?r.a.createElement("div",{className:"move-price"},"$",function(e){var t=e.toString();return t.length>3&&(t=t.slice(0,t.length-3)+","+t.slice(t.length-3)),t}(e.price)):null,r.a.createElement("img",{src:e.icon_uri,alt:e.name[0],className:u.includes(e.id)?"hide critters-border":"critters-border"})))})),k=Object.values(E).map((function(e,t){return r.a.createElement("h3",{key:t,className:d===t?"center-me cursor-point cute-button selected-month":"center-me cursor-point cute-button",onClick:function(){y(t+1)}},e)})),y=function(e){var t=[];Object.values(c).forEach((function(a){return""!==e&&(a.availability["month-array-northern"].includes(e)||t.push(a.id)),t})),h(t),g(e-1)},C=e.match.path[1].toUpperCase(0)+e.match.path.substring(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"cursor-point animals-title-margin",onClick:function(){h([]),g("")}},"All ",C,"!"),r.a.createElement("h2",{className:"cursor-point",onClick:function(){return N(!w)}},"Show prices"),r.a.createElement("div",{className:"all-months-div"},r.a.createElement("div",{className:"months-grid"},k)),r.a.createElement("div",{className:"all-critters-grid"},S))}),g=(a(54),function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),m=o[0],u=o[1],h=e.location.pathname,f="https://animalcrossing.fandom.com/wiki".concat(h);if(Object(n.useEffect)((function(){var e="https://acnhapi.com/v1/bugs".concat(h),t="https://acnhapi.com/v1/fish".concat(h),a=function(){var t=Object(v.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,l(n),u("critter");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var e=Object(v.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,l(n),u("fish");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a(),n()}),[]),c.name){var p=Object.values(c.name)[0].split(" ").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" "),E=0,d="";return"critter"===m?(E=c["price-flick"],d="Flick"):(E=c["price-cj"],d="CJ"),r.a.createElement("div",{className:"singleCritContainer"},r.a.createElement("h1",null,p),r.a.createElement("img",{src:c.image_uri,alt:c.name}),r.a.createElement("div",{className:"imgBlurb"},r.a.createElement("img",{src:"https://i.imgur.com/IwwgqIP.png",alt:"Blathers"}),r.a.createElement("p",null,c["museum-phrase"])),r.a.createElement("p",null,r.a.createElement("strong",null,"Where is it? ")," ",c.availability.location),r.a.createElement("p",null,r.a.createElement("strong",null,"Price: "),c.price," Bells (",d,"'s price: ",E," Bells)"),r.a.createElement("p",null,r.a.createElement("strong",null,"Rarity: "),c.availability.rarity),r.a.createElement("a",{href:f},"Learn even more!"))}return null});function j(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),u=m[0],h=m[1];Object(n.useEffect)((function(){var e=function(){var e=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://acnhapi.com/v1/bugs/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://acnhapi.com/v1/fish/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,h(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]);var f=Object.values(c).map((function(t,a){for(var n=0;n<t["file-name"].length;n++)return 0===e.wordFromSearch.length||1===e.wordFromSearch.length?null:t["file-name"].indexOf(e.wordFromSearch)>-1?r.a.createElement(s.b,{to:"/"+t["file-name"],key:a},r.a.createElement("img",{src:t.icon_uri,alt:t.name[0],className:"critters-border"})):null})),p=Object.values(u).map((function(t,a){for(var n=0;n<t["file-name"].length;n++)return 0===e.wordFromSearch.length||1===e.wordFromSearch.length?null:t["file-name"].indexOf(e.wordFromSearch)>-1?r.a.createElement(s.b,{to:"/"+t["file-name"],key:a},r.a.createElement("img",{src:t.icon_uri,alt:t.name[0],className:"critters-border"})):null}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Suggestion List!"),r.a.createElement("div",{className:"all-critters-grid"},f,p))}var O=a(5),w=a(36),N=a(26);a(55),a(56);var x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],u=o[1],p=function(e){c(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{id:"nav",variant:"dark"},r.a.createElement(s.b,{className:"nav-brand",to:"/animalcross/"},"AC Critters"),r.a.createElement(N.a,{className:"mr-auto"},r.a.createElement(N.a.Item,null,r.a.createElement(s.b,{to:"/critters"},"Critters")),r.a.createElement(N.a.Item,null,r.a.createElement(s.b,{to:"/fish"},"Fish"))),r.a.createElement(h,{onSubmitFromApp:p})),r.a.createElement("div",{className:"small-page-nav"},r.a.createElement(s.b,{className:"nav-brand",to:"/animalcross/"},"AC Critters"),r.a.createElement("i",{onClick:function(){return u(!m)},className:m?"fa fa-times fa-2x":"fa fa-bars fa-2x","aria-hidden":"true"})),m?r.a.createElement("div",{onClick:function(){return u(!1)},className:"mobile-nav-open"},r.a.createElement(s.b,{className:"mobile-nav-text",to:"/critters"},"Critters"),r.a.createElement(s.b,{className:"mobile-nav-text",to:"/fish"},"Fish"),r.a.createElement("div",{className:"small-search"},r.a.createElement(h,{onSubmitFromApp:p}))):null,m?null:r.a.createElement("main",null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/animalcross/",component:f}),r.a.createElement(O.a,{exact:!0,path:"/critters",render:function(e){return r.a.createElement(d,e)}}),r.a.createElement(O.a,{exact:!0,path:"/fish",render:function(e){return r.a.createElement(d,e)}}),r.a.createElement(O.a,{exact:!0,path:"/search",render:function(e){return r.a.createElement(j,Object.assign({wordFromSearch:a},e))}}),r.a.createElement(O.a,{exact:!0,path:"/:singlePath",render:function(e){return r.a.createElement(g,e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4eda7fdb.chunk.js.map