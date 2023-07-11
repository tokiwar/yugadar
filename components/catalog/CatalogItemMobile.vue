<template>
  <div itemtype="https://schema.org/ListItem" itemprop="itemListElement" itemscope
       class="flex flex-col justify-start items-center space-y-2 relative">
    <span class="absolute top-2 left-2 text-base text-white flex flex-col space-y-1" v-if="item.new || item.popular">
      <span v-if="item.new" class="py-1 px-2 rounded-md text-center animate-pulse bg-red-500  uppercase font-sans font-bold">Новинка!</span>
      <span v-if="item.popular" class="py-1 px-2 rounded-md text-center animate-pulse bg-yellow-500  uppercase font-sans font-bold">Хит!</span>
    </span>
    <img itemprop="image" :src="item.image" :alt="item.name" :title="item.name" width="336" height="336"/>
    <meta itemprop="brand" itemtype="https://schema.org/Brand" itemscope content="ЮгаДар"/>
    <meta itemprop="url" content="https://yugadar.ru/catalog/">
    <meta itemprop="position" :content="item.key">
    <span itemprop="name" class="text-xl font-black text-center w-11/12" v-html="item.name"/>
    <span class="h-0.5 w-2/6 bg-gray-500 my-2 mx-auto"></span>
    <span class="text-xl font-black text-center w-11/12" v-html="item['price-real'] + ' / кг'"/>
    <span itemprop="description" class="text-base italic w-11/12" v-html="item.description"/>
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
