<template>
  <header class="">
    <head>
      <title>Югадар</title>
    </head>
    <TopMenu :menu="menu"/>
    <img :src="require('~/assets/img/yugadar-logo.png')" alt=""/>
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
        name: 'О нас',
        link: '/about'
      },
      {
        name: 'Точки продажи',
        link: '/outlets'
      },
    ]
  }),
}
</script>
