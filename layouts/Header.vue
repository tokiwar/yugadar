<template>
  <header class="h-21 select-none" itemscope itemtype="https://schema.org/WPHeader">
    <top-menu :menu="menu"/>
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
        link: '/'
      },
      {
        key: 1,
        name: 'Новости',
        link: '/news/'
      },
      {
        key: 2,
        name: 'Мороженое',
        link: '/catalog/'
      },
      {
        key: 3,
        name: 'О нас',
        link: '/about/'
      },
      {
        key: 4,
        name: 'Контакты',
        link: '/contacts/'
      },
      {
        key: 5,
        name: 'Точки продажи',
        link: '/outlets/'
      },
    ]
  }),
}
</script>
