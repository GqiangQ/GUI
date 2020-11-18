<template>
<h1>Switch 组件示例</h1>
  <card :component="demo1" :describe='md1' />
  <card :component="demo2" :describe='md2' />
  <card :component="demo3" :describe='md3' />
  <div class="api markdown-body" v-html="use"></div>
</template>
<script lang="ts">
import { computed, ref } from 'vue'
import card from '../Card.vue'
import Alert from '../../lib/Alert/Alert.vue'
import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import demo3 from './components/demo3.vue'
import md1 from './components/demo1.md'
import md2 from './components/demo2.md'
import md3 from './components/demo3.md'
import use from './use.md'

export default {
  components:{
    card, Alert
  },
  setup(){
    return { demo1, demo2, demo3, md1, md2, md3, use}
  }
}
</script>
<style lang="scss" scoped>
.api{
  width: 100%;
}
</style>