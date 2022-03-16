<template>
  <div class="flex flex-row items-center bg-white font-bold w-max m-auto">
    <div class="px-8 py-4">
      <img class="w-32" :src="require('~/assets/img/logo-2.png')" alt=""/>
    </div>
    <NuxtLink class="px-8 py-4 hover:text-yellow-500 hover:underline" v-for="menuItem in menu" :key="menuItem.link" :to="menuItem.link">{{ menuItem.name }}</NuxtLink>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['menu']
}
</script>
