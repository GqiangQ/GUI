<template>
  <button class="g-button" :classes="`g-button-${type}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'g-button',
  props: {
    type: [String]
  },
  setup (props) {
    const { type } = props 
    return type
  }
}  
</script>

<style lang="scss" scoped>
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
  &-dinger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
   &-primary {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
   &-success {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
   &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }




  &:hover {
    background: #fcfcfc;
  }
}
</style>