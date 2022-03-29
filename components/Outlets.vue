<template>
  <section>
    <swiper :options="swiperOptions" v-if="items">
      <swiper-slide v-for="item in items" :key="item.name">
        <div class="flex flex-col justify-start items-center bg-light-yellow-100">
          <img :class="{'h-160': $device.isDesktop}" :src="item.image" alt=""/>
          <div class=" flex flex-col items-center justify-center py-4">
            <span class="text-xl font-bold">{{ item.name }}</span>
            <span class="text-lg">{{ item.description }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
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
    if (this.outlets.items.length) {
      const items = [];
      for (const item in this.outlets.items) {
        for (const elem of this.outlets.items[item]) {
          items.push(elem);
        }
      }
      this.items = items;
      this.swiperOptions['slidesPerView'] = this.$device.isDesktop ? 3 : 1;
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
