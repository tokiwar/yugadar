<template>
  <div class="flex flex-col justify-start items-center">
    <img
      class="bg-outlets-grey bg-outlets-green bg-outlets-green-dark bg-outlets-grey-light bg-skyblue swiper-lazy glassmorphism"
      :class="{'h-136': $device.isDesktop, 'h-104' :$device.isTablet && $mq === 'lg', 'h-80' : $device.isTablet && $mq !== 'lg', 'w-11/12': $device.isMobile}"
      :src="item['img']"
      :data-srcset="`${item['img-2x']} 2x, ${item['img-3x']} 3x`"
      :width="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
      :height="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
      :title="item.name"
      :alt="item.name"/>
    <div
      class="flex flex-col justify-center py-4 h-28 text-center glassmorphism"
      :class="{'h-36' : $device.isTablet && $mq !== 'lg', 'w-136':$device.isDesktop, 'w-104' :$device.isTablet && $mq === 'lg', 'w-80' : $device.isTablet && $mq !== 'lg',
             'w-11/12' : $device.isMobile}">
            <span class="font leading-6"
                  :class="{'text-xl' : $device.isDesktop, 'text-lg' : $device.isMobile, 'text-base' :$device.isTablet && $mq !== 'lg'}"
                  v-html="item.description"></span>
      <span class="underline"
            :class="{'text-lg': $device.isDesktop, 'text-base' : $device.isMobile,  'text-sm' : $device.isTablet && $mq !== 'lg' }"
            v-html="item.time"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OutletsItem',
  props: ['item']
}
</script>
