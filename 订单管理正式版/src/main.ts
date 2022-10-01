import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入图标
import './assets/icon.js';

//引入图标组件
import lmicon from '@/components/icons/Icon.vue'




const app = createApp(App)
//注册pinia
app.use(createPinia())
//注册路由
app.use(router)



//全局注册的组件
//app.component('注册的名字', 菜单)
app.component('icon', lmicon)

//挂载点
app.mount('#入口')
