<template>
  <div>
    <TopTextSection :section-data="topSectionData"/>
    <Outlets :outlets="items"/>
    <no-ssr>
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
    items: [
      {
        id: 0,
        hint: 'ЮгаДар на Красной',
        description: 'г. Тимашевск,</br>ул. Красная, 101А (у кинотеатра «Заря»)',
        time: 'с 9.00 до 21.00 (без выходных)',
        balloonText: 'ЮгаДар на Красной',
        name: 'ЮгаДар на Красной',
        coords: [45.613798, 38.934283],
        img: require('~/assets/img/outlets/krasnaya.png'),
      },
      {
        id: 1,
        hint: 'ЮгаДар на Советском переулке',
        description: 'г. Тимашевск,</br>ул. Красная, 101Б',
        time: 'с 9.00 до 19.00 (без выходных)',
        balloonText: 'ЮгаДар на Советском переулке',
        name: 'ЮгаДар на Советском переулке',
        coords: [45.615675, 38.935239],
        img: require('~/assets/img/outlets/sovet.png'),
      },
      {
        id: 2,
        hint: 'ЮгаДар на Братской',
        description: 'г. Тимашевск,</br>ул. Ленина, 154-А',
        time: 'с 9.00 до 18.00 (без выходных)',
        balloonText: 'ЮгаДар на Братской',
        name: 'ЮгаДар на Братской',
        coords: [45.611578, 38.934333],
        img: require('~/assets/img/outlets/bratskaya.png'),
      },
      {
        id: 3,
        hint: 'ЮгаДар на Сахарном',
        description: 'г. Тимашевск,</br>поселок сахарного завода, 11/1 </br>(рядом школа № 4)',
        time: 'с 11.00 до 19.00 (без выходных)',
        balloonText: 'ЮгаДар на Сахарном',
        name: 'ЮгаДар на Сахарном',
        coords: [45.613520, 38.960925],
        img: require('~/assets/img/outlets/saharnii.png'),
      },
      {
        id: 4,
        hint: 'ЮгаДар у музея',
        description: 'г. Тимашевск,</br>ул. Пионерская, 172',
        time: 'с 10.00 до 18.00 (без выходных)',
        balloonText: 'ЮгаДар у музея',
        name: 'ЮгаДар у музея',
        coords: [45.612467, 38.937221],
        img: require('~/assets/img/outlets/stepan.png'),
      },
      {
        id: 5,
        hint: 'ЮгаДар в парке',
        description: 'г. Тимашевск,</br>ул. Красная, городской парк Изюминка',
        time: 'с 9.00 до 21.00 (без выходных)',
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
