<template>
  <div>
    <TopTextSection :section-data="logoData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </TopTextSection>
    <catalog :items="catalog.iceCream.items"/>
    <catalog-price-table v-if="false" :catalog="catalog"/>
    <section class="pt-8 bg-pattern-lines flex items-center justify-center w-full">
      <span  :class="{'w-3/5' : $device.isDesktopOrTablet, 'w-5/6 text-base' : !$device.isDesktopOrTablet}">
      *Указаны розничные цены. Для рассчета оптовой цены нужно связаться по телефону: <a
        class="underline text-yellow-500" href="tel:+79180170429">+79180170429</a>
      </span>
    </section>
    <SeoTextSection :html="seoTextHtml"/>
    <request-form/>
  </div>
</template>

<script>
import RequestForm from "@/components/catalog/RequestForm";

export default {
  name: 'CatalogPage',
  components: {RequestForm},
  head() {
    return {
      title: '«ЮгаДар» - Мороженое - Мороженое от кубанского производителя',
      meta: this.meta,
      link: [
        {rel: 'canonical', href: 'https://yugadar.ru/catalog/'}
      ]
    }
  },
  data: () => ({}),
  async asyncData({$axios, route}) {
    const meta = [
      {
        hid: 'og:title',
        name: 'og:title',
        content: '«ЮгаДар» - Мороженое - Мороженое от кубанского производителя'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/catalog/'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое. Ассортимент мороженого и объемы продажи. Купить мороженое по оптовой цене в Тимашевске.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар» - Мороженое. Ассортимент мороженого и объемы продажи. Купить мороженое по оптовой цене в Тимашевске.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'купить, мороженое, пломбир, цена, ассортименте, тара, тимашевск, краснодарский край, оптовая'
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
    const catalog = {
      iceCream: {
        title: 'Мороженое в ассортименте',
        'subtitle': '(пломбир жир 12%)',
        rows: ['', 'Цена</br>(1 кг)', 'Цена</br>(3 кг)',],
      }
    };
    const result = await $axios.$get(
      '/api/catalog/'
    );
    catalog.iceCream.items = result.catalog;
    const logoData = result['top-text-section'].logoData;
    const seoTextHtml = result['seo-text-section'].html;
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
        name: 'Мороженое',
        route: '/catalog/',
        current: true,
        position: 2
      }
    ];
    return {catalog, seoTextHtml, logoData, meta, routes}
  }
}
</script>
