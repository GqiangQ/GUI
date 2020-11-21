<template>
  <svg class="g-icon" :fill='color'>
    <use :xlink:href="`#g-${name}`"></use>
  </svg>
</template>
   
<script lang="ts">
import './svg'
import Vue, { onMounted, ref } from 'vue'
export default {
  name:'Icon',
  props: {
    name: String,
    color:String
  },
  setup() {
  },
}
</script>
<style lang="scss">
.g-icon {
  vertical-align: bottom;
  width: 1.5em;
  height: 1.5em;
}
</style>
