<template>
  <div>
    <TopTextSectionWithImage :section-data="logoData"/>
    <TextSectionHalf :section-data="sectionDataTop"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <TextSectionHalf :section-data="sectionDataBottom"/>
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
    sectionDataNonParallax: {
      bg: 'bg-blue-green-100',
      bgImage: require('~/assets/img/parallax/parallax-sorbet.png'),
      title: 'Мороженое',
      subtitle: 'только натуральное',
    },
    sectionDataParallax: {
      title: 'Мороженое',
      subtitle: 'только натуральное',
      bg: 'bg-parallax-sorbet bg-auto'
    },
  }),
  async asyncData({$axios}) {
    const result = await $axios.$get(
      '/api/main/'
    );
    const logoData = {
      logoImage: result.props.UF_LOGO_IMAGE,
      bgColor: 'bg-light-yellow-100',
      subtitle: 'ЮгаДар',
      title: 'МОРОЖЕНОЕ',
      link: '/about/',
      name: 'О НАС',
    }
    const sectionDataTop = result['text-section-half'].sectionDataTop;
    const sectionDataBottom = result['text-section-half'].sectionDataBottom;
    return {logoData, sectionDataTop, sectionDataBottom}
  },
}
</script>
