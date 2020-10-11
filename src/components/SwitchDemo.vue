<template>
  <Switch v-model:value="value" disabled />
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components:{
    Switch
  },
  setup(){
    const value = ref(true)
    const click = (a) => {
      value.value = a
    }
    return {
      value,
      click
    }
  }
}
</script>