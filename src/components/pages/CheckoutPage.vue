<template>
  <div id="checkoutPage">
    <loading :active.sync="isLoading"></loading>
    <CheckSchedule/>
    <!-- <CheckProduct/> -->
    <!-- <swiper :options="swiperCheckOut">
      <swiper-slide class="swiper-no-swiping" :style="{height:getHeight+'px'}">
        <CheckProduct/>
      </swiper-slide>
      <swiper-slide class="swiper-no-swiping" :style="{height:getHeight+'px'}">
        <CheckInfo/>
      </swiper-slide>
      <swiper-slide class="swiper-no-swiping" :style="{height:getHeight+'px'}">
        <CheckOut/>
      </swiper-slide>
    </swiper> -->
    <CheckProduct/>
    <CheckInfo/>
  </div>
</template>

<script>
import CheckSchedule from "../user/CheckSchedule";
import CheckProduct from "../user/CheckProduct";
import CheckInfo from "../user/CheckInfo";
import CheckOut from "../user/CheckOut";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    CheckSchedule,
    CheckProduct,
    CheckInfo,
    CheckOut,
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
        }
      },
      getHeight:'',
    };
  },
  methods:{
  },
  created(){
    const vm = this;
    // window.onresize=function(){
    //   let checkoutPageHeight1 = document.querySelector('#checkoutPage').offsetHeight;
    //   console.log('移動1',checkoutPageHeight1);
    // }
  },
  mounted(){
    const vm = this;
    window.onresize=function(){
      let checkoutPageHeight = document.querySelector('#checkoutPage').offsetHeight;
      console.log('移動',checkoutPageHeight);
      return vm.getHeight = checkoutPageHeight;
    }
  },
};
</script>