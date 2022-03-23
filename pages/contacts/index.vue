<template>
  <div>
    <section class="h-104 bg-light-pink-100 flex flex-row justify-center items-center select-none">
      <div class="absolute text-white flex flex-col justify-center items-center font-black">
        <span class="text-6xl">Как связаться с</span>
        <span class="text-9xl">НАМИ</span>
      </div>
    </section>
    <TextSection :section-data="sectionData"/>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  head() {
    return {
      title: '«Югадар» - Контакты'
    }
  },
  data: () => ({
    sectionData: {
      title: 'Заголовок',
      subtitle: 'Подзаголовок',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.',
    }
  })
}
</script>
