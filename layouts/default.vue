<template>
  <div class="h-screen text-lg not-italic font-nunito">
    <Header/>
    <hr>
    <main class="max-w-screen-xl m-auto" :class="{'mx-2': !$device.isDesktop}">
      <Nuxt class="my-4"/>
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
