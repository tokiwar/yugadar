<template>
  <section v-else class="flex justify-center items-center select-none bg-pattern-ice-cream"
           :class="className">
    <div class="">
      <img
        class=""
        :class="{'bg-red-200 bg-blue-green-100': $device.isDesktop, 'h-auto w-full object-fill object-center':$device.isTablet, 'h-104 object-cover object-center' : $device.isMobile}"
        width="844" height="416"
        :src="$device.isDesktopOrTablet ? SectionData.bgImage : SectionData.bgImageMobile" alt="image" title="image"/>
    </div>
    <div v-if="SectionData.title || SectionData.subtitle"
         class="text-white flex flex-col justify-center items-center font-black relative"
         :class="{'absolute' : $device.isDesktopOrTablet,  'mt-36' :$device.isDesktop, 'mt-auto' : $device.isTablet, 'mt-10' : $device.isMobile}"
    >
        <span v-if="SectionData.subtitle"
              v-html="SectionData.subtitle"
              class="font-marck text-3xl"/>
      <span v-if="SectionData.title"
            v-html="SectionData.title"
            class="text-5xl"/>
      <NuxtLink v-if="SectionData.link && this.SectionData.name" :to="SectionData.link"
                class="top-24 absolute text-xl border-2 px-4 py-2 text-white border-white hover:bg-black hover:border-black ease-in-out duration-300"
                v-html="SectionData.name"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NonParallaxSection',
  props: ['SectionData'],
  computed: {
    className() {
      if (this.$device.isDesktop) {
        return 'h-192 flex-row' + ' ' + this.SectionData.bg;
      }
      if (this.$device.isTablet) {
        return 'h-auto' + ' ' + this.SectionData.bg;
      }
      if (this.$device.isMobile) {
        return 'h-auto flex-col-reverse' + ' ' + this.SectionData.bg;
      }
    }
  }
}
</script>
