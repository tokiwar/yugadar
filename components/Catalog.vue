<template>
  <section class="flex flex-col justify-center items-center select-none space-y-20 font-bold text-center"
           :class="{'my-28': $device.isDesktop, 'my-20' : !$device.isDesktop}">
    <div v-for="line in catalog" class="flex justify-center items-center w-3/6"
         :class="{'flex-row space-x-20' : $device.isDesktop, 'flex-col space-y-18' : !$device.isDesktop}">
      <div v-for="item in line" class="flex flex-col justify-center items-center space-y-5"
           :class="{'w-4/12': $device.isDesktop}">
        <img :src="item.image" alt=""/>
        <span class="text-4xl">{{ item.name }}</span>
        <span>{{ item.description }}</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Catalog',
  props: ['catalog']
}
</script>
