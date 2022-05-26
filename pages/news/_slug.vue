<template>
  <div>
    {{ data }}
  </div>
</template>
<script>
export default {
  async asyncData({ params, route, $axios }) {
    const data = params // When calling /abc the slug will be "abc"
    return { data }
  }
}
</script>
