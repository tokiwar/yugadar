<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <Contacts :contacts="contacts"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <OutletsContacts :outlets="outlets"/>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  head() {
    return {
      title: '«ЮгаДар» - Контакты',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/contacts/'}
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Тимашевск",
              "postalCode": "350056",
              "streetAddress": "пос. Индустриальный, Центральная усадьба"
            },
            "email": "mamay4339061@gmail.com",
            "name": "ЮгаДар",
            "telephone": "+79184339061"
          }
        }
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Контакты'
      },
      {hid: 'description', name: 'description', content: 'Мороженое от кубанского производителя «ЮгаДар» - Контакты'},
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'тимашевск, инн, контакты, мороженое, огрнип, связаться'
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
      '/api/contacts/'
    );
    const outlets = {
      title: 'Розничные точки реализации мороженого',
    };
    outlets.items = result['items'];
    const logoData = result['top-text-section'].logoData;
    const sectionDataParallax = result['parallax-section'].sectionDataParallax;
    const sectionDataNonParallax = result['parallax-section'].sectionDataNonParallax;
    const contacts = result['contacts'];
    return {outlets, logoData, sectionDataParallax, sectionDataNonParallax, contacts, meta}
  },
}
</script>
