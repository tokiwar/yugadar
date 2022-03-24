<template>
  <section v-if="SectionData.title || SectionData.subtitle || SectionData.text"
           class="flex flex-row justify-center items-center select-none"
           :class="{'h-104' :$device.isDesktop, 'h-auto' : !$device.isDesktop}">
    <div class="flex flex-col justify-center items-center font-black text-center"
         :class="{'w-3/6' : $device.isDesktop, 'w-4/5 my-14': !$device.isDesktop}">
      <div v-if="SectionData.title" :class="{'text-6xl w-3/6':$device.isDesktop, 'text-4xl' : !$device.isDesktop}">
        {{ SectionData.title }}
      </div>
      <div v-if="SectionData.subtitle" :class="{'text-2xl w-3/6':$device.isDesktop, 'text-3xl' : !$device.isDesktop}">
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
  name: 'TextSection',
  props: ['SectionData'],
}
</script>
