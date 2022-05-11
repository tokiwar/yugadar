<template>
  <div class="my-20 font-bold" :class="{'flex flex-col justify-center items-center text-center' : $device.isDesktop}">
    <div :class="{'text-7xl w-4/6':$device.isDesktop, 'text-5xl text-center' : !$device.isDesktop}">Ассортимент</div>
    <section v-if="$device.isDesktop"
             class="grid grid-cols-3 auto-rows-auto gap-x-16 gap-y-4 select-none font-bold text-center w-3/6 mx-auto mt-10">
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
    <section class="my-10" v-else>
      <swiper :options="swiperOptions" v-if="items">
        <swiper-slide v-for="item in items" :key="item.key">
          <div class="flex flex-col justify-start items-center space-y-2">
            <img :src="item.image" :alt="item.name" :title="item.name"/>
            <span class="text-xl font-black">{{ item.name }}</span>
            <span class="h-0.5 w-2/6 bg-gray-500 my-2 mx-auto"></span>
            <span class="text-lg italic">{{ item.description }}</span>
          </div>
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
    },
  })
}
</script>
