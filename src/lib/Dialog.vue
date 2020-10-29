<template>
<teleport to="body">
  <template v-if="visible">
    <div class="g-dialog-mask" @click="clickMask"></div>
    <div class="g-dialog-wrapper">
      <div class="g-dialog">
        <header class="g-dialog-header">
          <slot name="title" />
          {{title}}
          <div class="g-dialog-close"><g-icon @click="clickMask" name="close" /></div>
        </header>
        <main class="g-dialog-main" >
          <slot name="content"/>
          <slot/>
        </main>
        <footer class="g-dialog-footer">
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
import Icon from './Icon.vue'
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
    },
  },
  components: {
    'g-button': Button,
    'g-icon': Icon
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
      close, ok, clickMask,
    }
  }
}
</script>
<style  lang="scss">
.g-dialog{
  &-mask{
    position: absolute;
    z-index: 999;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #33292912;
  }
  &-wrapper{
    border-radius: 5px;
    margin: auto;
    position: absolute;
    z-index: 999;
    top: 0;
    background: #37373785;
    overflow: auto;
    background: #fff;
    left: 50%;
    top: 50%;
    min-width: 400px;
    transform: translate(-50%, -50%);
  }
  &-header, &-main, &-footer {
    padding: 14px 16px ;
  }
  &-header+&-main, &-main + &-footer  {
    border-top: 1px solid #e8eaec;
  }
  &-header{
    font-size: 17px ;
    font-weight: 500;
    position: relative;
  }
  &-close{
    color: #000;
    position: absolute;
    font-size: 17px;
    right: 16px;
    cursor: pointer;
    top: 14px;
    line-height: 1;
  }
  &-main{
    
  }
  &-footer{
    display: flex;
    justify-content: flex-end;
  }
}
</style>