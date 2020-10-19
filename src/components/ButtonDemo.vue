<template>
<div >
  <g-button>默认按钮</g-button>
  <g-button type="primary" >主要按钮</g-button>
  <g-button type="success" >成功按钮</g-button>
  <g-button type="danger" >危险按钮</g-button>
  <g-button type="warning" >警告按钮</g-button>
</div>
  
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {
    'g-button': Button
  }
}
</script>
<style lang="scss" scoped>

</style>