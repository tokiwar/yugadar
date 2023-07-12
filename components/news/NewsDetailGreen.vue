<template>
  <section class="select-none flex flex-col justify-center items-center pb-10 h-auto text-gray-900"
           :class="{'pt-2' : $device.isDesktopOrTablet}">
    <div class="bg-pattern-ice-cream bg-light-green-100 flex justify-center rounded-lg h-auto"
         :class="{'pt-10 w-11/12 ' : $device.isDesktopOrTablet, 'pt-8 w-11/12' : $device.isMobile}">
      <div class="h-auto flex bg-red-100 rounded-t-3xl flex-col justify-center items-center relative"
           :class="{'w-4/6 min-h-screen' : $device.isDesktopOrTablet, 'w-11/12' : $device.isMobile}">
        <img class="z-10 pt-40 text-red-400 w-2/5" :src="item.image" :title="item.name" :alt="item.name"/>
        <h1 class="z-10 uppercase absolute font-black text-pink-700"
            :class="{'text-10xl top-12 left-12 leading-none': $device.isDesktopOrTablet, 'top-16 left-2': $device.isMobile, 'text-4xl' : $device.isMobile && $mq === 'sm', 'text-7xl' : $device.isMobile && $mq === 'md'}"
            v-html="item.nameHtml"/>
        <span class="z-10 ml-auto text-pink-900"
              :class="{'text-3xl py-20 w-10/12 px-32' : $device.isDesktopOrTablet, 'pb-10 w-10/12 px-4' : $device.isMobile, 'text-base' : $device.isMobile && $mq === 'sm', 'text-lg': $device.isMobile && $mq === 'md'}"
              v-html="item.text"/>
        <div class="bg-red-200 absolute w-5/6 rounded-3xl"
             :class="{'h-5/6 top-28 left-20' : $device.isDesktopOrTablet, 'h-4/6 top-16 left-8' : $device.isMobile}"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsDetailGreen',
  props: ['item']
}
</script>
