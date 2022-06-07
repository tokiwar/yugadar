<template>
  <div>
    <TopTextSection :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </TopTextSection>
    <nested-list :policy-text="policyText"/>
  </div>
</template>

<script>

export default {
  name: 'PrivacyPolicyPage',
  head() {
    return {
      title: '«ЮгаДар» - Политика конфиденциальности - Мороженое от кубанского производителя',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/privacy-policy/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Политика конфиденциальности - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/privacy-policy/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Политика конфиденциальности. Правила хранения и обработки персональных данных',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Политика конфиденциальности. Правила хранения и обработки персональных данных',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'данных, персональных, обработки, данные, оператор, персональные, пользователь, информации, передача, политика, тимашевск, краснодарский край'
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
      '/api/privacy-policy/'
    );
    const logoData = result['top-text-section'].logoData;
    const policyText = result['json-data'].policyText;
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
        name: 'Политика конфиденциальности',
        route: '/privacy-policy/',
        current: true,
        position: 2
      }
    ];
    return {logoData, policyText, meta, routes}
  },
}
</script>
