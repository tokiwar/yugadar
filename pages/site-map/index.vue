<template>
  <div>
    <TopTextSection :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </TopTextSection>
    <div class="flex flex-col w-full items-center justify-center bg-pattern-lines">
      <div class="my-10 glassmorphism"
           :class="{'w-3/6 p-10' : $device.isDesktop, 'w-11/12 p-6' : !$device.isDesktop}">
        <ul class="space-y-4"
            :class="{'text-2xl' : $device.isDesktopOrTablet, 'text-xl' : $device.isMobile}">
          <li v-for="item in siteMap" :key="item.key">{{ item.key }} -
            <nuxt-link class="hover:text-yellow-500 hover:underline " :to="item.link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SiteMapPage',
  head() {
    return {
      title: '«ЮгаДар» - Карта сайта - Список страниц на сайте',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/site-map/'},
      ]
    }
  },
  data: () => ({
    siteMap: [
      {key: 1, link: '/', name: 'Главная страница'},
      {key: 2, link: '/news/', name: 'Новости'},
      {key: 3, link: '/catalog/', name: 'Мороженое'},
      {key: 4, link: '/about/', name: 'О нас'},
      {key: 5, link: '/contacts/', name: 'Контакты'},
      {key: 6, link: '/outlets/', name: 'Точки продажи'},
      {key: 7, link: '/privacy-policy/', name: 'Политика конфиденциальности'},
    ]
  }),
  async asyncData({route, $axios}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Карта сайта - Список страниц на сайте'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/site-map/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Список всех страниц на сайте.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар». Список всех страниц на сайте.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'мороженое, сладкое, югадар, тимашевск, краснодарский край, карта сайта'
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
      '/api/site-map/'
    );
    const logoData = result['top-text-section'].logoData;
    const routes = [
      {
        key: 0,
        name: 'Главная',
        route: '/',
        position: 1
      },
      {
        key: 1,
      },
      {
        key: 2,
        name: 'Карта сайта',
        route: '/site-map/',
        current: true,
        position: 2
      }
    ];
    return {logoData, meta, routes}
  },
}
</script>
