(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,a){e.exports=a(88)},61:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(61),a(55)),s=a(54),l=a(16),u=a.n(l),p=a(40),m=a(20),h=a(22),d=a(23),y=a(36),C=a(24),E=a(38),w=(a(65),"2da54c7d14778f06f7bad485bfdf0c3d"),f=a(91),k=a(93),b=a(90),g=a(92),v=function(e){function t(){return Object(h.a)(this,t),Object(y.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.onClick,n=e.weatherDescription,c=e.layers,i=void 0===c?[]:c;return r.a.createElement(f.a,{center:t,zoom:11,onClick:a},r.a.createElement(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),i.map(function(e){return r.a.createElement(k.a,{key:e,attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tile.openweathermap.org/map/".concat(e,"/{z}/{x}/{y}.png?appid=").concat(w)})}),r.a.createElement(b.a,{position:t},r.a.createElement(g.a,null,n)))}}]),t}(r.a.Component),N=a(43),D=a.n(N),O=function(e){if(e<0)throw new Error("below absolute zero (0 K)");return parseInt(e-273.15)},x=function(){var e=Object(m.a)(u.a.mark(function e(t,a){var n,r,c,i,o,s,l,p,m,h,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&APPID=").concat(w));case 3:return n=e.sent,r=n.data,console.log(r),c=O(r.main.temp),i=r.weather[0],o=i.description,s=i.icon,l=r.name,p=r.main.pressure,m=r.main.humidity,h=r.wind.deg,d=r.wind.speed,e.abrupt("return",{temperature:c,icon:s,description:o,cityName:l,currentElementDetails:{cityName:l,currentTemp:c,icon:s,description:o,pressure:p,humidity:m,windDeg:h,windSpeed:d}});case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[0,16]])}));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(u.a.mark(function e(){var t,a,n,r,c,i,o,s,l,p,m,h,d=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:"",a=d.length>1&&void 0!==d[1]?d[1]:"",e.prev=2,e.next=5,D.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(t,"&APPID=").concat(w));case 5:return n=e.sent,r=n.data,c=O(r.main.temp),i=r.weather[0],o=i.description,s=i.icon,l=r.name,p=r.coord,m=r.main.pressure,h=r.main.humidity,e.abrupt("return",{temperature:c,icon:s,description:o,position:p,cityName:l,currentElementDetails:{cityName:l,currentTemp:c,icon:s,description:o,pressure:m,humidity:h}});case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[2,16]])}));return function(){return e.apply(this,arguments)}}(),S=function(e){return"http://openweathermap.org/img/w/".concat(e,".png")},U=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).onMapClick=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.latlng,r=n.lat,c=n.lng,x(r,c).then(function(e){if(e){var t=a.getUpdatedArray(e.currentElementDetails);a.setState(Object(p.a)({},e,{arrWeatherData:t}))}}),a.setState({position:[r,c]});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.isChecked=function(e){return a.state.layers.includes(e)},a.onCheckboxClick=function(e){var t=e.target.value;console.log(t),a.isChecked(t)?a.setState(function(e){return{layers:e.layers.filter(function(e){return e!==t})}}):a.setState(function(e){return{layers:[].concat(Object(s.a)(e.layers),[t])}})},a.onChangeCountry=function(e){a.setState({inputUserCountry:e.target.value}),console.log(a.state.inputUserCountry)},a.onChangeCity=function(e){a.setState({inputUserCity:e.target.value}),console.log(a.state.inputUserCity)},a.searchByPlace=function(){j(a.state.inputUserCountry,a.state.inputUserCity).then(function(e){if(e){var t=a.getUpdatedArray(e.currentElementDetails);a.setState(Object(p.a)({},e,{inputUserCountry:"",inputUserCity:"",arrWeatherData:t}))}else a.setState({inputUserCountry:"",inputUserCity:""})})},a.getUpdatedArray=function(e){var t=a.state.arrWeatherData;return t.push(e),t},a.state={position:[32.0853,34.7818],cityName:"",icon:"",description:"",temperature:0,layers:[],inputUserCountry:"",inputUserCity:"",arrWeatherData:[]},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(o.a)(this.state.position,2),a=t[0],n=t[1];x(a,n).then(function(t){if(t){var a=e.getUpdatedArray(t.currentElementDetails);e.setState(Object(p.a)({},t,{arrWeatherData:a}))}})}},{key:"render",value:function(){var e=this.state,t=e.position,a=e.description,n=e.icon,c=e.temperature,i=e.cityName,o=e.layers,s=e.arrWeatherData.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{"data-title":"City Name"},e.cityName),r.a.createElement("td",{"data-title":"Degree"},e.currentTemp,"\xb0"),r.a.createElement("td",{"data-title":"Icon"},r.a.createElement("img",{alt:"".concat(a," icon"),className:"iconSmall",src:S(e.icon)})),r.a.createElement("td",{"data-title":"Description"},e.description),r.a.createElement("td",{"data-title":"Humidity"},e.humidity),r.a.createElement("td",{"data-title":"Pressure"},e.pressure),r.a.createElement("td",{"data-title":"Wind Degree"},e.windDeg),r.a.createElement("td",{"data-title":"Wind Speed"},e.windSpeed))});return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Geo weather app")),r.a.createElement("main",null,r.a.createElement("div",{className:"map-wrapper border"},r.a.createElement(v,{position:t,onClick:this.onMapClick,weatherDescription:a,layers:o})),r.a.createElement("section",{className:"action-panel"},r.a.createElement("section",{className:"weather-data border card"},r.a.createElement("img",{alt:"".concat(a," icon"),className:"icon",src:S(n)}),r.a.createElement("h2",null,"".concat(i)),r.a.createElement("p",null,"".concat(a)),r.a.createElement("p",null,"".concat(c)," \xb0 Celsisus")),r.a.createElement("section",{className:"add-weather-layer border card"},r.a.createElement("h2",null,"Add layers"),r.a.createElement("div",{className:"layers-wrapper"},r.a.createElement("section",{className:"checkbox-group"},r.a.createElement(W,{label:"temperature layer",value:"temp_new",onClick:this.onCheckboxClick,isChecked:this.isChecked("temp_new")}),r.a.createElement(W,{label:"precipitation layer",value:"precipitation_new",onClick:this.onCheckboxClick,isChecked:this.isChecked("precipitation_new")}),r.a.createElement(W,{label:"wind speed",value:"wind_new",onClick:this.onCheckboxClick,isChecked:this.isChecked("wind_new")})),r.a.createElement("section",{className:"checkbox-group"},r.a.createElement(W,{label:"Sea level pressure",value:"pressure_new",onClick:this.onCheckboxClick,isChecked:this.isChecked("pressure_new")}),r.a.createElement(W,{label:"clouds layer",value:"clouds_new",onClick:this.onCheckboxClick,isChecked:this.isChecked("clouds_new")})))),r.a.createElement("section",{className:"card border input-container"},r.a.createElement("div",{className:"input-user"},r.a.createElement("span",{className:"spanInput"},"country:"),r.a.createElement("input",{value:this.state.inputUserCountry,onChange:this.onChangeCountry,className:"input",id:"countryInput"}),r.a.createElement("span",{className:"spanInput"},"city:"),r.a.createElement("input",{value:this.state.inputUserCity,required:!0,onChange:this.onChangeCity,className:"input",id:"cityInput"}),r.a.createElement("button",{className:"btn",onClick:this.searchByPlace},"Search")))),r.a.createElement("div",{className:"table-container"},r.a.createElement("table",{className:"responsive-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"City name"),r.a.createElement("th",{scope:"col"},"Degree"),r.a.createElement("th",{scope:"col"},"Icon"),r.a.createElement("th",{scope:"col"},"Description"),r.a.createElement("th",{scope:"col"},"Humidity"),r.a.createElement("th",{scope:"col"},"Pressure"),r.a.createElement("th",{scope:"col"},"Wind degree"),r.a.createElement("th",{scope:"col"},"Wind speed"))),r.a.createElement("tbody",null,s)))))}}]),t}(n.Component),W=function(e){var t=e.isChecked,a=e.onClick,n=e.value,c=e.label;return r.a.createElement("span",null,r.a.createElement("input",{onClick:a,type:"checkbox",value:n,checked:t})," ",c)},I=U;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,2,1]]]);
//# sourceMappingURL=main.abe3b26d.chunk.js.map