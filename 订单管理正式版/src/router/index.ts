import { createRouter, createWebHistory } from 'vue-router'
import 主页 from '@页面/主页.vue';
import 第1页 from '@页面/第1页.vue';
import 第2页 from '@页面/第2页.vue';
import 第3页 from '@页面/第3页.vue';
import 第4页 from '@页面/第4页.vue';
import 第5页 from '@页面/第5页.vue';
import 默认页 from '@页面/默认页.vue';
import 登录页 from '@页面/登录页.vue';
import { pinia数据中心 } from '../stores/pinia数据';




const User = {
    template: `
      <div>
        <router-view></router-view>
      </div>
    `,
}


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            components: { 主页: 主页 },
            children: [

                {
                    path: 'mr',
                    name: '默认页',
                    components: { 内容: 默认页 },
                    props: true
                },
                {
                    path: '1',
                    name: '第1页',
                    components: { 内容: 第1页 },
                    props: true
                },
                {
                    path: '2',
                    name: '第2页',
                    components: { 内容: 第2页 },
                    props: true
                },
                {
                    path: '3',
                    name: '第3页',
                    components: { 内容: 第3页 },
                    props: true
                },
                {
                    path: '4',
                    name: '第4页',
                    components: { 内容: 第4页 },
                    props: true
                },
                {
                    path: '5',
                    name: '第5页',
                    components: { 内容: 第5页 },
                    props: true
                },
            ],
        },

        {
            path: '/login',
            name: 'login',
            components: { 主页: 登录页 },
            props: true
        },

    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    let pinia = pinia数据中心()
    let token = String(localStorage.getItem('token'))
    let 当前登录用户 = String(localStorage.getItem('当前登录用户'))
    if (当前登录用户 != 'null') {
        pinia.当前登录用户 = String(localStorage.getItem('当前登录用户'))
    }
    if ((token == '通过' && pinia.当前登录用户 != "") || to.path == '/login') {
        next();
    } else {
        next('/login');
    }
})








export default router
