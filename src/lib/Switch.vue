<template>
  <div @click="toggle" class="g-switch" :class="{'g-switch-checked': value,'g-switch-disabled': disabled}">
    <span class="g-ball" />
  </div>
  {{value}}
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props:{
    value: Boolean,
    disabled: {
      type: Boolean,
      default:false
    }
  },
  setup (props,context) {
    const  checked = ref(false)
    const toggle = () => {
      props.disabled ? null : context.emit('update:value', !props.value)
    }
    return {
      checked,toggle
    }
  }
}
</script>

<style lang="scss" scoped>
$h: 24px;
$h2: $h - 4px;
$color:#07c160;
$hover-color:#06ae56;

.g-switch{
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
  &-disabled {
    // pointer-events: none;
    cursor: not-allowed;
  }
  &-checked {
    background: #07c160;
    > .g-ball{
    left: calc(100% - #{$h2} - 2px);
    }
  }
  
}
</style>