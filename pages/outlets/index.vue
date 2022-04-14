<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Outlets :outlets="items"/>
    <client-only>
      <yandex-map :class="{'h-192': $device.isDesktop, 'h-120': !$device.isDesktop}" :coords="initCoords" :zoom="zoom"
                  :scroll-zoom="false">
        <ymap-marker
          v-for="marker in items"
          :coords="marker.coords"
          :marker-id="marker.id"
          :hint-content="marker.hint"
          :key="marker.id"
          :icon="markerIcon"
          :balloon-template="getBalloonTemplate(marker)"
        />
      </yandex-map>
    </client-only>
    <TextSection :section-data="sectionData"/>
  </div>
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  name: 'OutletsPage',
  components: {yandexMap, ymapMarker},
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
      imageHref: require('~/assets/img/logo-3.png'),
      imageSize: [30, 30],
      imageOffset: [0, -15],
    },
    initCoords: [
      45.617003, 38.942364
    ],
    sectionData: {
      title: 'Заголовок',
      subtitle: 'Подзаголовок',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.'
    },
    topSectionData: {
      title: 'Точки',
      subtitle: 'ПРОДАЖИ',
      color: 'bg-light-yellow-100'
    }
  }),
  head() {
    return {
      title: '«ЮгаДар» - Точки продажи'
    }
  },
  async asyncData({$axios}) {
    const items =  await $axios.$get(
      '/api/outlets/'
    );
    return {items}
  },
  methods: {
    getBalloonTemplate(coordsData) {
      return `
        <div class="pl-4">
          <span class="text-xl not-italic font-nunito font-bold">${coordsData.name}</span>
          <img class="my-2 ${this.balloonImageSize} rounded-2xl"  src="${coordsData.img}" alt="${coordsData.name}}"/>
        </div>
      `
    }
  }
}
</script>
