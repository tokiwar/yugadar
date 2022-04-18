<template>
  <div v-if="loading" class="fixed top-0 left-0 w-full h-full bg-white z-50">

  </div>
</template>
<script>
export default {
  name: 'LoadingBar',
  data: () => ({
    loading: false,
    duration: 3000,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      setTimeout(() => {
          this.loading = false;
        },
      this.duration);
    }
  }
}
</script>
