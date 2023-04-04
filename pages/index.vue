<template>
  <div>
    <TopTextSectionWithImage :section-data="logoData"/>
    <TextSectionHalf :section-data="sectionDataTop"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection v-else :section-data="sectionDataNonParallax"/>
    <TextSectionHalf :section-data="sectionDataMiddle"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallaxMiddle"/>
    <NonParallaxSection v-else :section-data="sectionDataNonParallaxMiddle"/>
    <TextSectionHalf :section-data="sectionDataBottom"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallaxBottom"/>
    <NonParallaxSection v-else :section-data="sectionDataNonParallaxBottom"/>
    <SeoTextSection :html="seoTextHtml"/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  head() {
    return {
      title: '«ЮгаДар» - Главная страница - Мороженое от кубанского производителя',
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
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Главная страница - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Производство и продажа мороженого в городе Тимашевске и Краснодарском крае. Купить мороженое в Тимашевске.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Производство и продажа мороженого в городе Тимашевске и Краснодарском крае. Купить мороженое в Тимашевске.'
      },
      {
        name: 'keywords',
        content: 'купить, мороженое, сладкое, югадар, тимашевск, краснодарский край, вкусное, лучшее, качественное, кубанский, краснодар'
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
    const sectionDataMiddle = result['text-section-half'].sectionDataMiddle;
    const sectionDataBottom = result['text-section-half'].sectionDataBottom;
    const sectionDataParallax = result['parallax-section'].sectionDataParallax;
    const sectionDataNonParallax = result['parallax-section'].sectionDataNonParallax;
    const sectionDataParallaxMiddle = result['parallax-section'].sectionDataParallaxMiddle;
    const sectionDataNonParallaxMiddle = result['parallax-section'].sectionDataNonParallaxMiddle;
    const sectionDataParallaxBottom = result['parallax-section'].sectionDataParallaxBottom;
    const sectionDataNonParallaxBottom = result['parallax-section'].sectionDataNonParallaxBottom;
    const seoTextHtml = result['seo-text-section'].html;
    return {
      logoData,
      sectionDataTop,
      sectionDataMiddle,
      sectionDataBottom,
      sectionDataParallax,
      sectionDataNonParallax,
      sectionDataParallaxBottom,
      sectionDataNonParallaxBottom,
      sectionDataParallaxMiddle,
      sectionDataNonParallaxMiddle,
      seoTextHtml,
      meta
    }
  },
}
</script>
