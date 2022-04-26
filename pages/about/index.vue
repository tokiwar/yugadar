<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <TextSection :section-data="sectionData"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <ReviewsSection :items="items"/>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: '«ЮгаДар» - О нас',
      meta: [
        {hid: 'description', name: 'description', content: 'Мороженое от кубанского производителя «ЮгаДар» - О нас'},
      ],
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/about/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios}) {
    const result = await $axios.$get(
      '/api/about/'
    );
    const logoData = result['top-text-section'].logoData;
    const sectionDataParallax = result['parallax-section'].sectionDataParallax;
    const sectionDataNonParallax = result['parallax-section'].sectionDataNonParallax;
    const sectionData = result['text-section'].sectionData;
    const items = result['items'];
    return {logoData, sectionDataParallax, sectionDataNonParallax, sectionData, items}
  },
}
</script>
