<template>
  <section v-if="contacts.title || contacts.subtitle || contacts.text"
           class="flex flex-row justify-center items-center select-none h-auto"
           :class="{'my-16' :$device.isDesktop}">
    <div class="flex flex-col justify-center items-center font-black text-center"
         :class="{'w-3/6' : $device.isDesktop, 'w-4/5 my-14': !$device.isDesktop}">
      <div v-if="contacts.title" :class="{'text-6xl w-4/6':$device.isDesktop, 'text-4xl' : !$device.isDesktop}">
        {{ contacts.title }}
      </div>
      <div v-if="contacts.subtitle" class="font-marck"
           :class="{'text-2xl w-3/6 pt-2':$device.isDesktop, 'text-3xl' : !$device.isDesktop}">
        {{ contacts.subtitle }}
      </div>
      <div class="flex flex-col"
           :class="{'pt-8 text-2xl text-justify space-y-4' : $device.isDesktop, 'pt-12 w-full text-lg text-left space-y-2' : !$device.isDesktop}"
           v-if="contacts.address || contacts.name || contacts.phone || contacts.email || contacts.time">
        <div v-if="contacts.address" v-html="contacts.address"/>
        <div class="flex" :class="{'space-x-4 flex-row' : $device.isDesktop, 'flex-col' : !$device.isDesktop}"
             v-if="contacts.name && contacts.phone">
          <div class="underline">{{ contacts.name }}</div>
          <div class="flex flex-col">
            <a class="hover:underline hover:text-yellow-500" :class="{'text-yellow-500':!$device.isDesktop}"
               :href="`tel:${phone.phoneClear}`"
               v-for="phone in contacts.phone">{{ `${phone.phone} (${phone.name})` }}</a>
          </div>
        </div>
        <div class="flex" :class="{'space-x-4 flex-row' : $device.isDesktop, 'flex-col' : !$device.isDesktop}"
             v-if="contacts.time">
          <div class="underline">{{ `Часы работы:` }}</div>
          <div v-html="contacts.time"></div>
        </div>
        <div class="flex" :class="{'space-x-4 flex-row' : $device.isDesktop, 'flex-col' : !$device.isDesktop}"
             v-if="contacts.email">
          <div class="underline">{{ `Электронная почта:` }}</div>
          <a :href="`mailto:${contacts.email}`" :class="{'text-yellow-500' : !$device.isDesktop}"
             class="hover:underline hover:text-yellow-500">{{ contacts.email }}</a>
        </div>
      </div>
      <div v-if="contacts.text" v-html="contacts.text" class="text-justify space-y-4"
           :class="{'w-5/6 pt-8':$device.isDesktop, 'pt-12' : !$device.isDesktop}"></div>
      <NuxtLink v-if="contacts.link && contacts.name" :to="contacts.link"
                class="mt-10 text-xl border-2 px-4 py-2 border-black hover:bg-black hover:text-white ease-in-out duration-300">
        {{ contacts.name }}
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contacts',
  props: ['contacts'],
}
</script>
