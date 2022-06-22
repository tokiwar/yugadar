<template>
  <footer itemscope itemtype="https://schema.org/WPFooter"
          class="bg-black flex flex-col justify-center items-center text-white space-y-10"
          :class="{'h-80': $device.isDesktop, 'h-auto py-14' :!$device.isDesktop}">
    <bottom-menu :class="{'w-auto' : $device.isDesktopOrTablet}"/>
    <div
      :class="{'flex flex-row w-auto items-start space-x-4' : $device.isDesktopOrTablet, 'flex flex-col justify-center items-center' : $device.isMobile}">
      <span class="text-lg font-bold">©<span itemprop="copyrightYear">2022</span> «ЮгаДар»</span>
      <span class="flex" :class="{'flex-col items-center' : $device.isMobile, 'flex-row space-x-4 self-center' : $device.isDesktopOrTablet}">
        <NuxtLink class="text-sm text-gray-400 opacity-70"
                  to="/privacy-policy/">Политика конфиденциальности</NuxtLink>
          <NuxtLink class="text-sm text-gray-400 opacity-70"
                    to="/site-map/">Карта сайта</NuxtLink>
        <span class="text-sm text-gray-400 opacity-70">Разработка - Yugadar.IT</span>
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
  }
}
</script>
