<template>
  <div>
    <div class="font-bold flex"
         :class="{'flex-row space-x-14' : $device.isDesktopOrTablet, 'flex-col space-y-6' :$device.isMobile}">
      <div class="flex flex-col space-y-4">
        <span class="text-3xl">Адрес</span>
        <div class="flex flex-col">
          <span>пос. Индустриальный,</span>
          <span>Центральная усадьба,</span>
          <span>Краснодарский край,</span>
          <span>г. Тимашевск, 350056,</span>
          <span>Россия</span>
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="text-3xl">Контакты</span>
        <div class="flex flex-col space-y-2">
          <a href="mailto:mamay4339061@gmail.com">mamay4339061@gmail.com</a>
          <a href="tel:+79184339061">Тел. +7 (918) 433-90-61</a>
          <button @click.prevent="toggleFeedbackForm"
                  class="text-black border-2 bg-white hover:bg-black hover:border-white hover:text-white focus:outline-none font-bold text-base px-4 py-2 text-center ease-in-out duration-300">
            Обратная связь
          </button>
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="text-3xl">Часы работы</span>
        <div class="flex flex-col">
          <span>Понедельник - Суббота</span>
          <span>9:00–19:00</span>
        </div>
      </div>
    </div>
    <feedback-form @close="toggleFeedbackForm" :class="{'hidden' : closed, 'fixed': !closed}"/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'BottomMenu',
  data: () => ({
    closed: true,
  }),
  methods: {
    ...mapActions([
      "toggleOverflow"
    ]),
    toggleFeedbackForm() {
      this.closed = !this.closed;
      this.toggleOverflow();
    },
  }
}
</script>
