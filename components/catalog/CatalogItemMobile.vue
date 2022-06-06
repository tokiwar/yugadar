<template>
  <div itemtype="https://schema.org/ListItem" itemprop="itemListElement" itemscope
       class="flex flex-col justify-start items-center space-y-2">
    <img itemprop="image" :src="item.image" :alt="item.name" :title="item.name" width="356" height="356"/>
    <meta itemprop="brand" itemtype="https://schema.org/Brand" itemscope content="ЮгаДар"/>
    <meta itemprop="url" content="https://yugadar.ru/catalog/">
    <meta itemprop="position" :content="item.key">
    <span itemprop="name" class="text-xl font-black" v-html="item.name"/>
    <span class="h-0.5 w-2/6 bg-gray-500 my-2 mx-auto"></span>
    <span itemprop="description" class="ml-4 pb-2 text-lg italic" v-html="item.description"/>
    <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
      <meta itemprop="availability" content="https://schema.org/InStock"/>
      <meta itemprop="priceCurrency" content="RUB"/>
      <meta itemprop="price" :content="parseInt(item.prices[0], 10)"/>
      <meta itemprop="minPrice" :content="parseInt(item.prices[0], 10)"/>
      <meta itemprop="maxPrice" :content="parseInt(item.prices[1], 10)"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogItemMobile',
  props: ['item']
}
</script>
