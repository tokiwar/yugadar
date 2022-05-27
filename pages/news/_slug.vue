<template>
  <section>
    <top-text-section :section-data="logoData"/>
    <div class="h-96 bg-pattern-lines">
      {{ logoData }}
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    logoData: {
      title: 'Открытие сайта',
      bgColor: 'bg-light-pink-100',
      text: 'Текст статьи',
      image: 'Изображение статьи',
      date: 'Дата'
    }
  }),
  async asyncData({params, route, $axios}) {
    const data = params // When calling /abc the slug will be "abc"
    return {data}
  }
}
</script>
