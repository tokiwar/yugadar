<template>
  <div class="flex flex-col w-full items-center justify-center bg-pattern-lines" v-if="policyText">
    <div class="my-10 bg-white shadow-2xl border-4 border-gray-50"
         :class="{'w-3/6 p-10' : $device.isDesktop, 'w-9/12 p-10' : $device.isTablet && $mq === 'lg', 'w-11/12 p-10' : $device.isTablet && $mq === 'md', 'w-11/12 p-6' : $device.isMobile}">
      <ol class="space-y-4">
        <li v-for="item in policyText" :key="item.key">
          <p class="text-2xl font-black mb-2" v-html="item.title"/>
          <p class="font-bold mb-2 text-base" v-if="item.text" v-html="item.text"/>
          <ol v-if="item.items" class="list-outside ml-8 list-disc text-base"
              :class="{'ml-8' : $device.isDesktopOrTablet, 'ml-4' : $device.isMobile}">
            <li v-for="subItem in item.items" v-html="subItem.text" :key="subItem.key"/>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NestedList',
  props: ['policyText']
}
</script>
