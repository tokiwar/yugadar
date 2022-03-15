<template>
  <div>
    <img :src="require('~/assets/img/yugadar-logo.png')" alt=""/>
    <div>
      Югадар
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head(){
    return {
      title: '«Югадар» - Главная страница'
    }
  }
}
</script>
