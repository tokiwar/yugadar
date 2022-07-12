<template>
  <div>
    <top-text-section :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </top-text-section>
    <news-list :items="items"/>
  </div>
</template>
<script>
export default {
  name: 'NewsPage',
  head() {
    return {
      title: '«ЮгаДар» - Новости, События и Акции - Мороженое от кубанского производителя',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/news/'},
      ]
    }
  },
  data: () => ({}),
  async asyncData({route, $axios}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Новости, События и Акции - Мороженое от кубанского производителя',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/news/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Важные новости, события и акции «ЮгаДар».'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Важные новости, события и акции «ЮгаДар».'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'мороженое, сладкое, югадар, тимашевск, краснодарский край, новости, события, акции, кубань, купить, краснодар'
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
      '/api/news/'
    );
    const logoData = result['top-text-section'].logoData;
    const items = result.items;
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
        name: 'Новости',
        route: '/news/',
        current: true,
        position: 2
      }
    ];
    return {logoData, meta, items, routes}
  },
}
</script>
