<demo>
常规用法
</demo>
<template>
  <Button @click="success('success')">成功</Button>
  <Button @click="success('warning')">失败</Button>
  <Button @click="success('info')">提示</Button>
  <Button @click="success('error')">消息</Button>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../../../lib/Button.vue'
import Alert from '../../../lib/Alert/index'
export default {
  components: {
    Button
  },
  setup(){
    const success = (type) => {
      Alert({title:type,type,content:'1212121321321321332131'})
    }
    return {
      success
    }
  }
}
</script>