<template>
  <section v-else class="flex justify-center items-center select-none"
           :class="className">
    <div class="">
      <img
        :class="{'h-112 object-cover object-center w-full':$device.isTablet, 'h-104 object-cover object-center' : $device.isMobile}"
        :src="SectionData.bgImage" alt=""/>
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
