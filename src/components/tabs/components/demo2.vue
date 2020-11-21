<demo>
常规用法
</demo>
<template>
  <g-tabs v-model:selected="selected" @click="click">
    <g-tab title="标题一111" disabled value='one'>1</g-tab>
    <g-tab title="标题二" disabled='' value='two'>2</g-tab>
    <g-tab title="标题三" value='three'>3</g-tab>
  </g-tabs>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../../../lib/Button.vue'
import Tab from '../../../lib/Tab.vue'
import Tabs from '../../../lib/Tabs.vue'
export default {
  components: {
    'g-tab': Tab,
    'g-tabs': Tabs
  },
  setup(){
    const selected = ref('three')
    const click = (a) => {
    }
    return {
      selected,click
    }
  }
}
</script>