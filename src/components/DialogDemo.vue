<template>
  <div>
    <g-button @click="click">log</g-button>
    <Dialog v-model:visible="x" :ok="ok">
      <slot name="header">111</slot>
      dddddddsdsd
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import Vue, { ref } from 'vue'
export default {
  components: {
    Dialog,
    'g-button':Button
  },
  setup () {
    const x = ref(false)
    const click = ()=> {
      x.value = !x.value
    }
    const ok = () => {
      console.log('ok')
      return false
    }
    return {
      x,click, ok
    }
  }
}
</script>