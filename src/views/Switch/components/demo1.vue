<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="value"/>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../../../lib/Switch.vue'
export default {
  name: 'dome',
  components: {
    Switch
  },
  // date{},
  setup(){
    const value = ref(true)
    return {
      value
    }
  }
}
</script>