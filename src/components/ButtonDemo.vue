<template>
<div>
  <h3>类型</h3>
  <g-button>默认按钮</g-button>
  <g-button type="primary" >主要按钮</g-button>
  <g-button type="success" >成功按钮</g-button>
  <g-button type="danger" >危险按钮</g-button>
  <g-button type="warning" >警告按钮</g-button>
</div>
<div>
  <h3>类别</h3>
  <g-button >主要按钮</g-button>
  <g-button theme="dashed">虚线按钮</g-button>
  <g-button theme="link">链接按钮</g-button>
  <g-button theme="text">文本按钮</g-button>
</div>
<div>
  <h3>大小</h3>
  <g-button size="small">小按钮</g-button>
  <g-button >正常按钮</g-button>
  <g-button size="big">大按钮</g-button>
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