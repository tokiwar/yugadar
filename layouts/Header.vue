<template>
  <header class="h-21 select-none shadow-lg" itemscope itemtype="https://schema.org/WPHeader">
    <top-menu :menu="menu"/>
    <client-only>
      <vue-scroll-indicator color="#F59E0B" background="none"/>
    </client-only>
  </header>
</template>

<script>
import topMenu from "@/components/menu/TopMenu";

export default {
  name: 'Header',
  components: {
    topMenu
  },
  data: () => ({
    menu: [
      {
        key: 0,
        name: 'Главная',
        link: '/',
        icon: 'main-page'
      },
      {
        key: 1,
        name: 'Новости',
        link: '/news/',
        icon: 'news'
      },
      {
        key: 2,
        name: 'Мороженое',
        link: '/catalog/',
        icon: 'ice-cream-main'
      },
      {
        key: 3,
        name: 'О нас',
        link: '/about/',
        icon: 'about'
      },
      {
        key: 4,
        name: 'Контакты',
        link: '/contacts/',
        icon: 'contacts'
      },
      {
        key: 5,
        name: 'Точки продажи',
        link: '/outlets/',
        icon: 'outlet'
      },
    ]
  }),
}
</script>
