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
      title: '«Югадар» - Продукция'
    }
  },
  data: () => ({
    topSectionData: {
      title: 'Наше',
      subtitle: 'МОРОЖЕНОЕ',
      color: 'bg-blue-green-100',
    },
    catalog: {
      iceCream: {
        title: 'Мороженое в ассортименте (Пломбир жир 12%)',
        rows: ['', 'Цена (1 кг)', 'Цена (тара 3 кг)',],
        items: [
          {
            name: 'Пломбир «Классический»',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['380 руб.', '1140 руб.'],
          },
          {
            name: 'Шоколадное',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj2.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Шоколадная крошка',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj3.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Грецкий орех',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj4.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Фисташка',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj5.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'БаблГам (вкус жев.резинки)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj6.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Голубое небо (вкус капучино)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Тирамису',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Карамель',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Кокос',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Клубника (с/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Смородина (c/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Вишня (с/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Лесная ягода',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Малина (с/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Киви',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Мята',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Банан',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Манго',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Ананас',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Дыня',
            image: require('~/assets/img/catalog/moroj1.png'),
            description: 'Описание 1',
            prices: ['430 руб.', '1290 руб.'],
          },
          {
            name: 'Лимон',
            image: require('~/assets/img/catalog/moroj1.png'),
            description: 'Описание 1',
            prices: ['430 руб.', '1290 руб.'],
          },
        ]
      },
    },
  }),
  async asyncData({params}) {

  }
}
</script>
