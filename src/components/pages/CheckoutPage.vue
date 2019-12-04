<template>
  <div id="checkoutPage">
    <loading :active.sync="isLoading"></loading>
    <CheckSchedule/>
    <!-- <CheckProduct/> -->
    <swiper :options="swiperCheckOut">
      <swiper-slide class="swiper-no-swiping">
        <CheckProduct/>
      </swiper-slide>
      <swiper-slide class="swiper-no-swiping">
        <CheckInfo/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import CheckSchedule from "../user/CheckSchedule";
import CheckProduct from "../user/CheckProduct";
import CheckInfo from "../user/CheckInfo";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    CheckSchedule,
    CheckProduct,
    CheckInfo,
  },
  data() {
    return {
      isLoading: false,
      swiperCheckOut: {
        allowTouchMove:false,//禁止手機滑動(只能使用涵式滑動)
        simulateTouch: false,//禁止pc滑動
        navigation: {
          nextEl: ".goCheckOut"
          // prevEl: ".swiper-button-prev",
        },
        observer:true,
        observerParents:true,
        height:'',
      },
    };
  },
  methods:{
  },
  created(){
    const vm = this;
    window.onresize=function(){
      let checkoutPageHeight = document.querySelector('#checkoutPage').offsetHeight;
      console.log('移動1',checkoutPageHeight);
      vm.swiperCheckOut.height = checkoutPageHeight;
    }
  },
  mounted(){
    // const vm = this;
    // window.onresize=function(){
    //   let checkoutPageHeight = document.querySelector('#checkoutPage').offsetHeight;
    //   console.log('移動',checkoutPageHeight);
    //   // return vm.getHeight = checkoutPageHeight;
    //   vm.swiperCheckOut.height = checkoutPageHeight;
    // }
  },
};
</script>