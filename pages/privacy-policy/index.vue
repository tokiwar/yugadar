<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <nested-list :policy-text="policyText"/>
  </div>
</template>

<script>

export default {
  name: 'PrivacyPolicyPage',
  head() {
    return {
      title: '«ЮгаДар» - Политика конфиденциальности',
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
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Политика конфиденциальности'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Политика конфиденциальности'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'данных, персональных, обработки, данные, оператор, персональные, пользователь, информации, передача, политика'
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
    return {logoData, policyText, meta}
  },
}
</script>
