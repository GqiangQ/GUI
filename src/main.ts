import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import 'github-markdown-css'

import { router } from './router';
createApp(App).use(router).mount('#app')
