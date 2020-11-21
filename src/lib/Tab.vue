<template>
  <div>
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      title: String, 
      disabled: {
        type: Boolean
      },
      value: String
    }
  }
</script>