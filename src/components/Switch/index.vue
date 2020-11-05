<template>
<h1>Switch 组件示例</h1>
  <card :component="demo1" />
  <card :component="demo2" />
</template>
<script lang="ts">
import card from '../DemoCard.vue'
import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'

export default {
  components:{
    card
  },
  setup(){
    return { demo1, demo2,}
  }
}
</script>
<style lang="scss" scoped>
</style>