<template>
  <section class="py-10 font-bold bg-pattern-lines flex flex-col justify-items items-center">
    <div class="grid grid-cols-2 auto-rows-auto gap-x-10 gap-y-10 select-none font-bold text-center w-4/6">
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
