<template>
  <section v-if="$device.isDesktop"
           class="flex flex-col justify-center items-center select-none font-bold text-center my-20"
           :class="{'space-y-20': $device.isDesktop,}">
    <div v-for="line in catalog" class="flex justify-center w-3/6"
         :class="{'flex-row space-x-20 place-items-start' : $device.isDesktop, 'flex-col items-center' : !$device.isDesktop}">
      <div v-for="item in line" class="flex flex-col justify-center items-center space-y-5"
           :class="{'w-4/12': $device.isDesktop}">
        <img :src="item.image" alt=""/>
        <span class="text-4xl">{{ item.name }}</span>
        <span>{{ item.description }}</span>
      </div>
    </div>
  </section>
  <section class="my-20" v-else>
    <swiper :options="swiperOptions" v-if="items">
      <swiper-slide v-for="item in items" :key="item.name">
        <div class="flex flex-col justify-start items-center space-y-2">
          <img :src="item.image" alt=""/>
          <span class="text-xl font-black">{{ item.name }}</span>
          <span class="text-lg">{{ item.description }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Catalog',
  props: ['catalog'],
  components: {
    Swiper,
    SwiperSlide
  },
  created() {
    if (!this.$device.isDesktop) {
      if (this.catalog.length) {
        const items = [];
        for (const item in this.catalog) {
          for (const elem of this.catalog[item]) {
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
