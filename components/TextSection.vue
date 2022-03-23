<template>
  <section v-if="SectionData.title || SectionData.subtitle || SectionData.text"
           class="h-104 flex flex-row justify-center items-center select-none">
    <div class="w-3/6 flex flex-col justify-center items-center font-black text-center">
      <div v-if="SectionData.title" class="text-6xl w-3/6">{{ SectionData.title }}</div>
      <div v-if="SectionData.subtitle" class="text-2xl w-3/6">{{ SectionData.subtitle }}</div>
      <div v-if="SectionData.text" class="w-3/6 pt-8">{{ SectionData.text }}</div>
      <NuxtLink v-if="SectionData.link && SectionData.name" :to="SectionData.link"
                class="mt-10 text-xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300">
        {{ SectionData.name }}
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: ['SectionData'],
  name: 'TextSection',
}
</script>
