<template>
  <section v-if="SectionData.title || SectionData.subtitle || SectionData.text"
           class="flex flex-row justify-center items-center select-none h-auto bg-pattern-lines"
           :class="{'py-16' :$device.isDesktop}">
    <div class="flex flex-col justify-center items-center text-center"
         :class="{'w-4/6' : $device.isDesktop, 'w-4/5 my-14': !$device.isDesktop}">
      <h2 v-if="SectionData.title" class="font-bold" :class="{'text-6xl w-4/6':$device.isDesktop, 'text-4xl' : !$device.isDesktop}">
        {{ SectionData.title }}
      </h2>
      <span v-if="SectionData.subtitle" class="font-marck font-bold" :class="{'text-3xl w-3/6 pt-2':$device.isDesktop, 'text-3xl' : !$device.isDesktop}">
        {{ SectionData.subtitle }}
      </span>
      <h5 v-if="SectionData.text" v-html="SectionData.text" class="text-justify space-y-4" :class="{'w-5/6 pt-8':$device.isDesktop, 'pt-12' : !$device.isDesktop}"></h5>
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
