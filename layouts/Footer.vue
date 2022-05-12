<template>
  <footer itemscope itemtype="https://schema.org/WPFooter"
    class="bg-black flex flex-col justify-center items-center text-white space-y-10"
          :class="{'h-80': $device.isDesktop, 'h-auto py-14' :!$device.isDesktop}">
    <BottomMenu :class="{'w-auto' : $device.isDesktopOrTablet}"/>
    <div
      :class="{'flex flex-row w-auto items-start space-x-4' : $device.isDesktopOrTablet, 'flex flex-col justify-center items-center' : $device.isMobile}">
      <span class="text-lg font-bold">©<span itemprop="copyrightYear">2022</span> «ЮгаДар»</span>
      <span>
        <NuxtLink class="text-sm text-gray-400 opacity-70"
                  to="/privacy-policy/">Политика конфиденциальности</NuxtLink>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
