import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import './admin.css'
import './layout-full.css'
import './brand.css'
import './enhancements.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
