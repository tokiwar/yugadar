<template>
  <section class="flex flex-col justify-center items-center select-none font-bold text-center"
           :class="{'my-28  space-y-20': $device.isDesktop, 'my-10' : !$device.isDesktop}">
    <div v-if="outlets.title" class="font-bold"
         :class="{'text-7xl' : $device.isDesktop, 'text-4xl mb-10' : !$device.isDesktop}">
      {{ outlets.title }}
    </div>
    <div v-for="line in outlets.items" class="flex justify-center w-3/6"
         :class="{'flex-row space-x-20 place-items-start' : $device.isDesktop, 'flex-col items-center' : !$device.isDesktop}">
      <div v-for="item in line" class="flex flex-col justify-start items-center space-y-2"
           :class="{'w-4/12': $device.isDesktop}">
        <img :src="item.image" alt=""/>
        <span class="text-xl font-black">{{ item.name }}</span>
        <span class="text-lg">{{ item.description }}</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Outlets',
  props: ['outlets']
}
</script>
