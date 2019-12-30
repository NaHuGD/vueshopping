<template>
  <div id="home" class>
    <div class="banner">
      <img src="@/images/index/b.jpg" alt>
      <span @click.prevent="scrollDownFn">
        <i class="fas fa-angle-double-down"></i>
      </span>
    </div>
    <div class="event1">
      <h3>
        for the adventurous
        <br>at heart
      </h3>
      <div class="row m-0">
        <div class="col-12 col-sm-6 fadein right">
          <img src="@/images/index/e1.jpg" alt>
        </div>
        <div class="col-sm-5 text-left info ml-sm-4 fadein left">
          <p class="my-4">Lorem Title Where Do You</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio sed molestiae inventore! Tenetur aut earum blanditiis, explicabo autem quod quae voluptatum consectetur cumque ut delectus, facere quibusdam eos quasi unde corporis dolore ullam ratione perspiciatis odit dignissimos obcaecati quo. Praesentium quo voluptatum, qui reprehenderit velit incidunt numquam modi et.</p>
          <div class="my-4">
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
    <div class="event2 scroll"></div>
    <div class="event3 row">
      <div class="col-sm-1"></div>
      <div class="col fadein down">
        <img src="@/images/index/e3-1.jpg" alt>
      </div>
      <div class="col fadein up">
        <img src="@/images/index/e3-2.jpg" alt>
      </div>
      <div class="col fadein down">
        <img src="@/images/index/e3-3.jpg" alt>
      </div>
      <div class="col-sm-1"></div>
    </div>
    <div class="event4">
      <img src="@/images/index/e4.jpg" alt>
      <p class="fadein left">Let's GO</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scrollDownFn() {
      let bannerHeight = document.querySelector(".banner").offsetHeight;
      window.scrollTo({
        top: bannerHeight,
        behavior: "smooth"
      });
    },
    menuBg() {
      // document.querySelector("#header").style.background = "transparent";
    }
  },
  created() {
    const vm = this;
    vm.menuBg();
  },
  mounted() {}
};
</script>


<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

div[class*="event"] {
  overflow: hidden;
}

#home {
  margin: 0 auto;
  img {
    width: 100%;
  }
  .banner {
    position: relative;
    width: 100%;
    overflow: hidden;
    &::before {
      content:'';
      max-width:52vw;
      width: 100%;
      height:20vh;
      clip-path: polygon(0% 60%, 0 100%, 100% 100%);
      background:$color-bg;
      position:absolute;
      z-index: 1;
      bottom:0;
      left:0;
      display: block;
      @include pad(){
        height:12vh;
      }
      @include mobile(){
        height:10vh;
      }
    }
    &::after {
      content:'';
      max-width:52vw;
      width: 100%;
      height:20vh;
      clip-path: polygon(100% 60%, 0 100%, 100% 100%);
      background:$color-bg;
      position:absolute;
      z-index: 1;
      bottom:0;
      right:0;
      display: block;
      @include pad(){
        height:12vh;
      }
      @include mobile(){
        height:10vh;
      }
    }
    
    img {
      max-width: 100vw;
      width: 100%;
      max-height: 100vh;
      height: 100%;
    }
    & > span {
      cursor: pointer;
      position: absolute;
      bottom: 1%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      color: #fff;
      animation-name: floatIcon;
      animation-iteration-count: infinite;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 0.5);
    }
  }
  .event1 {
    text-align: center;
    margin-top:5vw;
    h3 {
      padding-bottom: 5vw;
      font-size: 2rem;
      @include pad() {
        font-size: 1.6rem;
      }
    }
    .row {
      align-items: center;
      div:nth-child(1) img {
        max-width: 400px;
      }
    }
    .info {
      & p:nth-child(1) {
        font-size: 1.5rem;
        @include mobile() {
          font-size: 1.3rem;
        }
      }
      & p:nth-child(2) {
        line-height: 1.5rem;
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        text-overflow: hidden;
        overflow: hidden;
        @include mobile() {
          font-size: 0.5rem;
          text-align: start;
          -webkit-line-clamp: 4;
        }
      }
      & div:nth-child(3) {
        @include mobile() {
          text-align: center;
        }
        & > button {
          background: #000;
          color: #fff;
          width: 100%;
          max-width: 200px;
          padding: 20px;
          text-align: center;
          display: inline-block;
          font-family: impact;
          letter-spacing: 0.1rem;
          @include mobile() {
            padding: 10px;
          }
        }
      }
    }
  }
  .event2 {
    height:100vh;
    width:100vw;
    max-width: 100%;
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
    background: $color-bg;
    overflow: hidden;
    @include mobile() {
      clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%);
      height: 200px;
    }
  }
  .scroll {
    background-attachment: fixed;
    background-image: url("../../images/index/e2.jpg");
    background-color: #e8d4ca;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0%;
  }
  .event3 {
    margin: 100px 0;
    align-items: center;
    @include mobile() {
      margin: 50px 0;
    }
    & > div:nth-child(2) {
      padding: 0;
      margin: 0 15px;
      overflow: hidden;
      img {
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
      @include mobile() {
      }
    }
    & > div:nth-child(3) {
      padding: 0;
      margin: 0;
      overflow: hidden;
      img {
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
      @include mobile() {

      }
    }
    & > div:nth-child(4) {
      padding: 0;
      margin: 0 20px;
      overflow: hidden;
      img {
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
      @include mobile() {
      }
    }
  }
  .event4 {
    margin: 0 auto;
    position: relative;
    clip-path: polygon(0% 30%, 100% 0, 100% 100%, 0 100%);
    img {
      width: 100%;
    }
    p {
      font-family: impact;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 60%;
      font-size: 5vw;
    }
  }
}
@keyframes floatIcon {
  0% {
    bottom: 2%;
  }
  25% {
    bottom: 1.5%;
  }
  50% {
    bottom: 1%;
  }
  75% {
    bottom: 1.5%;
  }
  100% {
    bottom: 2%;
  }
}
</style>
