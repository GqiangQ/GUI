<template>
<teleport to="body">
  <template v-if="visible">
    <div class="g-dialog-mask" @click="clickMask"></div>
    <div class="g-dialog-wrapper">
      <div class="g-dialog">
        <header>
          <slot name="header"><slot>
        </header>
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
<style  lang="scss" scoped>
.g-dialog{
  &-mask{
    position: absolute;
    z-index: 999;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #72727212;
  }
  &-wrapper{
    margin: auto;
    position: absolute;
    z-index: 999;
    top: 0;
    background: #72727212;
    overflow: auto;
    background: #fff;
    padding: 1em;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>