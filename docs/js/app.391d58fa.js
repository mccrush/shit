(function(a){function t(t){for(var e,r,i=t[0],o=t[1],l=t[2],v=0,b=[];v<i.length;v++)r=i[v],Object.prototype.hasOwnProperty.call(d,r)&&d[r]&&b.push(d[r][0]),d[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);n&&n(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),c()}function c(){for(var a,t=0;t<s.length;t++){for(var c=s[t],e=!0,i=1;i<c.length;i++){var o=c[i];0!==d[o]&&(e=!1)}e&&(s.splice(t--,1),a=r(r.s=c[0]))}return a}var e={},d={app:0},s=[];function r(t){if(e[t])return e[t].exports;var c=e[t]={i:t,l:!1,exports:{}};return a[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=a,r.c=e,r.d=function(a,t,c){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:c})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)r.d(c,e,function(t){return a[t]}.bind(null,e));return c},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/shit/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var n=o;s.push([0,"chunk-vendors"]),c()})({0:function(a,t,c){a.exports=c("56d7")},1509:function(a,t,c){},"1b6c":function(a,t,c){},"4a07":function(a,t,c){},"56d7":function(a,t,c){"use strict";c.r(t);var e=c("7a23");const d={class:"container"};function s(a,t,c,s,r,i){const o=Object(e["l"])("Header"),l=Object(e["l"])("Nav"),n=Object(e["l"])("Footer");return Object(e["h"])(),Object(e["d"])("div",d,[Object(e["g"])(o),Object(e["g"])(l,{onMytab:i.getComponent},null,8,["onMytab"]),Object(e["g"])(e["b"],{name:"fade",mode:"out-in"},{default:Object(e["o"])(()=>[(Object(e["h"])(),Object(e["d"])(Object(e["m"])(r.myComponent)))]),_:1}),Object(e["g"])(n)])}c("ab8b");const r={class:"navbar"},i=Object(e["g"])("div",{class:"container-fluid justify-content-center"},[Object(e["g"])("h1",null,[Object(e["f"])("Electro "),Object(e["g"])("small",null,"⚡"),Object(e["f"])(" Shit")])],-1);function o(a,t){return Object(e["h"])(),Object(e["d"])("header",r,[i])}const l={};l.render=o;var n=l;const v=Object(e["p"])("data-v-e8aa2efe");Object(e["j"])("data-v-e8aa2efe");const b={class:"row"},f={class:"col-4"},m={class:"col-4"},p={class:"col-4"};Object(e["i"])();const g=v((a,t,c,d,s,r)=>(Object(e["h"])(),Object(e["d"])("nav",b,[Object(e["g"])("div",f,[Object(e["g"])("button",{class:"btn btn-block btn-light w-100 router-link-active",onClick:t[1]||(t[1]=a=>r.selectTab("Home",a)),ref:"home"}," Щит ",512)]),Object(e["g"])("div",m,[Object(e["g"])("button",{class:"btn btn-block btn-light w-100",onClick:t[2]||(t[2]=a=>r.selectTab("Shem",a)),ref:"shem"}," Схемы ",512)]),Object(e["g"])("div",p,[Object(e["g"])("button",{class:"btn btn-block btn-light w-100",onClick:t[3]||(t[3]=a=>r.selectTab("Sprav",a)),ref:"sprav"}," Справка ",512)])])));var h={methods:{selectTab(a,t){this.$emit("mytab",a),this.$refs.home.classList.remove("router-link-active"),this.$refs.shem.classList.remove("router-link-active"),this.$refs.sprav.classList.remove("router-link-active"),t.target.classList.add("router-link-active")}}};c("fe69");h.render=g,h.__scopeId="data-v-e8aa2efe";var u=h;const j=Object(e["p"])("data-v-dc38dca4");Object(e["j"])("data-v-dc38dca4");const O={class:"footer text-center border-top mt-3 pt-2 pb-2"},y=Object(e["g"])("small",null,[Object(e["f"])("© 2021 «Electro Shit»  •   "),Object(e["g"])("a",{href:"https://github.com/mccrush/shit",target:"_blank",title:"Fork on Github"},"Fork on Github")],-1);Object(e["i"])();const k=j((a,t)=>(Object(e["h"])(),Object(e["d"])("footer",O,[y])));c("9634");const _={};_.render=k,_.__scopeId="data-v-dc38dca4";var x=_;const w=Object(e["p"])("data-v-38d0199a");Object(e["j"])("data-v-38d0199a");const S={class:"section"},C={class:"accordion",id:"accordionExample"},P={class:"accordion-body"},H={class:"image-cover d-flex justify-content-center"},I={class:"mt-2 mb-0"};Object(e["i"])();const M=w((a,t,c,d,s,r)=>(Object(e["h"])(),Object(e["d"])("section",S,[Object(e["g"])("div",C,[(Object(e["h"])(!0),Object(e["d"])(e["a"],null,Object(e["k"])(s.elements,(a,t)=>(Object(e["h"])(),Object(e["d"])("div",{class:"accordion-item",key:"el"+t},[Object(e["g"])("h2",{class:"accordion-header",id:"heading"+t},[Object(e["g"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+t,"aria-expanded":"false","aria-controls":"collapse"+t},Object(e["n"])(a.title),9,["data-bs-target","aria-controls"])],8,["id"]),Object(e["g"])("div",{id:"collapse"+t,class:"accordion-collapse collapse","aria-labelledby":"heading"+t,"data-bs-parent":"#accordionExample"},[Object(e["g"])("div",P,[Object(e["g"])("div",H,[Object(e["g"])("a",{"data-fancybox":"gallery",href:a.img,"data-caption":a.title},[Object(e["g"])("img",{src:a.img,width:"128",height:"128",alt:a.title,class:"item-image"},null,8,["src","alt"])],8,["href","data-caption"])]),Object(e["g"])("p",I,Object(e["n"])(a.description),1)])],8,["id","aria-labelledby"])]))),128))])])));c("7b17");var T=[{title:"Вводной автомат",description:"Это аппарат коммутации, устанавливаемый перед счетчиком, который позволяет автоматически обесточить линию при аварийной ситуации, или при ремонта проводки. Вводной автомат обычно устанавливают на лестничной площадке или снаружи дома, на улице",img:"img/blocks/vvod.jpg"},{title:"Счетчик",description:"Это прибор для измерения расхода электроэнергии переменного или постоянного тока (обычно в кВт·ч или А·ч)",img:"img/blocks/schetchik.jpg"},{title:"Вольтметр",description:"Это электроизмерительный прибор непосредственного отсчёта для определения напряжения или ЭДС в электрических цепях. Подключается параллельно нагрузке или источнику электрической энергии",img:"img/blocks/voltmetr.png"},{title:"УЗМ",description:"УЗМ расшифровывается, как «устройство защиты многофункциональное». Этот универсальный аппарат защитит электрооборудование от скачков напряжения, импульсных помех, повышенного или пониженного напряжения в сети",img:"img/blocks/stabil.jpg"},{title:"УЗО",description:"Расшифровывается как «устройство защитного отключения», а специалисты предпочитают называть его выключателем дифференциального тока. Прибор предназначен для отслеживания утечек тока, возникающих при повреждении электропроводки и электроприборов",img:"img/blocks/uzo.webp"},{title:"Автомат",description:"Автоматический выключатель — это контактный коммутационный аппарат, который предназначен для включения и отключения электрической цепи, защиты кабелей, проводов и электрических приборов от токов перегрузки и от токов короткого замыкания",img:"img/blocks/avtomat.jpg"}],E={name:"Home",data(){return{elements:T}}};c("5e37");E.render=M,E.__scopeId="data-v-38d0199a";var F=E;const L=Object(e["p"])("data-v-8750273c");Object(e["j"])("data-v-8750273c");const $={class:"section"},z=Object(e["e"])('<div class="row" data-v-8750273c><div class="col-sm-4" data-v-8750273c><a data-fancybox="gallery" href="img/shems/schet.png" class="card h-100" data-v-8750273c><img src="img/shems/icons/schet.svg" class="card-img-top" alt="Схема подключения электросчетчика" data-v-8750273c><div class="card-body" data-v-8750273c><h5 class="card-title" data-v-8750273c>Элетро­счетчик</h5></div></a></div><div class="col-sm-4" data-v-8750273c><a data-fancybox="gallery" href="img/shems/prohod.png" class="card h-100 mt-2 mt-sm-0" data-v-8750273c><img src="img/shems/icons/prohod.svg" class="card-img-top" alt="Схема подключения проходного выключателя" data-v-8750273c><div class="card-body" data-v-8750273c><h5 class="card-title" data-v-8750273c>Проход­ной<br data-v-8750273c>выклю­чатель</h5></div></a></div></div>',1);Object(e["i"])();const G=L((a,t,c,d,s,r)=>(Object(e["h"])(),Object(e["d"])("section",$,[z])));var J={name:"Shem"};c("86b9");J.render=G,J.__scopeId="data-v-8750273c";var N=J;const A=Object(e["p"])("data-v-c1faceda");Object(e["j"])("data-v-c1faceda");const U=Object(e["e"])('<section class="section" data-v-c1faceda><h4 class="margin-h4" data-v-c1faceda>Расчет сечения кабеля и мощности автомата</h4><div class="row" data-v-c1faceda><div class="col-sm-8" data-v-c1faceda><ul data-v-c1faceda><li data-v-c1faceda>1 мм кабеля выдерживает до 9 А, или до 2 кВт</li><li data-v-c1faceda>Лучше медные, одножильные</li><li data-v-c1faceda>Все многожильные обжимать или залуживать</li><li data-v-c1faceda> Все скрутки обжимать или пропаивать, но лучше ч/з клеммы Вага </li><li data-v-c1faceda> УЗО на розетки (но можно и на свет и на ванную и на плиту и на климат) </li><li data-v-c1faceda> Автоматы (по комнатам, отдельно на свет, отдельно на розетки, отдельно на мощные эл. приборы) </li></ul></div><div class="col-sm-4" data-v-c1faceda><a data-fancybox="gallery" href="img/sprav/color_coding.jpg" class="card" data-v-c1faceda><img src="img/sprav/icons/color_coding.png" class="card-img-top" alt="Маркировка проводов" data-v-c1faceda><div class="card-body" data-v-c1faceda><h5 class="card-title" data-v-c1faceda>Маркировка проводов</h5></div></a></div></div><table class="table table-striped table-bordered table-hover" data-v-c1faceda><tr data-v-c1faceda><th data-v-c1faceda>Нагруз­ка</th><th data-v-c1faceda>Мощн. кВт</th><th data-v-c1faceda>Кабель мм<sup data-v-c1faceda>2</sup></th><th data-v-c1faceda>Авто­мат А</th><th data-v-c1faceda>Ошиб­ка</th></tr><tr data-v-c1faceda><td class="text-start" data-v-c1faceda>Свет</td><td data-v-c1faceda>0 - 2,8</td><td data-v-c1faceda>1,5</td><td data-v-c1faceda>10</td><td class="td-error" data-v-c1faceda>16</td></tr><tr data-v-c1faceda><td class="text-start" data-v-c1faceda>Розетки</td><td data-v-c1faceda>2,9 - 4,5</td><td data-v-c1faceda>2,5</td><td data-v-c1faceda>16</td><td class="td-error" data-v-c1faceda>25</td></tr><tr data-v-c1faceda><td class="text-start" data-v-c1faceda>Духовка</td><td data-v-c1faceda>4,6 - 5,8</td><td data-v-c1faceda>4</td><td data-v-c1faceda>20</td><td class="td-error" data-v-c1faceda>32</td></tr><tr data-v-c1faceda><td class="text-start" data-v-c1faceda>Водо­нагрев.,<br data-v-c1faceda>конфор­ки</td><td data-v-c1faceda>5,9 - 7,3</td><td data-v-c1faceda>6</td><td data-v-c1faceda>32</td><td class="td-error" data-v-c1faceda>40</td></tr></table></section><hr data-v-c1faceda><section data-v-c1faceda><h4 class="margin-h4" data-v-c1faceda>Единицы измерения</h4><div class="row" data-v-c1faceda><div class="col-sm-8" data-v-c1faceda><ul data-v-c1faceda><li data-v-c1faceda> Напряжение (U, вольт) - разность потенциалов (скорость электронов) </li><li data-v-c1faceda> Сила тока (I, ампер) - количество электронов за секунду ч-з поверхность </li><li data-v-c1faceda> Мощность (P, ватт) - произведение мгновенных значений напряжения и силы тока на участке цепи </li></ul></div><div class="col-sm-4" data-v-c1faceda><a data-fancybox="gallery" href="img/sprav/zakon_oma.jpg" class="card h-100" data-v-c1faceda><img src="img/sprav/icons/formul.svg" class="card-img-top" alt="Формулы расчета" data-v-c1faceda><div class="card-body" data-v-c1faceda><h5 class="card-title" data-v-c1faceda>Формулы расчета</h5></div></a></div></div></section><hr data-v-c1faceda><section data-v-c1faceda><h4 class="margin-h4" data-v-c1faceda>Отличия ламп</h4><div class="row" data-v-c1faceda><div class="col-sm-6" data-v-c1faceda><a data-fancybox="gallery" href="img/sprav/lampa_wat.jpg" class="card h-100" data-v-c1faceda><img src="img/sprav/icons/vidlamp.svg" class="card-img-top" alt="Виды ламп" data-v-c1faceda><div class="card-body" data-v-c1faceda><h5 class="card-title" data-v-c1faceda>Виды­ ламп</h5></div></a></div><div class="col-sm-6" data-v-c1faceda><a data-fancybox="gallery" href="img/sprav/lampa_temp2.png" class="card h-100 mt-2 mt-sm-0" data-v-c1faceda><img src="img/sprav/icons/lamp.svg" class="card-img-top" alt="Температуры ламп" data-v-c1faceda><div class="card-body" data-v-c1faceda><h5 class="card-title" data-v-c1faceda>Темпе­ратуры ламп</h5></div></a></div></div></section>',5);Object(e["i"])();const q=A((a,t,c,d,s,r)=>(Object(e["h"])(),Object(e["d"])("div",null,[U])));var B={name:"Sprav"};c("a628");B.render=q,B.__scopeId="data-v-c1faceda";var D=B,K={name:"App",components:{Header:n,Nav:u,Footer:x,Home:F,Shem:N,Sprav:D},data(){return{myComponent:"Home"}},methods:{getComponent(a){this.myComponent=a}}};c("706f");K.render=s;var Q=K;Object(e["c"])(Q).mount("#app")},"5e37":function(a,t,c){"use strict";c("1509")},"5ef8":function(a,t,c){},"706f":function(a,t,c){"use strict";c("1b6c")},"86b9":function(a,t,c){"use strict";c("4a07")},"88b4":function(a,t,c){},9634:function(a,t,c){"use strict";c("88b4")},a5e1:function(a,t,c){},a628:function(a,t,c){"use strict";c("a5e1")},fe69:function(a,t,c){"use strict";c("5ef8")}});