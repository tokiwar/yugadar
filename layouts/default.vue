<template>
  <div class="h-screen text-lg not-italic font-nunito">
    <Header/>
    <hr>
    <main class="max-w-screen-xl m-auto">
      <Nuxt class="my-14"/>
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
