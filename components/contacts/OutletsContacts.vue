<template>
  <section v-if="outlets.title || outlets.subtitle || outlets.text"
           class="flex flex-row justify-center items-center select-none h-auto bg-pattern-lines"
           :class="{'py-16' :$device.isDesktop}">
    <div class="flex flex-col justify-center items-center text-center"
         :class="{'w-4/6' : $device.isDesktop, 'w-11/12 my-14': $device.isTablet, 'w-4/5 my-14': $device.isMobile}">
      <h2 v-if="outlets.title" class="font-black" :class="{'text-5xl w-4/6':$device.isDesktop, 'text-2xl' : !$device.isDesktop}">
        {{ outlets.title }}
      </h2>
      <span v-if="outlets.subtitle" class="font-marck font-black"
           :class="{'text-2xl w-3/6 pt-2':$device.isDesktop, 'text-xl' : !$device.isDesktop}">
        {{ outlets.subtitle }}
      </span>
      <div v-if="outlets.items" class="flex flex-col text-justify"
           :class="{'pt-8 text-xl space-y-4 w-4/5':$device.isDesktopOrTablet, 'pt-12 text-lg space-y-2' : $device.isMobile}">
        <a target="_blank" rel="nofollow" class="hover:underline hover:text-yellow-500" v-for="item in outlets.items" :key="item.key" v-html="item.value" :href="item.yaMapLink"/>
      </div>
      <div v-if="outlets.text" v-html="outlets.text" class="text-justify space-y-4"
           :class="{'w-5/6 pt-8':$device.isDesktop, 'pt-12' : !$device.isDesktop}"></div>
      <NuxtLink v-if="outlets.link && outlets.name" :to="outlets.link"
                class="mt-10 text-2xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300">
        {{ outlets.name }}
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  name: 'OutletsContacts',
  props: ['outlets']
}
</script>
