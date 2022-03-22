<template>
  <div>
    <section class="h-192 bg-yellow-200 flex flex-row justify-center items-center">
      <div class="relative max-h-160">
        <img class="" :src="require('~/assets/img/logo/main-logo.png')" alt=""/>
      </div>
      <div class="absolute text-white flex flex-col justify-center items-center mt-36">
        <span class="text-6xl font-black">Югадар</span>
        <span class="text-9xl font-black">МОРОЖЕНОЕ</span>
      </div>
    </section>
    <section class="h-160 flex flex-row justify-center items-center">
      <img class="w-3/6 h-full object-cover object-center" :src="require('~/assets/img/main-page-block-1.png')" alt=""/>
      <div class="w-3/6 flex flex-col justify-center items-center font-black text-center">
        <div class="text-6xl w-3/6">Заголовок</div>
        <div class="text-2xl w-3/6">Подзаголовок</div>
        <div class="w-3/6 pt-8">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</div>
        <NuxtLink to="/" class="mt-10 text-xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300">ССЫЛКА</NuxtLink>
      </div>
    </section>
    <section class="h-auto flex flex-row justify-center items-center bg-blue-green-100">
      <div class="">
        <img class="" :src="require('~/assets/img/main-page-block-2.png')" alt=""/>
      </div>
      <div class="absolute text-white flex flex-col justify-center items-center mt-36">
        <span class="text-6xl font-black">Подзаголовок</span>
        <span class="text-9xl font-black">Заголовок</span>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'IndexPage',
  head() {
    return {
      title: '«Югадар» - Главная страница'
    }
  },
  components: {VueSlickCarousel},
  data: () => ({
    sliderSettings: {
      infinite: true,
      autoplay: true,
    },
  }),
}
</script>
