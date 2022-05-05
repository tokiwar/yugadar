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
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/'},
      ]
    }
  },
  data: () => ({}),
  async asyncData({route, $axios}) {
    const meta = [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар»'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар»'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'мороженое, сладкое, югадар'
      }
    ];
    if (Object.keys(route.query).length) {
      meta.push(
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      );
    }
    const result = await $axios.$get(
      '/api/main/'
    );
    const logoData = result['top-text-section-with-image'].logoData;
    const sectionDataTop = result['text-section-half'].sectionDataTop;
    const sectionDataBottom = result['text-section-half'].sectionDataBottom;
    const sectionDataParallax = result['parallax-section'].sectionDataParallax;
    const sectionDataNonParallax = result['parallax-section'].sectionDataNonParallax;
    return {logoData, sectionDataTop, sectionDataBottom, sectionDataParallax, sectionDataNonParallax, meta}
  },
}
</script>
