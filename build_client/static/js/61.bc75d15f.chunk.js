(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{2147:function(e,a,t){"use strict";t.r(a);var r=t(30),s=t(31),n=t(34),o=t(32),i=t(33),l=t(1),c=t.n(l),d=t(82),u=t(2098),m=t(354),f=t(355),g=t(342),b=t(356),p=t(343),v=t(756),h=t(845);function E(e){var a,t=e.user,r="/users/".concat(t.id);return c.a.createElement("tr",{key:t.id.toString()},c.a.createElement("th",{scope:"row"},c.a.createElement(d.Link,{to:r},t.id)),c.a.createElement("td",null,c.a.createElement(d.Link,{to:r},t.name)),c.a.createElement("td",null,t.registered),c.a.createElement("td",null,t.role),c.a.createElement("td",null,c.a.createElement(d.Link,{to:r},c.a.createElement(u.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))))}var j=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=h.a.filter(function(e){return e.id<10});return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m.a,null,c.a.createElement(f.a,{xl:6},c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Users ",c.a.createElement("small",{className:"text-muted"},"example")),c.a.createElement(p.a,null,c.a.createElement(v.a,{responsive:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"id"),c.a.createElement("th",{scope:"col"},"name"),c.a.createElement("th",{scope:"col"},"registered"),c.a.createElement("th",{scope:"col"},"role"),c.a.createElement("th",{scope:"col"},"status"))),c.a.createElement("tbody",null,e.map(function(e,a){return c.a.createElement(E,{key:a,user:e})}))))))))}}]),a}(l.Component);a.default=j},342:function(e,a,t){"use strict";var r=t(5),s=t(11),n=t(1),o=t.n(n),i=t(4),l=t.n(i),c=t(24),d=t.n(c),u=t(309),m={tag:u.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.m)(d()(a,"card",!!l&&"text-white",!!i&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return o.a.createElement(m,Object(r.a)({},g,{className:b,ref:f}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},343:function(e,a,t){"use strict";var r=t(5),s=t(11),n=t(1),o=t.n(n),i=t(4),l=t.n(i),c=t(24),d=t.n(c),u=t(309),m={tag:u.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.m)(d()(a,"card-body"),t);return o.a.createElement(i,Object(r.a)({},l,{className:c,ref:n}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},354:function(e,a,t){"use strict";var r=t(5),s=t(11),n=t(1),o=t.n(n),i=t(4),l=t.n(i),c=t(24),d=t.n(c),u=t(309),m=l.a.oneOfType([l.a.number,l.a.string]),f={tag:u.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,l=e.form,c=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach(function(a,t){var r=e[a];if(delete m[a],r){var s=!t;f.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}});var g=Object(u.m)(d()(a,n?"no-gutters":null,l?"form-row":"row",f),t);return o.a.createElement(i,Object(r.a)({},m,{className:g}))};b.propTypes=f,b.defaultProps=g,a.a=b},355:function(e,a,t){"use strict";var r=t(5),s=t(11),n=t(1),o=t.n(n),i=t(4),l=t.n(i),c=t(24),d=t.n(c),u=t(309),m=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),g={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),c=[];n.forEach(function(a,r){var s=e[a];if(delete l[a],s||""===s){var n=!r;if(Object(u.k)(s)){var o,i=n?"-":"-"+a+"-",m=p(n,a,s.size);c.push(Object(u.m)(d()(((o={})[m]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o)),t))}else{var f=p(n,a,s);c.push(f)}}}),c.length||c.push("col");var m=Object(u.m)(d()(a,c),t);return o.a.createElement(i,Object(r.a)({},l,{className:m}))};v.propTypes=g,v.defaultProps=b,a.a=v},356:function(e,a,t){"use strict";var r=t(5),s=t(11),n=t(1),o=t.n(n),i=t(4),l=t.n(i),c=t(24),d=t.n(c),u=t(309),m={tag:u.q,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.m)(d()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},i,{className:l}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},756:function(e,a,t){"use strict";var r=t(5),s=t(11),n=t(1),o=t.n(n),i=t(4),l=t.n(i),c=t(24),d=t.n(c),u=t(309),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.q,responsiveTag:u.q,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},f=function(e){var a=e.className,t=e.cssModule,n=e.size,i=e.bordered,l=e.borderless,c=e.striped,m=e.dark,f=e.hover,g=e.responsive,b=e.tag,p=e.responsiveTag,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(u.m)(d()(a,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!f&&"table-hover"),t),j=o.a.createElement(b,Object(r.a)({},h,{ref:v,className:E}));if(g){var O=Object(u.m)(!0===g?"table-responsive":"table-responsive-"+g,t);return o.a.createElement(p,{className:O},j)}return j};f.propTypes=m,f.defaultProps={tag:"table",responsiveTag:"div"},a.a=f},845:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]}}]);
//# sourceMappingURL=61.bc75d15f.chunk.js.map