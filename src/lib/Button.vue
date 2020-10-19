<template>
  <button class="g-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'g-button',
  props: {
    type: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup (props) {
   
    const classes = computed(() => {
       const {type, theme, size} =props
      return {
        [`g-button-${type}`] : type,
        [`g-button-theme-${theme}`] : theme,
        [`g-button-theme-${size}`] : size,
      }
    })
    return {
      classes,
    }
  }
}  
</script>

<style lang="scss">
.g-button {
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &-primary {
    color: #fff;
    background-color:#409eff;
    border-color:#409eff;
    &:hover, &:focus {
      background-color:#40a0ffe1;
      border-color:#40a0ffe1;
    }
  }
  &-success {
    color: #fff;
    background-color: #67c23a;
    border-color:#67c23a;
    &:hover, &:focus{
      background-color:#67c23acc;
      border-color:#67c23acc;
    }
  }
  &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover, &:focus {
      background-color:#f56c6ccc;
      border-color:#f56c6ccc;
    }
  }
  &-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color:#e6a23c;
    &:hover, &:focus {
      background-color:#e6a23ccc;
      border-color:#e6a23ccc;
    }
  }
  & + & {
    margin-left: 8px;
  }
  &:focus{
    outline: none;
  }
  &::-moz-focus-inner {
    border: o;
  }
}
</style>