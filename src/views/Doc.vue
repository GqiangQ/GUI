<template>
<div class="layout">
    <Topnav  class="nav" />
    <div class="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/started">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/alert">alert 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">sialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">tabs 组件</router-link>
            </li>
          </ol>
        </aside>
        <main>
        <div class="main-box">
          <router-view/>
        </div>  
        </main>
    </div>
</div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from "../components/Topnav.vue";
export default {
  name: 'doc',
  components: { Topnav },
  setup () {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {
      menuVisible
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  @media (max-width: 500px) {
    width:100%;
  }
  transition: all 2s;
  width: 260px;
  padding: 16px 0;
  background: #ffffff;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  border: 1px solid #9d9da5;
  > h2 {
    font-size: 19px;
    margin: .5em 0;
    padding: 0 .8em;
  }
  > ol {
    > li {
      a{
        &:hover{border: none;}
        text-decoration: none;
        display: block;
        padding: .7em 1.8em;
      }
      .router-link-active{
        position: relative;
        background: #12b9b96b;
        &::after{
          position: absolute;
          top: 0;
          right: 0;
          content: ' ';
          display: block;
          width: 5px;
          height: 100%;
          background:#12b9b9;
        }
      }
    }
  }
}
main {
  overflow: auto;
  @media (max-width: 1500px) {
    margin-left: 100px; 
  }
  @media (max-width: 500px) {
    margin: auto; 
  }
}
</style>