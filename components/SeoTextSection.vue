<template>
  <section class="py-10 select-none bg-pattern-lines flex flex-col justify-center items-center" v-if="html">
    <div class="w-3/5 flex flex-col space-y-6"
         :class="{'w-3/5' : $device.isDesktopOrTablet, 'w-5/6 text-base' : !$device.isDesktopOrTablet}" v-html="html"/>
  </section>
</template>
<script>
export default {
  name: 'SeoTextSection',
  props: ['html'],
}
</script>
