<template>
  <div class="fixed w-full h-full bg-black-rgba top-0 z-40 left-0 flex items-center justify-center"
       @click.self="$emit('close')">
    <div
      class="h-160 opacity-100 relative w-136 top-0 left-0 z-50 border-8 bg-white border-gray-100 rounded-3xl shadow-lg py-8 px-10 flex flex-col">
      <span class="w-full text-right" @click.prevent="$emit('close')">Закрыть</span>
      <div>
        <span>Это типа форма</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReviewsForm',
  data: () => ({})
}
</script>
