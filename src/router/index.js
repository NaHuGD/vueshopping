import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Admin from '@/components/Admin';
import User from '@/components/user/User';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import  CustomerOrder from '@/components/pages/CustomerOrder';
import  CustomerCheckout from '@/components/pages/CustomerCheckout';
import  Home from '@/components/pages/Home';
import  Shop from '@/components/pages/Shop';
import ShopInside from '@/components/pages/ShopInside';
import InsideSame from '@/components/pages/InsideSame';
import Discount from '@/components/pages/Discount';
import CheckoutPage from '@/components/pages/CheckoutPage';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'*', //輸入路徑不是定義的path
            redirect:'home', //導頁致官網
        },
        {
            path: '/', 
            name: 'User',
            component: User,
            children: [
                {   //首頁
                    path: 'home',
                    name: 'Home',
                    component: Home,
                },
                {   //商品頁
                    path: 'shop',
                    name: 'Shop',
                    component: Shop,//載入樣式
                },
                {   //商品內頁
                    path: '/shop_inside/:itemId',
                    name: 'ShopInside',
                    component: ShopInside,
                },
                {   //商品內頁
                    path: '/inside_same/:itemId',
                    name: 'InsideSame',
                    component: InsideSame,
                },
                {   //抽獎頁
                    path: 'discount',
                    name: 'Discount',
                    component: Discount,
                },
                {   //結帳頁
                    path: 'checkout_page',
                    name: 'CheckoutPage',
                    component: CheckoutPage,
                },
            ],
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/admin', //路由網址
            name: 'Admin',
            component: Admin,
            children: [
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
            path: '/',
            name: 'Admin',
            component: Admin,
            children: [
                {   //一般頁面不需驗正
                    path: 'customer_order',
                    name: 'CustomerOrder',
                    component: CustomerOrder,
                },
                {   //結帳確認頁
                    path: 'customer_checkout/:orderId',
                    name: 'CustomerCheckout',
                    component: CustomerCheckout,
                },
            ],
        },
    ],
});
