<template>
  <footer class="bg-black flex flex-col justify-center items-center text-white space-y-10"
          :class="{'h-80': $device.isDesktop, 'h-auto py-14' :!$device.isDesktop}">
    <BottomMenu/>
    <span class="text-lg font-bold">©2022 «Югадар»</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
