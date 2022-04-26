<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <Catalog :items="catalog.iceCream.items"/>
    <CatalogPrice class="mt-20" :catalog="catalog"/>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  head() {
    return {
      title: '«ЮгаДар» - Мороженое',
      meta: [
        {hid: 'description', name: 'description', content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое'},
      ],
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/catalog/'}
      ]
    }
  },
  data: () => ({
  }),
  async asyncData({$axios}) {
    const catalog = {
      iceCream: {
        title: 'Мороженое в ассортименте (Пломбир жир 12%)',
        rows: ['', 'Цена (1 кг)', 'Цена (тара 3 кг)',],
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
