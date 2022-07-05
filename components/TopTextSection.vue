<template>
  <div class="bg-pattern-ice-cream pt-40 pb-20" :class="classNameTop">
    <section v-if="SectionData.title || SectionData.subtitle"
             :class="className">
      <div class="text-white flex flex-col justify-center items-center font-black" v-if="SectionData.reverse">
        <h1 v-if="SectionData.title"
            :class="{'text-9xl': $device.isDesktop, 'text-4xl': !$device.isDesktop}">{{ SectionData.title }}</h1>
        <h2 v-if="SectionData.subtitle"
            :class="{'text-6xl': $device.isDesktop, 'text-xl': !$device.isDesktop}">{{ SectionData.subtitle }}</h2>
      </div>
      <div class="text-white flex flex-col justify-center items-center font-black" v-else>
        <h2 v-if="SectionData.subtitle"
            :class="{'text-6xl': $device.isDesktop, 'text-xl': !$device.isDesktop}">{{ SectionData.subtitle }}</h2>
        <h1 v-if="SectionData.title"
            :class="{'text-9xl': $device.isDesktop, 'text-4xl': !$device.isDesktop}">{{ SectionData.title }}</h1>
      </div>
    </section>
    <slot name="breadcrumbs"></slot>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: 'TopTextSection',
  props: ['SectionData', 'component'],
  data: () => ({
    classNameStatic: 'flex flex-row justify-center items-center select-none text-center'
  }),
  computed: {
    classNameTop() {
      return this.SectionData.bgColor;
    },
    className() {
      if (this.$device.isDesktop) {
        return 'h-96' + this.classNameStatic;
      } else {
        return 'h-48' + this.classNameStatic;
      }
    }
  }
}
</script>
