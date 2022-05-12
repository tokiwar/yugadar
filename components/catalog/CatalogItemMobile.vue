<template>
  <div itemtype="https://schema.org/Product" itemscope class="flex flex-col justify-start items-center space-y-2">
    <img :src="item.image" :alt="item.name" :title="item.name" width="356" height="356"/>
    <span class="text-xl font-black">{{ item.name }}</span>
    <span class="h-0.5 w-2/6 bg-gray-500 my-2 mx-auto"></span>
    <span class="ml-4 pb-2 text-lg italic">{{ item.description }}</span>
  </div>
</template>
<script>
export default {
  name: 'CatalogItemMobile',
  props: ['item']
}
</script>
