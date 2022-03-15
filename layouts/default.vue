<template>
  <div class="h-screen">
    <Header/>
    <main class="h-screen max-w-screen-xl m-auto">
      <Nuxt/>
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
