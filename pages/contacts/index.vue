<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Contacts :contacts="contacts"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <section v-else class="flex justify-center items-center bg-blue-green-100 select-none"
             :class="{'h-192 flex-row' : $device.isDesktop, 'h-auto flex-col-reverse' : !$device.isDesktop}">
      <div class="">
        <img :class="{'h-104 object-cover object-center' : !$device.isDesktop}"
             :src="require('~/assets/img/parallax/parallax-icecream-plate.png')" alt=""/>
      </div>
    </section>
    <OutletsContacts :outlets="outlets"/>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  head() {
    return {
      title: '«ЮгаДар» - Контакты'
    }
  },
  data: () => ({
    sectionDataParallax: {
      bg: 'bg-parallax-icecream-plate bg-cover',
    },
    outlets: {
      title: 'Розничные точки реализации мороженого',
      items: [
        {
          key: 0,
          value: 'г. Тимашевск, ул. Ленина 154-А <i>(часы работы с 9.00 до 18.00 без выходных)</i>'
        },
        {
          key: 1,
          value: 'г. Тимашевск, ул. Красная 101Б <i>(часы работы с 9.00 до 19.00 без выходных)</i>'
        },
        {
          key: 2,
          value: 'г. Тимашевск, ул. Красная 101А <i>(у кинотеатра «Заря», часы работы с 9.00 до 21.00 без выходных)</i>'
        },
        {
          key: 3,
          value: 'г. Тимашевск, ул. Пионерская 172 <i>(часы работы с 10.00 до 18.00 без выходных)</i>'
        },
        {
          key: 4,
          value: 'г. Тимашевск, поселок сахарного завода 11/1 <i>(рядом школа №4, часы работы с 11.00 до 19.00)</i>'
        },
        {
          key: 5,
          value: 'г. Тимашевск, ул. Красная, городской парк Изюминка <i>(часы работы с 9.00 до 21.00 без выходных)</i>'
        }
      ]
    },
    contacts: {
      title: 'Наши контакты',
      subtitle: 'только натуральное мороженое',
      address: '350056, Краснодарский край, г. Тимашевск, пос. Индустриальный</br>Центральная усадьба, Цех по производству мороженого',
      name: 'И.П. Мамай С.Н.',
      phone: [
        {
          phone: '+7 (918) 433-90-61',
          phoneClear: '+79184339061',
          name: 'Сергей',
        },
        {
          phone: '+7 (918) 017-04-29',
          phoneClear: '+79180170429',
          name: 'Людмила',
        }
      ],
      email: 'mamay4339061@gmail.com',
      time: 'с 9.00 до 19.00 - выходной воскресенье',
    },
    topSectionData: {
      title: 'Как с нами',
      subtitle: 'СВЯЗАТЬСЯ',
      color: 'bg-light-pink-100',
    }
  })
}
</script>
