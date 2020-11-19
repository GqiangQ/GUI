<demo>
函数调用 
</demo>
<template>
  <g-button @click="click">函数引用</g-button>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../../../lib/Button.vue'
import Fdialog from '../../../lib/Confirm'

export default {
  components: {
    'g-button': Button
  },
  setup(){
    const click = () => {
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
    return {
      click
    }
  }
}
</script>