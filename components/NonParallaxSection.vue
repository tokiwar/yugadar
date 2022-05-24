<template>
  <section v-else class="flex justify-center items-center select-none bg-pattern-ice-cream"
           :class="className">
    <div class="">
      <img
        :class="{'h-auto w-full object-fill object-center':$device.isTablet, 'h-104 object-cover object-center' : $device.isMobile}"
        width="844" height="416"
        :src="$device.isDesktopOrTablet ? SectionData.bgImage : SectionData.bgImageMobile" alt="image" title="image"/>
    </div>
    <div v-if="SectionData.title || SectionData.subtitle"
         class="text-white flex flex-col justify-center items-center font-black"
         :class="{'absolute' : $device.isDesktopOrTablet,  'mt-36' :$device.isDesktop, 'mt-auto' : $device.isTablet, 'mt-10' : $device.isMobile}"
    >
        <span v-if="SectionData.subtitle"
              v-html="SectionData.subtitle"
              class="font-marck text-3xl"/>
      <span v-if="SectionData.title"
            v-html="SectionData.title"
            class="text-5xl"/>
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
