<template>
  <section class="select-none flex flex-col justify-center items-center pb-10 h-auto text-white"
           :class="{'pt-2' : $device.isDesktopOrTablet}">
    <div class="bg-pattern-ice-cream bg-purple-500 flex justify-center rounded-lg h-auto"
         :class="{'pt-10 w-11/12 ' : $device.isDesktopOrTablet, 'pt-8 w-11/12' : $device.isMobile}">
      <div class="h-auto flex bg-white rounded-t-3xl flex-col justify-center items-center relative"
           :class="{'w-4/6 min-h-screen' : $device.isDesktopOrTablet, 'w-11/12' : $device.isMobile}">
        <div class="absolute rounded-t-3xl bg-purple-900 top-0 left-0 w-full"
             :class="{'h-4/6' : $device.isDesktopOrTablet, 'h-3/6' : $device.isMobile}"/>
        <div class="absolute rounded-l-3xl bg-purple-400 right-0 w-9/12"
             :class="{'h-3/5' : $device.isDesktopOrTablet, 'top-20' : $device.isMobile, 'h-3/6' : $device.isMobile && $mq === 'sm', 'h-4/6' : $device.isMobile && $mq === 'md'}"/>
        <img class="pb-10 ml-auto z-10 text-purple-700 w-3/6"
             :class="{'pt-80 mr-32' : $device.isDesktopOrTablet, 'pt-32 mr-10' : $device.isMobile}" :src="item.image"
             :title="item.name" :alt="item.name"/>
        <h1 class="z-10 uppercase absolute font-black"
            :class="{'text-10xl top-12 left-12 leading-none': $device.isDesktopOrTablet, 'top-16 left-2': $device.isMobile, 'text-5xl' : $device.isMobile && $mq === 'sm', 'text-7xl' : $device.isMobile && $mq === 'md'}"
            v-html="item.nameHtml"/>
        <span class="z-10 mr-auto text-gray-900"
              :class="{'text-3xl pb-16 pt-4 w-7/12 px-32' : $device.isDesktopOrTablet, 'pb-10 w-10/12 px-4' : $device.isMobile, 'text-base' : $device.isMobile && $mq === 'sm', 'text-lg': $device.isMobile && $mq === 'md'}"
              v-html="item.text"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsDetailPurple',
  props: ['item']
}
</script>
