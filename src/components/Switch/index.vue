<template>
<h1>Switch 组件示例</h1>
  <card :component="demo1" :describe='md1' />
  <card :component="demo2" :describe='md2' />
</template>
<script lang="ts">
import { computed, ref } from 'vue'
import card from '../Card.vue'
import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import md1 from './components/demo1.md'
import md2 from './components/demo2.md'
export default {
  components:{
    card
  },
  setup(){
    // let md1 = md1
    // let md2 = md2
    // let md1 = computed(()=>{
    //   getMd('node1')
    // })
    // let md2 = computed(()=>{
    //   getMd('demo2')
    // })
    // let md2 = computed(getMd('demo2'))
    return { demo1, demo2, md1, md2}
  }
}
</script>
<style lang="scss" scoped>
</style>