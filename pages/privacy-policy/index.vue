<template>
  <div>
    <TopTextSection :section-data="logoData"/>
    <TextSection :section-data="sectionData"/>
  </div>
</template>

<script>

export default {
  name: 'PrivacyPolicyPage',
  data: () => ({
    logoData: {
      title: 'ПОЛИТИКА',
      subtitle: 'КОНФИДЕНЦИАЛЬНОСТИ',
      reverse: true,
      bgColor: 'bg-light-plum-100',
    },
    sectionData: {
      text: '123123132'
    }
  })
}
</script>
