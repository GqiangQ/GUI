<template>
  <!-- <teleport to="#gAlertWrap" v-if="visible"> -->
    <!-- <div class="g-alert" > -->
      <div class="g-alert-icon">
      </div>
      <div>
        <div class="g-alert-title">{{title}}</div>
        <div class="g-alert-content">{{content}}</div>
      </div>
      <div class="g-alert-close">
        <Icon name="style1-error" />
      </div>
    <!-- </div> -->
  <!-- </teleport> -->
</template>

<script lang="ts">
import Vue, { onMounted, onUnmounted, ref, warn, watchEffect } from 'vue'
import Icon from '../Icon.vue'
export default {
  name: 'g-alert',
  components:{
    Icon
  },
  props: {
    // 类型
    type: { 
      type: String,
      // validator: function(value:String) {
      //   return ['success', 'warning', 'danger'].indexOf(value) !== -1
      // },
      default: 'warning'
    },
    // 不加边框的横幅效果
    banner: Boolean,
    title:String,
    content:String,
    visible:Boolean
  },
  setup (props,content) {
    onMounted(()=>{
        setTimeout(()=>{
          content.emit('update:visible', false)
        },5000)
    })
  }
}
</script>

<style>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.g-alert-wrap{
  position: fixed;
  z-index: 1000;
  left: 50%;
  transform: translateX(50%);
  animation: fade-in 1s;
}

</style>
<style lang='scss' scoped>
.g-alert{
  // position: relative;
  // z-index: 1000;
  // width: 300px;
  // z-index: 1000;
  padding: .5em 1em;
  margin-top: .5em;
  border: 1px solid #000;
}
</style>