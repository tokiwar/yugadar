<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Outlets :outlets="outlets"/>
    <no-ssr>
      <yandex-map :class="{'h-192': $device.isDesktop, 'h-120': !$device.isDesktop}" :coords="initCoords" :zoom="zoom">
        <ymap-marker
          v-for="marker in markers"
          :coords="marker.coords"
          :marker-id="marker.id"
          :hint-content="marker.hint"
          :key="marker.id"
          :icon="markerIcon"
          :balloon-template="getBalloonTemplate(marker)"
        />
      </yandex-map>
    </no-ssr>
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
    outlets: {
      title: 'г. Тимашевск',
      items: [
        [
          {
            name: 'ЮгаДар на Красной',
            'description': 'г. Тимашевск, ул. Красная 105',
            'image': require('~/assets/img/outlets/krasnaya.png'),
          },
          {
            name: 'ЮгаДар на Советском переулке',
            'description': 'Описание 2',
            'image': require('~/assets/img/outlets/sovet.png'),
          },
          {
            name: 'ЮгаДар на Братской',
            'description': 'г. Тимашевск, ул. Красная 154',
            'image': require('~/assets/img/outlets/bratskaya.png'),
          }
        ],
        [
          {
            name: 'ЮгаДар на Сахарном',
            'description': 'Описание 4',
            'image': require('~/assets/img/outlets/saharnii.png'),
          },
          {
            name: 'ЮгаДар у музея',
            'description': 'Описание 5',
            'image': require('~/assets/img/outlets/stepan.png'),
          },
          {
            name: 'ЮгаДар в парке',
            'description': 'Описание 6',
            'image': require('~/assets/img/outlets/bratskaya.png'),
          }
        ]
      ]
    },
    markers: [
      {
        id: 0,
        hint: 'ЮгаДар на Красной',
        balloonText: 'ЮгаДар на Красной',
        name: 'ЮгаДар на Красной',
        coords: [45.613798, 38.934283],
        img: require('~/assets/img/outlets/krasnaya.png'),
      },
      {
        id: 1,
        hint: 'ЮгаДар на Советском переулке',
        balloonText: 'ЮгаДар на Советском переулке',
        name: 'ЮгаДар на Советском переулке',
        coords: [45.615675, 38.935239],
        img: require('~/assets/img/outlets/sovet.png'),
      },
      {
        id: 2,
        hint: 'ЮгаДар на Братской',
        balloonText: 'ЮгаДар на Братской',
        name: 'ЮгаДар на Братской',
        coords: [45.611578, 38.934333],
        img: require('~/assets/img/outlets/bratskaya.png'),
      },
      {
        id: 3,
        hint: 'ЮгаДар на Сахарном',
        balloonText: 'ЮгаДар на Сахарном',
        name: 'ЮгаДар на Сахарном',
        coords: [45.613520, 38.960925],
        img: require('~/assets/img/outlets/saharnii.png'),
      },
      {
        id: 4,
        hint: 'ЮгаДар у музея',
        balloonText: 'ЮгаДар у музея',
        name: 'ЮгаДар у музея',
        coords: [45.612467, 38.937221],
        img: require('~/assets/img/outlets/stepan.png'),
      },
      {
        id: 5,
        hint: 'ЮгаДар в парке',
        balloonText: 'ЮгаДар в парке',
        name: 'ЮгаДар в парке',
        coords: [45.623914, 38.941423],
        img: require('~/assets/img/outlets/bratskaya.png'),
      }
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
  methods: {
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
