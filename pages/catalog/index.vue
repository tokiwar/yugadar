<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Catalog :catalog="catalog"/>
    <CatalogPrice class="mt-20" :catalog="catalogPrice"/>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  head() {
    return {
      title: '«Югадар» - Продукция'
    }
  },
  data: () => ({
    topSectionData: {
      title: 'Наше',
      subtitle: 'МОРОЖЕНОЕ',
      color: 'bg-blue-green-100',
    },
    catalogPrice: {
      iceCream: {
        title: 'МОРОЖЕНОЕ В АССОРТИМЕНТЕ (жир 15%)',
        rows: ['', 'Цена (1 кг)', 'Цена (тара 2,5 кг)',],
        items: [
          {
            name: 'Пломбир',
            prices: ['280 руб.', '700 руб.'],
          },
          {
            name: 'Клубника',
            prices: ['280 руб.', '700 руб.'],
          },
          {
            name: 'Вишня',
            prices: ['280 руб.', '700 руб.'],
          },
          {
            name: 'Черная смородина',
            prices: ['280 руб.', '700 руб.'],
          },
          {
            name: 'Киви',
            prices: ['280 руб.', '700 руб.'],
          },
          {
            name: 'Малина',
            prices: ['280 руб.', '700 руб.'],
          },
        ]
      },
      waffleCone: {
        title: 'РОЖОК ВАФЕЛЬНЫЙ',
        rows: ['', 'Цена (за Шт.)', 'Цена (коробка)',],
        items: [
          {
            name: 'Рожок 110',
            prices: ['2,66 руб.', '600 руб. / 225 шт.'],
          },
          {
            name: 'Рожок 150',
            prices: ['2,33 руб.', '1000 руб. / 300 шт.'],
          },
          {
            name: 'Рожок 185',
            prices: ['4 руб.', '1200 руб. / 300 шт.'],
          },
        ]
      }
    },
    catalog: [
      [
        {
          'name': 'Мороженое 1',
          'description': 'Описание 1',
          'image': require('~/assets/img/catalog/moroj1.png')
        },
        {
          'name': 'Мороженое 2',
          'description': 'Описание 2',
          'image': require('~/assets/img/catalog/moroj2.png')
        },
        {
          'name': 'Мороженое 3',
          'description': 'Описание 3',
          'image': require('~/assets/img/catalog/moroj3.png')
        }
      ],
      [
        {
          'name': 'Мороженое 4',
          'description': 'Описание 4',
          'image': require('~/assets/img/catalog/moroj4.png')
        },
        {
          'name': 'Мороженое 5',
          'description': 'Описание 5',
          'image': require('~/assets/img/catalog/moroj5.png')
        },
        {
          'name': 'Мороженое 6',
          'description': 'Описание 6',
          'image': require('~/assets/img/catalog/moroj6.png')
        }
      ]
    ]
  }),
  async asyncData({params}) {

  }
}
</script>
