(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(27)},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=(a(17),a(7)),c=a(8),o=a(1),u=a(4),i=a(5),p=a(9),m=a(6),y=a(10),v=(a(19),{displayValue:"0",clearDisplay:!1,operator:null,values:[],isDisplayResult:!1,current:0}),f={"/":function(e,t){return e/t},"*":function(e,t){return e*t},"-":function(e,t){return e-t},"+":function(e,t){return e+t}},d=function(e){return new Intl.NumberFormat("en-US").format(parseFloat(e))},h=(a(21),function(e){var t=e.text;return r.a.createElement("h1",{className:"title"},t)});h.defaultProps={text:"Calculator"};var b=Object(n.memo)(h),k=(a(23),Object(n.memo)(function(e){var t=e.value;return r.a.createElement("div",{className:"display"},t)})),O=[{name:"AC",class:"double",type:"clear"},{name:"%",class:"",type:"perc"},{name:"/",class:"operator",type:"operation"},{name:"7",class:"",type:""},{name:"8",class:"",type:""},{name:"9",class:"",type:""},{name:"*",class:"operator",type:"operation"},{name:"4",class:"",type:""},{name:"5",class:"",type:""},{name:"6",class:"",type:""},{name:"-",class:"operator",type:"operation"},{name:"1",class:"",type:""},{name:"2",class:"",type:""},{name:"3",class:"",type:""},{name:"+",class:"operator",type:"operation"},{name:"0",class:"double",type:""},{name:".",class:"",type:""},{name:"=",class:"operator",type:"result"}],j=(a(25),Object(n.memo)(function(e){var t=e.label;return r.a.createElement("button",{className:"btn ".concat(t.class),onClick:function(e){e.preventDefault(),document.dispatchEvent(new CustomEvent("btnclick",{detail:t}))}},t.name)})),E=Object(n.memo)(function(){return O.map(function(e){return r.a.createElement(j,{key:e.name,label:e})})}),w=Object(n.memo)(function(e){var t=e.value;return r.a.createElement(n.Fragment,null,r.a.createElement(k,{value:d(t)}),r.a.createElement(E,null))}),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(o.a)({},v),a.calc=function(e,t){var n=a.state.operator;return f[n](e,t)},a.handleClick=function(e){var t=e.detail,n=t.type,r=t.name;switch(n){case"clear":a.clearMemory();break;case"operation":a.setOperation(r);break;case"result":a.showResult();break;case"perc":a.calcPercentage();break;default:a.addDigit(r)}},a}return Object(y.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("btnclick",this.handleClick)}},{key:"clearMemory",value:function(){this.setState(Object(o.a)({},v))}},{key:"setOperation",value:function(e){var t=this.state,a=t.current,n=t.operator,r=t.isDisplayResult,l=t.displayValue;if(n&&e!==n)return this.setState({operator:e}),void this.showResult();if(r){var s=parseFloat(l);a=0,this.setState({values:[s]})}a++,this.setState({current:a,operator:e,clearDisplay:!0,isDisplayResult:!1})}},{key:"addDigit",value:function(e){var t=this.state,a=t.current,n=t.displayValue,r=t.clearDisplay,l=t.values;if("."!==e||!n.includes(".")){var s="".concat("0"===n||r?"":n).concat(e);"."!==e&&(l[a]=parseFloat(s),this.setState({values:l})),this.setState({displayValue:s,clearDisplay:!1})}}},{key:"showResult",value:function(){var e=this.state,t=e.operator,a=e.values;if(t&&!(a.length<2)){var n=Object(c.a)(a).reduce(this.calc);this.setState({displayValue:n,values:[n],clearDisplay:!0,isDisplayResult:!0})}}},{key:"calcPercentage",value:function(){var e=this.state,t=e.operator,a=Object(s.a)(e.values,2),n=a[0],r=a[1];t&&this.setState({displayValue:this.calc(n,n/100*r)})}},{key:"render",value:function(){var e=this.state.displayValue;return r.a.createElement("div",{className:"calculator"},r.a.createElement(b,null),r.a.createElement(w,{value:e}))}}]),t}(n.Component);Object(l.render)(r.a.createElement(D,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.e20d65ea.chunk.js.map