(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{2174:function(e,t,n){"use strict";n.r(t);var a,i=n(30),o=n(31),r=n(34),c=n(32),l=n(33),u=n(1),p=n.n(u),m=n(35),h=n(8),d=n(80),s=n(427),g=n.n(s),C=n(568),T=n.n(C),f=n(569),E=n.n(f),M=n(428),P=n(408),y=n.n(P),v=(n(571),n(572)),S=n(575),O=n(6),I=n.n(O);n(46).w(function(e){a=e});var R=function(){return function(e,t){e({type:"TOGGLE_VIEW_REPORT_PRODUCTIVITY"});e({type:"UPDATE_DATA_REPORT_PRODUCTIVITY",dataReport:[]}),t().report_ProjectStampingMachineProductivity.ViewReport&&I.a.get(a+"/reportStampingMachineProductivity/getdata?start="+t().report_ProjectStampingMachineProductivity.StartTime+"&stop="+t().report_ProjectStampingMachineProductivity.StopTime+"&Machine1="+t().report_ProjectStampingMachineProductivity.Machine1+"&Machine2="+t().report_ProjectStampingMachineProductivity.Machine2+"&Machine3="+t().report_ProjectStampingMachineProductivity.Machine3+"&Machine4="+t().report_ProjectStampingMachineProductivity.Machine4+"&Machine5="+t().report_ProjectStampingMachineProductivity.Machine5+"&Machine6="+t().report_ProjectStampingMachineProductivity.Machine6+"&Machine7="+t().report_ProjectStampingMachineProductivity.Machine7).then(function(t){var n=t.data;e({type:"UPDATE_DATA_REPORT_PRODUCTIVITY",dataReport:n})}).catch(function(t){e({type:"UPDATE_DATA_REPORT_PRODUCTIVITY",dataReport:[]})})}},w=p.a.createRef(),_=[],N={style:"thick",color:{argb:"black"}},V={style:"thin",color:{argb:"black"}},b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={dataReport:[]},n.onExporting=n.onExporting.bind(Object(d.a)(n)),n.toggleSearch=n.toggleSearch.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"toggleSearch",value:function(){this.props.actionToggleViewReport()}},{key:"exportGrid",value:function(){var e=new M.jsPDF,t=w.current.instance;Object(v.exportDataGrid)({jsPDFDocument:e,component:t}).then(function(){e.save("Customers.pdf")})}},{key:"setBorderCell",value:function(e,t,n,a){var i=e.getCell(t,n);i.border||(i.border={}),Object.assign(i.border,a)}},{key:"setBorders",value:function(e,t,n){var a=e.option(),i=a.showRowLines,o=a.showColumnLines,r=a.showBorders;if(i)for(var c=n.from.row;c<n.to.row;c++)for(var l=n.from.column;l<=n.to.column;l++)this.setBorderCell(t,c,l,{bottom:"borderStylePattern"});if(o)for(var u=n.from.row;u<=n.to.row;u++)for(var p=n.from.column;p<n.to.column;p++)-1===_.indexOf(u)&&this.setBorderCell(t,u,p,{right:"borderStylePattern"});if(r){for(var m=n.from.column;m<=n.to.column;m++)for(var h=n.from.row;h<=n.to.row;h++)this.setBorderCell(t,h,m,{left:V}),this.setBorderCell(t,h,m,{right:V}),this.setBorderCell(t,h,m,{top:V}),this.setBorderCell(t,h,m,{bottom:V});for(var d=n.from.column;d<=n.to.column;d++)this.setBorderCell(t,n.from.row,d,{top:N});for(var s=n.from.row;s<=n.to.row;s++)this.setBorderCell(t,s,n.from.column,{left:N});for(var g=n.from.row;g<=n.to.row;g++)this.setBorderCell(t,g,n.to.column,{right:N});for(var C=n.from.column;C<=n.to.column;C++)this.setBorderCell(t,n.to.row,C,{bottom:N})}}},{key:"onExporting",value:function(e){var t=this,n=new T.a.Workbook,a=n.addWorksheet("Main sheet");Object(S.exportDataGrid)({component:e.component,worksheet:a,topLeftCell:{row:6,column:1},customizeCell:function(e){var t=e.gridCell,n=e.excelCell;"group"!==t.rowType&&"totalFooter"!==t.rowType&&"groupFooter"!==t.rowType||_.push(n.fullAddress.row)}}).then(function(n){var i=a.getRow(1);i.height=22,a.mergeCells(1,1,1,t.props.viewOperator?33:11),i.getCell(1).value="Cty HH C\u01a1 Kh\xed \u0110\u1ed9ng L\u1ef1c To\xe0n C\u1ea7u",i.getCell(1).font={name:"Segoe UI Light",size:18,italic:!0},i.getCell(1).alignment={horizontal:"left"};var o=a.getRow(2);o.height=35,a.mergeCells(2,1,2,t.props.viewOperator?33:11),o.getCell(1).value="B\xc1O C\xc1O S\u1ea2N L\u01af\u1ee2NG C\u1ee6A QU\xc1 TR\xccNH S\u1ea2N XU\u1ea4T",o.getCell(1).font={name:"Segoe UI Light",size:25},o.getCell(1).alignment={horizontal:"center"};var r=a.getRow(3);r.height=20,a.mergeCells(3,1,3,t.props.viewOperator?33:11);var c=new Date;return r.getCell(1).value="Ng\xe0y "+c.getDate()+"   Th\xe1ng "+(parseInt(c.getMonth())+1)+"   N\u0103m "+c.getFullYear(),r.getCell(1).font={name:"Segoe UI Light",size:16},r.getCell(1).alignment={horizontal:"center"},t.setBorders(e.component,a,n),Promise.resolve()}).then(function(){n.xlsx.writeBuffer().then(function(e){E()(new Blob([e],{type:"application/octet-stream"}),"BaoCao_SanLuong.xlsx")})}),e.cancel=!0}},{key:"componentDidMount",value:function(){}},{key:"calTimeBegin",value:function(e){return new Date(Date.parse(e.date)-1e3*e.TimeProduct-1e3*e.TimePause).toLocaleString()}},{key:"calTimeFinish",value:function(e){return new Date(Date.parse(e.date)).toLocaleString()}},{key:"calNangSuat",value:function(e){return parseInt(e.AmountProduct)>0?parseInt((parseInt(e.TimeProduct)+parseInt(e.TimePause))/parseInt(e.AmountProduct)):0}},{key:"calNangSuatTB",value:function(e){return"Thay Khu\xf4n"==e.NameProduct||"S\u1eeda Khu\xf4n"==e.NameProduct?"85%":String(parseInt(e.TimeProduct)+parseInt(e.TimePause)>0?parseInt(100*(parseInt(e.AmountProduct)*parseInt(e.TieuChuanThoiGian)+85*parseInt(e.TimePause)/100)/(parseInt(e.TimeProduct)+parseInt(e.TimePause))):0)+" %"}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,{style:{justifyContent:"center",display:"flex"}},p.a.createElement("div",null,p.a.createElement(y.a,{id:"exportButton",icon:"search",text:"SEARCH",onClick:this.toggleSearch})),p.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},p.a.createElement(g.a,{id:"gridContainer",ref:w,dataSource:this.props.DataReport,showBorders:!0,showColumnLines:!0,showRowLines:!0,onExporting:this.onExporting,allowColumnReordering:!0,allowColumnResizing:!0},p.a.createElement(s.Scrolling,{mode:"virtual",rowRenderingMode:"virtual"}),p.a.createElement(s.Paging,{enabled:!1}),p.a.createElement(s.Paging,{defaultPageSize:100}),p.a.createElement(s.Selection,{mode:"multiple"}),p.a.createElement(s.Column,{caption:"Th\u1eddi Gian B\u1eaft \u0110\u1ea7u",calculateCellValue:this.calTimeBegin,width:170,alignment:"center"}),p.a.createElement(s.Column,{caption:"Th\u1eddi Gian K\u1ebft Th\xfac",calculateCellValue:this.calTimeFinish,width:170,alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdGroupOperator",caption:"M\xe3 Nh\xf3m",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameMachine",caption:"T\xean M\xe1y",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameProduct",caption:"T\xean S\u1ea3n Ph\u1ea9m",alignment:"center"}),p.a.createElement(s.Column,{dataField:"AmountProduct",caption:"S\u1ea3n L\u01b0\u1ee3ng",alignment:"center"}),p.a.createElement(s.Column,{caption:"Th\u1eddi Gian",alignment:"center"},p.a.createElement(s.Column,{dataField:"TimeProduct",caption:"TG L\xe0m Vi\u1ec7c",alignment:"center"}),p.a.createElement(s.Column,{dataField:"TimePause",caption:"TG D\u1eebng",alignment:"center"})),p.a.createElement(s.Column,{dataField:"TieuChuanThoiGian",caption:"Ti\xeau Chu\u1ea9n 1 pcs",alignment:"center"}),p.a.createElement(s.Column,{caption:"TG Th\u1ef1c/1 SP",calculateCellValue:this.calNangSuat,width:130,alignment:"center"}),p.a.createElement(s.Column,{caption:"N\u0103ng Su\u1ea5t (%)",calculateCellValue:this.calNangSuatTB,width:130,alignment:"center"}),this.props.viewOperator?p.a.createElement(s.Column,{caption:"Danh S\xe1ch Nh\xe2n Vi\xean",alignment:"center"},p.a.createElement(s.Column,{dataField:"IdOperator1",caption:"M\xe3 NV 1",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator1",caption:"T\xean NV 1",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator2",caption:"M\xe3 NV 2",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator2",caption:"T\xean NV 2",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator3",caption:"M\xe3 NV 3",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator3",caption:"T\xean NV 3",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator4",caption:"M\xe3 NV 4",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator4",caption:"T\xean NV 4",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator5",caption:"M\xe3 NV 5",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator5",caption:"T\xean NV 5",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator6",caption:"M\xe3 NV 6",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator6",caption:"T\xean NV 6",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator7",caption:"M\xe3 NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator7",caption:"T\xean NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator8",caption:"M\xe3 NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator8",caption:"T\xean NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator9",caption:"M\xe3 NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator9",caption:"T\xean NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator10",caption:"M\xe3 NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator10",caption:"T\xean NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"IdOperator11",caption:"M\xe3 NV 7",alignment:"center"}),p.a.createElement(s.Column,{dataField:"NameOperator11",caption:"T\xean NV 7",alignment:"center"})):"",p.a.createElement(s.Export,{enabled:!0,allowExportSelectedData:!0}))))}}]),t}(u.Component),j=Object(m.b)(function(e){return{DataReport:e.report_ProjectStampingMachineProductivity.dataReport,viewOperator:e.report_ProjectStampingMachineProductivity.viewOperator}},function(e,t){return{actionToggleViewReport:function(){e(R())}}})(b),D=n(441),k=n.n(D),F=n(510),A=n.n(F),x=n(357),U=n.n(x),B=n(641),Y=n.n(B),G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).onGetTimeStart=function(e){n.props.actionSetStartTime(e.value)},n.onGetTimeStop=function(e){n.props.actionSetStopTime(e.value)},n.onClick=function(){n.props.actionToggleViewReport()},n.handleChange=function(e){e.target.checked?n.props.actionSetViewOperator():n.props.actionResetViewOperator()},n.handleChangeMachine1=function(e){e.target.checked?n.props.actionSetMachine1Productivity():n.props.actionResetMachine1Productivity()},n.handleChangeMachine2=function(e){e.target.checked?n.props.actionSetMachine2Productivity():n.props.actionResetMachine2Productivity()},n.handleChangeMachine3=function(e){e.target.checked?n.props.actionSetMachine3Productivity():n.props.actionResetMachine3Productivity()},n.handleChangeMachine4=function(e){e.target.checked?n.props.actionSetMachine4Productivity():n.props.actionResetMachine4Productivity()},n.handleChangeMachine5=function(e){e.target.checked?n.props.actionSetMachine5Productivity():n.props.actionResetMachine5Productivity()},n.handleChangeMachine6=function(e){e.target.checked?n.props.actionSetMachine6Productivity():n.props.actionResetMachine6Productivity()},n.handleChangeMachine7=function(e){e.target.checked?n.props.actionSetMachine7Productivity():n.props.actionResetMachine7Productivity()},n.onGetTimeStart=n.onGetTimeStart.bind(Object(d.a)(n)),n.onClick=n.onClick.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return p.a.createElement(k.a,{className:"container center mt-5",style:{maxWidth:600,backgroundColor:"gray"}},p.a.createElement("h2",{style:{justifyContent:"center",display:"flex"}},"Time Start"),p.a.createElement("div",{className:"dx-field",style:{justifyContent:"center"}},p.a.createElement(A.a,{defaultValue:new Date,type:"datetime",value:this.props.StartTime,onValueChanged:this.onGetTimeStart})),p.a.createElement("h2",{style:{justifyContent:"center",display:"flex"}},"Time End"),p.a.createElement("div",{className:"dx-field",style:{justifyContent:"center"}},p.a.createElement(A.a,{defaultValue:new Date,type:"datetime",value:this.props.StopTime,onValueChanged:this.onGetTimeStop})),p.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},p.a.createElement(y.a,{id:"exportButton",icon:"search",text:"SEARCH",onClick:this.onClick})),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.viewOperator,onChange:this.handleChange}),label:"Report C\xf3 Danh S\xe1ch C\xf4ng Nh\xe2n"}),p.a.createElement("br",null),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine1,onChange:this.handleChangeMachine1}),label:"M\xe1y 1"}),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine2,onChange:this.handleChangeMachine2}),label:"M\xe1y 2"}),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine3,onChange:this.handleChangeMachine3}),label:"M\xe1y 3"}),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine4,onChange:this.handleChangeMachine4}),label:"M\xe1y 4"}),p.a.createElement("br",null),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine5,onChange:this.handleChangeMachine5}),label:"M\xe1y 5"}),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine6,onChange:this.handleChangeMachine6}),label:"M\xe1y 6"}),p.a.createElement(U.a,{control:p.a.createElement(Y.a,{checked:this.props.Machine7,onChange:this.handleChangeMachine7}),label:"M\xe1y 7"}))}}]),t}(u.Component),H=Object(m.b)(function(e){return{StartTime:e.report_ProjectStampingMachineProductivity.StartTime,StopTime:e.report_ProjectStampingMachineProductivity.StopTime,viewOperator:e.report_ProjectStampingMachineProductivity.viewOperator,Machine1:e.report_ProjectStampingMachineProductivity.Machine1,Machine2:e.report_ProjectStampingMachineProductivity.Machine2,Machine3:e.report_ProjectStampingMachineProductivity.Machine3,Machine4:e.report_ProjectStampingMachineProductivity.Machine4,Machine5:e.report_ProjectStampingMachineProductivity.Machine5,Machine6:e.report_ProjectStampingMachineProductivity.Machine6,Machine7:e.report_ProjectStampingMachineProductivity.Machine7}},function(e,t){return{actionToggleViewReport:function(){e(R())},actionSetStartTime:function(t){var n;e((n=t,function(e){e({type:"SET_START_TIME_PRODUCTIVITY",StartTime:n})}))},actionSetStopTime:function(t){var n;e((n=t,function(e){e({type:"SET_STOP_TIME_PRODUCTIVITY",StopTime:n})}))},actionSetViewOperator:function(){e(function(e){e({type:"SET_VIEW_OPERATOR_PRODUCTIVITY"})})},actionResetViewOperator:function(){e(function(e){e({type:"RESET_VIEW_OPERATOR_PRODUCTIVITY"})})},actionSetMachine1Productivity:function(){e(function(e){e({type:"SET_MACHINE1_PRODUCTIVITY"})})},actionSetMachine2Productivity:function(){e(function(e){e({type:"SET_MACHINE2_PRODUCTIVITY"})})},actionSetMachine3Productivity:function(){e(function(e){e({type:"SET_MACHINE3_PRODUCTIVITY"})})},actionSetMachine4Productivity:function(){e(function(e){e({type:"SET_MACHINE4_PRODUCTIVITY"})})},actionSetMachine5Productivity:function(){e(function(e){e({type:"SET_MACHINE5_PRODUCTIVITY"})})},actionSetMachine6Productivity:function(){e(function(e){e({type:"SET_MACHINE6_PRODUCTIVITY"})})},actionSetMachine7Productivity:function(){e(function(e){e({type:"SET_MACHINE7_PRODUCTIVITY"})})},actionResetMachine1Productivity:function(){e(function(e){e({type:"RESET_MACHINE1_PRODUCTIVITY"})})},actionResetMachine2Productivity:function(){e(function(e){e({type:"RESET_MACHINE2_PRODUCTIVITY"})})},actionResetMachine3Productivity:function(){e(function(e){e({type:"RESET_MACHINE3_PRODUCTIVITY"})})},actionResetMachine4Productivity:function(){e(function(e){e({type:"RESET_MACHINE4_PRODUCTIVITY"})})},actionResetMachine5Productivity:function(){e(function(e){e({type:"RESET_MACHINE5_PRODUCTIVITY"})})},actionResetMachine6Productivity:function(){e(function(e){e({type:"RESET_MACHINE6_PRODUCTIVITY"})})},actionResetMachine7Productivity:function(){e(function(e){e({type:"RESET_MACHINE7_PRODUCTIVITY"})})}}})(G),L=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.userName?p.a.createElement("div",{style:{width:"100%",margin:"auto"}},p.a.createElement("div",{className:"container-flat",style:{padding:"0px"}},p.a.createElement("div",{className:"row",style:{paddingLeft:"1px",paddingRight:"0px"}},this.props.ViewReport?p.a.createElement(j,null):p.a.createElement(H,null)))):p.a.createElement(h.c,{to:"/login"})}}]),t}(u.Component);t.default=Object(m.b)(function(e){return{ViewReport:e.report_ProjectStampingMachineProductivity.ViewReport,userName:e.auth.userName}})(L)}}]);
//# sourceMappingURL=86.15dba876.chunk.js.map