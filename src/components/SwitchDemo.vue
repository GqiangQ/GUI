<template>
  <!-- <Switch v-model:value="value" /> -->
  <Switch v-model:value="value"/>
  <Icon name="wechat" />
  <!-- <Switch style="widht:100px;" v-model:value="value" disabled shape='' checkedChildren='开' unCheckedChildren="关" /> -->
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Icon from '../lib/Icon.vue'
export default {
  components:{
    Switch, Icon
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