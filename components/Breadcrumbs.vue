<template>
  <nav v-if="routes" class="flex flex-row mt-10 font-bold select-none"
       :class="{'ml-10' : $device.isDesktopOrTablet, 'ml-2 text-xs' : $device.isMobile}">
    <ul class="flex flex-row justify-center items-center relative">
      <li class="bg-white rounded-full p-3 z-10 shadow-2xl">
        <logo-mini :color="'#F59E0B'" class="w-auto"
                   :class="{'h-12' : $device.isDesktopOrTablet, 'h-6' : $device.isMobile}"/>
      </li>
      <li class="absolute bg-gray-50 rounded-3xl shadow-xl"
          :class="{'left-12 px-10' : $device.isDesktopOrTablet, 'left-7 px-5' : $device.isMobile}">
        <ul class="w-max flex flex-row" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li v-for="route in routes" :key="route.key" class="bg-gray-50 flex items-center justify-center"
              itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"
              :class="{'h-10 px-2' : $device.isDesktopOrTablet, 'h-8 px-1' :$device.isMobile}">
            <meta itemprop="position" :content="route.key">
            <meta itemprop="name" v-if="route.name" :content="route.name">
            <nuxt-link class="hover:text-yellow-500 hover:underline" itemprop="item" :to="route.route" v-if="route.route">
              {{ route.name }}
            </nuxt-link>
            <span v-else-if="!route.name" class="text-gray-500">|</span>
            <span v-else class="text-yellow-500 underline" itemprop="item">{{ route.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  date: () => ({}),
  props: ['routes']
}
</script>
