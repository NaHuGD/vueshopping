import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import  CustomerOrder from '@/components/pages/CustomerOrder';
import  CustomerCheckout from '@/components/pages/CustomerCheckout';

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
                {
                    path: 'orders', //路由網址
                    name: 'Orders',
                    component: Orders,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'coupons', //路由網址
                    name: 'Coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },
                },
            ],
        },
        {
            path:'/',
            name: 'Dashboard',
            component:Dashboard,
            children:[
                {   //一般頁面不需驗正
                    path:'customer_order',
                    name:'CustomerOrder',
                    component:CustomerOrder,
                },
                {   //結帳確認頁
                    path:'customer_checkout/:orderId',
                    name:'CustomerCheckout',
                    component: CustomerCheckout,
                },
            ],
        },
    ],
});
