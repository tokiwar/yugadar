(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,4,14],{425:function(e,t,n){e.exports=n.p+"img/moroj1.57f5acf.png"},426:function(e,t,n){"use strict";n.r(t);var c={name:"TopTextSection",props:["SectionData"],data:function(){return{classNameStatic:"flex flex-row justify-center items-center select-none text-center"}},computed:{className:function(){return this.$device.isDesktop?"h-96 "+this.SectionData.color+" "+this.classNameStatic:"h-48 "+this.SectionData.color+" "+this.classNameStatic}}},r=n(17),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.SectionData.title||e.SectionData.subtitle?n("section",{class:e.className},[n("div",{staticClass:"text-white flex flex-col justify-center items-center font-black"},[e.SectionData.title?n("span",{class:{"text-6xl":e.$device.isDesktop,"text-2xl":!e.$device.isDesktop}},[e._v(e._s(e.SectionData.title))]):e._e(),e._v(" "),e.SectionData.subtitle?n("span",{class:{"text-9xl":e.$device.isDesktop,"text-5xl":!e.$device.isDesktop}},[e._v(e._s(e.SectionData.subtitle))]):e._e()])]):e._e()}),[],!1,null,null,null);t.default=component.exports},437:function(e,t,n){"use strict";n.r(t);var c=n(427),r=(n(428),{name:"Catalog",props:["items"],components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},data:function(){return{swiperOptions:{loop:!0,initialSlide:0,autoplay:{delay:3e3,disableOnInteraction:!1}}}}}),o=n(17),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-20 font-bold",class:{"flex flex-col justify-center items-center text-center":e.$device.isDesktop}},[n("div",{class:{"text-7xl w-4/6":e.$device.isDesktop,"text-5xl text-center":!e.$device.isDesktop}},[e._v("Ассортимент")]),e._v(" "),e.$device.isDesktop?n("section",{staticClass:"grid grid-cols-3 auto-rows-auto gap-x-16 gap-y-4 select-none font-bold text-center w-3/6 mx-auto mt-10"},[e._l(e.items,(function(t){return[n("div",{staticClass:"flex flex-col items-center"},[n("img",{attrs:{src:t.image,alt:""}}),e._v(" "),n("div",{staticClass:"flex flex-col pt-4 h-48"},[n("span",{staticClass:"text-2xl h-16 flex items-center justify-center",domProps:{innerHTML:e._s(t.nameHtml)}}),e._v(" "),n("span",{staticClass:"h-0.5 w-64 bg-gray-500 my-2 mx-auto"}),e._v(" "),n("span",{staticClass:"italic h-20"},[e._v(e._s(t.description))])])])]}))],2):n("section",{staticClass:"my-10"},[e.items?n("swiper",{attrs:{options:e.swiperOptions}},e._l(e.items,(function(t){return n("swiper-slide",{key:t.name},[n("div",{staticClass:"flex flex-col justify-start items-center space-y-2"},[n("img",{attrs:{src:t.image,alt:""}}),e._v(" "),n("span",{staticClass:"text-xl font-black"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"h-0.5 w-2/6 bg-gray-500 my-2 mx-auto"}),e._v(" "),n("span",{staticClass:"text-lg italic"},[e._v(e._s(t.description))])])])})),1):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports},438:function(e,t,n){"use strict";n.r(t);var c={name:"CatalogPrice",props:["catalog"]},r=n(17),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.catalog,(function(section){return n("div",{staticClass:"flex flex-col items-center justify-center font-bold text-center my-20"},[n("span",{class:{"text-3xl":e.$device.isDesktop,"text-2xl":!e.$device.isDesktop}},[e._v(e._s(section.title))]),e._v(" "),n("section",{staticClass:"grid grid-cols-3 grid-rows-3 select-none my-10 mx-auto",class:{"w-3/6":e.$device.isDesktop,"text-base w-11/12":!e.$device.isDesktop}},[e._l(section.rows,(function(t){return n("div",{staticClass:"font-black p-2",class:{"bg-gray-200 border-2":t,"border-r-2 border-b-2":!t}},[e._v(e._s(t)+"\n      ")])})),e._v(" "),e._l(section.items,(function(t){return[n("div",{staticClass:"border-2 p-2 flex items-center justify-center"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.prices,(function(t){return n("div",{staticClass:"border-2 p-2 flex items-center justify-center"},[e._v(e._s(t))])}))]}))],2)])})),0)}),[],!1,null,null,null);t.default=component.exports},446:function(e,t,n){e.exports=n.p+"img/moroj2.eb08d4e.png"},447:function(e,t,n){e.exports=n.p+"img/moroj3.ce84a56.png"},448:function(e,t,n){e.exports=n.p+"img/moroj4.9d61d6b.png"},449:function(e,t,n){e.exports=n.p+"img/moroj5.1b4a826.png"},450:function(e,t,n){e.exports=n.p+"img/moroj6.f1f30d5.png"},461:function(e,t,n){"use strict";n.r(t);var c=n(8),r=(n(40),{name:"CatalogPage",head:function(){return{title:"«ЮгаДар» - Мороженое"}},data:function(){return{topSectionData:{title:"Наше",subtitle:"МОРОЖЕНОЕ",color:"bg-blue-green-100"},catalog:{iceCream:{title:"Мороженое в ассортименте (Пломбир жир 12%)",rows:["","Цена (1 кг)","Цена (тара 3 кг)"],items:[{name:"Пломбир «Классический»",nameHtml:"Пломбир</br>«Классический»",description:"Описание 1",image:n(425),prices:["350 руб.","1050 руб."]},{name:"Шоколадное",nameHtml:"Шоколадное",description:"Описание 1",image:n(446),prices:["400 руб.","1200 руб."]},{name:"Шоколадная крошка",nameHtml:"Шоколадная</br>крошка",description:"Описание 1",image:n(447),prices:["400 руб.","1200 руб."]},{name:"Грецкий орех",nameHtml:"Грецкий орех",description:"Описание 1",image:n(448),prices:["400 руб.","1200 руб."]},{name:"Фисташка",nameHtml:"Фисташка",description:"Описание 1",image:n(449),prices:["400 руб.","1200 руб."]},{name:"БаблГам (вкус жев.резинки)",nameHtml:"БаблГам</br>(вкус жев.резинки)",description:"Описание 1",image:n(450),prices:["400 руб.","1200 руб."]},{name:"Голубое небо (вкус капучино)",nameHtml:"Голубое небо</br>(вкус капучино)",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Тирамису",nameHtml:"Тирамису",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Карамель",nameHtml:"Карамель",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Кокос",nameHtml:"Кокос",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Клубника (с/м ягода)",nameHtml:"Клубника</br>(с/м ягода)",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Смородина (c/м ягода)",nameHtml:"Смородина</br>(c/м ягода)",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Вишня (с/м ягода)",nameHtml:"Вишня</br>(с/м ягода)",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Лесная ягода",nameHtml:"Лесная ягода",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Малина (с/м ягода)",nameHtml:"Малина</br>(с/м ягода)",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Киви",nameHtml:"Киви",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Мята",nameHtml:"Мята",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Банан",nameHtml:"Банан",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Манго",nameHtml:"Манго",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Ананас",nameHtml:"Ананас",description:"Описание 1",image:n(425),prices:["400 руб.","1200 руб."]},{name:"Дыня",nameHtml:"Дыня",image:n(425),description:"Описание 1",prices:["400 руб.","1200 руб."]},{name:"Лимон",nameHtml:"Лимон",image:n(425),description:"Описание 1",prices:["400 руб.","1200 руб."]}]}}}},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,c={iceCream:{title:"Мороженое в ассортименте (Пломбир жир 12%)",rows:["","Цена (1 кг)","Цена (тара 3 кг)"]}},t.next=4,n.$get("/catalog/");case 4:return c.iceCream.items=t.sent,t.abrupt("return",{catalog:c});case 6:case"end":return t.stop()}}),t)})))()}}),o=r,l=n(17),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("TopTextSection",{attrs:{"section-data":e.topSectionData}}),e._v(" "),n("Catalog",{attrs:{items:e.catalog.iceCream.items}}),e._v(" "),n("CatalogPrice",{staticClass:"mt-20",attrs:{catalog:e.catalog}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TopTextSection:n(426).default,Catalog:n(437).default,CatalogPrice:n(438).default})}}]);