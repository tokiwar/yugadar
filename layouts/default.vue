<template>
  <div class="h-screen">
    <Header/>
    <main class="">
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
