<template>
  <section v-if="SectionData.title || SectionData.subtitle"
           :class="className">
    <div class="text-white flex flex-col justify-center items-center font-black">
      <span v-if="SectionData.title"
            :class="{'text-6xl': $device.isDesktop, 'text-2xl': !$device.isDesktop}">{{ SectionData.title }}</span>
      <span v-if="SectionData.subtitle"
            :class="{'text-9xl': $device.isDesktop, 'text-5xl': !$device.isDesktop}">{{ SectionData.subtitle }}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TopTextSection',
  props: ['SectionData'],
  data: () => ({
    classNameStatic: 'flex flex-row justify-center items-center select-none text-center'
  }),
  computed: {
    className() {
      if (this.$device.isDesktop) {
        return 'h-104' + ' ' + this.SectionData.color + ' ' + this.classNameStatic;
      } else {
        return 'h-96' + ' ' + this.SectionData.color + ' ' + this.classNameStatic;
      }
    }
  }
}
</script>
