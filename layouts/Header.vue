<template>
  <header class="h-21 select-none" itemscope itemtype="https://schema.org/WPHeader">
    <top-menu :menu="menu"/>
  </header>
</template>

<script>
import topMenu from "@/components/menu/TopMenu";
export default {
  name: 'Header',
  components:{
    topMenu
  },
  data: () => ({
    menu: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Мороженое',
        link: '/catalog/'
      },
      {
        name: 'О нас',
        link: '/about/'
      },
      {
        name: 'Контакты',
        link: '/contacts/'
      },
      {
        name: 'Точки продажи',
        link: '/outlets/'
      },
    ]
  }),
}
</script>
