<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
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
    },
    topSectionData: {
      title: 'Наши',
      subtitle: 'ТОЧКИ ПРОДАЖ',
      color: 'bg-light-yellow-100'
    }
  }),
  head() {
    return {
      title: '«Югадар» - Точки продажи'
    }
  },
}
</script>
