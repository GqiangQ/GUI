<demo>
类型
</demo>
<template>
  <g-button disabled>默认按钮</g-button>
  <g-button type="primary" disabled>主要按钮</g-button>
  <g-button type="success" disabled>成功按钮</g-button>
  <g-button type="danger" >危险按钮</g-button>
  <g-button type="warning" >警告按钮</g-button>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../../../lib/Button.vue'
export default {
  components: {
    'g-button': Button
  },
  setup(){
    const value = ref(true)
    return {
      value
    }
  }
}
</script>