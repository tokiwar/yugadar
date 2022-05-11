<template>
  <div>
    <TopTextSection :section-data="logoData">
      <Outlets :outlets="items"/>
    </TopTextSection>
    <client-only>
      <yandex-map @map-was-initialized="displayMap" v-show="showMap"
                  :class="{'h-192': $device.isDesktop, 'h-120': !$device.isDesktop}" :coords="initCoords" :zoom="zoom"
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
    </client-only>
    <TextSection v-if="false" :section-data="sectionData"/>
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
      imageHref: require('~/assets/img/logo-balloon.png'),
      imageSize: [30, 30],
      imageOffset: [0, -15],
    },
    initCoords: [
      45.617003, 38.942364
    ],
    showMap: false,
  }),
  head() {
    return {
      title: '«ЮгаДар» - Точки продажи - Мороженое от кубанского производителя',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/outlets/'}
      ]
    }
  },
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Точки продажи - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/outlets/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Точки продажи. Расположение и фото торговых точек в городе Тимашевске.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Точки продажи. Расположение и фото торговых точек в городе Тимашевске.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'красная, заря, изюминка, парк, пионерская, продажи, тимашевск, краснодарский край'
      }
    ];
    if (Object.keys(route.query).length) {
      meta.push(
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      );
    }
    const result = await $axios.$get(
      '/api/outlets/'
    );
    const items = result.items;
    const logoData = result['top-text-section'].logoData;
    const sectionData = result['text-section'].sectionData;
    return {items, logoData, sectionData, meta}
  },
  methods: {
    displayMap() {
      this.showMap = true;
    },
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
