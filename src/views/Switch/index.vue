<template>
<h1>Switch 组件示例</h1>
  <CodeCard :component="Demo1" :describe='md1' />
 <!--  <card :component="demo2" :describe='md2' /> -->
  <!-- <div class="api markdown-body" v-html=""></div> -->
  <Use/>
</template>
<script lang="ts">
import { computed, ref } from 'vue'
import CodeCard from '../Card.vue'
import Demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import md1 from './components/demo1.md'
// import md2 from './components/demo2.md'
import Use from './use.md'

export default {
  components:{
    CodeCard,Use,
    Demo1
    // md1, md2, use,
    // demo1, demo2

  },
  setup(){
    return {md1}
  }
}
</script>
<style lang="scss" scoped>
.api{
  width: 100%;
}
</style>