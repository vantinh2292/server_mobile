(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1115:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((a=n(1682))&&a.__esModule?a:{default:a}).default;t.default=r},1682:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){var n,i="undefined"!==typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),f=i?new i:null,p=null!==f,m=/(android)/i.test(navigator.userAgent);!p||e&&!1===e.autoStart?n=!1:(f.start(),n=!0);var b=!1,y="",g="";return function(i){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(v,i);var h=function(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;return d(e)}(this,n)}}(v);function v(t){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),a=h.call(this,t),p&&(f.continuous=!1!==e.continuous,f.interimResults=!0,f.onresult=a.updateTranscript.bind(d(a)),f.onend=a.onRecognitionDisconnect.bind(d(a))),a.disconnect=a.disconnect.bind(d(a)),a.resetTranscript=a.resetTranscript.bind(d(a)),a.startListening=a.startListening.bind(d(a)),a.abortListening=a.abortListening.bind(d(a)),a.stopListening=a.stopListening.bind(d(a)),m&&(a.updateFinalTranscript=(0,r.debounce)(a.updateFinalTranscript.bind(d(a)),250,!0)),a.state={interimTranscript:y,finalTranscript:g,listening:n},a}return function(e,t,n){t&&s(e.prototype,t);n&&s(e,n)}(v,[{key:"disconnect",value:function(e){if(f)switch(e){case"ABORT":b=!0,f.abort();break;case"RESET":b=!1,f.abort();break;case"STOP":default:b=!0,f.stop()}}},{key:"onRecognitionDisconnect",value:function(){n=!1,b?this.setState({listening:n}):f&&(f.continuous?this.startListening():this.setState({listening:n})),b=!1}},{key:"updateTranscript",value:function(e){y="";for(var t=e.resultIndex;t<e.results.length;++t)e.results[t].isFinal&&(!m||e.results[t][0].confidence>0)?this.updateFinalTranscript(e.results[t][0].transcript):y=this.concatTranscripts(y,e.results[t][0].transcript);this.setState({finalTranscript:g,interimTranscript:y})}},{key:"updateFinalTranscript",value:function(e){g=this.concatTranscripts(g,e)}},{key:"concatTranscripts",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(function(e){return e.trim()}).join(" ").trim()}},{key:"resetTranscript",value:function(){y="",g="",this.disconnect("RESET"),this.setState({interimTranscript:y,finalTranscript:g})}},{key:"startListening",value:function(){if(f&&!n){f.continuous||this.resetTranscript();try{f.start()}catch(e){}n=!0,this.setState({listening:n})}}},{key:"abortListening",value:function(){n=!1,this.setState({listening:n}),this.disconnect("ABORT")}},{key:"stopListening",value:function(){n=!1,this.setState({listening:n}),this.disconnect("STOP")}},{key:"render",value:function(){var e=this.concatTranscripts(g,y);return a.default.createElement(t,l({resetTranscript:this.resetTranscript,startListening:this.startListening,abortListening:this.abortListening,stopListening:this.stopListening,transcript:e,recognition:f,browserSupportsSpeechRecognition:p},this.state,this.props))}}]),v}(a.Component)};return"function"===typeof e?t(e):t};var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(1)),r=n(1683);function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}},1683:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=void 0;t.debounce=function(e,t,n){var a;return function(){var r=this,i=arguments,o=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(r,i)},t),o&&e.apply(r,i)}}},1684:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),i=a(n(12)),o=a(n(9)),l=a(n(1)),s=(a(n(4)),a(n(24))),c=(n(16),a(n(25))),d=n(47),u=function(e){return{root:{userSelect:"none",fontSize:24,width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:20},fontSizeLarge:{fontSize:36}}};function f(e){var t,n=e.children,a=e.classes,c=e.className,u=e.color,f=e.component,p=e.fontSize,m=(0,o.default)(e,["children","classes","className","color","component","fontSize"]);return l.default.createElement(f,(0,r.default)({className:(0,s.default)("material-icons",a.root,(t={},(0,i.default)(t,a["color".concat((0,d.capitalize)(u))],"inherit"!==u),(0,i.default)(t,a["fontSize".concat((0,d.capitalize)(p))],"default"!==p),t),c),"aria-hidden":"true"},m),n)}t.styles=u,f.defaultProps={color:"inherit",component:"span",fontSize:"default"},f.muiName="Icon";var p=(0,c.default)(u,{name:"MuiIcon"})(f);t.default=p},1685:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(1686))},1686:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),i=a(n(9)),o=a(n(1)),l=(a(n(4)),a(n(24))),s=(n(16),a(n(25))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function d(e){var t=e.classes,n=e.className,a=e.component,s=(0,i.default)(e,["classes","className","component"]);return o.default.createElement(a,(0,r.default)({className:(0,l.default)(t.root,n)},s))}t.styles=c,d.defaultProps={component:"div"};var u=(0,s.default)(c,{name:"MuiCardContent"})(d);t.default=u},1687:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(1688))},1688:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),i=a(n(12)),o=a(n(9)),l=a(n(1)),s=(a(n(4)),a(n(24))),c=a(n(25)),d=n(504);n(321);var u={root:{display:"flex",alignItems:"center",boxSizing:"border-box",padding:"8px 4px"},disableActionSpacing:{padding:8},action:{margin:"0 4px"}};function f(e){var t=e.disableActionSpacing,n=e.children,a=e.classes,c=e.className,u=(0,o.default)(e,["disableActionSpacing","children","classes","className"]);return l.default.createElement("div",(0,r.default)({className:(0,s.default)(a.root,(0,i.default)({},a.disableActionSpacing,t),c)},u),t?n:(0,d.cloneChildrenWithClassName)(n,a.action))}t.styles=u,f.defaultProps={disableActionSpacing:!1};var p=(0,c.default)(u,{name:"MuiCardActions"})(f);t.default=p},321:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(419))},419:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(12)),i=a(n(9)),o=a(n(7)),l=a(n(1)),s=(a(n(4)),a(n(24))),c=(n(16),a(n(25))),d=n(59),u=a(n(146)),f=n(47),p=function(e){return{root:(0,o.default)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,d.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,d.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,d.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},mini:{width:40,height:40},sizeSmall:{padding:"4px 8px",minWidth:64,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function m(e){var t,n=e.children,a=e.classes,c=e.className,d=e.color,p=e.disabled,m=e.disableFocusRipple,b=e.focusVisibleClassName,y=e.fullWidth,g=e.mini,h=e.size,v=e.variant,x=(0,i.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","mini","size","variant"]),w="fab"===v||"extendedFab"===v,S="contained"===v||"raised"===v,P="text"===v||"flat"===v,j=(0,s.default)(a.root,(t={},(0,r.default)(t,a.fab,w),(0,r.default)(t,a.mini,w&&g),(0,r.default)(t,a.extendedFab,"extendedFab"===v),(0,r.default)(t,a.text,P),(0,r.default)(t,a.textPrimary,P&&"primary"===d),(0,r.default)(t,a.textSecondary,P&&"secondary"===d),(0,r.default)(t,a.flat,P),(0,r.default)(t,a.flatPrimary,P&&"primary"===d),(0,r.default)(t,a.flatSecondary,P&&"secondary"===d),(0,r.default)(t,a.contained,S||w),(0,r.default)(t,a.containedPrimary,(S||w)&&"primary"===d),(0,r.default)(t,a.containedSecondary,(S||w)&&"secondary"===d),(0,r.default)(t,a.raised,S||w),(0,r.default)(t,a.raisedPrimary,(S||w)&&"primary"===d),(0,r.default)(t,a.raisedSecondary,(S||w)&&"secondary"===d),(0,r.default)(t,a.outlined,"outlined"===v),(0,r.default)(t,a.outlinedPrimary,"outlined"===v&&"primary"===d),(0,r.default)(t,a.outlinedSecondary,"outlined"===v&&"secondary"===d),(0,r.default)(t,a["size".concat((0,f.capitalize)(h))],"medium"!==h),(0,r.default)(t,a.disabled,p),(0,r.default)(t,a.fullWidth,y),(0,r.default)(t,a.colorInherit,"inherit"===d),t),c);return l.default.createElement(u.default,(0,o.default)({className:j,disabled:p,focusRipple:!m,focusVisibleClassName:(0,s.default)(a.focusVisible,b)},x),l.default.createElement("span",{className:a.label},n))}t.styles=p,m.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var b=(0,c.default)(p,{name:"MuiButton"})(m);t.default=b},440:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(506))},441:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(442))},442:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),i=a(n(9)),o=a(n(1)),l=(a(n(4)),a(n(24))),s=a(n(147)),c=a(n(25)),d={root:{overflow:"hidden"}};function u(e){var t=e.classes,n=e.className,a=e.raised,c=(0,i.default)(e,["classes","className","raised"]);return o.default.createElement(s.default,(0,r.default)({className:(0,l.default)(t.root,n),elevation:a?8:1},c))}t.styles=d,u.defaultProps={raised:!1};var f=(0,c.default)(d,{name:"MuiCard"})(u);t.default=f},506:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(12)),i=a(n(9)),o=a(n(7)),l=a(n(1)),s=(a(n(4)),a(n(24))),c=(n(16),a(n(25))),d=n(152),u=(a(n(507)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return u.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),d.keys.reduce(function(t,n){return function(e,t,n){var a={};f.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function m(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,d=e.className,u=e.component,f=e.container,p=e.direction,b=e.item,y=e.justify,g=e.lg,h=e.md,v=e.sm,x=e.spacing,w=e.wrap,S=e.xl,P=e.xs,j=e.zeroMinWidth,O=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),C=(0,s.default)((t={},(0,r.default)(t,c.container,f),(0,r.default)(t,c.item,b),(0,r.default)(t,c.zeroMinWidth,j),(0,r.default)(t,c["spacing-xs-".concat(String(x))],f&&0!==x),(0,r.default)(t,c["direction-xs-".concat(String(p))],p!==m.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(w))],w!==m.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==m.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==m.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(y))],y!==m.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(P))],!1!==P),(0,r.default)(t,c["grid-sm-".concat(String(v))],!1!==v),(0,r.default)(t,c["grid-md-".concat(String(h))],!1!==h),(0,r.default)(t,c["grid-lg-".concat(String(g))],!1!==g),(0,r.default)(t,c["grid-xl-".concat(String(S))],!1!==S),t),d);return l.default.createElement(u,(0,o.default)({className:C},O))}t.styles=p,m.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var b=(0,c.default)(p,{name:"MuiGrid"})(m);t.default=b},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},534:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(1684))}}]);
//# sourceMappingURL=33.4ff8ca61.chunk.js.map