<template>
  <div class="card">
    <div class="card-title">
      {{component.__sourceCodeTitle}}
    </div>
    <div class="card-view">
      <component :is="component"/>
    </div>
    <div class="card-code" >
      <div v-html="describe" class="card-code-describe"></div>
      <div ref="code" class="card-code-content">
        <div class="card-code-content-copy" @click="copy">
          <g-icon name="style2-copy"/>copy
        </div>
        <pre :id="html" class="language-css" v-html="html" />
      </div>
    </div>
    <div class="card-footer" @click="visible = !visible">
        <g-icon class="card-footer-icon" name="style2-code" />
        <span   class="card-footer-text" >{{visible ? '隐藏代码':'显示代码'}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { computed, ErrorCodes, onMounted, ref, watch } from 'vue'
import 'prismjs'
// import 'prismjs/themes/prism-coy.css'
import 'prismjs/themes/prism-okaidia.css'
import Icon from '../lib/Icon.vue'

const Prism = (window as any).Prism

export default {
  props: {
    component:Object,
    describe:String,
  },
  components: {
    'g-icon':Icon
  },
  setup (props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode,  Prism.languages.html, 'html')
    })
    const code = ref<HTMLPreElement>(null)
    const visible = ref(false)
    const codeChildrenSize = computed(()=>{
      return code.value.children[1].getBoundingClientRect()
    })
    const changeHeight = () => {
      console.log('change')
      if(!visible.value) {
        code.value.style.height = '0px'
        visible.value = false
      } else {
        const {height } = codeChildrenSize.value
        code.value.style.height = height + 'px'
        visible.value = true
      }
    }
    watch(visible,changeHeight)
    const copy = (e) => {
      navigator.clipboard.writeText(props.component.__sourceCode).then(res=>{
      }).catch(err=>{
        alert('err')
      })
		        // oInput.select()
		        // document.execCommand('Copy')
		        // Toast({
		        //   content: '复制成功',
		        //   duration: 2000
		        // })
		        // oInput.remove()
    }
    return {
      Prism, html, visible, code, copy
    }
  },
  // watch:{
  //   visible: (...a) =>{
  //     console.log(visible)
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.card{
  margin-top: 3em;
  transition: height 2s;
  width: 100%;
  transition:  all 250ms .1s ;
  box-shadow: 0px 0px 4px 0px #9b9a9a71;
  &:hover{
    box-shadow: 0px 0px 5px 1px rgba(150, 150, 150, 0.486);
  }
  &-title{
    padding: 15px;
    font-size: 20px;
    border-bottom: 1px solid#eae7e7;
  }
  &-view{
    padding:1.5em 2em;
  }
  &-code{
    width: 100%;
    background: #a2a6ce26;
    border-top: 1px solid #eae7e7;
    &-describe{
      padding: 2em .5em;
      margin:.5em;
      background: #fff;
      border: 1px solid #f3f3f3;
    }
    &-content{
      margin-top: .5em;
      transition: height 300ms;
      overflow-y: hidden;
      height: 0;
      position: relative;
      .language-css{
        overflow-x:auto ;
        padding:1.5em 2em;
        margin: 0;
        background:#112829ba;
        &::after,&::before{
          box-shadow: none;
        }
      }
      &:hover>&-copy{
        top: 3px;
      }
      &-copy{
        transition: all 300ms;
        position: absolute;
        fill: #adaaaa;
        color: #adaaaa;
        right: 0;
        top: 3px;
        border-radius: 10px;
        background: #f1f2f8;
        padding: 2px 8px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        &:hover{
          color: #12b9b9;
          fill: #12b9b9;
        }
      }
    }
    
  }
  &-footer{
    @keyframes deg {
      0% {
        transform:rotate(90deg);
      }
      25% {
        transform:rotate(-90deg);
      }
      50% {
        transform:rotate(25deg);
      }
      75% {
        transform:rotate(-25deg);
      }
      100% {
        transform:rotate(0deg);
      }
    }
    &:hover>&-icon{
      animation:deg 500ms .3s;
    }
    padding: .5em;
    color: #9aa2a2;
    background:#a2a6ce26;
    display: flex;
    justify-content: center;
    fill: #9aa2a2;
    cursor: pointer;
  }
  &:hover>&-footer{
    color: #12b9b9;
    fill: #12b9b9;
  }
 
}
@media (max-width: 500px) {
    .card-code-content-copy{
      top: 3px;
    }
  }
</style>
