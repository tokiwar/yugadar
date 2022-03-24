<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <TextSection :section-data="sectionData"/>
    <yandex-map :class="{'h-192': $device.isDesktop, 'h-120': !$device.isDesktop}" :coords="initCoords" :zoom="zoom">
      <ymap-marker
        v-for="marker in markers"
        :coords="marker.coords"
        :marker-id="marker.id"
        :hint-content="marker.hint"
        :key="marker.id"
      />
    </yandex-map>
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
    }
  },
  data: () => ({
    initCoords: [
      45.617003, 38.942364
    ],
    markers: [
      {
        id: 0,
        hint: 'ЮгаДар на Красной',
        coords: [45.613798, 38.934283]
      },
      {
        id: 1,
        hint: 'ЮгаДар на Советском переулке',
        coords: [45.615675, 38.935239]
      },
      {
        id: 2,
        hint: 'ЮгаДар на Братской',
        coords: [45.611578, 38.934333]
      },
      {
        id: 3,
        hint: 'ЮгаДар на Сахарном',
        coords: [45.613520, 38.960925]
      },
      {
        id: 4,
        hint: 'ЮгаДар у музея',
        coords: [45.612467, 38.937221]
      },
      {
        id: 5,
        hint: 'ЮгаДар в парке',
        coords: [45.623914, 38.941423]
      }
    ],
    outlets: [
      {
        name: 'Точка 1',
        link: '/outlets/outlet1',
        img: require('~/assets/img/outlets/outlet1.png')
      },
      {
        name: 'Точка 2',
        link: '/outlets/outlet2',
        img: require('~/assets/img/outlets/outlet2.png')
      },
    ],
    sectionData: {
      title: 'Заголовок',
      subtitle: 'Подзаголовок',
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.'
    },
    topSectionData: {
      title: 'Наши',
      subtitle: 'ТОЧКИ ПРОДАЖ',
      color: 'bg-light-yellow-100'
    }
  }),
  head() {
    return {
      title: '«Югадар» - Точки продажи'
    }
  },
}
</script>
