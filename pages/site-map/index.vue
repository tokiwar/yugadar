<template>
  <div>
    Карта сайта
  </div>
</template>
<script>
export default {
  name: 'SiteMapPage',
  head() {
    return {
      title: '«ЮгаДар» - Карта сайта - Список страниц на сайте',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/site-map/'},
      ]
    }
  },
  async asyncData({route, $axios}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Карта сайта - Список страниц на сайте'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/site-map/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Список всех страниц на сайте.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Список всех страниц на сайте.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'мороженое, сладкое, югадар, тимашевск, краснодарский край, карта сайта'
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
    return {meta}
  },
}
</script>
