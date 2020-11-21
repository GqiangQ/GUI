<template>
<div class="g-tabs">
  <!-- 头部 -->
  <div class="g-tabs-nav" ref="tabNav">
    <div class="g-tabs-nav-item"
      v-for="(item,index) in title" 
      :ref="bindRef" 
      :key="index" 
      @click="select(item)"  
      :class="{'g-tabs-nav-item-selected':selected === item.value, 'g-tabs-nav-item-disabled':item.disabled}" 
      :value="item.value"
    >
      {{item.label}}
    </div>
    <div ref="selectedLine" class="g-tabs-nav-line" />
  </div>
  <!-- 显示的内容 -->
  <div class="g-tabs-content">
      <component class="g-tabs-content-item" :is="selectedItemContent" :key="selectedItemContent.props.value"/>
  </div> 
</div> 
</template>
<script lang="ts">
import { onMounted, onUpdated,watchEffect, ref, computed } from 'vue'
import Tab from './Tab.vue'
export default{
  name:'tabs',
  props:{
    selected: {
      type: String,
    },
  },
  setup (props, content) {
    const selectedItem = ref<HTMLDivElement>(null) // 选中元素的ref
    const selectedLine = ref<HTMLDivElement>(null) // 选中下划线的ref
    const tabNav = ref<HTMLDivElement>(null) // nav容器
   
    // 生命周期执行的内容
    onMounted(()=>{
      console.log('onMounted:')
      watchEffect(() => {
        const {width} = selectedItem.value.getBoundingClientRect()
        selectedLine.value.style.width = width + 'px'
        const {left: left1} = selectedItem.value.getBoundingClientRect()
        const {left: left2} = tabNav.value.getBoundingClientRect()
        const left = left1 - left2
        selectedLine.value.style.left = left + 'px'
      })
    })
    // 加了这个才可以实时选中
    onUpdated(()=>{
        const {width} = selectedItem.value.getBoundingClientRect()
        selectedLine.value.style.width = width + 'px'
        const {left: left1} = selectedItem.value.getBoundingClientRect()
        const {left: left2} = tabNav.value.getBoundingClientRect()
        const left = left1 - left2
        selectedLine.value.style.left = left + 'px'
    })
    let title = []  // title集合
    const defaults = content.slots.default()// 显示的内容
    defaults.forEach(item => {
      title.push({
        label:item.props.title,
        value:item.props.value,
        disabled: (item.props.disabled !== undefined ) && (item.props.disabled !== false)
      })
      if(item && item.type !== Tab){
        throw new Error('Tabs 子标签必须是Tab')
      }
      console.log(title)
    })

    // 触发点击事件跟新代码
    const select = (item) => {
      if (item.disabled === true) return
      content.emit('update:selected', item.value)
    }

    // 绑定选中的ref
    const bindRef = (el:HTMLDivElement) => {
      if(el?.getAttribute('value') === props.selected){
        selectedItem.value = el
      }
    }
    // 计算选中的值
    const selectedItemContent = computed(() => {
      const item =  defaults.find(item => {
        console.log(item.props.value === props.selected && !item.props.disabled ,item.props.value === props.selected , item.props.disabled)
      })
      console.log(defaults,)
      return defaults[0]
    })
    return {
      defaults, title, select, bindRef, selectedLine ,tabNav, selectedItemContent
    }
  }  
}
</script>
<style lang="scss">
.g-tabs{
  &-nav{
    display: flex;
    position: relative;
    border-bottom: 1px solid #dad8d8;
    &-line{
      bottom: -1px;
      position: absolute;
      width: 100%;
      background: #409eff;
      height: 2px;
      left: 0;
      border-radius: 2px;
      transition: all 250ms;
    }
    &-item{
      &-selected{
        color: #409eff;
      }
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &:hover{
        color: #409eff;
      }
      &:first-child{
        margin-left: 0;
      }
      margin:0 1rem;
      &-disabled {
        color: #ababab;
        &:hover{
          color: #ababab;
        }
        cursor: not-allowed;
      }
    }
    &:last-child{
      margin-right: 0;
    }
  }
  &-content{
    padding: 1em 0;
  }
}
</style>