<template>
  <yandex-map @map-was-initialized="displayMap" v-show="showMap"
              :class="{'h-192': $device.isDesktopOrTablet, 'h-120': !$device.isDesktop}" :coords="initCoords" :zoom="zoom"
              :scroll-zoom="false">
    <ymap-marker
      v-for="marker in items"
      :coords="marker.coords"
      :marker-id="marker.key"
      :hint-content="marker.hint"
      :key="marker.key"
      :icon="markerIcon"
      :balloon-template="getBalloonTemplate(marker)"
    />
  </yandex-map>
</template>
<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  name: 'OutletsMap',
  components: {yandexMap, ymapMarker},
  props: ['items'],
  computed: {
    zoom() {
      if (this.$device.isDesktop) {
        return 15;
      } else {
        return 13;
      }
    },
    balloonImageSize() {
      if (this.$device.isDesktop) {
        return 'w-80';
      } else {
        return 'w-60';
      }
    }
  },
  data: () => ({
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: require('~/assets/img/logo-balloon.png'),
      imageSize: [30, 30],
      imageOffset: [0, -15],
    },
    initCoords: [
      45.617003, 38.942364
    ],
    showMap: false,
  }),
  methods: {
    displayMap() {
      this.showMap = true;
    },
    getBalloonTemplate(coordsData) {
      return `
        <div class="pl-4">
          <span class="text-xl not-italic font-nunito font-bold">${coordsData.name}</span>
          <img class="my-2 ${this.balloonImageSize}"  src="${coordsData.img}" alt="${coordsData.name}}"/>
        </div>
      `
    }
  }
}
</script>
