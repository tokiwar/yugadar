<template>
  <header class="">
    <head>
      <title>Югадар</title>
    </head>
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
        name: 'Продукция',
        link: '/catalog'
      },
      {
        name: 'О нас',
        link: '/about'
      },
      {
        name: 'Контакты',
        link: '/contacts'
      },
      {
        name: 'Точки продажи',
        link: '/outlets'
      },
    ]
  }),
}
</script>
