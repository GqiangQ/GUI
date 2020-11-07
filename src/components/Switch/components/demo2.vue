<demo>
disabled 用法
</demo>
<template>
  <Switch v-model:value="value1" disabled />
  <Switch v-model:value="value2" disabled />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../../lib/Switch.vue'

export default {
  components: {
    Switch
  },
  setup(){
    const value1 = ref(true)
    const value2 = ref(false)
    return {
      value1, value2
    }
  }
}
</script>