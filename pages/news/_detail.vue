<template>
  <news-detail-red v-if="item.style === 'red'" :item="item"/>
  <news-detail-yellow v-else-if="item.style === 'yellow'" :item="item"/>
  <news-detail-green v-else-if="item.style === 'green'" :item="item"/>
  <news-detail-snickers v-else-if="item.style === 'snickers'" :item="item"/>
  <news-detail-purple v-else :item="item"/>
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
    const detailPageUrl = params.detail;
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
    const title = `«ЮгаДар» - ${item.name} - Новости, События и Акции`;
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
        content: `Мороженое от кубанского производителя «ЮгаДар». ${item.name}. Важные новости, события и акции «ЮгаДар»`
      },
      {
        hid: 'description',
        name: 'description',
        content: `Мороженое от кубанского производителя «ЮгаДар». ${item.name}. Важные новости, события и акции «ЮгаДар»`
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
