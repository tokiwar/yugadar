<template>
  <div>
    <section class="h-104 bg-light-plum-100 flex flex-row justify-center items-center select-none">
      <div class="absolute text-white flex flex-col justify-center items-center font-black">
        <span class="text-6xl">Кто такие</span>
        <span class="text-9xl">ЮГАДАР</span>
      </div>
    </section>
    <TextSection :section-data="sectionData1"/>
    <section class="h-160 flex flex-row justify-center items-center select-none">
      <img class="h-full w-full object-cover object-center" :src="require('~/assets/img/about-page-block-1.png')"
           alt=""/>
    </section>
    <TextSection :section-data="sectionData2"/>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: '«Югадар» - О нас'
    }
  },
  data: () => ({
    sectionData1: {
      title: 'Заголовок1',
      subtitle: 'Подзаголовок1',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт1.',
      name: 'КОНТАКТЫ',
      link: '/contacts'
    },
    sectionData2: {
      title: 'Заголовок2',
      subtitle: 'Подзаголовок2',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт2.'
    }
  })
}
</script>
