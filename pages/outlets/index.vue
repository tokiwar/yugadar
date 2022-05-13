<template>
  <div>
    <TopTextSection :section-data="logoData">
      <outlets :outlets="items"/>
    </TopTextSection>
    <client-only>
      <outlets-map :items="items"/>
    </client-only>
    <TextSection v-if="false" :section-data="sectionData"/>
  </div>
</template>

<script>
export default {
  name: 'OutletsPage',
  head() {
    return {
      title: '«ЮгаДар» - Точки продажи - Мороженое от кубанского производителя',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/outlets/'}
      ]
    }
  },
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Точки продажи - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/outlets/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Точки продажи. Расположение и фото торговых точек в городе Тимашевске.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Точки продажи. Расположение и фото торговых точек в городе Тимашевске.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'красная, заря, изюминка, парк, пионерская, продажи, тимашевск, краснодарский край'
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
      '/api/outlets/'
    );
    const items = result.items;
    const logoData = result['top-text-section'].logoData;
    const sectionData = result['text-section'].sectionData;
    return {items, logoData, sectionData, meta}
  },
}
</script>
