<template>
  <div>
    <div class="select-none h-auto font-black text-center bg-blue-green-100 bg-pattern-ice-cream"
         :class="{'space-y-20 py-20' : $device.isDesktopOrTablet, 'space-y-8 py-10' : $device.isMobile}">
      <div class="leading-5"
           :class="{'text-6xl':$device.isDesktop, 'text-4xl' : !$device.isDesktop}"
           v-html="'Отзывы'"/>
      <swiper :options="swiperOptions" v-if="items" class="w-full">
        <swiper-slide v-for="item in items" :key="item.name">
          <reviews-item :item="item"/>
        </swiper-slide>
      </swiper>
      <button @click.prevent="toggleReviewsForm"
              class="text-black border-2 bg-white border-black hover:bg-black hover:text-white focus:outline-none font-bold text-xl px-4 py-2 text-center ease-in-out duration-300">
        Оставить отзыв
      </button>
    </div>
    <reviews-form @close="toggleReviewsForm" :class="{'hidden' : closed, 'fixed': !closed}"/>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapActions} from 'vuex'
import ReviewsItem from "@/components/reviews/ReviewsItem";

export default {
  name: 'ReviewsSection',
  props: ['items'],
  components: {
    ReviewsItem,
    Swiper,
    SwiperSlide
  },
  data: () => ({
    closed: true,
  }),
  methods: {
    ...mapActions([
      "toggleOverflow"
    ]),
    toggleReviewsForm() {
      this.closed = !this.closed;
      this.toggleOverflow();
    },
  },
  computed: {
    swiperOptions() {
      const options = {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        }
      };
      if (this.items.length) {
        options['slidesPerView'] = this.$device.isDesktop ? 3 : 1;
        options['spaceBetween'] = this.$device.isDesktop ? 5 : 0;
      }
      return options;
    },
  }
}
</script>
