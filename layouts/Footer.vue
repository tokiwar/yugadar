<template>
  <footer itemscope itemtype="https://schema.org/WPFooter"
          class="bg-black flex flex-col justify-center items-center text-white"
          :class="{'h-80 space-y-10': $device.isDesktop, 'h-auto py-8 space-y-8' :!$device.isDesktop}">
    <bottom-menu :menu="menu" :class="{'w-auto' : $device.isDesktopOrTablet}"/>
    <div
      :class="{'flex flex-row w-auto items-start space-x-4' : $device.isDesktopOrTablet, 'flex flex-col justify-center items-center' : $device.isMobile}">
      <span class="text-lg">©<span itemprop="copyrightYear">2025</span> «ЮгаДар»</span>
      <span class="flex"
            :class="{'flex-col items-center' : $device.isMobile, 'flex-row space-x-4 self-center' : $device.isDesktopOrTablet}">
        <NuxtLink class="text-sm text-gray-400 opacity-70"
                  to="/privacy-policy/">Политика конфиденциальности</NuxtLink>
          <NuxtLink class="text-sm text-gray-400 opacity-70"
                    to="/site-map/">Карта сайта</NuxtLink>
        <a v-if="false" href="https://yugadar-it.ru" class="text-sm text-gray-400 opacity-70">Разработка - Yugadar.IT</a>
      </span>
    </div>
  </footer>
</template>

<script>
import bottomMenu from "@/components/menu/BottomMenu";

export default {
  name: 'Footer',
  components: {
    bottomMenu
  },
  data: () => ({
    menu: {
      socials: [
        {
          key: 0,
          code: 'tg',
          link: 'https://t.me/kotoribako',
          title: 'Telegram'
        },
        {
          key: 1,
          code: 'wa',
          link: 'https://wa.me/79180170429',
          title: 'WhatsApp'
        },
        {
          key: 2,
          code: 'vk',
          link: 'https://vk.com/yugadar',
          title: 'VK'
        }
      ]
    }
  })
}
</script>
