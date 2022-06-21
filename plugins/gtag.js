import Vue from 'vue'
import VueGtag from 'vue-gtag'

if (process.env.GOOGLE) {
  Vue.use(VueGtag, {
    config: {id: process.env.GOOGLE}
  });
}
