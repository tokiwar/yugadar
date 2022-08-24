<template>
  <div class="bg-pattern-ice-cream pt-40 pb-20" :class="classNameTop">
    <section v-if="SectionData.title || SectionData.subtitle"
             :class="className">
      <div class="text-white flex flex-col justify-center items-center font-black" v-if="SectionData.reverse">
        <h1 class="flex flex-col justify-center items-center">
          <span class="uppercase" v-if="SectionData.title"
              :class="{'text-9xl': $device.isDesktop, 'text-4xl': !$device.isDesktop}">{{ SectionData.title }}</span>
          <span class="uppercase" v-if="SectionData.subtitle"
              :class="{'text-6xl': $device.isDesktop, 'text-xl': !$device.isDesktop}">{{ SectionData.subtitle }}</span>
        </h1>
      </div>
      <div class="text-white flex flex-col justify-center items-center font-black" v-else>
        <h1 class="flex flex-col justify-center items-center space-y-4">
          <span v-if="SectionData.subtitle"
                :class="{'text-6xl': $device.isDesktop, 'text-xl': !$device.isDesktop}">{{
              SectionData.subtitle
            }}</span>
          <span class="uppercase" v-if="SectionData.title"
                :class="{'text-9xl': $device.isDesktop, 'text-4xl': !$device.isDesktop}">{{ SectionData.title }}</span>
        </h1>
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
