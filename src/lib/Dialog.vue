<template>
<teleport to="body">
  <template v-if="visible">
    <div class="g-dialog-mask" @click="clickMask"></div>
    <div class="g-dialog-wrapper">
      <div class="g-dialog">
        <header>header</header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <g-button @click="close">取消</g-button>
          <g-button type="primary" @click="ok">确认</g-button>
        </footer>
      </div>
  </div>
  </template>
  </teleport>
</template>

<script lang="ts">
import Button from './Button.vue' 
export default {
  props: {
    visible: {
      type:Boolean,
      default:false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    }
  },
  components: {
    'g-button': Button
  },
  setup (props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const clickMask = () => {
      if (!props.maskClosable) return
      close()
    }
    const ok = ()=> {
      if(props.ok?.() !== false) {
        close()
      }
    }
    return {
      close, ok
    }
  }
}
</script>