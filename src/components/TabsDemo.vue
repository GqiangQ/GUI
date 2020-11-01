<template>
  <div>
    tabs实例{{selected}}
  </div>
  <g-tabs v-model:selected="selected" @click="click">
    <g-tab title="标题一111" value='one'>1</g-tab>
    <g-tab title="标题二" value='two'>2</g-tab>
    <g-tab title="标题三" value='three'>3</g-tab>
  </g-tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
  name: 'tabsDome',
  components: {
    'g-tab': Tab,
    'g-tabs': Tabs
  },
  setup () {
    const selected = ref('one')
    const click = (a) => {
    }
    return {
      selected,click
    }
  }
}
</script>