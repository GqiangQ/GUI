<template>
<h1>Switch 组件示例</h1>
  <!-- <Switch v-model:value="value" /> -->
  <!-- <Icon name="wechat" /> -->
  <!-- <Switch style="widht:100px;" v-model:value="value" disabled shape='' checkedChildren='开' unCheckedChildren="关" /> -->
  <div class="card">
    <div class="card-title">
      常规用法
    </div>
    <div class="card-view">
      <Switch v-model:value="value"/>
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
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Icon from '../lib/Icon.vue'
import Button from '../lib/Button.vue'
export default {
  components:{
    Switch, Icon, Button
  },
  setup(){
    const value = ref(true)
    const click = (a) => {
      value.value = a
    }
    const change = () => {
      console.log('change')
    }
    return {
      value,
      click
    }
  }
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