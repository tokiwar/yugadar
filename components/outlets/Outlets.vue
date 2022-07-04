<template>
  <section class="pt-10" :class="{'pb-10' : $device.isDesktopOrTablet}">
    <swiper :options="swiperOptions" v-show="outlets">
      <swiper-slide v-for="item in outlets" :key="item.name">
        <outlets-item :item="item"/>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import outletsItem from "@/components/outlets/OutletsItem";
export default {
  name: 'Outlets',
  props: ['outlets'],
  components: {
    Swiper,
    SwiperSlide,
    outletsItem
  },
  computed: {
    swiperOptions() {
      const options = {
        loop: true,
        initialSlide: 0,
        Observer: true,
        ObserveParents: true,
        watchSlidesProgress: true,
        preloadImages: false,
        lazy: {
          loadPrevNext: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
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
