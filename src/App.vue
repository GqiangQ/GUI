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
<style lang="scss">

/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:hover {
      width: 10px;
    background: #ff00003a;
}
.main-box{
  max-width: 1000px;
  margin: auto;
}
.markdown-body table {
  display: inline-table;
  text-align: left;
}
</style>