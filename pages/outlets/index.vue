<template>
  <div>
    <TopTextSection :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
      <template v-slot:content>
        <outlets @changeColor="changeColor" :outlets="items"/>
      </template>
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
  methods: {
    changeColor(color) {
      this.logoData.bgColor = color + ' ease-in-out duration-1000';
    }
  },
  async asyncData({$axios, route, $device}) {
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
    const iterator = 0;
    const color = items[iterator].bgColor;
    const logoData = result['top-text-section'].logoData;
    logoData.bgColor = color;
    const sectionData = result['text-section'].sectionData;
    const routes = [
      {
        key: 0,
        name: 'Главная',
        route: '/',
        position: 1
      },
      {
        key: 1,
      },
      {
        key: 2,
        name: 'Точки продажи',
        route: '/outlets/',
        current: true,
        position: 2
      }
    ];
    return {items, logoData, sectionData, meta, routes}
  },
}
</script>
