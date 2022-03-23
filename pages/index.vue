<template>
  <div>
    <section class="h-192 bg-light-yellow-100 flex flex-row justify-center items-center select-none">
      <div class="relative max-h-160">
        <img class="" :src="require('~/assets/img/logo/main-logo.png')" alt=""/>
      </div>
      <div class="absolute text-white flex flex-col justify-center items-center mt-36 font-black">
        <span class="text-6xl">Югадар</span>
        <span class="text-9xl">МОРОЖЕНОЕ</span>
        <NuxtLink to="/catalog" class="mt-10 text-xl border-2 px-4 py-2 text-white border-white hover:bg-black hover:border-black ease-in-out duration-300">Продукция</NuxtLink>
      </div>
    </section>
    <section class="h-160 flex flex-row justify-center items-center select-none">
      <img class="w-3/6 h-full object-cover object-center" :src="require('~/assets/img/main-page-block-1.png')" alt=""/>
      <div class="w-3/6 flex flex-col justify-center items-center font-black text-center">
        <div class="text-6xl w-3/6">Заголовок</div>
        <div class="text-2xl w-3/6">Подзаголовок</div>
        <div class="w-3/6 pt-8">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</div>
        <NuxtLink to="/" class="mt-10 text-xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300">ССЫЛКА</NuxtLink>
      </div>
    </section>
    <section class="h-auto flex flex-row justify-center items-center bg-blue-green-100 select-none">
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

export default {
  name: 'IndexPage',
  head() {
    return {
      title: '«Югадар» - Главная страница'
    }
  },
  data: () => ({
    sliderSettings: {
      infinite: true,
      autoplay: true,
    },
  }),
}
</script>
