<template>
  <article class="mackdown-body" v-html="mdHTML" />
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'stated',
  props: {
    path: {
      type:String,
      required: true
    }
  },
  setup (props, content) {
    const mdHTML = ref<String>(null)
    import(`../mackdown/${props.path}`).then(res => {
      mdHTML.value = res.default
    })
    return {
      mdHTML
    }
  }
}
</script>