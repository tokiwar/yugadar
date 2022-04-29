<template>
  <div class="py-16">
    <div class="flex flex-col items-center justify-center font-black text-center" v-for="section in catalog">
      <span :class="{'text-6xl' : $device.isDesktop, 'text-4xl' : !$device.isDesktop}" v-html="section.title"/>
      <span v-if="section.subtitle" class="font-marck"
            :class="{'text-3xl w-3/6 pt-2':$device.isDesktop, 'text-3xl' : !$device.isDesktop}"
            v-html="section.subtitle"/>
      <section class="grid grid-cols-3 grid-rows-3 select-none my-10 mx-auto"
               :class="{'w-3/6' : $device.isDesktop, 'text-base w-11/12' : !$device.isDesktop}">
        <div class="font-black p-2" :class="{'bg-gray-200 border-2' : row, 'border-r-2 border-b-2' : !row}"
             v-for="row in section.rows" v-html="row"/>
        <template v-for="item in section.items">
          <div class="border-2 p-2 flex items-center justify-center" :class="{'text-sm' : $device.isMobile}"
               v-html="item.name"/>
          <div class="border-2 p-2 flex items-center justify-center" v-for="price in item.prices" v-html="price"/>
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
