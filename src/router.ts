import { createWebHashHistory, createRouter } from 'vue-router'
// import marked from 'marked'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.md'
import Started from './views/Started.md'
import Install from './views/Install.md'
// import DocDemo from './views/DocDemo.vue'
import SwitchDemo from './views/Switch/index.tsx'
// import Alert from './components/Alert/index.vue'
// import button from './components/button/index.vue'
// import dialog from './components/dialog/index.vue'
// import tabs from './components/tabs/index.vue'

// import TabsDemo from './components/TabsDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      redirect: '/doc/intro',
      children: [
        { path: 'intro', component: Intro },
        { path: 'started', component: Started },
        { path: 'install', component: Install },
        { path: 'switch', component: SwitchDemo }
        // { path: "alert", component: Alert },
        // { path: "button", component: button },
        // { path: "dialog", component: dialog },
        // { path: "tabs", component: tabs },
      ]
    }
  ]
});
