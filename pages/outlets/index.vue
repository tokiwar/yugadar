<template>
  <div>
    <section class="h-104 bg-light-yellow-100 flex flex-row justify-center items-center select-none">
      <div class="absolute text-white flex flex-col justify-center items-center font-black">
        <span class="text-6xl">Наши</span>
        <span class="text-9xl">ТОЧКИ ПРОДАЖИ</span>
      </div>
    </section>
    <TextSection :section-data="sectionData"/>
  </div>
</template>

<script>
export default {
  name: 'OutletsPage',
  data: () => ({
    breadcrumb: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Точки продажи',
        link: '/outlets'
      },
    ],
    outlets: [
      {
        name: 'Точка 1',
        link: '/outlets/outlet1',
        img: require('~/assets/img/outlets/outlet1.png')
      },
      {
        name: 'Точка 2',
        link: '/outlets/outlet2',
        img: require('~/assets/img/outlets/outlet2.png')
      },
    ],
    sectionData: {
      title: 'Заголовок',
      subtitle: 'Подзаголовок',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.'
    }
  }),
  head() {
    return {
      title: '«Югадар» - Точки продажи'
    }
  },
}
</script>
