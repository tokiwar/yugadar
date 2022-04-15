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
      title: '«ЮгаДар» - Контакты'
    }
  },
  data: () => ({
  }),
  async asyncData({$axios}) {
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
    return {outlets, logoData, sectionDataParallax, sectionDataNonParallax, contacts}
  },
}
</script>
