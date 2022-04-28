<template>
  <div v-if="loading" class="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
    <logo :color="'#F59E0B'" :gradient="{first:'#F59E0B', 'last': 'white', time: '1s'}"/>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: 'LoadingBar',
  data: () => ({
    loading: false,
    duration: 1000,
  }),
  methods: {
    ...mapActions([
      "toggleOverflow"
    ]),
    start() {
      this.loading = true;
      this.toggleOverflow();
    },
    finish() {
      setTimeout(() => {
          this.loading = false;
          this.toggleOverflow();
        },
        this.duration);
    }
  }
}
</script>
