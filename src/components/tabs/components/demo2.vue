<demo>
特殊用法
</demo>
<template>
  <Button @click="success">成功</Button>
  <Button @click="error">失败</Button>
  <Button @click="info">提示</Button>
  <Button @click="warning">消息</Button>
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
      Alert.success('success')
    }
    const warning = (type) => {
      Alert.wraning('wraning')
    }
    const info = (type) => {
      Alert.info('info')
    }
    const error = (type) => {
      Alert.error('error')
    }
    return {
      success,warning,info,error
    }
  }
}
</script>