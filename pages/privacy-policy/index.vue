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
      meta: [
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
      ],
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/privacy-policy/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios}) {
    const result = await $axios.$get(
      '/api/privacy-policy/'
    );
    const logoData = result['top-text-section'].logoData;
    const policyText = result['json-data'].policyText;
    return {logoData, policyText}
  },
}
</script>
