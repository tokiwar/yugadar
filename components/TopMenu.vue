<template>
  <ul class="flex flex-row menu">
    <li class="ml-10" v-for="menuItem in menu">
      <NuxtLink :to="menuItem.link">{{menuItem.name}}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['menu']
}
</script>
