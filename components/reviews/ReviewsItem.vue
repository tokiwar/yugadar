<template>
  <div class="flex flex-col justify-center items-center h-auto">
    <div
      class="flex flex-col items-center justify-start text-justify glassmorphism"
      :class="{'w-152 space-y-8 h-96 py-8' : $device.isDesktop, 'w-11/12 space-y-2 h-72 py-4' :$device.isMobile}">
      <div class="flex flex-col w-5/6">
              <span class="{'text-3xl':$device.isDesktopOrTablet, 'text-xl' : $device.isMobile}">
                <span v-html="item.name"/>
              </span>
        <span class="w-5/6 underline"
              :class="{'text-base' : $device.isDesktopOrTablet, 'text-sm' : $device.isMobile}"
              v-html="item.date"></span>
      </div>
      <span class="w-5/6 text-between"
            :class="{'text-lg' : $device.isDesktop, 'text-sm' : $device.isMobile }"
            v-html="item.text"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReviewsItem',
  props: ['item'],
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org/",
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": this.item.name
            },
            "itemReviewed": {
              "@type": "Organization",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Тимашевск",
                "postalCode": "350056",
                "streetAddress": "пос. Индустриальный, Центральная усадьба"
              },
              "email": "mamay4339061@gmail.com",
              "name": "ЮгаДар",
              "telephone": "+79184339061",
              "image": "https://yugadar.ru/yugadar.jpg"
            },
            "datePublished": this.item.date,
            "reviewBody": this.item.text,
          }
        }
      ]
    }
  }
}
</script>
