import { createWebHashHistory, createRouter } from "vue-router"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import Intro from './views/Intro.vue'
import Started from './views/Started.vue'
import Install from './views/Install.vue'
import MackDown from './views/MackDown.vue'
import { h } from "vue"

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "intro", component: h(MackDown, {path:'Intro.md',key:'Intro'}) },
        { path: "started", component: h(MackDown, {path:'Started.md',key:'Started'}) },
        { path: "install", component: h(MackDown, {path:'Install.md',key:'Install'}) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
