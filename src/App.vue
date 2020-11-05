<template>
  <router-view ></router-view>
</template>

<script lang="ts" >
import { mapState } from 'vuex'
import { provide, ref } from 'vue'
import Topnav from "./components/Topnav.vue"
import { router} from './router'
export default {
  name: 'app',
  components: { Topnav },
  setup (props, content,) {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500 ? true : false)
    provide('menuVisible',menuVisible)
    router.afterEach((to,from) => {
      if(to.fullPath.indexOf('/doc/') === 0 && width < 500){
        menuVisible.value = false
      }
    });

  }
}
</script>