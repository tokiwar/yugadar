<template>
  <div v-if="$device.isDesktop" class="flex flex-row items-center bg-white font-bold w-max m-auto">
    <div class="px-8 py-4">
      <img class="w-32" :src="require('~/assets/img/logo-2.png')" alt=""/>
    </div>
    <NuxtLink class="px-8 py-4 hover:text-yellow-500 hover:underline text-xl" v-for="menuItem in menu"
              :key="menuItem.link"
              :to="menuItem.link">{{ menuItem.name }}
    </NuxtLink>
    <hr>
  </div>
  <div class="flex flex-row font-bold items-center place-content-between mx-4 my-2" v-else>
    <div class="m-auto">
      <img class="w-32" :src="require('~/assets/img/logo-2.png')" alt=""/>
    </div>
    <div class="absolute right-4 text-l font-black uppercase">
      <img class="w-9" :src="icon" @click.prevent="close" alt=""/>
      <transition name="fade">
        <div class="flex w-full flex-col fixed bg-white items-left justify-items py-2 mt-4 right-0" v-if="opened">
          <NuxtLink class="px-4" @click.native="close" v-for="menuItem in menu" :key="menuItem.link" :to="menuItem.link">
            {{ menuItem.name }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['menu'],
  data: () => ({
    opened: false,
    iconOpened: require('~/assets/img/service/menuOpened.png'),
    iconClosed: require('~/assets/img/service/menuClosed.png'),
  }),
  computed: {
    icon() {
      if (!this.opened) {
        return this.iconClosed;
      }
      return this.iconOpened;
    }
  },
  methods: {
    close() {
      this.opened = !this.opened;
    }
  }
}
</script>
