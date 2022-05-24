<template>
  <div
    class="flex flex-row justify-between h-24 border-b-4 border-dashed text-gray-800">
    <div itemprop="name"
         class="p-2 flex items-center justify-center"
         :class="{'text-2xl' : $device.isDesktopOrTablet, 'text-sm font-bold w-3/6' : $device.isMobile}"
         v-html="item.name"/>
    <div class="flex flex-row items-center justify-center">
      <div class="p-2 border-l-4 border-dashed items-center justify-center"
           :class="{'text-xl font-bold' : $device.isDesktopOrTablet,'text-base font-bold w-3/6': $device.isMobile}"
           v-for="price in item['prices-formatted']" v-html="price"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogListItem',
  props: ['item'],
}
</script>
