<template>
  <section v-if="display" :class="className" class="bg-pattern-ice-cream">
    <div class="relative max-h-160">
      <img :width="$device.isDesktopOrTablet ? 293 : 228 " :height="$device.isDesktopOrTablet ? 575 : 448"
           :class="{'h-112 my-14 w-auto' : !$device.isDesktop}" :src="SectionData.logoImage" title="Мороженое ЮгаДар"
           alt="Мороженое ЮгаДар"/>
    </div>
    <div v-if="this.SectionData.title || this.SectionData.subtitle || (this.SectionData.link && this.SectionData.name)"
         class="absolute text-white flex flex-col justify-center items-center mt-36 font-black">
      <h1 class="flex flex-col justify-center items-center space-y-4">
      <span v-if="SectionData.subtitle" :class="{'text-6xl': $device.isDesktop, 'text-2xl': !$device.isDesktop}"
            v-html="SectionData.subtitle"/>
        <span class="uppercase" v-if="SectionData.title" :class="{'text-9xl': $device.isDesktop, 'text-4xl': !$device.isDesktop}"
              v-html="SectionData.title"/>
      </h1>
      <NuxtLink v-if="SectionData.link && this.SectionData.name" :to="SectionData.link"
                class="mt-10 text-xl border-2 px-4 py-2 text-white border-white hover:bg-black hover:border-black ease-in-out duration-300"
                v-html="SectionData.name"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TopTextSectionWithImage',
  props: ['SectionData'],
  computed: {
    className() {
      let className = 'flex flex-row justify-center items-center select-none ' + (this.$device.isDesktop ? 'h-192' : 'h-auto');
      return className + (this.SectionData.bgColor ? ' ' + this.SectionData.bgColor : '');
    },
    display() {
      return this.SectionData.logoImage && (this.SectionData.title || this.SectionData.subtitle || (this.SectionData.link && this.SectionData.name));
    }
  }
}
</script>
