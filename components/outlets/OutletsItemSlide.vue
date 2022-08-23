<template>
  <div class="flex items-center"
       :class="{'flex-row-reverse justify-center' : $device.isDesktopOrTablet, 'flex-col justify-start' : $device.isMobile}">
    <img
      class="bg-light-yellow-100 bg-outlets-grey bg-outlets-green bg-outlets-green-dark bg-outlets-grey-light swiper-lazy"
      :class="{'w-1/2 object-cover border-r-8 border-t-8 border-b-8' : $device.isDesktopOrTablet, 'h-192': $device.isDesktop, 'h-136' :$device.isTablet && $mq === 'lg', 'h-104' : $device.isTablet && $mq !== 'lg', 'w-11/12 border-t-4 border-l-4 border-r-4': $device.isMobile}"
      :src="item['img-3x']"
      :data-srcset="`${item['img-2x']} 2x, ${item['img-3x']} 3x`"
      :width="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
      :height="$device.isDesktop ? 544 : ($device.isMobile ? 544 : ($device.isTablet ? 320 : ''))"
      :title="item.name"
      :alt="item.name"/>
    <div
      class="flex flex-col justify-center py-4 h-28 text-center text-white"
      :class="{'border-l-8 border-t-8 border-b-8': $device.isDesktopOrTablet, 'h-104' : $device.isTablet && $mq !== 'lg', 'w-104 h-192' : $device.isDesktop, 'w-104' :$device.isTablet && $mq === 'lg', 'w-80' : $device.isTablet && $mq !== 'lg',
             'w-11/12 border-l-4 border-b-4 border-r-4' : $device.isMobile, [item.bgColor]: true}">
            <span class="font leading-none"
                  :class="{'text-4xl' : $device.isDesktop, 'text-xl' : $device.isMobile, 'text-xl' :$device.isTablet && $mq !== 'lg'}"
                  v-html="item.description"></span>
      <span class="underline"
            :class="{'text-xl': $device.isDesktop, 'text-base' : $device.isMobile,  'text-base' : $device.isTablet && $mq !== 'lg' }"
            v-html="item.time"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OutletsItemSlide',
  props: ['item']
}
</script>
