<template>
  <header class="h-21 select-none" itemscope itemtype="https://schema.org/WPHeader">
    <TopMenu :menu="menu"/>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
