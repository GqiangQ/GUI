<demo>
常规用法
</demo>
<template>
  <g-button @click="value = true">正常dialog</g-button>
  <g-button @click="value = true">return to false</g-button>
  <g-dialog v-model:visible="value" :ok="ok"  :cancel="cancel">
    <template #title>
      我是提示
    </template>
    我是内容
  </g-dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import Dialog from '../../../lib/Dialog.vue'
import Button from '../../../lib/Button.vue'
export default {
  components: {
    'g-dialog': Dialog,
    'g-button': Button
  },
  setup(){
    const value = ref(false)
    const ok = () => {
      console.log('ok')
      return false
    }
    const cancel = (visible) =>{
    }
    return {
      value, ok, cancel
    }
  }
}
</script>