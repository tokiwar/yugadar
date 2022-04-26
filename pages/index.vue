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
      ],
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios}) {
    const result = await $axios.$get(
      '/api/main/'
    );
    const logoData = result['top-text-section-with-image'].logoData;
    const sectionDataTop = result['text-section-half'].sectionDataTop;
    const sectionDataBottom = result['text-section-half'].sectionDataBottom;
    const sectionDataParallax = result['parallax-section'].sectionDataParallax;
    const sectionDataNonParallax = result['parallax-section'].sectionDataNonParallax;
    return {logoData, sectionDataTop, sectionDataBottom, sectionDataParallax, sectionDataNonParallax}
  },
}
</script>
