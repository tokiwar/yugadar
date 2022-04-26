<template>
  <section v-if="SectionData.title || SectionData.subtitle || SectionData.text"
           :class="{'h-160 ' : $device.isDesktop, 'flex-row' : $device.isDesktop && !SectionData.imageRight, 'flex-row-reverse' : $device.isDesktop && SectionData.imageRight, 'h-auto flex-col-reverse' : !$device.isDesktop}"
           class="flex justify-center items-center select-none">
    <img v-if="SectionData.img"
         :class="{'w-3/6 h-full' : $device.isDesktop, 'h-112 w-full' : $device.isTablet, 'h-96' : $device.isMobile, 'bg-light-plum-100' : SectionData.imageRight, 'bg-light-pink-100' : !SectionData.imageRight }"
         class="object-cover object-center"
         width="1037"
         height="640"
         :src="SectionData.img" alt="image"/>
    <div :class="{'w-3/6' : $device.isDesktop, 'h-112 w-4/5' : !$device.isDesktop}"
         class="flex flex-col justify-center items-center font-black text-center">
      <div v-if="SectionData.title" :class="{'text-6xl w-3/6' : $device.isDesktop, 'text-4xl' : !$device.isDesktop}">
        {{ SectionData.title }}
      </div>
      <div v-if="SectionData.subtitle" class="font-marck"
           :class="{'text-3xl w-3/6' : $device.isDesktop, 'text-3xl' : !$device.isDesktop}">
        {{ SectionData.subtitle }}
      </div>
      <div v-if="SectionData.text" :class="{'w-3/6 pt-8':$device.isDesktop, 'pt-12' : !$device.isDesktop}">
        {{ SectionData.text }}
      </div>
      <NuxtLink v-if="SectionData.link && SectionData.name" :to="SectionData.link"
                class="mt-10 text-xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300">
        {{ SectionData.name }}
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TextSectionHalf',
  props: ['SectionData'],
}
</script>
