<template>
  <div v-if="$device.isDesktop" class="flex flex-row items-center bg-white font-black w-max m-auto">
    <NuxtLink class="px-8 py-4" :class="{'pointer-events-none' : $route.path === '/'}" to="/">
      <logo :color="'#F59E0B'"/>
    </NuxtLink>
    <NuxtLink :class="{'text-yellow-500 underline pointer-events-none' : menuItem.link === $route.path}"
              class="px-8 py-4 hover:text-yellow-500 hover:underline text-2xl" v-for="menuItem in menu"
              :key="menuItem.link"
              :to="menuItem.link">{{ menuItem.name }}
    </NuxtLink>
    <hr>
  </div>
  <div class="flex flex-row h-20 font-bold items-center place-content-between z-40" v-else-if="$device.isTablet">
    <NuxtLink class="m-auto" :class="{'pointer-events-none' : $route.path === '/'}" to="/">
      <img class="w-32" :src="logo" alt="logo" title="logo"/>
    </NuxtLink>
    <div class="absolute text-l font-black uppercase right-0">
      <button class="hamburger hamburger--spin" :class="{'is-active': opened}" type="button" @click.prevent="close">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <transition name="fade">
        <div class="flex w-3/12 flex-col fixed bg-white items-left justify-items py-2 right-0 h-full text-2xl space-y-2"
             v-if="opened">
          <NuxtLink class="px-6" @click.native="close"
                    :class="{'text-yellow-500 underline pointer-events-none' : menuItem.link === $route.path}"
                    v-for="menuItem in menu" :key="menuItem.link"
                    :to="menuItem.link">
            {{ menuItem.name }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </div>
  <div class="flex flex-row h-20 font-bold items-center place-content-between" v-else>
    <NuxtLink class="m-auto" :class="{'pointer-events-none' : $route.path === '/'}" to="/">
      <logo :color="'#F59E0B'"/>
    </NuxtLink>
    <div class="absolute text-l font-black uppercase right-0">
      <button class="hamburger hamburger--spin" :class="{'is-active': opened}" type="button" @click.prevent="close">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <transition name="fade">
        <div class="flex w-full flex-col text-2xl fixed bg-white items-center justify-items py-2 mt-2 right-0" v-if="opened">
          <NuxtLink class="px-4 py-1" @click.native="close"
                    :class="{'text-yellow-500 text-3xl underline pointer-events-none' : menuItem.link === $route.path}"
                    v-for="menuItem in menu" :key="menuItem.link"
                    :to="menuItem.link">
            {{ menuItem.name }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'TopMenu',
  props: ['menu'],
  data: () => ({
    opened: false,
    logo: require('@/assets/img/logo-top.png')
  }),
  methods: {
    ...mapActions([
      "toggleOverflow"
    ]),
    ...mapMutations([
      "openMenu",
      "closeMenu",
    ]),
    close() {
      this.opened = !this.opened;
      this.toggleOverflow();
      if (this.opened) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    }
  },
  // async fetch() {
  //   const result = await this.$axios.$get(
  //     '/api/service/'
  //   );
  //   if (result.service && result.service.logo) {
  //     this.logo = result.service.logo;
  //   }
  // },
}
</script>