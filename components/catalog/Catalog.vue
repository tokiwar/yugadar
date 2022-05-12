<template>
  <div class="py-20 font-bold bg-pattern-lines flex flex-col justify-items items-center"
       :class="{'flex flex-col justify-center items-center text-center' : $device.isDesktop}">
    <div :class="{'text-7xl w-4/6':$device.isDesktop, 'text-5xl text-center' : !$device.isDesktop}">Ассортимент</div>
    <section v-if="$device.isDesktop"
             :class="{'p-10' : $device.isDesktopOrTablet, 'p-2' : $device.isMobile}"
             class="grid grid-cols-3 auto-rows-auto gap-x-16 gap-y-4 select-none font-bold text-center w-3/6 mx-auto mt-10 glassmorphism bg-white">
      <div v-for="item in items" :key="item.key">
        <div class="flex flex-col items-center">
          <img :src="item.image" width="232" height="232" :alt="item.name" :title="item.name"/>
          <div class="flex flex-col pt-4 h-48">
            <span class="text-2xl h-16 flex items-center justify-center" v-html="item.nameHtml"></span>
            <span class="h-0.5 w-64 bg-gray-500 my-2 mx-auto"></span>
            <span class="italic h-20">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="my-10 glassmorphism bg-white w-11/12" v-else>
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
        disableOnInteraction: false
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      },
    },
  })
}
</script>
