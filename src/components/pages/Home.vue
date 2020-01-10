<template>
  <div id="home" class>
    <div id="banner">
      <img src="@/images/index/banner.jpg" alt>
    </div>
    <div class="row event01">
      <div class="box1 col-12 col-md-6 p-0">
        <p>EVENT1</p>
      </div>
      <div class="box2 col-12 col-md-6 p-0">
        <div class="row m-0">
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt>
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt>
        </div>
        <div class="row m-0">
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt>
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt>
        </div>
      </div>
    </div>
    <div class="row event02 m-0">
      <div class="box1 col-12 col-md-6 p-0">
        <img class="p-0" src="@/images/index/e2.jpg" alt>
      </div>
      <div class="box2 col-12 col-md-6">
        <p>EVENT2</p>
      </div>
    </div>
    <div class="row event03 p-0 m-0">
      <div class="scroll col-12 p-0">
        <div class="col-12 col-md-6 info fadein right">
          <p class="h3">KAIZ KAIZ KAIZ</p>
          <p class="py-4 py-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p class="py-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam, enim minus consequatur vero nisi.met consectetur adipisicing elit. Nulla nam, enim minus consequatur vero nisi.met consectetur adipisicing elit. Nulla nam, enim minus consequatur vero nisi.</p>
          <span></span>
        </div>
      </div>
    </div>
    <div class="event04">
      <p align="center" class="h3 py-4">LATEST ARTICLES</p>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide class="box">Slide 1</swiper-slide>
        <swiper-slide class="box">Slide 2</swiper-slide>
        <swiper-slide class="box">Slide 3</swiper-slide>
        <swiper-slide class="box">Slide 4</swiper-slide>
        <swiper-slide class="box">Slide 5</swiper-slide>
        <swiper-slide class="box">Slide 6</swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      screenWidth: document.documentElement.clientWidth, //螢幕寬度
      swiperOption: {
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
    };
  },
  watch: {
    screenWidth(val) {
      //監聽螢幕寬度變化
      const vm = this;
      let oIframe = document.querySelector('.event04');
      oIframe.style.width = Number(val); //'120'是頁面佈局調整，可去除
    },
  },
  mounted() {
    const vm = this;
    window.onresize = function() {
      // 定義視窗大小變更通知事件
      vm.screenWidth = document.documentElement.clientWidth; //視窗寬度
      console.log(vm.screenWidth);
      if(vm.screenWidth < 768){
        vm.swiperOption.slidesPerView=1;
      }else{
        vm.swiperOption.slidesPerView=3;
      }
    };
    
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

#home {
  img {
    vertical-align: bottom;
  }
  #banner {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .event01 {
    width: 100%;
    vertical-align: top;
    padding: 0;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
    }
    .box1 {
      width: 100%;
      height: 100%;
      @include md {
        // height:750px;
      }
    }
    .box2 {
    }
  }
  .event02 {
    .box1 {
      width: 100%;
      height: 100%;
      @include md() {
        order: 2;
      }
      img {
        width: 100%;
      }
    }
    .box2 {
      @include md() {
        order: 1;
      }
    }
  }
  .event03 {
    width: 100%;
    height: 700px;
    max-height: 100%;
    @include desktop {
      height: 500px;
    }
    @include md {
      height: 1000px;
    }
    @include mobile {
      height: 700px;
    }
    @include iphoneX {
      height: 640px;
    }
    .scroll {
      background-attachment: fixed;
      background-image: url("../../images/index/e3.jpg");
      background-color: #929c9a;
      background-size: cover;
      background-repeat: no-repeat;
      @include md {
        background-position: 20% 50%;
      }
      .info{
        order: 1;
        width: 100%;
        height: 100%;
        padding: 0;
        background:rgba(0,0,0,.7);
        color:white;
        text-align: center;
        padding:100px;
        overflow: hidden;
        @include pad(){
          height: 50%;
          padding:20px;
        }
        &>p:nth-child(3){
          line-height:2rem; 
          text-align:justify;
        }
      }
    }
  }
  .event04 {
    padding-bottom: 100px;
    & > p {
      font-family: impact;
      letter-spacing: 0.2rem;
      &::after {
        content: "";
        margin-top: 20px;
        display: block;
        width: 10%;
        height: 3px;
        background: #000;
        @include pad() {
          width: 20%;
        }
      }
    }
    .swiper {
      margin: 0 50px;
      @include mobile(){
        margin: 0 10px;
      }
    }
    .swiper-button-prev, .swiper-button-next{
      @include mobile(){
        background-size: 15px 25px;
      }
    }
    .box {
      height: 200px;
      background: #fff;
    }
  }
}
</style>
