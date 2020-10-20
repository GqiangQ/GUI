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
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  setup (props) {
   
    const classes = computed(() => {
       const {type, theme, size} =props
      return {
        [`g-button-type-${type}`] : type,
        [`g-button-theme-${theme}`] : theme,
        [`g-button-size-${size}`] : size,
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
  // 主题颜色
  &-type-primary {
    color: #fff;
    background-color:#409eff;
    border-color:#409eff;
    &:hover, &:focus {
      background-color:#40a0ffe1;
      border-color:#40a0ffe1;
    }
  }
  &-type-success {
    color: #fff;
    background-color: #67c23a;
    border-color:#67c23a;
    &:hover, &:focus{
      background-color:#67c23acc;
      border-color:#67c23acc;
    }
  }
  &-type-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover, &:focus {
      background-color:#f56c6ccc;
      border-color:#f56c6ccc;
    }
  }
  &-type-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color:#e6a23c;
    &:hover, &:focus {
      background-color:#e6a23ccc;
      border-color:#e6a23ccc;
    }
  }
  // 按钮类型
  &-theme-link {
    border: none;
    color: #409eff;
  }
  &-theme-text {
    border: none;
  }
  &-theme-dashed {
    border:1px dashed;
  }
  
  // 大小
  &-size-small {
    padding: 6px 10px;
    font-size: 12px;
  }
  &-size-big {
    padding: 18px 30px;
    font-size: 14px;
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