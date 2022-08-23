<template>
  <section class="pt-10" :class="{'pb-10' : $device.isDesktopOrTablet}">
    <swiper :options="swiperOptions" v-show="outlets && display" @ready="show" @slide-change="changeColor" ref="swiper">
      <swiper-slide v-for="item in outlets" :key="item.name" :data-color="item.bgColor">
        <outlets-item-slide :item="item"/>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import OutletsItemSlide from "@/components/outlets/OutletsItemSlide";

export default {
  name: 'Outlets',
  props: ['outlets'],
  components: {
    Swiper,
    SwiperSlide,
    OutletsItemSlide
  },
  methods: {
    show() {
      this.display = true;
    },
    changeColor() {
      const iterator = 1;
      const slides = this.$refs.swiper.$swiper.slides;
      const currentSlide = slides[this.$refs.swiper.$swiper.realIndex + iterator];
      const color = currentSlide.getAttribute('data-color');
      this.$emit('changeColor', color);
    }
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
        slidesPerView: 1,
        lazy: {
          loadPrevNext: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
      };
      if (this.outlets.length) {
        options['spaceBetween'] = this.$device.isDesktop ? 5 : 0;
      }
      return options;
    }
  },
  data: () => ({
    items: null,
    display: false
  })
}
</script>
