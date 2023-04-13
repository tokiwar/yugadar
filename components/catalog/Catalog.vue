<template>
  <div class="pt-10 bg-pattern-lines flex flex-col justify-items items-center"
       :class="{'flex flex-col justify-center items-center text-center' : $device.isDesktop}">
    <h2 :class="{'text-7xl w-4/6':$device.isDesktop, 'text-5xl text-center' : !$device.isDesktop}">Ассортимент</h2>
    <section v-if="$device.isDesktop"
             itemtype="https://schema.org/ItemList" itemscope
             :class="{'p-10' : $device.isDesktopOrTablet, 'p-2' : $device.isMobile}"
             class="grid grid-cols-3 auto-rows-auto gap-x-16 gap-y-4 select-none text-center w-4/6 mx-auto mt-10 bg-white shadow-2xl border-4 border-gray-50">
      <catalog-item v-for="item in items" :key="item.key" :item="item"/>
    </section>
    <section class="mt-10 bg-white shadow-2xl border-4 border-gray-50 w-11/12" itemtype="https://schema.org/ItemList" itemscope v-else>
      <swiper :options="swiperOptions" v-if="items">
        <swiper-slide v-for="item in items" :key="item.key">
          <catalog-item-mobile :item="item"/>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Catalog',
  props: ['items'],
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    swiperOptions: {
      loop: true,
      initialSlide: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      },
    },
  })
}
</script>
