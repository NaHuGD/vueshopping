<template>
  <div id="discount" class="pt150">
    <div class="container">
      <div class="mb-3">優惠專區</div>
      <div class="row">
        <router-view></router-view>
        <div class="box boxOrange col-8" @click.prevent="goTurn">
          <div>
            <P>GIFT</P>
          </div>
          <div>
            <span>COUPON</span>
            <p calss="d-inline">VOUCHER</p>
            <span>+0123 456 789</span>
          </div>
          <div>
            <p>TurnGame</p>
          </div>
          <div>
            <span></span>
            <p>POINT ME TO REDEEM</p>
          </div>
        </div>
        <div class="box boxBlue col-8">
          <div>
            <P>GIFT</P>
          </div>
          <div>
            <span>COUPON</span>
            <p calss="d-inline">VOUCHER</p>
            <span>+0123 456 789</span>
          </div>
          <div>
            <p>$???%</p>
          </div>
          <div>
            <span></span>
            <p>POINT ME TO REDEEM</p>
          </div>
        </div>
        <div class="box boxPurple col-8">
          <div>
            <P>GIFT</P>
          </div>
          <div>
            <span>COUPON</span>
            <p calss="d-inline">VOUCHER</p>
            <span>+0123 456 789</span>
          </div>
          <div>
            <p>$???%</p>
          </div>
          <div>
            <span></span>
            <p>POINT ME TO REDEEM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goTurn(){
      const vm = this;
      vm.$router.push({
        path: `/discount/turn`
      });
    }
  }
}
</script>


<style lang="scss" second>
@import "@/assets/helpers/breakpoint.scss";
@mixin fontBold {
  font-family: impact;
}

#discount {
  .boxOrange {
    background: linear-gradient(
      45deg,
      #d23d1f 25%,
      #e44621 0,
      #e44621 50%,
      #d23d1f 0,
      #d23d1f 75%,
      #e44621 0
    );
    & > div:nth-child(1) {
      background: #47211e;
      & > p {
        color: #e03f28;
      }
    }
    & > div:nth-child(2) {
      & > span:nth-child(1) {
        color: #fff;
      }
      & > p {
        color: #fff;
      }
      & > span:nth-child(3) {
        color: #fff;
        background: #511d08;
      }
    }
    & > div:nth-child(3) {
      background: #e03f28;
      border: 0.2rem solid #fff;
      & > p {
        color: #fff;
      }
    }
    & > div:nth-child(4) {
      background: #ef9a85;
      & > span {
        border-left: 1px solid #ca6b4d;
      }
      & > p {
        color: #e03f28;
        color: #fff;
      }
    }
  }
  .boxBlue {
    background: linear-gradient(
      45deg,
      #3191c3 25%,
      #5cb8e9 0,
      #5cb8e9 50%,
      #3191c3 0,
      #3191c3 75%,
      #5cb8e9 0
    );
    & > div:nth-child(1) {
      background: #1e3944;
      & > p {
        color: #5cb8e9;
      }
    }
    & > div:nth-child(2) {
      & > span:nth-child(1) {
        color: #fff;
      }
      & > p {
        color: #fff;
      }
      & > span:nth-child(3) {
        color: #fff;
        background: #273d4d;
      }
    }
    & > div:nth-child(3) {
      background: #5cb8e9;
      border: 0.2rem solid #fff;
      & > p {
        color: #fff;
      }
    }
    & > div:nth-child(4) {
      background: #92c6eb;
      & > span {
        border-left: 1px solid #7fbde1;
      }
      & > p {
        color: #5cb8e9;
        color: #fff;
      }
    }
  }
  .boxPurple {
    background: linear-gradient(
      45deg,
      #463a5d 25%,
      #8c6c86 0,
      #8c6c86 50%,
      #463a5d 0,
      #463a5d 75%,
      #8c6c86 0
    );
    & > div:nth-child(1) {
      background: #171c43;
      & > p {
        color: #8c6c86;
      }
    }
    & > div:nth-child(2) {
      & > span:nth-child(1) {
        color: #fff;
      }
      & > p {
        color: #fff;
      }
      & > span:nth-child(3) {
        color: #fff;
        background: #273d4d;
      }
    }
    & > div:nth-child(3) {
      background: #8c6c86;
      border: 0.2rem solid #fff;
      & > p {
        color: #fff;
      }
    }
    & > div:nth-child(4) {
      background: #9c7c8e;
      & > span {
        border-left: 1px solid #8c7484;
      }
      & > p {
        color: #8c6c86;
        color: #fff;
      }
    }
  }
  .box:hover{
    // filter:grayscale(0%);
  }
  .box {
    cursor:pointer;
    transition:.5s;
    // filter:grayscale(100%);
    position: relative;
    padding: 0;
    margin: 1rem auto;
    width: 100%;
    height: 200px;
    background-size: 20px 20px;
    overflow: hidden;
    @include pad() {
      height: 150px;
    }
    @include mobile() {
      height: 100px;
    }
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      right: -2vw;
      transform: skew(45deg);
      width: 4vw;
      height: 4vw;
      background: $color-bg;
      box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.4);
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: -2vw;
      transform: skew(45deg);
      width: 4vw;
      height: 4vw;
      background: $color-bg;
      box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.4);
    }
    & > div:nth-child(1) {
      position: absolute;
      left: 5%;
      width: 10%;
      height: 100%;
      & > p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: rotate(270deg)
          translate(calc(50% - 1.5vw), calc(-50% - 1.5vw));
        font-weight: bold;
        font-size: 3vw;
      }
    }
    & > div:nth-child(2) {
      & > span:nth-child(1) {
        position: absolute;
        top: 25%;
        left: 20%;
        font-weight: bold;
        border-radius: 1vw;
        letter-spacing: 0.5vw;
      }
      & > p {
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translate(0%, -50%);
        font-weight: bold;
        font-size: 5vw;
        @include fontBold;
      }
      & > span:nth-child(3) {
        position: absolute;
        top: 67%;
        left: 40%;
        font-weight: bold;
        padding: 0.5vw;
        font-size: 1vw;
        border-radius: 1vw;
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 30%;
      transform: translate(50%, -50%);
      width: 11.5vw;
      height: 11.5vw;
      border-radius: 100%;
      & > p {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        font-weight: bold;
        font-size: 2vw;
        width: 7vw;
        text-align: center;
        @include fontBold;
      }
    }
    & > div:nth-child(4) {
      position: absolute;
      right: 0;
      width: 33%;
      height: 100%;
      clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
      & > span {
        position: absolute;
        right: 0;
        width: 30%;
        height: 100%;
      }
      & > p {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: rotate(270deg) translate(0%, calc(50% + 1.5vw));
        font-weight: bold;
        font-size: 1vw;
        white-space: nowrap;
        @include fontBold;
      }
    }
  }
}
</style>

