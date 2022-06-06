<template>
  <nav v-if="routes" class="py-2 mt-10 mx-10 font-black text-xl rounded-md bg-gray-100">
    <ul class="flex px-10 flex-row space-x-2">
      <li v-for="route in routes">
        <nuxt-link v-if="route.route" class="hover:text-yellow-500 hover:underline text-gray-700" :to="route.route">
          {{ route.name }}
        </nuxt-link>
        <div class="flex items-center space-x-2" v-else>
          <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
          </svg>
          <span class="underline text-yellow-500">{{ route.name }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  date: () => ({}),
  props: ['routes']
}
</script>
