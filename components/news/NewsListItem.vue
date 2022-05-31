<template>
  <nuxt-link :to="item.code + '/'"
             class="flex flex-col justify-center items-center h-auto cursor-pointer hover:shadow-2xl">
    <div class="flex flex-col items-center justify-end text-justify glassmorphism relative"
         :class="{'w-152 space-y-8 h-88 py-6' : $device.isDesktopOrTablet, 'w-full space-y-2 h-auto' :$device.isMobile}">
      <img :class="{'absolute top-0 left-0' : $device.isDesktopOrTablet}" :src="item.image" :title="item.name"
           :alt="item.name"/>
      <div class="z-10 text-white flex flex-col w-5/6" :class="{'absolute pb-2' : $device.isMobile}">
        <span class="font-bold text-base underline" v-html="item.date"/>
        <span class="font-black" :class="{'text-4xl' : $device.isDesktopOrTablet, 'text-2xl' : $device.isMobile}"
              v-html="item.name"/>
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
