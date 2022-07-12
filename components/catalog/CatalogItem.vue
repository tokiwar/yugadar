<template>
  <div itemtype="https://schema.org/ListItem" itemprop="itemListElement" itemscope class="flex flex-col items-center relative">
    <span class="absolute top-1 left-1 text-base text-white flex flex-col space-y-1" v-if="item.new || item.popular">
      <span v-if="item.new" class="py-1 px-2 rounded-md  animate-pulse bg-red-500  uppercase font-sans font-bold">Новинка!</span>
      <span v-if="item.popular" class="py-1 px-2 rounded-md animate-pulse bg-yellow-500  uppercase font-sans font-bold">Хит!</span>
    </span>
    <img itemprop="image" :src="item.image" width="356" height="356" :alt="item.name" :title="item.name"/>
    <meta itemprop="brand" itemtype="https://schema.org/Brand" itemscope content="ЮгаДар"/>
    <meta itemprop="url" content="https://yugadar.ru/catalog/">
    <meta itemprop="position" :content="item.key">
    <div class="flex flex-col pt-4 h-48">
      <span itemprop="name" class="text-2xl h-16 flex items-center justify-center" v-html="item.nameHtml"></span>
      <span class="h-0.5 w-64 bg-gray-500 my-2 mx-auto"/>
      <span itemprop="description" class="italic h-20" v-html="item.description "/>
      <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
        <meta itemprop="availability" content="https://schema.org/InStock"/>
        <meta itemprop="priceCurrency" content="RUB"/>
        <meta itemprop="price" :content="parseInt(item.prices[0], 10)"/>
        <meta itemprop="minPrice" :content="parseInt(item.prices[0], 10)"/>
        <meta itemprop="maxPrice" :content="parseInt(item.prices[1], 10)"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogItem',
  props: ['item']
}
</script>
