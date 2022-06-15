import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/reset.less' 
import router from './router'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(Element);
app.use(router);
app.use(createPinia())

app.mount('#app')
