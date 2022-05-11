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
      title: '«ЮгаДар» - Мороженое - Мороженое от кубанского производителя',
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
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Мороженое - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/catalog/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое. Ассортимент мороженого и объемы продажи.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое. Ассортимент мороженого и объемы продажи.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'мороженое, пломбир, цена, ассортименте, тара, тимашевск, краснодарский край'
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
