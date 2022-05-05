<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <Catalog v-if="false" :items="catalog.iceCream.items"/>
    <catalog-price-table :catalog="catalog"/>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  head() {
    return {
      title: '«ЮгаДар» - Мороженое',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/catalog/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое'
      },
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
    return {catalog, logoData, meta}
  }
}
</script>
