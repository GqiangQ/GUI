<template>
<h1>Switch 组件示例</h1>
  <div class="card">
    <div class="card-title">
      常规用法
    </div>
    <div class="card-view">
      <dome1/>
    </div>
    <div class="card-code">
      {{'<Switch v-model:value="value"/>'}}
    </div>
    <div class="card-footer">
      <Button>查看代码 </Button>
    </div>
  </div>
</template>
<script lang="ts">
import dome1 from './components/dome1.vue'
import Button from '../../lib/Button.vue'
export default {
  components:{
    dome1, Button
  },
  // setup(){
  //   const value = ref(true)
  //   const click = (a) => {
  //     value.value = a
  //   }
  //   const change = () => {
  //     console.log('change')
  //   }
  //   return {
  //     value,
  //     click
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.card{
  margin-top: 3em;
  width: 100%;
  box-shadow: 0px 0px 4px 1px rgba(66, 66, 66, 0.719);
  &-title{
    padding: 15px;
    font-size: 20px;
    border-bottom: 1px solid #f3f3f3;
  }
  &-view{
    padding: 15px;
  }
  &-code{
    padding: 15px;
  }
}
</style>