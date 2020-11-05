import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './index.scss'
import 'github-markdown-css'
import store from './store'
import { router } from './router';


const app = createApp(App)
app.use(router)
app.mount('#app')
