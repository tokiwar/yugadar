<template>
  <section class="bg-light-yellow-100">
    <swiper :options="swiperOptions" v-show="outlets">
      <swiper-slide v-for="item in outlets" :key="item.name">
        <div class="flex flex-col justify-start items-center">
          <img
            :class="{'h-136 rounded-2xl': $device.isDesktop, 'h-104 rounded-xl' :$device.isTablet && $mq === 'lg', 'h-80 rounded-xl' : $device.isTablet && $mq !== 'lg' }"
            :src="$device.isDesktop ? item['img'] : ($device.isMobile ? item['img-mobile'] : ($device.isTablet ? item['img-table'] : ''))"
            :width="$device.isDesktop ? 544 : ($device.isMobile ? 390 : ($device.isTablet ? 320 : ''))"
            :height="$device.isDesktop ? 544 : ($device.isMobile ? 390 : ($device.isTablet ? 320 : ''))"
            :alt="item.name"/>
          <div class="flex flex-col items-center justify-center py-4 w-4/6 h-32 text-center"
               :class="{'h-36' : $device.isTablet && $mq !== 'lg'}">
            <span class="font-bold leading-6"
                  :class="{'text-xl' : $device.isDesktop || $device.isMobile, 'text-base' :$device.isTablet && $mq !== 'lg'}"
                  v-html="item.description"></span>
            <span class="italic"
                  :class="{'text-lg': $device.isDesktop || $device.isMobile, 'text-sm' : $device.isTablet && $mq !== 'lg' }"
                  v-html="item.time"></span>
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
  computed: {
    swiperOptions() {
      const options = {
        loop: true,
        initialSlide: 0,
        Observer: true,
        ObserveParents: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      };
      if (this.outlets.length) {
        options['slidesPerView'] = this.$device.isDesktopOrTablet ? 3 : 1;
        options['spaceBetween'] = this.$device.isDesktop ? 5 : 0;
      }
      return options;
    }
  },
  data: () => ({
    items: null,
  })
}
</script>
