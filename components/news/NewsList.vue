<template>
  <section class="py-10 font-bold bg-pattern-lines flex flex-col justify-items items-center">
    <div
      :class="{'grid-cols-2 w-4/6' : $device.isDesktop, 'grid-cols-1 w-5/6' : $device.isMobile && $mq === 'sm' || $device.isTablet, 'grid-cols-1 w-3/6' : $device.isMobile && $mq === 'md'}"
      class="grid auto-rows-auto gap-x-10 gap-y-10 select-none font-bold text-center">
      <news-list-item v-for="item in items" :key="item.key" :item="item"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsList',
  props: ['items']
}
</script>
