<template>
  <div>
    <g-button @click="click1">函数引用</g-button>
    <g-button @click="click">log</g-button>
    <Dialog v-model:visible="x" :ok="ok"  :cancel="cancel">
      <template #title>
        我是提示
      </template>
      12313
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Fdialog from '../lib/Confirm'
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
      console.log('dialog,ok')
    }
    const click1 = () => {
      Fdialog({
        title:'提示！！！',
        content: 'are you sure??<div></div>',
        ok: () => {
          console.log('f:, ok')
        },
        cancel: () => {
          console.log('cancel:f')
        }
      })
    }
    const cancel = () => {
      console.log('dialog, cancel')
    }
    return {
      x,click, ok, click1, cancel
    }
  }
}
</script>