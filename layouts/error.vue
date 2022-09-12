<template>
  <div>
    <error-page/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '«ЮгаДар» - 404 - Страница не найдена',
      meta: [
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Мороженое от кубанского производителя «ЮгаДар» - 404 - Страница не найдена'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Мороженое от кубанского производителя «ЮгаДар» - 404 - Страница не найдена'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ],
    }
  },
  props: ['error'],
  layout: 'error'
}
</script>
