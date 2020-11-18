<demo>
大小
</demo>
<template>
  <g-button size="small">小的按钮</g-button>
  <g-button >正常按钮</g-button>
  <g-button size="big">大的按钮</g-button>
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