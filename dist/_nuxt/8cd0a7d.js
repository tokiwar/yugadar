(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,8,10,11,14],{426:function(t,e,c){"use strict";c.r(e);var l={name:"TopTextSection",props:["SectionData"],data:function(){return{classNameStatic:"flex flex-row justify-center items-center select-none text-center"}},computed:{className:function(){return this.$device.isDesktop?"h-96 "+this.SectionData.color+" "+this.classNameStatic:"h-48 "+this.SectionData.color+" "+this.classNameStatic}}},n=c(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.SectionData.title||t.SectionData.subtitle?c("section",{class:t.className},[c("div",{staticClass:"text-white flex flex-col justify-center items-center font-black"},[t.SectionData.title?c("span",{class:{"text-6xl":t.$device.isDesktop,"text-2xl":!t.$device.isDesktop}},[t._v(t._s(t.SectionData.title))]):t._e(),t._v(" "),t.SectionData.subtitle?c("span",{class:{"text-9xl":t.$device.isDesktop,"text-5xl":!t.$device.isDesktop}},[t._v(t._s(t.SectionData.subtitle))]):t._e()])]):t._e()}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,c){"use strict";c.r(e);var l={name:"ParallaxSection",props:["SectionData"]},n=c(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.SectionData?c("section",{staticClass:"flex items-center justify-center h-136 bg-fixed bg-center bg-blue-green-100 select-none",class:t.SectionData.bg},[t.SectionData.subtitle||t.SectionData.title?c("div",{staticClass:"absolute text-white flex flex-col justify-center items-center font-black"},[t.SectionData.subtitle?c("span",{staticClass:"text-7xl font-marck"},[t._v(t._s(t.SectionData.subtitle))]):t._e(),t._v(" "),t.SectionData?c("span",{staticClass:"text-9xl"},[t._v(t._s(t.SectionData.title))]):t._e()]):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,c){"use strict";c.r(e);var l={name:"NonParallaxSection",props:["SectionData"],computed:{className:function(){return this.$device.isDesktop?"h-192 flex-row "+this.SectionData.bg:this.$device.isTablet?"h-auto "+this.SectionData.bg:this.$device.isMobile?"h-auto flex-col-reverse "+this.SectionData.bg:void 0}}},n=c(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"flex justify-center items-center select-none",class:t.className},[c("div",{},[c("img",{class:{"h-112 object-cover object-center w-full":t.$device.isTablet,"h-104 object-cover object-center":t.$device.isMobile},attrs:{src:t.SectionData.bgImage,alt:""}})]),t._v(" "),t.SectionData.title||t.SectionData.subtitle?c("div",{staticClass:"text-white flex flex-col justify-center items-center font-black",class:{"absolute mt-36":t.$device.isDesktop,"mt-10":!t.$device.isDesktop}},[t.SectionData.subtitle?c("span",{staticClass:"font-marck text-3xl",domProps:{innerHTML:t._s(t.SectionData.subtitle)}}):t._e(),t._v(" "),t.SectionData.title?c("span",{staticClass:"text-5xl",domProps:{innerHTML:t._s(t.SectionData.title)}}):t._e()]):t._e()])}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,c){"use strict";c.r(e);var l={name:"Contacts",props:["contacts"]},n=c(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.contacts.title||t.contacts.subtitle||t.contacts.text?c("section",{staticClass:"flex flex-row justify-center items-center select-none h-auto",class:{"my-16":t.$device.isDesktop}},[c("div",{staticClass:"flex flex-col justify-center items-center font-black text-center",class:{"w-3/6":t.$device.isDesktop,"w-4/5 my-14":!t.$device.isDesktop}},[t.contacts.title?c("div",{class:{"text-6xl w-4/6":t.$device.isDesktop,"text-5xl":t.$device.isTablet,"text-4xl":t.$device.isMobile}},[t._v("\n      "+t._s(t.contacts.title)+"\n    ")]):t._e(),t._v(" "),t.contacts.subtitle?c("div",{staticClass:"font-marck",class:{"text-3xl w-3/6 pt-2":t.$device.isDesktop,"text-2xl":t.$device.isTablet,"text-xl":t.$device.isMobile}},[t._v("\n      "+t._s(t.contacts.subtitle)+"\n    ")]):t._e(),t._v(" "),t.contacts.address||t.contacts.name||t.contacts.phone||t.contacts.email||t.contacts.time||t.contacts.itn||t.contacts.psrn?c("div",{staticClass:"flex flex-col",class:{"pt-8 text-2xl text-justify space-y-4":t.$device.isDesktop,"w-full pt-12 text-lg text-left space-y-2":t.$device.isMobile,"text-justify text-2xl pt-8 w-4/5 space-y-4":t.$device.isTablet}},[t.contacts.address?c("div",{domProps:{innerHTML:t._s(t.contacts.address)}}):t._e(),t._v(" "),t.contacts.name&&t.contacts.phone?c("div",{staticClass:"flex",class:{"space-x-4 flex-row":t.$device.isDesktopOrTablet,"flex-col":t.$device.isMobile}},[c("div",{staticClass:"underline"},[t._v(t._s(t.contacts.name))]),t._v(" "),c("div",{staticClass:"flex flex-col"},t._l(t.contacts.phone,(function(e){return c("a",{staticClass:"hover:underline hover:text-yellow-500",class:{"text-yellow-500":t.$device.isMobile},attrs:{href:"tel:"+e.phoneClear}},[t._v(t._s(e.phone+" ("+e.name+")"))])})),0)]):t._e(),t._v(" "),t.contacts.time?c("div",{staticClass:"flex",class:{"space-x-4 flex-row":t.$device.isDesktopOrTablet,"flex-col":t.$device.isMobile}},[c("div",{staticClass:"underline"},[t._v(t._s("ИНН:"))]),t._v(" "),c("div",{domProps:{innerHTML:t._s(t.contacts.itn)}})]):t._e(),t._v(" "),t.contacts.time?c("div",{staticClass:"flex",class:{"space-x-4 flex-row":t.$device.isDesktopOrTablet,"flex-col":t.$device.isMobile}},[c("div",{staticClass:"underline"},[t._v(t._s("ОГРНИП:"))]),t._v(" "),c("div",{domProps:{innerHTML:t._s(t.contacts.psrn)}})]):t._e(),t._v(" "),t.contacts.time?c("div",{staticClass:"flex",class:{"space-x-4 flex-row":t.$device.isDesktopOrTablet,"flex-col":t.$device.isMobile}},[c("div",{staticClass:"underline"},[t._v(t._s("Часы работы:"))]),t._v(" "),c("div",{domProps:{innerHTML:t._s(t.contacts.time)}})]):t._e(),t._v(" "),t.contacts.email?c("div",{staticClass:"flex",class:{"space-x-4 flex-row":t.$device.isDesktopOrTablet,"flex-col":t.$device.isMobile}},[c("div",{staticClass:"underline"},[t._v(t._s("Электронная почта:"))]),t._v(" "),c("a",{staticClass:"hover:underline hover:text-yellow-500",class:{"text-yellow-500":t.$device.isMobile},attrs:{href:"mailto:"+t.contacts.email}},[t._v(t._s(t.contacts.email))])]):t._e()]):t._e(),t._v(" "),t.contacts.text?c("div",{staticClass:"text-justify space-y-4",class:{"w-5/6 pt-8":t.$device.isDesktop,"pt-12":!t.$device.isDesktop},domProps:{innerHTML:t._s(t.contacts.text)}}):t._e(),t._v(" "),t.contacts.link&&t.contacts.name?c("NuxtLink",{staticClass:"mt-10 text-xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300",attrs:{to:t.contacts.link}},[t._v("\n      "+t._s(t.contacts.name)+"\n    ")]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,c){"use strict";c.r(e);var l={name:"OutletsContacts",props:["outlets"]},n=c(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.outlets.title||t.outlets.subtitle||t.outlets.text?c("section",{staticClass:"flex flex-row justify-center items-center select-none h-auto",class:{"my-16":t.$device.isDesktop}},[c("div",{staticClass:"flex flex-col justify-center items-center font-black text-center",class:{"w-3/6":t.$device.isDesktop,"w-4/5 my-14":!t.$device.isDesktop}},[t.outlets.title?c("div",{class:{"text-5xl w-4/6":t.$device.isDesktop,"text-2xl":!t.$device.isDesktop}},[t._v("\n      "+t._s(t.outlets.title)+"\n    ")]):t._e(),t._v(" "),t.outlets.subtitle?c("div",{staticClass:"font-marck",class:{"text-2xl w-3/6 pt-2":t.$device.isDesktop,"text-xl":!t.$device.isDesktop}},[t._v("\n      "+t._s(t.outlets.subtitle)+"\n    ")]):t._e(),t._v(" "),t.outlets.items?c("div",{staticClass:"flex flex-col text-justify font-bold",class:{"pt-8 text-xl space-y-4 w-4/5":t.$device.isDesktopOrTablet,"pt-12 text-lg space-y-2":t.$device.isMobile}},t._l(t.outlets.items,(function(e){return c("div",{key:e.key,domProps:{innerHTML:t._s(e.value)}})})),0):t._e(),t._v(" "),t.outlets.text?c("div",{staticClass:"text-justify space-y-4",class:{"w-5/6 pt-8":t.$device.isDesktop,"pt-12":!t.$device.isDesktop},domProps:{innerHTML:t._s(t.outlets.text)}}):t._e(),t._v(" "),t.outlets.link&&t.outlets.name?c("NuxtLink",{staticClass:"mt-10 text-2xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300",attrs:{to:t.outlets.link}},[t._v("\n      "+t._s(t.outlets.name)+"\n    ")]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,c){"use strict";c.r(e);var l={name:"ContactsPage",head:function(){return{title:"«ЮгаДар» - Контакты"}},data:function(){return{sectionDataParallax:{bg:"bg-parallax-icecream-plate bg-cover"},sectionDataNonParallax:{bg:"bg-blue-green-100",bgImage:c(218)},outlets:{title:"Розничные точки реализации мороженого",items:[{key:0,value:"г. Тимашевск, ул. Ленина 154-А <i>(часы работы с 9.00 до 18.00 без выходных)</i>"},{key:1,value:"г. Тимашевск, ул. Красная 101Б <i>(часы работы с 9.00 до 19.00 без выходных)</i>"},{key:2,value:"г. Тимашевск, ул. Красная 101А <i>(у кинотеатра «Заря», часы работы с 9.00 до 21.00 без выходных)</i>"},{key:3,value:"г. Тимашевск, ул. Пионерская 172 <i>(часы работы с 10.00 до 18.00 без выходных)</i>"},{key:4,value:"г. Тимашевск, поселок сахарного завода 11/1 <i>(рядом школа №4, часы работы с 11.00 до 19.00)</i>"},{key:5,value:"г. Тимашевск, ул. Красная, городской парк Изюминка <i>(часы работы с 9.00 до 21.00 без выходных)</i>"}]},contacts:{title:"Наши контакты",subtitle:"только натуральное мороженое",address:"350056, Краснодарский край, г. Тимашевск, пос. Индустриальный</br>Центральная усадьба, Цех по производству мороженого",name:"И.П. Мамай С.Н.",phone:[{phone:"+7 (918) 433-90-61",phoneClear:"+79184339061",name:"Сергей"},{phone:"+7 (918) 017-04-29",phoneClear:"+79180170429",name:"Людмила"}],itn:"235300169354",psrn:"304235313800027",email:"mamay4339061@gmail.com",time:"с 9.00 до 19.00 - выходной воскресенье"},topSectionData:{title:"Как с нами",subtitle:"СВЯЗАТЬСЯ",color:"bg-light-pink-100"}}}},n=c(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("TopTextSection",{attrs:{"section-data":t.topSectionData}}),t._v(" "),c("Contacts",{attrs:{contacts:t.contacts}}),t._v(" "),t.$device.isDesktop?c("ParallaxSection",{attrs:{"section-data":t.sectionDataParallax}}):c("NonParallaxSection",{attrs:{"section-data":t.sectionDataNonParallax}}),t._v(" "),c("OutletsContacts",{attrs:{outlets:t.outlets}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopTextSection:c(426).default,Contacts:c(439).default,ParallaxSection:c(429).default,NonParallaxSection:c(430).default,OutletsContacts:c(440).default})}}]);