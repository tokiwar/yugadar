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
    catalog: {
      iceCream: {
        title: 'Мороженое в ассортименте (Пломбир жир 12%)',
        rows: ['', 'Цена (1 кг)', 'Цена (тара 3 кг)',],
        items: [
          {
            name: 'Пломбир «Классический»',
            nameHtml: 'Пломбир</br>«Классический»',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['350 руб.', '1050 руб.'],
          },
          {
            name: 'Шоколадное',
            nameHtml: 'Шоколадное',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj2.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Шоколадная крошка',
            nameHtml: 'Шоколадная</br>крошка',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj3.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Грецкий орех',
            nameHtml: 'Грецкий орех',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj4.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Фисташка',
            nameHtml: 'Фисташка',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj5.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'БаблГам (вкус жев.резинки)',
            nameHtml: 'БаблГам</br>(вкус жев.резинки)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj6.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Голубое небо (вкус капучино)',
            nameHtml: 'Голубое небо</br>(вкус капучино)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Тирамису',
            nameHtml: 'Тирамису',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Карамель',
            nameHtml: 'Карамель',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Кокос',
            nameHtml: 'Кокос',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Клубника (с/м ягода)',
            nameHtml: 'Клубника</br>(с/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Смородина (c/м ягода)',
            nameHtml: 'Смородина</br>(c/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Вишня (с/м ягода)',
            nameHtml: 'Вишня</br>(с/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Лесная ягода',
            nameHtml: 'Лесная ягода',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Малина (с/м ягода)',
            nameHtml: 'Малина</br>(с/м ягода)',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Киви',
            nameHtml: 'Киви',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Мята',
            nameHtml: 'Мята',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Банан',
            nameHtml: 'Банан',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Манго',
            nameHtml: 'Манго',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Ананас',
            nameHtml: 'Ананас',
            description: 'Описание 1',
            image: require('~/assets/img/catalog/moroj1.png'),
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Дыня',
            nameHtml: 'Дыня',
            image: require('~/assets/img/catalog/moroj1.png'),
            description: 'Описание 1',
            prices: ['400 руб.', '1200 руб.'],
          },
          {
            name: 'Лимон',
            nameHtml: 'Лимон',
            image: require('~/assets/img/catalog/moroj1.png'),
            description: 'Описание 1',
            prices: ['400 руб.', '1200 руб.'],
          },
        ]
      },
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
