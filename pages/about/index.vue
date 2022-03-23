<template>
  <div>
    <section class="h-104 bg-light-plum-100 flex flex-row justify-center items-center select-none">
      <div class="absolute text-white flex flex-col justify-center items-center font-black">
        <span class="text-6xl">Кто такие</span>
        <span class="text-9xl">ЮГАДАР</span>
      </div>
    </section>
    <section class="h-104 flex flex-row justify-center items-center select-none">
      <div class="w-3/6 flex flex-col justify-center items-center font-black text-center">
        <div class="text-6xl w-3/6">Заголовок</div>
        <div class="text-2xl w-3/6">Подзаголовок</div>
        <div class="w-3/6 pt-8">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните,
          чтобы добавить свой текст и настроить шрифт.
        </div>
      </div>
    </section>
    <section class="h-160 flex flex-row justify-center items-center select-none">
      <img class="h-full w-full object-cover object-center" :src="require('~/assets/img/about-page-block-1.png')" alt=""/>
    </section>
    <section class="h-104 flex flex-row justify-center items-center select-none">
      <div class="w-3/6 flex flex-col justify-center items-center font-black text-center">
        <div class="text-6xl w-3/6">Заголовок</div>
        <div class="text-2xl w-3/6">Подзаголовок</div>
        <div class="w-3/6 pt-8">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните,
          чтобы добавить свой текст и настроить шрифт.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: '«Югадар» - О нас'
    }
  }
}
</script>
