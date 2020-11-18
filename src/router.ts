import { createWebHashHistory, createRouter } from "vue-router"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/Switch/index.vue'
import Alert from './components/Alert/index.vue'
import button from './components/button/index.vue'

import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import Intro from './mackdown/Intro.md'
import Started from './mackdown/Started.md'
import Install from './mackdown/Install.md'

import MackDown from './views/MackDown.vue'
import { h } from "vue"


const md = string => h(MackDown, {content: string, key:string})

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
        { path: "intro", component: md(Intro) },
        { path: "started", component: md(Started) },
        { path: "install", component: md(Install) },
        { path: "switch", component: SwitchDemo },
        { path: "alert", component: Alert },
        { path: "button", component: button },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
