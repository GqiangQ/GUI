<template>
  <div class="topnav">
    <div class="logo" >
      <router-link to="/">
        <img class="icon-log" src="../assets/1.png" alt="" srcset="">
      </router-link>
      </div>
    <ul class="menu">
      <li><router-link to="/doc/switch">开始</router-link></li>
      <li><a target="_blank" href="https://github.com/qqiang-g/GUI" class="git">GitHub</a></li>
      <!-- <li>博客</li> -->
    </ul>
    <svg v-if="!showIcon" class="icon toggleAside" @click="toggleMenu" aria-hidden="true">
        <use xlink:href="#g-caidan"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {useRoute} from 'vue-router'
import { inject, ref, Ref } from "vue";
export default {
  setup() {
    const router = useRoute()
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const showIcon = ref(router.path === '/')
    return { toggleMenu, showIcon };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: #fff;
  display: flex;
  padding: 14px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 1px 0px #12b9b92c;
  > .logo {
    .icon-log{
      max-height: 3em;
    }
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1.5em;
      color: #059494;
      font-weight: 600;
      font-size: 17px;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
      // a{

      // }
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>