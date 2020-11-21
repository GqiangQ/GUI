import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './index.scss'
import 'github-markdown-css'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import { router } from './router';

  router.beforeEach((to, from, next) => {
    nprogress.start();
    next();
  })
  router.afterEach(() => {
    nprogress.done();
  })


const app = createApp(App)
app.use(router)
app.mount('#app')
