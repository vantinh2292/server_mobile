(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1116:function(t,e,n){"use strict";var r=n(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(1)),i=(0,r(n(42)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"})),"ArrowRightAlt");e.default=i},2170:function(t,e,n){"use strict";n.r(e);var r=n(30),a=n(31),i=n(34),o=n(32),u=n(33),c=n(1),s=n.n(c),d=n(35),l=(n(6),n(3));n(46).w(function(t){t});var f=n(0),p=n(10),m=n(405),h=n.n(m),_=n(515),T=n(48),E=n(505),D=n.n(E),g=n(1116),y=n.n(g),I=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(o.a)(e).call(this,t))).isChange=function(t){var e=t.target.name,r=t.target.value;n.setState(Object(p.a)({},e,r))},n.state={FieldData:[],ValueData:[]},n}return Object(u.a)(e,t),Object(a.a)(e,[{key:"componentWillMount",value:function(){var t=this.props.value,e=[],n=[];for(var r in t)e.push(r),n.push(t[r]);this.setState(Object(f.a)({},this.state,{FieldData:e,ValueData:n}))}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,e){if(t.value!==this.props.value){var n=this.props.value,r=[],a=[];for(var i in n)r.push(i),a.push(n[i]);this.setState(Object(f.a)({},this.state,{FieldData:r,ValueData:a}))}}},{key:"render",value:function(){var t=this,e=this.props,n=(e.i,e.IdCode,e.NameCode,e.Weigh,e.index),r=(e.Warehouse1,e.Warehouse2,e.Warehouse3,this.props.classes);return s.a.createElement("div",{className:"card",style:{backgroundImage:"linear-gradient(to top, #001991 0%, #80d0c7 100%)"}},s.a.createElement("div",{className:"card-header",role:"tab",id:"note1",style:{backgroundImage:"linear-gradient(0deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}},s.a.createElement("div",{className:"row",style:{margin:"auto"}},s.a.createElement("div",{style:{fontSize:"55",color:"blue",width:"30px",display:"inline-block",margin:"auto"}},n+":"),this.state.FieldData.map(function(e,n){return s.a.createElement("div",{style:{flex:"Name"===e?2:1}},s.a.createElement(h.a,{style:{margin:"auto"},id:"outlined-name",label:e,className:r.textFieldOutLine,value:t.state.ValueData[n],margin:"normal",variant:"outlined",fullWidth:!0,size:"small",InputProps:{readOnly:!0}}))}),s.a.createElement("div",{style:{paddingLeft:10}},s.a.createElement(D.a,{color:"primary","aria-label":"ArrowRightAlt",className:"float-right"},s.a.createElement(y.a,{onClick:function(){return t.props.actionSendDataSiemens(t.state.ValueData)}}))))))}}]),e}(c.Component),b=Object(d.b)(function(t,e){return{}},function(t){return{actionSendDataSiemens:function(e){t(Object(_.eb)(e))}}})(Object(T.withStyles)({container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:"1px",marginRight:"1px",width:"120px",backgroundImage:"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"},textFieldOutLine:{marginLeft:"1px",marginRight:"1px"},dense:{marginTop:"2px"},menu:{width:200}})(I)),A=n(591),O=n(351),S=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(o.a)(e).call(this,t))).state={FieldData:[],ValueData:[]},n}return Object(u.a)(e,t),Object(a.a)(e,[{key:"componentWillMount",value:function(){console.log(this.props)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,e){t!==this.props&&console.log(this.props)}},{key:"render",value:function(){var t=this,e=this.props,n=(e.i,e.IdCode,e.NameCode,e.Weigh,e.index,e.Warehouse1,e.Warehouse2,e.Warehouse3,this.props.classes);return s.a.createElement("div",{className:"card",style:{backgroundImage:"linear-gradient(to top, #001991 0%, #80d0c7 100%)"}},s.a.createElement("div",{className:"card-header",role:"tab",id:"note1",style:{backgroundImage:"linear-gradient(0deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}},s.a.createElement("div",{className:"row",style:{margin:"auto"}},this.props.wordAdjust.map(function(e,r){if(r<t.props.amount-1)return s.a.createElement("div",{style:{flex:"Name"===e?2:1}},s.a.createElement(h.a,{style:{margin:"auto"},id:"outlined-name",label:"Data"+r,className:n.textFieldOutLine,value:e,margin:"normal",variant:"outlined",fullWidth:!0,multiline:!0,size:"small",InputProps:{readOnly:!0}}))}))))}}]),e}(c.Component),v=Object(d.b)(function(t,e){return{}},function(t){return{}})(Object(T.withStyles)({container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:"1px",marginRight:"1px",width:"120px",backgroundImage:"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"},textFieldOutLine:{marginLeft:"1px",marginRight:"1px"},dense:{marginTop:"2px"},menu:{width:200}})(S)),C=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(o.a)(e).call(this,t))).statePLC=function(){if(Array.isArray(n.state.data)&&n.state.data.length>0)return s.a.createElement(v,{amount:Object.keys(n.state.data[0]).length,wordAdjust:n.state.WordAdjust})},n.getData=function(){return Array.isArray(n.state.data)?n.state.data.length>0?n.state.data.map(function(t,e){return s.a.createElement(b,{key:e,index:e,value:t})}):void 0:s.a.createElement("div",{style:{justifyContent:"center",display:"flex",paddingTop:"40vh"}},s.a.createElement(O.a,null))},n.state={data:[],dataType:[],WordAdjust:[]},n}return Object(u.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t,e=this;t=function(t){e.setState({data:t})},Object(l.a)(function(e){e.on("DataExcel",function(e){t(e)})}),function(t){Object(l.a)(function(e){e.on("DataExcel2",function(e){t(e)})})}(function(t){e.setState({dataType:t})}),function(t){Object(l.a)(function(e){e.on("ExcelWordAdjust",function(e){t(e)})})}(function(t){e.setState({WordAdjust:t})}),Object(l.a)(function(t){t.emit("initial")})}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"col",style:{height:"90vh",paddingRight:"1  npx"}},this.statePLC(),s.a.createElement("div",{id:"noteList",role:"tablist","aria-multiselectable":"true",style:{overflowY:"scroll",height:"85vh"}},this.getData()))}}]),e}(c.Component),N=Object(d.b)(function(t,e){return{}},function(t,e){return{actionSnackBar:function(e){t(Object(A.d)(e))},actionToggleProductNewTrue:function(){t(Object(A.g)())}}})(C),x=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){this.props.uid;return s.a.createElement("div",{style:{width:"100%",margin:"auto"}},s.a.createElement("div",{className:"container-flat",style:{padding:"0px"}},s.a.createElement("div",{className:"row",style:{paddingLeft:"1px",paddingRight:"0px"}},s.a.createElement(N,null))))}}]),e}(c.Component);e.default=Object(d.b)(function(t){return{}})(x)},351:function(t,e,n){"use strict";var r=n(1),a=n.n(r),i=n(352),o=n.n(i);e.a=function(){return a.a.createElement(o.a,{disableShrink:!0})}},352:function(t,e,n){"use strict";var r=n(2);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(353))},353:function(t,e,n){"use strict";var r=n(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var a=r(n(7)),i=r(n(12)),o=r(n(9)),u=r(n(1)),c=(r(n(4)),r(n(24))),s=(n(16),r(n(25))),d=n(47),l=44;function f(t){var e,n,r;return e=t,n=0,r=1,t=(Math.min(Math.max(n,e),r)-n)/(r-n),t=(t-=1)*t*t+1}var p=function(t){return{root:{display:"inline-block",lineHeight:1},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"mui-progress-circular-rotate 1.4s linear infinite",animationName:"$mui-progress-circular-rotate"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"mui-progress-circular-dash 1.4s ease-in-out infinite",animationName:"$mui-progress-circular-dash",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes mui-progress-circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}};function m(t){var e,n,r,s=t.classes,p=t.className,m=t.color,h=t.disableShrink,_=t.size,T=t.style,E=t.thickness,D=t.value,g=t.variant,y=(0,o.default)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),I={},b={},A={};if("determinate"===g||"static"===g){var O=2*Math.PI*((l-E)/2);I.strokeDasharray=O.toFixed(3),A["aria-valuenow"]=Math.round(D),"static"===g?(I.strokeDashoffset="".concat(((100-D)/100*O).toFixed(3),"px"),b.transform="rotate(-90deg)"):(I.strokeDashoffset="".concat((r=(100-D)/100,r*r*O).toFixed(3),"px"),b.transform="rotate(".concat((270*f(D/70)).toFixed(3),"deg)"))}return u.default.createElement("div",(0,a.default)({className:(0,c.default)(s.root,(e={},(0,i.default)(e,s["color".concat((0,d.capitalize)(m))],"inherit"!==m),(0,i.default)(e,s.indeterminate,"indeterminate"===g),(0,i.default)(e,s.static,"static"===g),e),p),style:(0,a.default)({width:_,height:_},b,T),role:"progressbar"},A,y),u.default.createElement("svg",{className:s.svg,viewBox:"".concat(l/2," ").concat(l/2," ").concat(l," ").concat(l)},u.default.createElement("circle",{className:(0,c.default)(s.circle,(n={},(0,i.default)(n,s.circleIndeterminate,"indeterminate"===g),(0,i.default)(n,s.circleStatic,"static"===g),(0,i.default)(n,s.circleDisableShrink,h),n)),style:I,cx:l,cy:l,r:(l-E)/2,fill:"none",strokeWidth:E})))}e.styles=p,m.defaultProps={color:"primary",disableShrink:!1,size:40,thickness:3.6,value:0,variant:"indeterminate"};var h=(0,s.default)(p,{name:"MuiCircularProgress",flip:!1})(m);e.default=h},422:function(t,e){t.exports={url:"http://localhost:8000"}},505:function(t,e,n){"use strict";var r=n(2);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(533))},515:function(t,e,n){"use strict";n.d(e,"eb",function(){return u}),n.d(e,"fb",function(){return c}),n.d(e,"a",function(){return s}),n.d(e,"P",function(){return d}),n.d(e,"gb",function(){return l}),n.d(e,"l",function(){return f}),n.d(e,"s",function(){return p}),n.d(e,"q",function(){return m}),n.d(e,"r",function(){return h}),n.d(e,"u",function(){return _}),n.d(e,"k",function(){return T}),n.d(e,"j",function(){return E}),n.d(e,"t",function(){return D}),n.d(e,"d",function(){return g}),n.d(e,"i",function(){return y}),n.d(e,"h",function(){return I}),n.d(e,"g",function(){return b}),n.d(e,"n",function(){return A}),n.d(e,"m",function(){return O}),n.d(e,"o",function(){return S}),n.d(e,"p",function(){return v}),n.d(e,"f",function(){return C}),n.d(e,"e",function(){return N}),n.d(e,"b",function(){return x}),n.d(e,"c",function(){return B}),n.d(e,"ab",function(){return G}),n.d(e,"bb",function(){return k}),n.d(e,"cb",function(){return U}),n.d(e,"db",function(){return R}),n.d(e,"hb",function(){return j}),n.d(e,"ib",function(){return H}),n.d(e,"Y",function(){return W}),n.d(e,"Z",function(){return J}),n.d(e,"F",function(){return w}),n.d(e,"M",function(){return F}),n.d(e,"K",function(){return L}),n.d(e,"L",function(){return M}),n.d(e,"O",function(){return P}),n.d(e,"E",function(){return z}),n.d(e,"D",function(){return K}),n.d(e,"N",function(){return V}),n.d(e,"x",function(){return Y}),n.d(e,"C",function(){return $}),n.d(e,"B",function(){return X}),n.d(e,"A",function(){return Z}),n.d(e,"H",function(){return q}),n.d(e,"G",function(){return Q}),n.d(e,"I",function(){return tt}),n.d(e,"J",function(){return et}),n.d(e,"z",function(){return nt}),n.d(e,"y",function(){return rt}),n.d(e,"v",function(){return at}),n.d(e,"w",function(){return it}),n.d(e,"S",function(){return ot}),n.d(e,"T",function(){return ut}),n.d(e,"U",function(){return ct}),n.d(e,"V",function(){return st}),n.d(e,"W",function(){return dt}),n.d(e,"X",function(){return lt}),n.d(e,"Q",function(){return ft}),n.d(e,"R",function(){return pt});var r,a=n(6),i=n.n(a),o=n(46);o.w(function(t){r=t});var u=function(t){return function(e,n){var r={NameCommand:"SendDataSiemens",data:t};o.E(r)}},c=function(t){return function(e,n){var r=t.e;console.log(t.e);var a={id:t.id,tag:t.tag,width:t.width,height:t.height,top:t.top,left:t.left,fontSize:t.fontSize,text:t.text,type:t.type,borderRadius:t.borderRadius,colorText:t.colorText,colorOff:t.colorOff,colorOn:t.colorOn,myKeyPress:t.myKeyPress,levelUser:t.levelUser,nameImage0:t.nameImage0,nameImage1:t.nameImage1,borderWidthOn:t.borderWidthOn,borderWidthOff:t.borderWidthOff,blink0:t.blink0,blink1:t.blink1};if(n().auth.editMode||n().auth.addMode||n().auth.userNameAdmin===n().auth.userName&&(r.ctrlKey||r.metaKey))e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITADJUST"}),e({type:"TOGGLE_BITADJUST",bitAdjust:a});else if(console.log(parseInt(n().auth.levelUser)),console.log(parseInt(t.levelUser)),parseInt(n().auth.levelUser)>=parseInt(t.levelUser)){if("PrintProjectScale"==t.tag){var i=document.getElementById("component_print"),u=document.getElementById("ifmcontentstoprint").contentWindow;u.document.write(i.innerHTML),u.document.close(),u.focus(),u.print()}if(""!==t.id){var c={NameCommand:"BitAdjustForce",mode:2,tag:t.tag,currentUser:n().auth.userName};o.E(c)}}else e({type:"SNACK_TOGGLE_ON",message:"Kh\xf4ng \u0111\u01b0\u1ee3c quy\u1ec1n thao t\xe1c",status:"error"})}},s=function(){return function(t,e){var n=e().bitAdjust.addBitAdjust,a="";""!==e().groupControl.editGroupControl.id&&!0===e().auth.designGroupControl&&(a=e().groupControl.editGroupControl.id);var o={parent:e().page.parentScada,top:parseInt(n.top),left:parseInt(n.left),text:n.text,width:parseInt(n.width),height:parseInt(n.height),fontSize:parseInt(n.fontSize),tag:n.tag,type:parseInt(n.type),borderRadius:parseInt(n.borderRadius),colorText:n.colorText,colorOff:n.colorOff,colorOn:n.colorOn,myKeyPress:n.myKeyPress,status:0,idGroupControl:a,levelUser:n.levelUser,nameImage0:n.nameImage0,nameImage1:n.nameImage1,borderWidthOn:parseInt(n.borderWidthOn),borderWidthOff:parseInt(n.borderWidthOff),blink0:parseInt(n.blink0),blink1:parseInt(n.blink1)};i.a.post(r+"/bitAdjust/insert_bitAdjust",o).then(function(e){var n,r=e.data.message;n="success"===e.data.result?e.data.result:"error",t({type:"SNACK_TOGGLE_ON",message:r,status:n})}).catch(function(t){console.log(t)})}},d=function(){return function(t,e){if(""!==e().bitAdjust.editBitAdjust.id)i.a.delete(r+"/bitadjust/delete_bitadjust/",{data:{_id:e().bitAdjust.editBitAdjust.id}}).then(function(e){var n,r=e.data.message;n="success"===e.data.result?e.data.result:"error",t({type:"SNACK_TOGGLE_ON",message:r,status:n}),t({type:"RESET_BITADJUST_EDIT_FORM"})}).catch(function(t){console.log(t)});else{t({type:"SNACK_TOGGLE_ON",message:"Have to have ID",status:"error"})}}},l=function(){return function(t,e){var n=e().bitAdjust.editBitAdjust,a="";""!==e().groupControl.editGroupControl.id&&!0===e().auth.designGroupControl&&(a=e().groupControl.editGroupControl.id),""!==n.id&&i.a.put(r+"/bitadjust/update_bitadjust",{_id:n.id,tag:n.tag,left:parseInt(n.left),top:parseInt(n.top),width:parseInt(n.width),height:parseInt(n.height),fontSize:parseInt(n.fontSize),text:n.text,type:n.type,borderRadius:parseInt(n.borderRadius),colorText:n.colorText,colorOn:n.colorOn,colorOff:n.colorOff,myKeyPress:n.myKeyPress,idGroupControl:a,levelUser:parseInt(n.levelUser),borderWidthOn:parseInt(n.borderWidthOn),borderWidthOff:parseInt(n.borderWidthOff),blink0:parseInt(n.blink0),blink1:parseInt(n.blink1)}).then(function(e){var n,r=e.data.message;n="success"===e.data.result?e.data.result:"error",t({type:"SNACK_TOGGLE_ON",message:r,status:n}),t({type:"RESET_BITADJUST_EDIT_FORM"})}).catch(function(t){console.log(t)})}},f=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_LEFT",left:t})}},p=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_TOP",top:t})}},m=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_TAG",tag:t})}},h=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_TEXT",text:t})}},_=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_WIDTH",width:t})}},T=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_HEIGHT",height:t})}},E=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_FONTSIZE",fontSize:t})}},D=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_TYPE",item:t})}},g=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_BORDER_RADIUS",item:t})}},y=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_COLOR_TEXT",item:t})}},I=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_COLOR_ON",item:t})}},b=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_COLOR_OFF",item:t})}},A=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_MYKEYPRESS",item:t})}},O=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_LEVEL_USER",levelUser:t})}},S=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_NAMEIMAGE0",image:t})}},v=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_NAMEIMAGE1",image:t})}},C=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_BORDER_WIDTH_ON",borderWidthOn:t})}},N=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_BORDER_WIDTH_OFF",borderWidthOff:t})}},x=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_BLINK0",blink0:t})}},B=function(t){return function(e){e({type:"CHANGE_ADD_BITADJUST_BLINK1",blink1:t})}},G=function(t){return function(e){e({type:"BITADJUST_MOVE_LEFT_DECREASE",offset:t})}},k=function(t){return function(e){e({type:"BITADJUST_MOVE_LEFT_INCREASE",offset:t})}},U=function(t){return function(e){e({type:"BITADJUST_MOVE_TOP_DECREASE",offset:t})}},R=function(t){return function(e){e({type:"BITADJUST_MOVE_TOP_INCREASE",offset:t})}},j=function(){return function(t){t({type:"BITADJUST_WIDTH_DECREASE"})}},H=function(){return function(t){t({type:"BITADJUST_WIDTH_INCREASE"})}},W=function(){return function(t){t({type:"BITADJUST_HEIGHT_DECREASE"})}},J=function(){return function(t){t({type:"BITADJUST_HEIGHT_INCREASE"})}},w=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_LEFT",left:t})}},F=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_TOP",top:t})}},L=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_TAG",tag:t})}},M=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_TEXT",text:t})}},P=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_WIDTH",width:t})}},z=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_HEIGHT",height:t})}},K=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_FONTSIZE",fontSize:t})}},V=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_TYPE",item:t})}},Y=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_BORDER_RADIUS",item:t})}},$=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_COLOR_TEXT",item:t})}},X=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_COLOR_ON",item:t})}},Z=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_COLOR_OFF",item:t})}},q=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_MYKEYPRESS",myKeyPress:t})}},Q=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_LEVEL_USER",levelUser:t})}},tt=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_NAMEIMAGE0",image:t})}},et=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_NAMEIMAGE1",image:t})}},nt=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_BORDER_WIDTH_ON",borderWidthOn:t})}},rt=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_BORDER_WIDTH_OFF",borderWidthOff:t})}},at=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_BLINK0",blink0:t})}},it=function(t){return function(e){e({type:"CHANGE_EDIT_BITADJUST_BLINK1",blink1:t})}},ot=function(t){return function(e){e({type:"EDIT_BITADJUST_MOVE_LEFT_DECREASE",offset:t})}},ut=function(t){return function(e){e({type:"EDIT_BITADJUST_MOVE_LEFT_INCREASE",offset:t})}},ct=function(t){return function(e){e({type:"EDIT_BITADJUST_MOVE_TOP_DECREASE",offset:t})}},st=function(t){return function(e){e({type:"EDIT_BITADJUST_MOVE_TOP_INCREASE",offset:t})}},dt=function(){return function(t){t({type:"EDIT_BITADJUST_WIDTH_DECREASE"})}},lt=function(){return function(t){t({type:"EDIT_BITADJUST_WIDTH_INCREASE"})}},ft=function(){return function(t){t({type:"EDIT_BITADJUST_HEIGHT_DECREASE"})}},pt=function(){return function(t){t({type:"EDIT_BITADJUST_HEIGHT_INCREASE"})}}},533:function(t,e,n){"use strict";var r=n(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var a=r(n(12)),i=r(n(9)),o=r(n(7)),u=r(n(1)),c=(r(n(4)),r(n(24))),s=(n(16),r(n(25))),d=r(n(146)),l=n(47),f=function(t){return{root:(0,o.default)({},t.typography.button,{boxSizing:"border-box",minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:t.shadows[6],"&:active":{boxShadow:t.shadows[12]},color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],"&$focusVisible":{boxShadow:t.shadows[6]},"&:hover":{backgroundColor:t.palette.grey.A100,"@media (hover: none)":{backgroundColor:t.palette.grey[300]},"&$disabled":{backgroundColor:t.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.primary.dark,"@media (hover: none)":{backgroundColor:t.palette.primary.main}}},secondary:{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.main,"&:hover":{backgroundColor:t.palette.secondary.dark,"@media (hover: none)":{backgroundColor:t.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}};function p(t){var e,n=t.children,r=t.classes,s=t.className,f=t.color,p=t.disabled,m=t.disableFocusRipple,h=t.focusVisibleClassName,_=t.size,T=t.variant,E=(0,i.default)(t,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return u.default.createElement(d.default,(0,o.default)({className:(0,c.default)(r.root,(e={},(0,a.default)(e,r.extended,"extended"===T),(0,a.default)(e,r.primary,"primary"===f),(0,a.default)(e,r.secondary,"secondary"===f),(0,a.default)(e,r["size".concat((0,l.capitalize)(_))],"large"!==_),(0,a.default)(e,r.disabled,p),(0,a.default)(e,r.colorInherit,"inherit"===f),e),s),disabled:p,focusRipple:!m,focusVisibleClassName:(0,c.default)(r.focusVisible,h)},E),u.default.createElement("span",{className:r.label},n))}e.styles=f,p.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",type:"button",variant:"round"};var m=(0,s.default)(f,{name:"MuiFab"})(p);e.default=m},591:function(t,e,n){"use strict";n.d(e,"d",function(){return u}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"f",function(){return f}),n.d(e,"e",function(){return p});var r=n(6),a=n.n(r),i=n(422),o=n.n(i),u=function(t){return function(e){e({type:"SNACK_TOGGLE_ON",message:t.message,status:t.status})}},c=function(t){return function(e,n){console.log(t),a.a.post(o.a.url+"/product/insert_product",{IdCode:t.IdCode,NameCode:t.NameCode,Weigh:parseInt(t.Weigh),Warehouse1:parseInt(t.Warehouse1),Warehouse2:parseInt(t.Warehouse2),Warehouse3:parseInt(t.Warehouse3)}).then(function(t){var n,r=t.data.message;n="success"===t.data.result?t.data.result:"error",e({type:"SNACK_TOGGLE_ON",message:r,status:n})}).catch(function(t){console.log(t)})}},s=function(t){return function(e){a.a.delete(o.a.url+"/product/delete_product",{data:{_id:t}}).then(function(t){var n,r=t.data.message;n="success"===t.data.result?t.data.result:"error",e({type:"SNACK_TOGGLE_ON",message:r,status:n})}).catch(function(t){console.log(t)})}},d=function(t){return function(e,n){a.a.put(o.a.url+"/product/update_product",{_id:t.ItemChoise,IdCode:t.IdCode,NameCode:t.NameCode,Weigh:parseInt(t.Weigh),Warehouse1:parseInt(t.Warehouse1),Warehouse2:parseInt(t.Warehouse2),Warehouse3:parseInt(t.Warehouse3)}).then(function(t){var n,r=t.data.message;n="success"===t.data.result?t.data.result:"error",e({type:"SNACK_TOGGLE_ON",message:r,status:n})}).catch(function(t){console.log(t)})}},l=function(){return function(t){t({type:"TOGGLE_PRODUCT_NEW_TRUE"})}},f=function(){return function(t){t({type:"TOGGLE_PRODUCT_NEW_FALSE"})}},p=function(t,e){return function(n,r){var a=r().point,i=a.isEdit,o=a.ItemChoise,u=!1;!1===i&&(u=!0),!0===i&&o===t&&(u=!1),!0===i&&o!==t&&(u=!0),n({type:"TOGGLE_PRODUCT_EDIT",ItemChoising:t,SetEdit:u,editItem:e})}}}}]);
//# sourceMappingURL=45.8b55dec3.chunk.js.map