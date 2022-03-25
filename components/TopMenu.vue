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
  <div class="flex flex-row h-20 font-bold items-center place-content-between" v-else>
    <div class="m-auto">
      <img class="w-32" :src="require('~/assets/img/logo-2.png')" alt=""/>
    </div>
    <div class="absolute text-l font-black uppercase right-0">
      <button class="hamburger hamburger--spin" :class="{'is-active': opened}" type="button" @click.prevent="close">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <transition name="fade">
        <div class="flex w-full flex-col fixed bg-white items-left justify-items py-2 mt-2 right-0" v-if="opened">
          <NuxtLink class="px-4" @click.native="close" v-for="menuItem in menu" :key="menuItem.link"
                    :to="menuItem.link">
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
