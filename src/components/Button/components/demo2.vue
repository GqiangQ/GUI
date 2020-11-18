<demo>
类别
</demo>
<template>
  <g-button >主要按钮</g-button>
  <g-button theme="dashed" type="warning" disabled>虚线按钮</g-button>
  <g-button theme="link" disabled>链接按钮</g-button>
  <g-button theme="text" disabled>文本按钮</g-button>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../../../lib/Button.vue'

export default {
  components: {
    'g-button': Button
  },
  setup(){
    const value1 = ref(true)
    const value2 = ref(false)
    return {
      value1, value2
    }
  }
}
</script>