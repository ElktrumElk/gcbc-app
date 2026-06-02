import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import './assets/animations/animation1.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
