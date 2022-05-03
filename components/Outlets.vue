<template>
  <section :class="{'py-20' : $device.isDesktopOrTablet, 'py-10' : $device.isMobile}">
    <swiper :options="swiperOptions" v-show="outlets">
      <swiper-slide v-for="item in outlets" :key="item.name">
        <div class="flex flex-col justify-start items-center">
          <img
            class="border-2 border-black bg-light-yellow-100"
            :class="{'h-136': $device.isDesktop, 'h-104' :$device.isTablet && $mq === 'lg', 'h-80' : $device.isTablet && $mq !== 'lg' }"
            :src="item['img']"
            :srcset="`${item['img-2x']} 2x, ${item['img-3x']} 3x`"
            :width="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
            :height="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
            :alt="item.name"/>
          <div
            class="flex flex-col items-center justify-center py-4 h-28 text-center bg-white border-black border-l-2 border-r-2 border-b-2"
            :class="{'h-36' : $device.isTablet && $mq !== 'lg', 'w-136':$device.isDesktop, 'w-104' :$device.isTablet && $mq === 'lg', 'w-80' : $device.isTablet && $mq !== 'lg',
             'w-full' : $device.isMobile}">
            <span class="font-black leading-6"
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
