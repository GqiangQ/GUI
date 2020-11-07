<template>
  <div class="card">
    <div class="card-title">
      {{component.__sourceCodeTitle}}
    </div>
    <div class="card-view">
      <component :is="component"/>
    </div>
    <div class="card-code">
      <div v-html="describe"></div>
       <pre class="language-css" v-html="html" />
    </div>
    <div class="card-footer">
      <Button>查看代码 </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { computed } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-coy.css'

import Button from '../lib/Button.vue'
const Prism = (window as any).Prism

export default {
  props: {
    component:Object,
    describe:String
  },
  components: {
    Button
  },
  setup (props) {
    console.log(props.describe)
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode,  Prism.languages.html, 'html')
    })
    return {
      Prism, html, 
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
    pre[class*="language-"]::before,pre[class*="language-"]::after{
      box-shadow: none;
    }
  }
}
</style>