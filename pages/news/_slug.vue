<template>
  <news-detail :item="item"/>
</template>
<script>
export default {
  data: () => ({}),
  async asyncData({params, error, $axios}) {
    const detailPageUrl = params.slug;
    const result = await $axios.$post(
      '/api/news/detail/',
      {
        code: detailPageUrl
      }
    );
    const item = result.item;
    if (!item) {
      return error({statusCode: 404});
    }
    return {item}
  }
}
</script>
