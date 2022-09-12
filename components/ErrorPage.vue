<template>
  <div>
    <section class="bg-pattern-lines select-none py-10">
      <div class="font-black text-black flex flex-col justify-items items-center text-center"
           :class="{'space-y-6' : $device.isMobile}">
        <svg-icon :class="{'h-120 w-120' : $device.isDesktop, 'w-88 h-88' : $device.isTablet, 'w-64 h-64' : $device.isMobile}" name="ice-fall-long"/>
        <h1 :class="{'text-8xl' :$device.isDesktopOrTablet, 'text-5xl' : $device.isMobile}">Страница не найдена</h1>
        <NuxtLink
          :class="{'py-10 text-5xl': $device.isDesktopOrTablet, 'text-4xl underline text-yellow-500': $device.isMobile}"
          class="inline-block hover:text-yellow-500 hover:underline" to="/">на главную
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ErrorPage'
}
</script>
