<template>
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
              class="col"
              id="userName"
              name="name"
              :calss="{'is-invalid':errors.has('name')}"
              v-model="form.user.name"
              v-validate="'required'"
            >
            <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
          </div>
          <div class="col-12 col-md-6">
            <label for="userPhone" class="py-3">收件人手機</label>
            <input placeholder="號碼" type="number" class="col" id="userPhone"
            name="tel"
            v-model="form.user.tel"
            v-validate="'required|digits:10'"
            >
            <span class="text-danger" v-if="errors.has('tel')">請輸入手機10碼</span>
          </div>
        </div>
        <div>
          <label for="userEmail" class="py-3">聯絡信箱</label>
          <input placeholder="Email" type="text" class="col" id="userEmail" name="email"
          v-validate="'required|email'"
          >
          <span class="text-danger" v-if="errors.has('email')">請輸入正確格式Email</span>
        </div>
        <div>
          <label class="py-3">運送方式</label>
          <select name="" class="form-control">
              <option value="home">宅配到府</option>
              <option value="fm">全家門市取貨服務</option>
              <option value="711">7-11門市取貨服務</option>
          </select>
        </div>
      </div>
      <div class="main col-11 col-md-9">
        <label class="py-3">付款方式</label>
        <input type="text" class="col-12">
      </div>
      <div class="main col-11 col-md-9">
        <label for="comment" class="py-3">備註</label>
        <textarea class="col-12 mt-1" id="comment"></textarea>
      </div>
      <button class="CheckOut">
        前往結帳
        <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckInfo",
  data() {
    return {
      isLoading:false,
      form: {
        //建立對應資料結購
        user: {
          name: "",
          tel: "",
          email: "",
          address: ""
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
      vm.isLoading = true;
      this.$validator.validate().then(result => {
        if (result) {
          //email格式正確時發送訂單
          this.$http.post(url, { data: order }).then(response => {
            console.log("訂單", response);
            if (response.data.success) {
              console.log('訂單確認建立 導頁至結帳畫面');
              // vm.$router.push(`/customer_checkout/${response.data.orderId}`);
              vm.$router.push(`/confirm/${response.data.orderId}`);
            }
            vm.isLoading = false;
          });
        }else {
          window.scrollTo({
            top:0,
            behavior: "smooth" ,
          });
          console.log("欄位不完整");
        }
      });
    },
    // goCheckOut() {
    //   document.querySelector(".checkOut").style = `border:3px solid #7c8ec9;`;
    //   document.querySelector(".checkOut>i").style = `color:#7c8ec9;`;
    //   document.querySelector(".checkOut>p").style = `color:#7c8ec9;`;
    //   document.querySelector(".checkSchedule>span").style = `
    //   background:linear-gradient(90deg, #7c8ec9 100%, transparent 0%),
    //   linear-gradient(90deg, #cecece 100%, transparent 100%)
    //   `;
    //   window.scrollTo(0, 0);
    // },
  }
};
</script>

<style lang="scss" secoped>
@import "@/assets/helpers/breakpoint.scss";
#checkInfo {
  color: #7c8ec9;
  .main {
    label,
    h4 {
      font-weight: bold;
    }
    background: #fff;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 2px #7c8ec97e;
    input,select {
      background: transparent;
      border: 1px solid #7c8ec9;
      border-radius: 5px;
      height: 35px;
    }
    textarea {
      background: transparent;
      border: 1px solid #7c8ec9;
      border-radius: 5px;
      height: 160px;
      padding-top: 10px;
    }
  }
  .CheckOut {
    display: block;
    margin: 0 auto;
    position: relative;
    top: 110px;
    width: 40%;
    padding: 20px 0;
    border-radius: 6rem;
    background: linear-gradient(90deg, #aabaeb 0%, transparent 50%),
      linear-gradient(90deg, #7c8ec9 100%, transparent 100%);
    color: #fff;
    letter-spacing: 0.3rem;
    transition: 0.4s;
    i {
      transition: 0.4s;
    }
    @include mobile() {
      width: 90%;
    }
    @include pad() {
      width: 70%;
    }
  }
  .CheckOut:hover {
    opacity: 0.8;
    i {
      transform: translateX(10px);
    }
  }
}
</style>
