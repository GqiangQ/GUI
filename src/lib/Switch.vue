<template>
  <div @click="toggle" class="g-switch" :class="{'g-switch-checked': value,'g-switch-disabled': disabled}">
    <span class="g-ball" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  inheritAttrs: true,
  props:{
    value: Boolean,
    disabled: {
      type: Boolean,
      default:false
    },
  },
  setup (props,context) {
    const  checked = ref(false)
    const toggle = () => {
      if (props.disabled) return
      // context.emit('change', !props.value)
      context.emit('update:value', !props.value)
    }
    return {
      checked,toggle
    }
  }
}
</script>

<style lang="scss">
$h: 24px;
$h2: $h - 4px;
$color:#07c160;
$hover-color:#06ae56;

.g-switch{
  display: inline-block;
  & + & {
    margin-left: 2em;
  }
  height: $h;
  width: $h*2;
  background: #dddddd;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px #afafaf;
  > .g-ball{
    position: absolute;
    top: 2px;
    left: 2px;
    display: block;
    height: $h2;
    width: $h2;
    border-radius: $h2/2;
    background: #fff;
    box-shadow: 0px 0px 4px 0px #404040;
    transition: all 250ms;
  }
 
  &-checked {
    background: #07c160;
    > .g-ball{
    left: calc(100% - #{$h2} - 2px);
    }
  }
  &-disabled {
  filter: grayscale(70%);
  cursor: not-allowed;
}
}
</style>