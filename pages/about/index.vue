<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <TextSection :section-data="sectionData1"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <FeedbackSection :section-data="sectionData2"/>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: '«ЮгаДар» - О нас'
    }
  },
  data: () => ({
    sectionDataParallax: {
      bg: 'bg-parallax-icecream-2 bg-cover',
    },
    sectionDataNonParallax: {
      bg: '',
      bgImage: require('~/assets/img/main-page-block-3.png')
    },
    sectionData1: {
      title: 'О нашем качестве',
      subtitle: 'только натуральное мороженое',
      text: '<p>Мороженое «ЮгаДар» сделано для Вас из высококачественных продуктов, производимых на территории Краснодарского края. Начали семейный бизнес в 2004 году и стараемся производить качественный продукт. Только натуральное мороженое может быть вкусным и радовать детей и взрослых.</p><p>В рецептуре используется фермерское цельное молоко и сливочное масло. В нашем ассортименте более 20 видов мороженого «Пломбир» с натуральной ягодой, орехами, шоколадом и свежезамороженными фруктами. Мороженое «ЮгаДар» делается вручную, придавая ему неповторимую изюминку.</p><p>Мы и сами с удовольствием едим свое мороженое и кормим детей. Это приятная прохлада, спасающая в летний сезон, и молочная вуаль, дополняющая чашечку кофе зимним вечером в кругу семьи.</p>',
      name: 'КОНТАКТЫ',
      link: '/contacts/'
    },
    sectionData2: {
      title: 'Отзывы',
      feedbacks: [
        {
          key: 0,
          text: 'Мороженое в целом вкусное, но, как по мне, дорогое. За два шарика вам придётся заплатить 100 рублей. Причём их размер не очень большой. Также не понравилось, что не было сдачи с тысячи рублей. Не было приятно бегать за разменом, когда тебе уже наложили мороженое. В целом твёрдая тройка.',
          positive: true,
          name: 'Андрей Венцловский',
          date: '22.06.2021',
        },
        {
          key: 1,
          text: 'всё бэд',
          positive: false,
          name: 'Петя',
          date: '01.08.2021',
        },
        {
          key: 2,
          text: 'Очень вкусное мороженое!!!',
          positive: true,
          name: 'Юлия Владимировна',
          date: '16.07.2021',
        },
        {
          key: 3,
          text: 'всё бэд',
          positive: false,
          name: 'Таня',
          date: '12.06.2021',
        }
      ]
      // subtitle: 'Оставьте первый отзыв',
    },
    topSectionData: {
      title: 'Кто такие',
      subtitle: 'ЮГАДАР',
      color: 'bg-light-plum-100',
    }
  })
}
</script>
