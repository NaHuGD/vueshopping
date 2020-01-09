<template>
  <div class="pt150">
    <div class="text-center my-3">
      <p class="h3">歡樂大轉盤</p>
      <p>活動辦法:點擊下方圖片轉動唱盤,獲取折扣碼</p>
    </div>
    <div id="turn">
      <img
        class="turnBg"
        src="@/images/discount/turn/turnBg.png"
        ondragstart="return false;"
        @click.prevent="playTurn"
      >
      <img class="turnTable" src="@/images/discount/turn/turnTable.png" ondragstart="return false;">
    </div>
    <div :class="{'rewardAlert':isAlertBg,'d-none':isAlertBg === false}">
      <div class="alertBg" @click.prevent="isAlertBg = false"></div>
      <div class="alertInfo">
        <span class="text-success"><i class="far fa-laugh-squint"></i></span>
        <p class="text-center">Save up to</p>
        <p class="text-center">{{price}}</p>
        <p class="text-center pt-2">優惠代碼: kaizbb90</p>
        <router-link tag="button" to="/shop/all" class="d-block">馬上購物去</router-link>
        <button class="d-block" @click.prevent="playAgain">再玩一次</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: true,
      isNum: "",
      isAlertBg: false,
      price: ""
    };
  },
  methods: {
    playTurn() {
      const vm = this;
      let turnTable = document.querySelector(".turnTable");
      let num = Math.floor(Math.random() * 360);
      vm.isNum = num + 360;
      console.log(num + 360);
      if (vm.isPlay === true) {
        turnTable.style.transform = `rotate(${vm.isNum}deg)`;
        turnTable.style.transition = `5s`;
        if (
          (vm.isNum >= 344 && vm.isNum <= 377) ||
          (vm.isNum >= 703 && vm.isNum <= 720)
        ) {
          console.log("200");
          vm.price = "70%";
        } else if (
          (vm.isNum >= 378 && vm.isNum <= 489) ||
          (vm.isNum >= 738 && vm.isNum <= 849)
        ) {
          console.log("20");
          vm.price = "80%";
        } else if (
          (vm.isNum >= 490 && vm.isNum <= 567) ||
          (vm.isNum >= 850 && vm.isNum <= 927)
        ) {
          console.log("100");
          vm.price = "85%";
        } else if (
          (vm.isNum >= 568 && vm.isNum <= 635) ||
          (vm.isNum >= 928 && vm.isNum <= 995)
        ) {
          console.log("80");
          vm.price = "90%";
        } else {
          console.log("50");
          vm.price = "95%";
        }
        setTimeout(() => {
          vm.isAlertBg = true;
        }, 5000);
      }
      vm.isPlay = false;
    },
    playAgain(){
      const vm = this;
      let turnTable = document.querySelector(".turnTable");
      vm.isPlay = true;
      turnTable.style.transform = `rotate(0deg)`;
      turnTable.style.transition = `0s`;
      vm.isAlertBg = false;
    },
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

#turn {
  position: relative;
  max-width: 1107px;
  width: 100%;
  margin: 0 auto;
  .turnBg {
    width: 100%;
    height: 100%;
    position: sticky;
    z-index: 1;
    cursor: pointer;
  }
}
.turnTable {
  transform-origin: center;
  position: absolute;
  z-index: 0;
  top: 17%;
  left: 37.5%;
  width: 43%;
  transform: rotate(0deg);
}
.rewardAlert{
  .alertBg {
    position: fixed;
    z-index: 510;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $color-bgActive;
  }
  .alertInfo {
    position: fixed;
    z-index: 510;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 360px;
    max-height: 380px;
    background: #fff;
    border-radius: 20px;
    font-weight: bold;
    & > span:nth-child(1) {
      padding:30px;
      font-size:5rem;
      text-align: center;
      display: block;
    }
    & > p:nth-child(2) {
    }
    & > p:nth-child(3) {
      color: $color-red;
      font-size: 4rem;
      padding: 5px 0;
      font-family: impact;
    }
    & > button:nth-child(5) {
      margin: 20px auto 0 auto;
      padding: 10px 0;
      border-radius: 15px;
      width: 90%;
      background: $color-red;
    }
    & > button:nth-child(6) {
      margin: 20px auto 0 auto;
      padding: 10px 0;
      border-radius: 15px;
      width: 90%;
      background: $color-gray;
    }
  }
}
</style>
