<template>
  <div>
    <section class="h-104 bg-blue-green-100 flex flex-row justify-center items-center select-none">
      <div class="absolute text-white flex flex-col justify-center items-center font-black">
        <span class="text-6xl">Наше</span>
        <span class="text-9xl">МОРОЖЕНОЕ</span>
      </div>
    </section>
    <section class="flex flex-col justify-center items-center select-none my-28 space-y-20 font-bold text-center">
      <div v-for="line in catalog" class="flex flex-row justify-center items-center space-x-20 w-3/6">
        <div v-for="item in line" class="flex flex-col justify-center items-center space-y-5 w-4/12">
          <img :src="item.image" alt=""/>
          <span class="text-4xl">{{ item.name }}</span>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </section>
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
