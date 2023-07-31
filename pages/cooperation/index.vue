<template>
  <div>
    <TopTextSection :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </TopTextSection>
  </div>
</template>
<script>

export default {
  name: 'CooperationPage',
  head() {
    return {
      title: '«ЮгаДар» - Сотрудничество - Мороженое от кубанского производителя',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/cooperation/'}
      ],
    }
  },
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Сотрудничество - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/cooperation/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Сотрудничество. Как начать работать с нами.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Сотрудничество. Как начать работать с нами.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'сотрудничество, мороженое, партнеры, связаться, краснодар, краснодарский край'
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
      '/api/cooperation/'
    );
    console.log(result);
    const sectionData = result['text-section'].sectionData;
    const logoData = result['top-text-section'].logoData;
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
        name: 'Сотрудничество',
        route: '/cooperation/',
        current: true,
        position: 2
      }
    ];
    return {logoData, routes, meta, sectionData};
  }
}
</script>
