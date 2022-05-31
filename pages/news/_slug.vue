<template>
  <news-detail :item="item"/>
</template>
<script>
export default {
  head() {
    return {
      title: this.title,
      meta: this.meta,
      link: this.link
    }
  },
  data: () => ({}),
  async asyncData({params, error, $axios, route}) {
    const detailPageUrl = params.slug;
    const result = await $axios.$post(
      '/api/news/detail/',
      {
        code: detailPageUrl
      }
    );
    const item = result.item;
    if (!item) {
      return error({statusCode: 404});
    }
    const title = `«ЮгаДар» - ${item.name} - Новости - События и акции`;
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: `https://yugadar.ru${route.fullPath}`
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: `Мороженое от кубанского производителя «ЮгаДар». ${item.name}. Важные новости и события «ЮгаДар».`
      },
      {
        hid: 'description',
        name: 'description',
        content: `Мороженое от кубанского производителя «ЮгаДар». ${item.name}. Важные новости и события «ЮгаДар».`
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `мороженое, сладкое, югадар, тимашевск, краснодарский край, новости, события, акции, ${item.name}`
      }
    ];
    const link = [
      {rel: 'canonical', href: `https://yugadar.ru${route.fullPath}`},
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
    return {item, title, meta, link}
  }
}
</script>
