<template>
  <div>
    <TopTextSectionWithImage :section-data="logoData"/>
    <TextSectionHalf :section-data="sectionData"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <TextSectionHalf :section-data="sectionData2"/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  head() {
    return {
      title: '«ЮгаДар» - Главная страница',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Мороженое от кубанского производителя «ЮгаДар»'
        }
      ]
    }
  },
  data: () => ({
    sliderSettings: {
      infinite: true,
      autoplay: true,
    },
    logoData: {
      logoImage: require('~/assets/img/logo/main-logo.png'),
      bgColor: 'bg-light-yellow-100',
      subtitle: 'ЮгаДар',
      title: 'МОРОЖЕНОЕ',
      link: '/about/',
      name: 'О НАС',
    },
    sectionDataNonParallax: {
      bg: 'bg-blue-green-100',
      bgImage: require('~/assets/img/parallax/parallax-sorbet.png'),
      title: 'Мороженое',
      subtitle: 'только натуральное',
    },
    sectionData: {
      subtitle: 'Мороженое на любой вкус для самого изысканного покупателя.',
      name: 'МОРОЖЕНОЕ',
      link: '/catalog/',
      img: require('~/assets/img/main-page-block-1.png'),
      imageRight: true
    },
    sectionDataParallax: {
      title: 'Мороженое',
      subtitle: 'только натуральное',
      bg: 'bg-parallax-sorbet bg-auto'
    },
    sectionData2: {
      subtitle: 'Сладкое мороженое, способное изменить Ваше настроение.',
      name: 'ТОЧКИ ПРОДАЖ',
      link: '/outlets/',
      img: require('~/assets/img/about-page-block-1.png'),
    },
  }),
}
</script>
