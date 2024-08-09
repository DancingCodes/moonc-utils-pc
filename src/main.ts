import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import 'normalize.css';
import '@/assets/css/public/index.scss'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')