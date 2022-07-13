<template>
  <div
    class="flex flex-row justify-between h-24 border-b-4 border-dashed text-gray-800 w-full">
    <div itemprop="name"
         class="p-2 flex items-center justify-center"
         :class="{'text-2xl' : $device.isDesktopOrTablet, 'text-sm w-2/5' : $device.isMobile}"
         v-html="item.name"/>
    <div class="flex flex-row items-center justify-center"
         :class="{'w-3/5' : $device.isMobile}">
      <div class="p-2 border-l-4 border-dashed items-center justify-center"
           :class="{'text-xl' : $device.isDesktopOrTablet,'text-xs w-full whitespace-nowrap': $device.isMobile}"
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
