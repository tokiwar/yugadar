<template>
  <section v-if="SectionData"
           class="flex items-center justify-center h-136 bg-fixed bg-center bg-cover select-none"
           :class="SectionData.bg"
           :style="`background-image: url('${SectionData.bgImage}')`"
  >
    <div class="absolute text-white flex flex-col justify-center items-center font-black"
         v-if="SectionData.subtitle || SectionData.title">
      <span v-if="SectionData.subtitle" class="text-7xl font-marck">{{ SectionData.subtitle }}</span>
      <span v-if="SectionData.title" class="text-9xl">{{ SectionData.title }}</span>
      <NuxtLink v-if="SectionData.link && this.SectionData.name" :to="SectionData.link"
                class="mt-10 text-xl border-2 px-4 py-2 text-white border-white hover:bg-black hover:border-black ease-in-out duration-300"
                v-html="SectionData.name"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ParallaxSection',
  props: ['SectionData']
}
</script>
<style>
</style>
