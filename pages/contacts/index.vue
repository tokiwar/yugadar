<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
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
    },
    topSectionData: {
      title: 'Как связаться с',
      subtitle: 'НАМИ',
      color: 'bg-light-pink-100',
    }
  })
}
</script>
