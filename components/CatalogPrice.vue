<template>
  <div>
    <div class="flex flex-col items-center justify-center font-bold text-center my-20" v-for="section in catalog">
      <span :class="{'text-3xl' : $device.isDesktop, 'text-2xl' : !$device.isDesktop}">{{ section.title }}</span>
      <section class="grid gap-4 grid-cols-3 grid-rows-3 select-none my-10 mx-auto"
               :class="{'w-3/6' : $device.isDesktop, 'text-base w-11/12' : !$device.isDesktop}">
        <div v-for="row in section.rows">{{ row }}</div>
        <template v-for="item in section.items">
          <div>{{ item.name }}</div>
          <div v-for="price in item.prices">{{ price }}</div>
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
