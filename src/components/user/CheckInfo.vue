<template>
  <div>
    <CheckSchedule/>
    <div id="checkInfo">
      <form @submit.prevent="createOrder">
        <div class="main col-11 col-md-9">
          <h4 class="h4 py-4">訂購資料</h4>
          <div class="row">
            <div class="col-12 col-md-6">
              <label for="userName" class="py-3">收件人姓名</label>
              <input
                placeholder="姓名"
                type="text"
                id="userName"
                name="name"
                class="col form-control"
                :class="{'is-invalid':errors.has('name'),'inputBorder':!errors.has('name')}"
                v-model="form.user.name"
                v-validate="'required'"
              >
              <span class="text-danger mt-2 d-block" v-if="errors.has('name')">請輸入姓名</span>
            </div>
            <div class="col-12 col-md-6">
              <label for="userPhone" class="py-3">收件人手機</label>
              <input
                placeholder="號碼"
                type="number"
                onkeyup="value=value.replace(/[^\d]/g,'') "
                id="userPhone"
                name="tel"
                class="col form-control"
                :class="{'is-invalid':errors.has('tel'),'inputBorder':!errors.has('tel')}"
                v-model="form.user.tel"
                v-validate="'required|digits:10'"
              >
              <span class="text-danger mt-2 d-block" v-if="errors.has('tel')">請輸入手機10碼</span>
            </div>
          </div>
          <div>
            <label for="userEmail" class="py-3">聯絡信箱</label>
            <input
              placeholder="Email"
              type="email"
              id="userEmail"
              name="email"
              class="form-control"
              :class="{'is-invalid':errors.has('email'),'inputBorder':!errors.has('email')}"
              v-validate="'required|email'"
            >
            <span class="text-danger mt-2 d-block" v-if="errors.has('email')">請輸入正確格式Email</span>
          </div>
          <div>
            <label class="py-3">運送方式</label>
            <select class="form-control" id="ship" @change.prevent="shipValue">
              <option value="home">宅配到府</option>
              <option value="fm">全家門市取貨服務</option>
              <option value="711">7-11門市取貨服務</option>
            </select>
          </div>
          <div>
            <div v-if="form.user.ship==='home'">
              <label for="address" class="py-3">收件人地址</label>
              <input
                id="address"
                name="address"
                type="text"
                class="form-control"
                :class="{'is-invalid':errors.has('address'),'inputBorder':!errors.has('address')}"
                placeholder="請輸入收件人地址"
                v-validate="'required'"
                v-model="form.user.address"
              >
            </div>
            <div v-if="form.user.ship==='fm'">
              <label for="address" class="py-3">全家超商門市</label>
              <input
                id="address"
                name="address"
                type="text"
                class="form-control"
                :class="{'is-invalid':errors.has('address'),'inputBorder':!errors.has('address')}"
                placeholder="全家門市地址"
                v-validate="'required'"
                v-model="form.user.address"
              >
            </div>
            <div v-if="form.user.ship==='711'">
              <label for="address" class="py-3">711超商門市</label>
              <input
                id="address"
                name="address"
                type="text"
                class="form-control"
                :class="{'is-invalid':errors.has('address'),'inputBorder':!errors.has('address')}"
                placeholder="711門市地址"
                v-validate="'required'"
                v-model="form.user.address"
              >
            </div>
            <span class="text-danger mt-2 d-block" v-if="errors.has('address')">請輸入正確地址</span>
          </div>
        </div>
        <div class="main col-11 col-md-9">
          <div>
            <label class="py-3">付款方式</label>
            <select class="form-control" id="payMethod" @change.prevent="payMethodValue">
              <option value="delivery">貨到付款</option>
              <option value="credit">信用卡付款</option>
            </select>
          </div>
          <div v-if="form.user.payMethod === 'credit'">
            <div class="row align-items-center">
              <div class="col-12 col-lg-4">
                <div class="py-2">
                  <label for class="pb-2 col px-0">信用卡卡號:</label>
                  <input
                    type="text"
                    class="inputBorder col"
                    placeholder="請輸入十六位數值之信用卡卡號"
                    name=""
                    v-model="form.user.card.number"
                    @focus.prevent="isFlipped = true"
                  >
                </div>
                <div class="py-2">
                  <label for class="pb-2 col px-0">卡片到期日:</label>
                  <div class="row px-3">
                    <select class="form-control col mr-1" id="cardMonth" 
                    @change.prevent="cardMonth"
                    >
                      <option value="" selected disabled >月份</option>
                      <option value="01">一月</option>
                      <option value="02">二月</option>
                      <option value="03">三月</option>
                      <option value="04">四月</option>
                      <option value="05">五月</option>
                      <option value="06">六月</option>
                      <option value="07">七月</option>
                      <option value="08">八月</option>
                      <option value="09">九月</option>
                      <option value="10">十月</option>
                      <option value="11">十一月</option>
                      <option value="12">十二月</option>
                    </select>
                    <select class="form-control col" id="cardYear" 
                    @change.prevent="cardYear"
                    >
                      <option value="" selected disabled>年分</option>
                      <option :value="2018+item" v-for="(item,key) in 15" :key="key">{{2018+item}}</option>
                    </select>
                  </div>
                </div>
                <div class="py-2">
                  <label for class="pb-2 col px-0">卡片檢查碼:</label>
                  <input
                    type="text"
                    class="inputBorder col"
                    placeholder="卡片背面後三碼"
                    maxlength="3"
                    v-model="form.user.card.ccv"
                    @focus.prevent="isFlipped = false"
                  >
                </div>
              </div>
              <div class="col-12 col-lg">
                <div class="indexCard" :class="{'rotateBack':isFlipped === false}">
                  <div class="cardFront">
                    <div class="number">{{form.user.card.number}}</div>
                    <div class="date">{{form.user.card.date.month}}/{{form.user.card.date.year}}</div>
                    <img src="@/images/checkout/card_bg.png" alt="信用卡" class="pt-3">
                  </div>
                  <div class="cardBack">
                    <div class="ccv">{{form.user.card.ccv}}</div>
                    <img src="@/images/checkout/card_back_bg.png" alt="信用卡" class="pt-3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main col-11 col-md-9">
          <label for="comment" class="py-3">備註</label>
          <textarea class="col-12 mt-1" id="comment"></textarea>
        </div>
        <button class="CheckOut mb-4">
          前往結帳
          <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import CheckSchedule from "./CheckSchedule";

export default {
  components: {
    CheckSchedule
  },
  data() {
    return {
      isLoading: false,
      isFlipped: true,
      form: {
        //建立對應資料結購
        user: {
          name: "",
          tel: "",
          email: "",
          ship: "home",
          address: "",
          payMethod: "delivery",
          card: {
            number: "1234-5678-9012-3456",
            date:{
              month:'',
              year:'',
            },
            ccv: "556"
          },
          nowDate:"",
        },
        message: ""
      }
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth();
      let d = date.getDate();
      vm.form.user.nowDate = `${y}/${m+1}/${d}`;
      vm.isLoading = true;
      this.$validator.validate().then(result => {
        if (result) {
          //email格式正確時發送訂單
          this.$http.post(url, { data: order }).then(response => {
            console.log("訂單", response);
            if (response.data.success) {
              console.log("訂單確認建立 導頁至結帳畫面");
              vm.$router.push(`/confirm/${response.data.orderId}`);
            } else {
              alert(response.data.message);
            }
            vm.isLoading = false;
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          console.log("欄位不完整");
        }
      });
    },
    shipValue() {
      const vm = this;
      vm.form.user.ship = document.querySelector("#ship").value;
    },
    payMethodValue() {
      const vm = this;
      vm.form.user.payMethod = document.querySelector("#payMethod").value;
    },
    cardMonth(){
      const vm = this;
      vm.isFlipped = true;
      vm.form.user.card.date.month = document.querySelector("#cardMonth").value;
    },
    cardYear(){
      const vm = this;
      vm.isFlipped = true;
      vm.form.user.card.date.year = document.querySelector("#cardYear").value;
    },
  },
  created() {
  },
  mounted() {
    document.querySelector(".checkInfo").style = `border:3px solid #235a55`;
    document.querySelector(".checkInfo>i").style = `color:#235a55`;
    document.querySelector(".checkInfo>p").style = `color:#235a55`;
    document
      .querySelector(".checkSchedule>span")
      .classList.add("scheduleInfoAnimation");
  }
};
</script>

<style lang="scss" secoped>
@import "@/assets/helpers/breakpoint.scss";

#checkInfo {
  color: $color-green;
  #ship {
    color: $color-green;
  }
  .main {
    label,
    h4 {
      font-weight: bold;
    }
    background: #fff;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 2px $color-green;
    .inputBorder,
    select {
      border: 1px solid $color-green;
      border-radius: 5px;
      height: 35px;
    }
    textarea {
      border: 1px solid $color-green;
      border-radius: 5px;
      height: 160px;
      padding-top: 10px;
    }
  }
  .rotateBack {
    .cardFront {
      transform: rotateY(-180deg);
      backface-visibility: hidden;
    }
    .cardBack {
      transform: rotateY(0deg) !important;
      z-index: 1 !important;
      backface-visibility: hidden;
    }
  }
  .indexCard {
    position: relative;
    margin: 0 auto;
    max-width: 360px;
    overflow: hidden;
    height: 280px;
    @include mobile {
      max-width: 260px;
      height: 200px;
    }
    img {
      width: 360px;
      @include mobile {
        width: 260px;
      }
    }
    .number {
      position: absolute;
      margin: 0 auto;
      top: 150px;
      left: 60px;
      font-size: 20px;
      line-height: 25px;
      font-weight: bold;
      font-family: "微軟正黑體";
      color: #fff;
      @include mobile {
        top: 115px;
        left: 25px;
      }
    }
    .date {
      position: absolute;
      margin: 0 auto;
      top: 190px;
      left: 210px;
      font-size: 16px;
      line-height: 25px;
      font-weight: bold;
      font-family: "微軟正黑體";
      color: #fff;
      @include mobile {
        top: 140px;
        left: 145px;
      }
    }
    .ccv {
      position: absolute;
      margin: 0 auto;
      top: 122px;
      left: 240px;
      font-size: 20px;
      line-height: 25px;
      font-weight: bold;
      font-family: "微軟正黑體";
      color: #000;
      @include mobile {
        top: 88px;
        left: 160px;
      }
    }
    .cardFront {
      transition: 1s;
      position: absolute;
      z-index: 1;
      backface-visibility: hidden;
    }
    .cardBack {
      transition: 1s;
      transform: rotateY(-180deg);
      position: absolute;
      top: 0;
      z-index: -1;
      backface-visibility: hidden;
    }
  }
  .CheckOut {
    cursor: pointer;
    font-weight: bold;
    display: block;
    margin: 0 auto;
    position: relative;
    width: 20%;
    padding: 15px 0;
    border-radius: 1rem;
    background: $color-green;
    color: #fff;
    letter-spacing: 0.3rem;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    transition: 0.4s;
    i {
      transition: 0.4s;
    }
    @include mobile() {
      width: 40%;
    }
    @include pad() {
      width: 40%;
    }
  }
  @keyframes buttonStyle {
    0% {
      background: repeating-linear-gradient(
        45deg,
        #235a55 10%,
        #235a558c 0,
        #235a558c 20%,
        #235a55 0,
        #235a55 30%,
        #235a558c 0
      );
    }
    25% {
      background: repeating-linear-gradient(
        45deg,
        #235a55 20%,
        #235a558c 0,
        #235a558c 30%,
        #235a55 0,
        #235a55 40%,
        #235a558c 0
      );
    }
    50% {
      background: repeating-linear-gradient(
        45deg,
        #235a55 30%,
        #235a558c 0,
        #235a558c 40%,
        #235a55 0,
        #235a55 50%,
        #235a558c 0
      );
    }
    75% {
      background: repeating-linear-gradient(
        45deg,
        #235a55 40%,
        #235a558c 0,
        #235a558c 50%,
        #235a55 0,
        #235a55 60%,
        #235a558c 0
      );
    }
    100% {
      background: repeating-linear-gradient(
        45deg,
        #235a55 50%,
        #235a558c 0,
        #235a558c 60%,
        #235a55 0,
        #235a55 70%,
        #235a558c 0
      );
    }
  }
  .CheckOut:hover {
    i {
      transform: translateX(10px);
    }
  }
}
</style>
