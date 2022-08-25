<template>
  <div>
    <div class=" flex item-center justify-center"
         :class="{'flex-row space-x-12 uppercase' : $device.isDesktop, 'flex-col space-y-4' :$device.isMobileOrTablet}">
      <div class="flex flex-col"
           :class="{'space-y-4' : $device.isDesktopOrTablet, 'space-y-1' : $device.isMobile}">
        <span :class="{'text-2xl' : $device.isDesktop, 'text-xl underline' : !$device.isDesktop}">Адрес</span>
        <div class="flex flex-col text-base">
          <span>пос. Индустриальный,</span>
          <span>Центральная усадьба,</span>
          <span>Краснодарский край,</span>
          <span>г. Тимашевск, 350056,</span>
          <span>Россия</span>
        </div>
      </div>
      <div class="flex flex-col" :class="{'space-y-4' : $device.isDesktopOrTablet, 'space-y-1' : $device.isMobile}">
        <span :class="{'text-2xl' : $device.isDesktop, 'text-xl underline' : !$device.isDesktop}">Контакты</span>
        <div class="flex flex-col space-y-2 text-base">
          <a href="mailto:mamay4339061@gmail.com">mamay4339061@gmail.com</a>
          <a href="tel:+79184339061">Тел. +7 (918) 433-90-61</a>
          <button @click.prevent="toggleFeedbackForm"
                  :class="{'text-xl px-4 py-2' : $device.isDesktopOrTablet, 'text-lg px-2 py-1' : $device.isMobile}"
                  class="hover:text-black border-white hover:border-none border-2 hover:bg-white border-black bg-black text-white focus:outline-none text-center ease-in-out duration-300">
            Обратная связь
          </button>
        </div>
      </div>
      <div class="flex flex-col" :class="{'space-y-4' : $device.isDesktopOrTablet, 'space-y-1' : $device.isMobile}">
        <span :class="{'text-2xl' : $device.isDesktop, 'text-xl underline' : !$device.isDesktop}">Часы работы</span>
        <div class="flex flex-col text-base">
          <span>Понедельник - Суббота</span>
          <span>9:00–19:00</span>
        </div>
      </div>
      <div class="flex flex-col" :class="{'space-y-4' : $device.isDesktopOrTablet, 'space-y-1' : $device.isMobile}"
           v-if="menu.socials">
        <span :class="{'text-2xl' : $device.isDesktop, 'text-xl underline' : !$device.isDesktop}">Социальные сети</span>
        <div class="flex flex-row text-base space-x-4">
          <a rel="nofollow" target="_blank" :title="social.title" :href="social.link" v-for="social in menu.socials" :key="social.key">
            <svg-icon class="h-12 w-12" :name="social.code"/>
          </a>
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
  props: ['menu'],
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
