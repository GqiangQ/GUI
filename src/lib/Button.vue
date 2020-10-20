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
    },
    disabled: {
      type: Boolean,
      default:false
    }
  },
  setup (props) {
    const classes = computed(() => {
       const {disabled, type, theme, size} =props
       let classes = {}
       if (['link', 'text'].includes(theme)) {
          classes ={
            [`g-button-theme-${theme}`] : theme,
            [`g-button-theme-${theme}-disabled`] : disabled && theme,
          }
       } else if(theme == 'dashed') {
         classes = {
            [`g-button-theme-${theme}-${type}`] : theme && type,
            [`g-button-theme-${theme}`] : theme
          }
       } else {
         classes = {
            [`g-button-type-${type}`] : type,
            [`g-button-theme-${theme}`] : theme,
            [`g-button-size-${size}`] : size,
            [`g-button-disabled`] : disabled,
          }
       }
       return classes
      // return {
      //   [`g-button-type-${type}`] : type,
      //   [`g-button-theme-${theme}`] : theme,
      //   [`g-button-size-${size}`] : size,
      // }
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
  &:active{
    border-color: #caccd1;
    box-shadow: 0 0 1px 1px #b3d8ff54;
  }
  &:hover, &:focus {
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  
  // 主题颜色
  &-type-primary {
    color: #fff;
    background-color:#409eff;
    border-color:#409eff;
    &:active{
      border-color:#409eff;
      box-shadow: 0 0 1px 2px #b3d8ff54;
    }
    &:hover, &:focus {
      background-color:#40a0ffe1;
      border-color:#40a0ffe1;
    }
  }
  &-type-success {
    color: #fff;
    background-color: #67c23a;
    border-color:#67c23a;
    &:active{
      border-color:#67c23a;
      box-shadow: 0 0 1px 2px #b3d8ff54;
    }
    &:hover, &:focus{
      background-color:#67c23acc;
      border-color:#67c23acc;
    }
  }
  &-type-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:active{
      border-color: #f56c6c;
      box-shadow: 0 0 1px 2px #b3d8ff54;
    }
    &:hover, &:focus {
      background-color:#f56c6ccc;
      border-color:#f56c6ccc;
    }
  }
  &-type-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color:#e6a23c;
    &:active{
      border-color: #e6a23c;
      box-shadow: 0 0 1px 3px #b3d8ff54;
    }
    &:hover, &:focus {
      background-color:#e6a23ccc;
      border-color:#e6a23ccc;
    }
  }
  // 按钮类型
  &-theme-link {
    border: none;
    color: #409eff;
    &:hover,&:focus {
      background: none;
      text-shadow: 0 0 .5px #cacaca, 0 0 .5px #6bf403; 
    }
  }
  &-theme-text {
    border: none;
    &:hover,&:focus {
      background: none;
    }
  }
  &-theme-dashed {
    border-style:dashed;
    border-color: #cacdd4;
    &-primary {
      border-color: #409eff;
      color: #409eff;
      &:active{
        border-color:#409eff;
        box-shadow: 0 0 1px 2px #409eff11;
      }
      &:hover, &:focus {
        background-color:#40a0ff33;
        border-color:#40a0ffcc;
      }
    }
    &-success {
      border-color: #67c23a;
      color: #67c23a;
      &:active{
        border-color:#67c23a;
        box-shadow: 0 0 1px 2px #67c23a11;
      }
      &:hover, &:focus{
        background-color:#67c23a33;
        border-color:#67c23acc;
      }
    }
    &-danger {
      border-color: #f56c6c;
      color: #f56c6c;
      &:active{
        border-color: #f56c6c;
        box-shadow: 0 0 1px 2px #f56c6c11;
      }
      &:hover, &:focus {
        background-color:#f56c6c33;
        border-color:#f56c6ccc;
      }
    }
    &-warning {
      border-color: #e6a23c;
      color: #e6a23c;
      &:active{
        border-color: #e6a23c;
        box-shadow: 0 0 1px 3px #e6a23c11;
      }
      &:hover, &:focus {
        background-color:#e6a23c33;
        border-color:#e6a23ccc;
      }
    }
  }
  // 大小
  &-size-small {
    padding: 10px 16px;
    font-size: 13px;
  }
  &-size-big {
    padding: 14px 24px;
    font-size: 15px;
  }
  &-disabled {
    cursor: not-allowed;
    &:active{
      border-color: #caccd1;
      box-shadow: 0 0 1px 1px #b3d8ff54;
    }
    &:hover, &:focus {
      background: #ecf5ff;
      border-color: #b3d8ff;
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