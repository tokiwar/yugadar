<template>
  <div v-if="$device.isDesktop" class="flex flex-row items-center bg-white font-bold w-max m-auto">
    <div class="px-8 py-4">
      <img class="w-32" :src="require('~/assets/img/logo-2.png')" alt=""/>
    </div>
    <NuxtLink class="px-8 py-4 hover:text-yellow-500 hover:underline" v-for="menuItem in menu" :key="menuItem.link"
              :to="menuItem.link">{{ menuItem.name }}
    </NuxtLink>
    <hr>
  </div>
  <div class="flex flex-row font-bold items-center place-content-between mx-4 my-2" v-else>
    <div>
      <img class="w-32" :src="require('~/assets/img/logo-2.png')" alt=""/>
    </div>
    <div>
      <img class="w-9" :src="require('~/assets/img/service/menu.png')" @click.prevent="close" alt=""/>
      <div class="flex flex-col fixed bg-yellow-500 items-center px-4 right-4" v-if="opened">
        <NuxtLink class="" v-for="menuItem in menu" :key="menuItem.link" :to="menuItem.link">{{
            menuItem.name
          }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['menu'],
  data: () => ({
    opened: false,
  }),
  created() {

  },
  methods: {
    close() {
      this.opened = !this.opened;
    }
  }
}
</script>
