<template>
  <div class="topnav">
    <div class="logo" >
      <router-link to="/">LOGO</router-link>
      </div>
    <ul class="menu">
      <li>GitHub</li>
      <li>码云</li>
      <li>博客</li>
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
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 1px 0px #12b9b92c;
  > .logo {
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