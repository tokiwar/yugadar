<template>
  <div>
    <section class="bg-light-yellow-100 flex flex-row justify-center items-center select-none"
             :class="{'h-192' : $device.isDesktop, 'h-auto' : !$device.isDesktop}">
      <div class="relative max-h-160">
        <img :class="{'h-112 my-14' : !$device.isDesktop}" :src="require('~/assets/img/logo/main-logo.png')" alt=""/>
      </div>
      <div class="absolute text-white flex flex-col justify-center items-center mt-36 font-black">
        <span :class="{'text-6xl': $device.isDesktop, 'text-2xl': !$device.isDesktop}">Югадар</span>
        <span :class="{'text-9xl': $device.isDesktop, 'text-5xl': !$device.isDesktop}">МОРОЖЕНОЕ</span>
        <NuxtLink to="/catalog"
                  class="mt-10 text-xl border-2 px-4 py-2 text-white border-white hover:bg-black hover:border-black ease-in-out duration-300">
          ПРОДУКЦИЯ
        </NuxtLink>
      </div>
    </section>
    <TextSectionHalf :section-data="sectionData" />
    <section class="flex justify-center items-center bg-blue-green-100 select-none"
             :class="{'h-192 flex-row' : $device.isDesktop, 'h-auto flex-col-reverse' : !$device.isDesktop}">
      <div class="">
        <img :class="{'h-104 object-cover object-center' : !$device.isDesktop}"  :src="require('~/assets/img/main-page-block-2.png')" alt=""/>
      </div>
      <div class="text-white flex flex-col justify-center items-center font-black"
      :class="{'absolute mt-36' : $device.isDesktop, 'mt-10' : !$device.isDesktop}"
      >
        <span :class="{'text-6xl': $device.isDesktop, 'text-3xl': !$device.isDesktop}">Подзаголовок</span>
        <span :class="{'text-9xl': $device.isDesktop, 'text-6xl': !$device.isDesktop}">Заголовок</span>
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
    sectionData: {
      title: 'Заголовок',
      subtitle: 'Подзаголовок',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.',
      name: 'ССЫЛКА',
      link: '/',
      img: require('~/assets/img/main-page-block-1.png')
    }
  }),
}
</script>
