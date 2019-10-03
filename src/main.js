// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);// 必須要在 Vue 設定的進入點(main.js)內使用，外部插件要使用的話都需要用Vue.use

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