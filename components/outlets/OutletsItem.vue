<template>
  <div class="flex flex-col justify-start items-center">
    <img
      class="border-2 border-black bg-light-yellow-100 swiper-lazy"
      :class="{'h-136': $device.isDesktop, 'h-104' :$device.isTablet && $mq === 'lg', 'h-80' : $device.isTablet && $mq !== 'lg', 'w-11/12': $device.isMobile}"
      :src="item['img']"
      :data-srcset="`${item['img-2x']} 2x, ${item['img-3x']} 3x`"
      :width="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
      :height="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
      :title="item.name"
      :alt="item.name"/>
    <div
      class="flex flex-col items- justify-center py-4 h-28 text-center bg-white border-black border-l-2 border-r-2 border-b-2"
      :class="{'h-36' : $device.isTablet && $mq !== 'lg', 'w-136':$device.isDesktop, 'w-104' :$device.isTablet && $mq === 'lg', 'w-80' : $device.isTablet && $mq !== 'lg',
             'w-11/12' : $device.isMobile}">
            <span class="font-black leading-6"
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
