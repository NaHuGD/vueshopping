// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate'; //判斷資料是否輸入插件
import VueI18n from 'vue-i18n';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

import App from './App';
import router from './router';
import './bus'
import currencyFilter from "./filters/currency";
import dateFilter from "./filters/date";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);// 必須要在 Vue 設定的進入點(main.js)內使用，外部插件要使用的話都需要用Vue.use

VeeValidate.Validator.localize('zh_TW', zhTWValidate);//載入中文語系
Vue.use(VeeValidate);//啟用
Vue.use(VueI18n);

Vue.component('Loading', Loading);//元件需要被啟用
Vue.filter('currency',currencyFilter);
Vue.filter('date',dateFilter);

axios.defaults.withCredentials = true;//開啟跨域
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  console.log('to',to);
  console.log('from',from);
  console.log('next',next);
  if (to.meta.requiresAuth){ //進入的網址
    console.log('需要驗證');
    const api = `${process.env.APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) { //帳號登入成功時(true)
        next(); //登入狀態時
      }else{
        next({
          path:'/login'
        }); //不是登入狀態時，回到登入頁面，讓頁面自動跳回login
      }
    });
  }else{
    next(); 
  }
});

scrollNav();
function scrollNav() {
  window.onload = function () {
    let inner = document.querySelector('.inner');
    window.addEventListener('scroll', function () {
      if (window.scrollY === 0) {
        inner.style = `margin:2rem auto 0 auto;`;
      }
      else {
        inner.style = `margin:1rem auto 0 auto;`;
      }
    });
  };
}

