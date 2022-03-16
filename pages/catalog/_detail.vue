<template>
  <div>
    {{ detailData }}
  </div>
</template>

<script>
export default {
  data: () => ({
    detailData: null,
  }),
  async asyncData({params}) {
    return {
      detailData: params
    }
  }
}
</script>
