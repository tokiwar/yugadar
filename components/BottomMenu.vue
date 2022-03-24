<template class="">
  <div class="font-bold flex" :class="{'flex-row space-x-14' : $device.isDesktop, 'flex-col space-y-6' :!$device.isDesktop}">
    <div class="flex flex-col space-y-4">
      <span class="text-3xl">Адрес</span>
      <div class="flex flex-col">
        <span>ул. Весовая, 5,</span>
        <span>Краснодарский край,</span>
        <span>г. Тимашевск, 352700,</span>
        <span>Россия</span>
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <span class="text-3xl">Контакты</span>
      <div class="flex flex-col">
        <a href="mailto:mamay4339061@gmail.com">mamay4339061@gmail.com</a>
        <a href="tel:+79184339061">Тел. +7 (918) 433-90-61</a>
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <span class="text-3xl">Часы работы</span>
      <div class="flex flex-col">
        <span>ЕЖЕДНЕВНО</span>
        <span>10:00–22:00</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomMenu',
  data: () => ({})
}
</script>
