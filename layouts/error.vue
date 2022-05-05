<template>
  <div>
    <section class="bg-pattern-lines select-none py-40">
      <div class="font-black text-gray-800 flex flex-col justify-items items-center text-center"
           :class="{'space-y-6' : $device.isMobile}">
        <h1 :class="{'text-15xl flex items-center justify-center h-80': $device.isDesktopOrTablet, 'text-11xl contents' :$device.isMobile}">404</h1>
        <h2 :class="{'text-8xl' :$device.isDesktopOrTablet, 'text-5xl' : $device.isMobile}">Страница не найдена</h2>
        <NuxtLink :class="{'py-10 text-5xl': $device.isDesktopOrTablet, 'text-4xl underline text-yellow-500': $device.isMobile}"
                  class="inline-block hover:text-yellow-500 hover:underline" to="/">на главную
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '«ЮгаДар» - 404 - Страница не найдена',
      meta: [
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Мороженое от кубанского производителя «ЮгаДар» - 404 - Страница не найдена'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Мороженое от кубанского производителя «ЮгаДар» - 404 - Страница не найдена'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ],
    }
  },
  props: ['error'],
  layout: 'error'
}
</script>
