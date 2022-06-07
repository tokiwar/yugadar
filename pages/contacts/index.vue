<template>
  <div>
    <TopTextSection :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </TopTextSection>
    <contacts :contacts="contacts"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <NonParallaxSection :section-data="sectionDataNonParallax" v-else/>
    <outlets-contacts :outlets="outlets"/>
  </div>
</template>

<script>
import contacts from "@/components/contacts/Contacts";
import outletsContacts from "@/components/contacts/OutletsContacts";

export default {
  name: 'ContactsPage',
  components: {
    contacts,
    outletsContacts
  },
  head() {
    return {
      title: '«ЮгаДар» - Контакты - Мороженое от кубанского производителя',
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
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Контакты - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/contacts/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Контакты. Как нас найти и связаться с нами.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Контакты. Как нас найти и связаться с нами.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'инн, контакты, мороженое, огрнип, связаться, тимашевск, краснодарский край'
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
        name: 'Контакты',
        route: '/contacts/',
        current: true,
        position: 2
      }
    ];
    return {outlets, logoData, sectionDataParallax, sectionDataNonParallax, contacts, meta, routes}
  },
}
</script>
