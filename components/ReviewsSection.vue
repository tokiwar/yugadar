<template>
  <div class="select-none h-auto font-black text-center py-20 space-y-20 bg-blue-green-100">
    <div class="leading-5"
         :class="{'text-6xl':$device.isDesktop, 'text-4xl' : !$device.isDesktop}"
         v-html="'Отзывы'"/>
    <swiper :options="swiperOptions" v-if="items" class="w-full">
      <swiper-slide v-for="item in items" :key="item.name">
        <div class="flex flex-col justify-center items-center h-104">
          <div
            class="flex flex-col items-center justify-start space-y-8 py-8 h-96 text-justify border-4 bg-white border-gray-100 rounded-3xl shadow-lg"
            :class="{'w-152' : $device.isDesktop, 'w-11/12' :$device.isMobile}">
            <div class="flex flex-col w-5/6">
              <span class="text-3xl" v-html="item.name"></span>
              <span class="w-5/6 text-base underline" v-html="item.date"></span>
            </div>
            <span class="w-5/6 text-between" :class="{'text-lg' : $device.isDesktop, 'text-sm' : $device.isMobile }"
                  v-html="item.text"></span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ReviewsSection',
  props: ['items'],
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({}),
  computed: {
    swiperOptions() {
      const options = {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      };
      if (this.items.length) {
        options['slidesPerView'] = this.$device.isDesktopOrTablet ? 3 : 1;
        options['spaceBetween'] = this.$device.isDesktop ? 5 : 0;
      }
      return options;
    },
  }
}
</script>
