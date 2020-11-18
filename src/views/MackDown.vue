<template>
  <article class="article-wrapper markdown-body " v-html="content" />
</template>
<script lang="ts">
import 'github-markdown-css'
import { ref } from 'vue'
export default {
  name: 'stated',
  props: {
    content: {
      type:String,
      required: true
    }
  },
}
</script>
<style lang='scss' scoped>
.article-wrapper{
  max-width: 850px;
  margin: auto;
  padding: 40px 0;
}
</style>