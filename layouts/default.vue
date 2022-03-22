<template>
  <div class="h-screen text-lg not-italic font-nunito">
    <Header class="fixed top-0 left-0 z-50 w-full bg-white"/>
    <main class="mx-auto mt-24" :class="{'mx-2 max-w-screen-xl': !$device.isDesktop}">
      <Nuxt class=""/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>
