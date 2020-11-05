<template>
<h1>Switch 组件示例</h1>
  <div class="card">
    <div class="card-title">
      常规用法
    </div>
    <div class="card-view">
      <component :is="demo1"/>
    </div>
    <div class="card-code">
       <pre class="language-css" v-html="Prism.highlight(demo1.__sourceCode,  Prism.languages.html, 'html')" />
    </div>
    <div class="card-footer">
      <Button>查看代码 </Button>
    </div>
  </div>
  <div class="card">
    <div class="card-title">
      常规用法
    </div>
    <div class="card-view">
      <component :is="demo2"/>
    </div>
    <div class="card-code">
       <pre>{{demo2.__sourceCode}}</pre>
    </div>
    <div class="card-footer">
      <Button>查看代码 </Button>
    </div>
  </div>
</template>
<script lang="ts">
import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import Button from '../../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'

const Prism = (window as any).Prism

console.log(Prism)
export default {
  components:{
    Button
  },
  setup(){
    return { demo1, demo2, Prism}
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