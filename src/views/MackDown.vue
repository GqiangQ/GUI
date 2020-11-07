<template>
  <article class="mackdown-body" v-html="content" />
</template>

<script lang="ts">
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