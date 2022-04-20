<template>
  <section v-else class="flex justify-center items-center select-none"
           :class="className">
    <div class="">
      <img
        :class="{'h-112 object-cover object-center w-full':$device.isTablet, 'h-104 object-cover object-center' : $device.isMobile}"
        width="390" height="416"
        :src="SectionData.bgImage" alt=""/>
    </div>
    <div v-if="SectionData.title || SectionData.subtitle"
         class="text-white flex flex-col justify-center items-center font-black"
         :class="{'absolute mt-36' : $device.isDesktop, 'mt-10' : !$device.isDesktop}"
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
