<template>
  <section class="bg-light-yellow-100">
    <swiper :options="swiperOptions" v-if="outlets">
      <swiper-slide v-for="item in outlets" :key="item.name">
        <div class="flex flex-col justify-start items-center">
          <img :class="{'h-136 rounded-2xl': $device.isDesktop}" :src="item.img" alt=""/>
          <div class=" flex flex-col items-center justify-center py-4 w-4/6 h-32 text-center">
            <span class="text-xl font-bold leading-6" v-html="item.description"></span>
            <span class="text-lg italic" v-html="item.time"></span>
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
    if (this.outlets.length) {
      this.swiperOptions['slidesPerView'] = this.$device.isDesktop ? 3 : 1;
      this.swiperOptions['spaceBetween'] = this.$device.isDesktop? 5 : 0;
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
