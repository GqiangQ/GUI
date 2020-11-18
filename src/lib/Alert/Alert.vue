<template>
  <teleport to=".g-alert-wrap">
    <div class="g-alert " :class="`g-alert-type-${type}`" v-if="visible" >
      <div class="g-alert-icon">
        <Icon :name="`style${title ? 2 : 3 }-${type}`" />
      </div>
      <div>
        <div class="g-alert-title">{{title}}</div>
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
      validator: (value:string)=> {
        return ['success', 'warning', 'danger'].includes(value)
      },
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
      setTimeout(()=>{
        content.emit('update:visible', false)
      },props.duration)
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
  animation: fade-in .5s;
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
  min-width: 200px;
  pointer-events:all;
  &-icon{
    font-size: 1em;
    margin-right: .5em;
    fill: #00000073;
  }
  &-title{
    font-weight: 400;
  }
  &-content{
    margin-right: 1.5em;
  }
  &-close{
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1em;
    font-size: .7em;
    cursor: pointer;
    fill: #00000073;
  }
  // 主题
  &-type{
    &-success{
      background-color: rgb(219 241 209);
      border-color: rgb(116 189 80);
      .g-alert-icon{
        fill:rgb(103, 194, 58);
      }
    }
    &-warning{
      background-color: #f3e2c8;
      border-color: rgb(222 164 76);
      .g-alert-icon{
        fill:rgb(230, 162, 60);
      }
    }
    &-info{
      background-color: rgb(218 236 255);
      border-color: rgb(113 179 247);
      .g-alert-icon{
        fill: rgb(64, 158, 255);
      }
    }
    &-error{
      background-color: rgb(253 213 213);
      border-color: rgb(245, 108, 108);
      .g-alert-icon{
        fill:  rgb(245, 108, 108);
      }
    }
  }
}
</style>