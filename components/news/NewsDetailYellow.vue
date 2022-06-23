<template>
  <section class="select-none flex flex-col justify-center items-center pb-10 h-auto text-white"
           :class="{'pt-2' : $device.isDesktopOrTablet}">
    <div class="bg-pattern-ice-cream bg-yellow-400 flex justify-center rounded-lg h-auto"
         :class="{'pt-10 w-11/12 ' : $device.isDesktopOrTablet, 'pt-8 w-11/12' : $device.isMobile}">
      <div class="h-auto flex bg-black flex-col justify-center items-center relative"
           :class="{'w-4/6' : $device.isDesktopOrTablet, 'w-11/12' : $device.isMobile}">
        <div class="bg-yellow-500 rounded-full absolute z-20 border-8 border-black"
             :class="{'w-96 h-96 p-10 right-48 top-12' : $device.isDesktopOrTablet, 'w-60 h-60 p-8 top-5' : $device.isMobile}">
          <img class="text-yellow-400" :src="item.image" :title="item.name" :alt="item.name"/>
        </div>
        <h1 class="z-10 uppercase font-black pt-64"
            :class="{'text-9xl p-8 leading-none': $device.isDesktopOrTablet, 'top-16 left-2': $device.isMobile, 'text-4xl' : $device.isMobile && $mq === 'sm', 'text-7xl' : $device.isMobile && $mq === 'md'}"
            v-html="item.nameHtml"/>
        <span class="z-10 font-black ml-auto"
              :class="{'text-2xl pb-20 w-10/12 px-32' : $device.isDesktopOrTablet, 'pb-10 w-10/12 px-4' : $device.isMobile, 'text-base' : $device.isMobile && $mq === 'sm', 'text-lg': $device.isMobile && $mq === 'md'}"
              v-html="item.text"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsDetailYellow',
  props: ['item']
}
</script>
