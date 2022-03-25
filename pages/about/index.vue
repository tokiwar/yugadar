<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <TextSection :section-data="sectionData1"/>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionDataParallax"/>
    <section v-else class="flex flex-row justify-center items-center select-none"
             :class="{'h-160' : $device.isDesktop, 'h-auto': !$device.isDesktop}">
      <img class="w-full object-cover object-center"
           :class="{'h-full' : $device.isDesktop, 'h-96': !$device.isDesktop}"
           :src="require('~/assets/img/about-page-block-1.png')"
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
    sectionDataParallax: {
      bg: 'bg-about-page-pattern',
    },
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
    },
    topSectionData: {
      title: 'Кто такие',
      subtitle: 'ЮГАДАР',
      color: 'bg-light-plum-100',
    }
  })
}
</script>
