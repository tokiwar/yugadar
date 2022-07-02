<template>
  <div itemscope itemtype="https://schema.org/NewsArticle">
    <nuxt-link itemprop="mainEntityOfPage" :to="item.code + '/'"
               class="flex flex-col justify-center items-center h-auto cursor-pointer hover:shadow-2xl">
      <meta itemprop="datePublished" :datetime="item.dateFormatted" :content="item.dateFormatted">
      <meta itemprop="dateModified" :datetime="item.dateFormatted" :content="item.dateFormatted">
      <meta itemprop="description" :content="item.text">
      <div itemprop="author" itemscope="" itemtype="http://schema.org/Person">
        <meta itemprop="name" content="ЮгаДар">
        <meta itemprop="url" content="https://yugadar.ru/">
      </div>
      <div class="flex flex-col items-center justify-end text-justify glassmorphism relative"
           :class="{'w-152 space-y-8 h-88 py-6' : $device.isDesktopOrTablet, 'w-full space-y-2 h-48' :$device.isMobile}">
        <img
          itemprop="image"
          :class="{'absolute top-0 left-0 w-full h-full object-cover' : $device.isDesktopOrTablet, 'w-full h-full object-cover' : $device.isMobile}"
          :src="item.image" :title="item.name"
          :alt="item.name"/>
        <div class="z-10 text-white flex flex-col w-5/6" :class="{'absolute pb-2' : $device.isMobile}">
          <span class="font-bold text-base underline" v-html="item.date"/>
          <h3 itemprop="headline name" class="font-black"
                :class="{'text-4xl' : $device.isDesktopOrTablet, 'text-2xl' : $device.isMobile}"
                v-html="item.name"/>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'NewsListItem',
  props: ['item']
}
</script>
