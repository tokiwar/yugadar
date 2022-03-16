<template>
  <div class="flex flex-row space-x-5 text-xl font-medium" v-if="routes.length > 1">
    <NuxtLink class="hover:text-yellow-500 hover:underline" v-for="route in routes" :to="route.link" :key="route.link">{{ route.name }}</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['routes'],
  name: 'Breadcrumb'
}
</script>
