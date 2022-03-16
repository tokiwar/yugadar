<template>
  <div class="">
    <h1 class="text-7xl font-black">{{ detailData.name }}</h1>
    <div class="flex flex-row mt-14 justify-between">
      <div class="w-1/3">
        <img :src="detailData.img" :alt="detailData.name"/>
      </div>
      <div class="flex flex-col w-1/3">
        <span class="text-4xl font-semibold">Описание</span>
        <div class="mt-4 font-semibold">
          {{ detailData.detail.description }}
        </div>
        <span class="text-4xl font-semibold mt-10">Вес</span>
        <div class="mt-4 font-semibold">
          {{ detailData.detail.weight }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    detailData: null,
  }),
  async asyncData({params}) {
    if (params.itemData) {
      return {
        detailData: itemData
      }
    }
    return {
      detailData: {
        name: 'Банан',
        detail: {
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda at, beatae, culpa deleniti dolorum eaque earum hic in incidunt iste, nihil nobis perferendis possimus qui quos repellat vitae.',
          weight: '100г',
        },
        link: '/catalog/banan',
        img: require('~/assets/img/catalog/banan.png')
      }
    }
  }
}
</script>
