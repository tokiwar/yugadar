<template>
  <section class="select-none flex flex-col justify-center items-center pt-2 pb-10 h-auto text-gray-900">
    <div class="bg-pattern-ice-cream w-11/12 bg-red-400 flex justify-center pt-10 rounded-lg h-auto">
      <div class="w-4/6 h-auto flex bg-white flex-col justify-center items-center relative">
        <img class="pt-40 z-10" :src="item.image" :title="item.name" :alt="item.name"/>
        <span class="z-10 uppercase absolute top-12 left-12 text-9xl font-black" v-html="item.name"/>
        <span class="z-10 pb-20 w-9/12 px-28 text-xl font-black ml-auto" v-html="item.text"/>
        <div class="bg-gray-200 absolute top-28 right-20 h-5/6 w-4/6 rounded-lg"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsDetail',
  props: ['item']
}
</script>
