<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <TextSection :section-data="sectionData1"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <TextSection :section-data="sectionData2"/>
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
      title: 'Заголовок2',
      subtitle: 'Подзаголовок2',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт2.'
    },
    topSectionData: {
      title: 'Кто такие',
      subtitle: 'ЮГАДАР',
      color: 'bg-light-plum-100',
    }
  })
}
</script>
