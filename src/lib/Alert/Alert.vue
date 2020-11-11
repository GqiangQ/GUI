<template>
  <teleport to=".g-alert-wrap">
    <div class="g-alert" v-if="visible" >
      <div class="g-alert-icon">
        <Icon name="style2-success" />
      </div>
      <div>
        <!-- <div class="g-alert-title">{{title}}</div> -->
        <div class="g-alert-content">{{content}}</div>
      </div>
      <div class="g-alert-close">
        <Icon name="style1-error" @click="close"  />
      </div>
    </div>
  </teleport>
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
    visible:Boolean,
    duration: {
      type:Number,
      default:3000
    }
  },
  setup (props,content) {
    onMounted(()=>{
      // setTimeout(()=>{
      //   content.emit('update:visible', false)
      // },props.duration)
    })
    const visible = ref(true)
    const close = ()=>{
      visible.value = false
      content.emit('update:visible', false)
    }
    return {
      close,visible
    }
  }
}
</script>

<style>

.g-alert-wrap{
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: fixed;
    top: 16px;
    left: 0;
    z-index: 1010;
    width: 100%;
    pointer-events: none;
    display: flex;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

</style>
<style lang='scss' scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
    transform:translateX(-50%);
    margin-top: -1em;
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
    transform:translateX(-50%);
    margin-top: .5em;
  }
}
.g-alert{
  animation:fade-in .5s;
  position: relative;
  transform:translateX(-50%);
  left: 50%;
  width: fit-content;
  display: flex;
  padding: .5em 1em;
  margin-top: .5em;
  border: 1px solid #000;
  border-radius: 4px;
  background: #97e4e4;
  pointer-events:all;
  &-icon{
    font-size: 1.3em;
  }
  &-title{
    font-size:1.3em;
    font-weight: 400;
  }
}
</style>