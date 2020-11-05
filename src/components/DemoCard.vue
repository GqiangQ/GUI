<template>
  <div class="card">
    <div class="card-title">
      {{component.__sourceCodeTitle}}
    </div>
    <div class="card-view">
      <component :is="component"/>
    </div>
    <div class="card-code">
       <pre class="language-css" v-html="Prism.highlight(component.__sourceCode,  Prism.languages.html, 'html')" />
    </div>
    <div class="card-footer">
      <Button>查看代码 </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-coy.css'

import Button from '../lib/Button.vue'
const Prism = (window as any).Prism

export default {
  props: {
    component:Object
  },
  components: {
    Button
  },
  setup () {
    return {
      Prism
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
  }
}
</style>