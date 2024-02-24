import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap"

import "@/assets/styles/main.scss"

createApp(App).use(router).mount('#app') 
