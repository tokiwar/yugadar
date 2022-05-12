<template>
  <section>
    <div class="py-20 flex flex-col items-center justify-center font-black text-center bg-pattern-lines"
         v-for="section in catalog">
      <span :class="{'text-6xl' : $device.isDesktop, 'text-4xl' : !$device.isDesktop}" v-html="section.title"/>
      <span v-if="section.subtitle" class="font-marck"
            :class="{'text-3xl w-3/6 pt-2':$device.isDesktop, 'text-3xl' : !$device.isDesktop}"
            v-html="section.subtitle"/>
      <section class="flex flex-col select-none my-10 mx-auto glassmorphism"
               :class="{'w-3/6 p-10' : $device.isDesktop, 'text-base w-11/12 p-2' : !$device.isDesktop}">
        <template v-for="item in section.items">
          <div class="flex flex-row justify-between h-24 border-b-4 border-dashed text-gray-700">
            <div class="p-2 flex items-center justify-center"
                 :class="{'text-2xl' : $device.isDesktop, 'text-sm font-bold w-3/6' : $device.isMobile}"
                 v-html="item.name"/>
            <div class="flex flex-row items-center justify-center">
              <div class="p-2 border-l-4 border-dashed items-center justify-center"
                   :class="{'text-xl font-bold' : $device.isDesktop,'text-base font-bold w-3/6': $device.isMobile}"
                   v-for="price in item['prices-formatted']" v-html="price"/>
            </div>
          </div>
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
