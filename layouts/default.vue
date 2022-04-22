<template>
  <div class="h-screen text-lg not-italic font-nunito">
    <Header class="fixed top-0 left-0 z-40 w-full bg-white"/>
    <div v-if="menuOpened" class="fixed h-full w-full z-30 bg-black opacity-50"></div>
    <main class="mx-auto mt-20" :class="{'mx-2 max-w-screen-xl': $device.isMobile}">
      <Nuxt class="mt-20"/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import {mapState} from 'vuex'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState([
      "menuOpened",
    ]),
  },
}
</script>
