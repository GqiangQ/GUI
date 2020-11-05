<demo>
常规用法12312313
</demo>
<template>
  <Switch v-model:value="value"/>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../../lib/Switch.vue'

export default {
  components: {
    Switch
  },
  setup(){
    const value = ref(true)
    return {
      value
    }
  }
}
</script>