<template>
  <div class="select-none h-auto font-black text-center py-20 space-y-20 bg-blue-green-100">
    <div class="leading-5" v-if="SectionData.title" :class="{'text-6xl':$device.isDesktop, 'text-4xl' : !$device.isDesktop}"
         v-html="SectionData.title"/>
    <swiper :options="swiperOptions" v-if="items" class="w-7/12">
      <swiper-slide v-for="item in items" :key="item.name">
        <div class="flex flex-col justify-center items-center h-80">
          <div class="flex flex-col items-center justify-between py-4 w-128 h-72 text-center border-4 bg-white border-gray-100 rounded-3xl shadow-lg">
            <div class="flex flex-row justify-between w-5/6">
              <span class="" v-html="item.name"></span>
              <span class="" v-html="item.positive"></span>
            </div>
            <span class="w-5/6 text-base text-between" v-html="item.text"></span>
            <span class="w-5/6" v-html="item.date"></span>
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
  name: 'FeedbackSection',
  props: ['SectionData'],
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    swiperOptions: {
      loop: true,
      slidesPerView: 2,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
    },
  }),
  computed: {
    display() {
      return this.SectionData.title || this.SectionData.subtitle || this.SectionData.text;
    },
    items() {
      return this.SectionData.feedbacks;
    }
  }
}
</script>
