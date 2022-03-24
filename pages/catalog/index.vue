<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Catalog :catalog="catalog"/>
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
