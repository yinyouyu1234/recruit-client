import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './assets/lang'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/reset.less'
import plugin from './plugins'

createApp(App)
.use(i18n)
.use(plugin)
.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')
