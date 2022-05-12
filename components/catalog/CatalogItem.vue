<template>
  <div itemtype="https://schema.org/Product" itemscope class="flex flex-col items-center">
    <img :src="item.image" width="232" height="232" :alt="item.name" :title="item.name"/>
    <div class="flex flex-col pt-4 h-48">
      <span itemprop="name" class="text-2xl h-16 flex items-center justify-center" v-html="item.nameHtml"></span>
      <span itemprop="image" class="h-0.5 w-64 bg-gray-500 my-2 mx-auto"></span>
      <span itemprop="description" class="italic h-20" v-html="item.description "/>
      <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
        <meta itemprop="availability" content="https://schema.org/InStock" />
        <meta itemprop="priceCurrency" content="RUB"/>
        <meta itemprop="minPrice" :content="parseInt(item.prices[0], 10)" />
        <meta itemprop="maxPrice" :content="parseInt(item.prices[1], 10)" />
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
