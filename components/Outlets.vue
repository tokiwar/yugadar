<template>
  <section v-if="!$device.isDesktop" class="flex flex-col justify-center items-center select-none font-bold text-center"
           :class="{'my-28 space-y-20': $device.isDesktop, 'my-10' : !$device.isDesktop}">
    <div v-if="outlets.title" class="font-bold"
         :class="{'text-7xl' : $device.isDesktop, 'text-4xl mb-10' : !$device.isDesktop}">
      {{ outlets.title }}
    </div>
    <div v-for="line in outlets.items" class="flex justify-center w-3/6"
         :class="{'flex-row space-x-20 place-items-start' : $device.isDesktop, 'flex-col items-center' : !$device.isDesktop}">
      <div v-for="item in line" class="flex flex-col justify-start items-center space-y-2"
           :class="{'w-4/12': $device.isDesktop}">
        <img :src="item.image" alt=""/>
        <span class="text-xl font-black">{{ item.name }}</span>
        <span class="text-lg">{{ item.description }}</span>
      </div>
    </div>
  </section>
  <section class="my-20" v-else>
    <no-ssr>
      <swiper :options="swiperOptions" v-if="items">
        <swiper-slide v-for="item in items" :key="item.name">
          <div class="flex flex-col justify-start items-center space-y-2">
            <img class="h-160 rounded-3xl" :src="item.image" alt=""/>
            <span class="text-xl font-black">{{ item.name }}</span>
            <span class="text-lg">{{ item.description }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </no-ssr>
  </section>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Outlets',
  props: ['outlets'],
  components: {
    Swiper,
    SwiperSlide
  },
  created() {
    if (this.$device.isDesktop) {
      if (this.outlets.items.length) {
        const items = [];
        for (const item in this.outlets.items) {
          for (const elem of this.outlets.items[item]) {
            items.push(elem);
          }
        }
        this.items = items;
      }
    }
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
    items: null,
  })
}
</script>
