<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Catalog :items="catalog.iceCream.items"/>
    <CatalogPrice class="mt-20" :catalog="catalog"/>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  head() {
    return {
      title: '«ЮгаДар» - Мороженое'
    }
  },
  data: () => ({
    topSectionData: {
      title: 'Наше',
      subtitle: 'МОРОЖЕНОЕ',
      color: 'bg-blue-green-100',
    },
  }),
  async asyncData({$axios}) {
    const catalog = {
      iceCream: {
        title: 'Мороженое в ассортименте (Пломбир жир 12%)',
        rows: ['', 'Цена (1 кг)', 'Цена (тара 3 кг)',],
      }
    };
    catalog.iceCream.items = await $axios.$get(
      '/api/catalog/'
    );
    return {catalog}
  }
}
</script>
