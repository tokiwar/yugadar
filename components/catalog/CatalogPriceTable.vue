<template>
  <section>
    <div class="flex flex-col items-center justify-center text-center bg-pattern-lines"
         :class="{'pt-10' : $device.isDesktopOrTablet, 'py-8' : $device.isMobile}"
         v-for="section in catalog">
      <h2 class="font-black" :class="{'text-6xl' : $device.isDesktop, 'text-4xl' : !$device.isDesktop}" v-html="section.title"/>
      <span v-if="section.subtitle" class="font-marck font-black"
            :class="{'text-3xl w-3/6 pt-2':$device.isDesktop, 'text-3xl' : !$device.isDesktop}"
            v-html="section.subtitle"/>
      <section
        class="flex flex-col select-none my-10 mx-auto glassmorphism"
        :class="{'w-3/6 p-10' : $device.isDesktop, 'text-base w-11/12 p-4':$device.isTablet, 'text-base w-11/12 p-2' : $device.isMobile}">
        <template v-for="item in section.items">
          <catalog-list-item :item="item"/>
        </template>
      </section>
    </div>
  </section>
</template>
<script>

export default {
  name: 'CatalogPriceTable',
  props: ['catalog']
}
</script>
