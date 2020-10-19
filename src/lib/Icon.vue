<template>
       <svg class="g-icon">
        <use :xlink:href="`#g-${name}`"></use>
      </svg>
</template>
  
<script lang="ts">
import './svg'
import Vue from 'vue'
export default {
  name:'Icon',
  props: {
    name: String
  },
  setup () {
    
  }
}
</script>
<style lang="scss">
.g-icon {
  width: 1.5em;
  height: 1.5em;
}
</style>
