import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'*', //輸入路徑不是定義的path
            redirect:'login', //導頁致官網
        },
        // {
        //     path:'/',
        //     name:'HelloWorld',
        //     component: HelloWorld,
        //     meta:{requiresAuth:true},
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/admin', //路由網址
            name: 'Dashboard',
            component: Dashboard,
            children:[
                {
                    path: 'products', //路由網址
                    name: 'Products',
                    component: Products,  
                    meta: { requiresAuth: true },//需要驗證，確保進入頁面需要驗正
                },
            ],
        },
    ],
});