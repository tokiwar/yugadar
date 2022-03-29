<template>
  <div>
    <div class="flex flex-col items-center justify-center font-bold text-center my-20" v-for="section in catalog">
      <span :class="{'text-3xl' : $device.isDesktop, 'text-2xl' : !$device.isDesktop}">{{ section.title }}</span>
      <section class="grid grid-cols-3 grid-rows-3 select-none my-10 mx-auto"
               :class="{'w-3/6' : $device.isDesktop, 'text-base w-11/12' : !$device.isDesktop}">
        <div class="font-black p-2" :class="{'bg-gray-200 border-2' : row, 'border-r-2 border-b-2' : !row}"
             v-for="row in section.rows">{{ row }}
        </div>
        <template v-for="item in section.items">
          <div class="border-2 p-2 flex items-center justify-center">{{ item.name }}</div>
          <div class="border-2 p-2 flex items-center justify-center" v-for="price in item.prices">{{ price }}</div>
        </template>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogPrice',
  props: ['catalog']
}
</script>
