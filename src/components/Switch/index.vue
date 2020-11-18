<template>
<h1>Switch 组件示例</h1>
  <card :component="demo1" :describe='md1' />
  <card :component="demo2" :describe='md2' />
  <div v-html="use"></div>
</template>
<script lang="ts">
import { computed, ref } from 'vue'
import card from '../Card.vue'
import Alert from '../../lib/Alert/Alert.vue'
import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import md1 from './components/demo1.md'
import md2 from './components/demo2.md'
import use from './use.md'

export default {
  components:{
    card, Alert
  },
  setup(){
    return { demo1, demo2, md1, md2, use}
  }
}
</script>
<style lang="scss" scoped>
</style>