(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1036:function(e,a,t){"use strict";var c=t(5),n=t(14),s=t(1),l=t.n(s),i=t(4),r=t.n(i),o=t(24),m=t.n(o),u=t(584),b=t(309),d={tag:b.q,activeTab:r.a.any,className:r.a.string,cssModule:r.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(n.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.tag,s=Object(b.n)(this.props,Object.keys(d)),i=Object(b.m)(m()("tab-content",a),t);return l.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(n,Object(c.a)({},s,{className:i})))},a}(s.Component);a.a=v,v.propTypes=d,v.defaultProps={tag:"div"}},1037:function(e,a,t){"use strict";t.d(a,"a",function(){return v});var c=t(5),n=t(11),s=t(1),l=t.n(s),i=t(4),r=t.n(i),o=t(24),m=t.n(o),u=t(584),b=t(309),d={tag:b.q,className:r.a.string,cssModule:r.a.object,tabId:r.a.any};function v(e){var a=e.className,t=e.cssModule,s=e.tabId,i=e.tag,r=Object(n.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(b.m)(m()("tab-pane",a,{active:s===e}),t)};return l.a.createElement(u.a.Consumer,null,function(e){var a=e.activeTabId;return l.a.createElement(i,Object(c.a)({},r,{className:o(a)}))})}v.propTypes=d,v.defaultProps={tag:"div"}},2129:function(e,a,t){"use strict";t.r(a);var c=t(30),n=t(31),s=t(34),l=t(32),i=t(80),r=t(33),o=t(1),m=t.n(o),u=t(1037),b=t(354),d=t(355),v=t(2099),f=t(2096),E=t(2097),g=t(1036),p=t(2098),h=t(24),T=t.n(h),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(l.a)(a).call(this,e))).toggle=t.toggle.bind(Object(i.a)(t)),t.state={activeTab:new Array(4).fill("1")},t}return Object(r.a)(a,e),Object(n.a)(a,[{key:"lorem",value:function(){return"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."}},{key:"toggle",value:function(e,a){var t=this.state.activeTab.slice();t[e]=a,this.setState({activeTab:t})}},{key:"tabPane",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{tabId:"1"},"1. ".concat(this.lorem())),m.a.createElement(u.a,{tabId:"2"},"2. ".concat(this.lorem())),m.a.createElement(u.a,{tabId:"3"},"3. ".concat(this.lorem())))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"12",md:"6",className:"mb-4"},m.a.createElement(v.a,{tabs:!0},m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"1"===this.state.activeTab[0],onClick:function(){e.toggle(0,"1")}},"Home")),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"2"===this.state.activeTab[0],onClick:function(){e.toggle(0,"2")}},"Profile")),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"3"===this.state.activeTab[0],onClick:function(){e.toggle(0,"3")}},"Messages"))),m.a.createElement(g.a,{activeTab:this.state.activeTab[0]},this.tabPane())),m.a.createElement(d.a,{xs:"12",md:"6",className:"mb-4"},m.a.createElement(v.a,{tabs:!0},m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"1"===this.state.activeTab[1],onClick:function(){e.toggle(1,"1")}},m.a.createElement("i",{className:"icon-calculator"}))),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"2"===this.state.activeTab[1],onClick:function(){e.toggle(1,"2")}},m.a.createElement("i",{className:"icon-basket-loaded"}))),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"3"===this.state.activeTab[1],onClick:function(){e.toggle(1,"3")}},m.a.createElement("i",{className:"icon-pie-chart"})))),m.a.createElement(g.a,{activeTab:this.state.activeTab[1]},this.tabPane())),m.a.createElement(d.a,{xs:"12",md:"6",className:"mb-4"},m.a.createElement(v.a,{tabs:!0},m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"1"===this.state.activeTab[2],onClick:function(){e.toggle(2,"1")}},m.a.createElement("i",{className:"icon-calculator"})," ",m.a.createElement("span",{className:"1"===this.state.activeTab[2]?"":"d-none"}," Calculator"))),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"2"===this.state.activeTab[2],onClick:function(){e.toggle(2,"2")}},m.a.createElement("i",{className:"icon-basket-loaded"})," ",m.a.createElement("span",{className:"2"===this.state.activeTab[2]?"":"d-none"}," Shopping cart"))),m.a.createElement(f.a,null,m.a.createElement(E.a,{className:T()({active:"3"===this.state.activeTab[2]}),onClick:function(){e.toggle(2,"3")}},m.a.createElement("i",{className:"icon-pie-chart"})," ",m.a.createElement("span",{className:"3"===this.state.activeTab[2]?"":"d-none"}," Charts")))),m.a.createElement(g.a,{activeTab:this.state.activeTab[2]},this.tabPane())),m.a.createElement(d.a,{xs:"12",md:"6",className:"mb-4"},m.a.createElement(v.a,{tabs:!0},m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"1"===this.state.activeTab[3],onClick:function(){e.toggle(3,"1")}},m.a.createElement("i",{className:"icon-calculator"}),m.a.createElement("span",{className:"1"===this.state.activeTab[3]?"":"d-none"}," Calc"),"\xa0",m.a.createElement(p.a,{color:"success"},"New"))),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"2"===this.state.activeTab[3],onClick:function(){e.toggle(3,"2")}},m.a.createElement("i",{className:"icon-basket-loaded"}),m.a.createElement("span",{className:"2"===this.state.activeTab[3]?"":"d-none"}," Cart"),"\xa0",m.a.createElement(p.a,{pill:!0,color:"danger"},"29"))),m.a.createElement(f.a,null,m.a.createElement(E.a,{active:"3"===this.state.activeTab[3],onClick:function(){e.toggle(3,"3")}},m.a.createElement("i",{className:"icon-pie-chart"}),m.a.createElement("span",{className:"3"===this.state.activeTab[3]?"":"d-none"}," Charts")))),m.a.createElement(g.a,{activeTab:this.state.activeTab[3]},this.tabPane()))))}}]),a}(o.Component);a.default=N},354:function(e,a,t){"use strict";var c=t(5),n=t(11),s=t(1),l=t.n(s),i=t(4),r=t.n(i),o=t(24),m=t.n(o),u=t(309),b=r.a.oneOfType([r.a.number,r.a.string]),d={tag:u.q,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},v={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,i=e.tag,r=e.form,o=e.widths,b=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];o.forEach(function(a,t){var c=e[a];if(delete b[a],c){var n=!t;d.push(n?"row-cols-"+c:"row-cols-"+a+"-"+c)}});var v=Object(u.m)(m()(a,s?"no-gutters":null,r?"form-row":"row",d),t);return l.a.createElement(i,Object(c.a)({},b,{className:v}))};f.propTypes=d,f.defaultProps=v,a.a=f},355:function(e,a,t){"use strict";var c=t(5),n=t(11),s=t(1),l=t.n(s),i=t(4),r=t.n(i),o=t(24),m=t.n(o),u=t(309),b=r.a.oneOfType([r.a.number,r.a.string]),d=r.a.oneOfType([r.a.bool,r.a.number,r.a.string,r.a.shape({size:r.a.oneOfType([r.a.bool,r.a.number,r.a.string]),order:b,offset:b})]),v={tag:u.q,xs:d,sm:d,md:d,lg:d,xl:d,className:r.a.string,cssModule:r.a.object,widths:r.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,s=e.widths,i=e.tag,r=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];s.forEach(function(a,c){var n=e[a];if(delete r[a],n||""===n){var s=!c;if(Object(u.k)(n)){var l,i=s?"-":"-"+a+"-",b=E(s,a,n.size);o.push(Object(u.m)(m()(((l={})[b]=n.size||""===n.size,l["order"+i+n.order]=n.order||0===n.order,l["offset"+i+n.offset]=n.offset||0===n.offset,l)),t))}else{var d=E(s,a,n);o.push(d)}}}),o.length||o.push("col");var b=Object(u.m)(m()(a,o),t);return l.a.createElement(i,Object(c.a)({},r,{className:b}))};g.propTypes=v,g.defaultProps=f,a.a=g},584:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var c=t(1),n=t.n(c).a.createContext({})}}]);
//# sourceMappingURL=71.afc3f3fa.chunk.js.map