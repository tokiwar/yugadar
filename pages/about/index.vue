<template>
  <div>
    <img :src="require('~/assets/img/about.png')" alt=""/>
    <div>
      Page ABOUT
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head(){
    return {
      title: '«Югадар» - О нас'
    }
  }
}
</script>
