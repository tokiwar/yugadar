<template>
  <div>
    <TopTextSection :section-data="logoData"/>
  </div>
</template>
<script>
export default {
  name: 'NewsPage',
  head() {
    return {
      title: '«ЮгаДар» - Новости - События и акции',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/news/'},
      ]
    }
  },
  async asyncData({route, $axios}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Новости - События и акции',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/news/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Важные новости и события «ЮгаДар».'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Важные новости и события «ЮгаДар».'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'мороженое, сладкое, югадар, тимашевск, краснодарский край, новости, события, акции'
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
    return {logoData, meta}
  },
}
</script>
