<template>
  <div class="flex flex-col justify-center items-center h-auto">
    <div
      itemprop="review" itemscope="" itemtype="http://schema.org/Review"
      class="flex flex-col items-center justify-start text-justify border-2 bg-white border-black shadow-lg"
      :class="{'w-152 space-y-8 h-96 py-8' : $device.isDesktop, 'w-11/12 space-y-2 h-72 py-4' :$device.isMobile}">
      <div class="flex flex-col w-5/6">
              <span itemprop="author" :class="{'text-3xl':$device.isDesktopOrTablet, 'text-xl' : $device.isMobile}"
                    v-html="item.name"></span>
        <span class="w-5/6 underline"
              itemprop="datePublished" :content="item.date"
              :class="{'text-base' : $device.isDesktopOrTablet, 'text-sm' : $device.isMobile}"
              v-html="item.date"></span>
      </div>
      <span itemprop="reviewBody" class="w-5/6 text-between"
            :class="{'text-lg' : $device.isDesktop, 'text-sm' : $device.isMobile }"
            v-html="item.text"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReviewsItem',
  props: ['item']
}
</script>
