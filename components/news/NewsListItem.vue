<template>
  <nuxt-link :to="item.code" class="flex flex-col justify-center items-center h-auto cursor-pointer hover:shadow-2xl">
    <div class="flex flex-col items-center justify-end text-justify glassmorphism"
         :class="{'w-152 space-y-8 h-88 py-6' : $device.isDesktopOrTablet, 'w-11/12 space-y-2 h-72 py-4' :$device.isMobile}">
      <img class="absolute top-0 left-0" :src="item.image" :title="item.name" :alt="item.name"/>
      <div class="z-10 text-white flex flex-col w-5/6">
        <span class="font-bold text-base underline" v-html="item.date"/>
        <span class="font-black text-4xl" v-html="item.name"/>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'NewsListItem',
  props: ['item']
}
</script>
