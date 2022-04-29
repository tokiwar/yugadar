<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <Catalog v-if="false" :items="catalog.iceCream.items"/>
    <CatalogPrice :catalog="catalog"/>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  head() {
    return {
      title: '«ЮгаДар» - Мороженое',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'мороженое, пломбир, цена, ассортименте, тара'
        }
      ],
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/catalog/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios}) {
    const catalog = {
      iceCream: {
        title: 'Мороженое в ассортименте',
        'subtitle': '(пломбир жир 12%)',
        rows: ['', 'Цена</br>(1 кг)', 'Цена</br>(3 кг)',],
      }
    };
    const result = await $axios.$get(
      '/api/catalog/'
    );
    catalog.iceCream.items = result.catalog;
    const logoData = result['top-text-section'].logoData;
    return {catalog, logoData}
  }
}
</script>
