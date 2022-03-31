<template>
  <section v-if="SectionData"
           class="flex items-center justify-center h-136 bg-fixed bg-center bg-blue-green-100 select-none"
  :class="SectionData.bg">
    <div class="absolute text-white flex flex-col justify-center items-center font-black" v-if="SectionData.subtitle || SectionData.title">
      <span v-if="SectionData.subtitle" class="text-7xl font-marck">{{ SectionData.subtitle }}</span>
      <span v-if="SectionData" class="text-9xl">{{ SectionData.title }}</span>
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
