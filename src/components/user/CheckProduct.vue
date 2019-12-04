<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div id="checkProduct" v-if="CartItem.carts != ''" class="main row col-10 col-sm-10 col-md-10">
      <div class="col-lg-8" >
        <table class="bagTitle">
          <tr class="row">
            <th>品名</th>
            <th>尺寸</th>
            <th>數量</th>
            <th>單價</th>
            <th>刪除</th>
          </tr>
        </table>
        <table
          class="bagInfo"
          :class="{'sale':couponSuccess}"
          v-for="(item,key) in CartItem.carts"
          :key="key"
        >
          <tr class="row">
            <td class="col-sm-2 col-3 w-100 pr-0">
              <img class="col-12 p-0" :src="item.product.imageUrl" :alt="item.product.title">
              <p class="col-12 p-0">{{item.product.title}}</p>
            </td>
            <td class="col-sm col-2 text-center">L</td>
            <td class="col-sm col-2 text-center">{{item.qty}}</td>
            <td class="col-sm col-3 text-center">{{item.product.price | currency}}</td>
            <td class="col-sm col-2 text-center" @click.prevent="cartItemDelete(item)">
              <button>
                <i class="fas fa-times"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="priceInfo col-lg-4 pl-4 pt-4 pr-4">
        <table class="title">
          <thead>
            <th class="pb-5">Summary</th>
          </thead>
        </table>
        <table class="w-100">
          <tr>
            <th class="pb-4">小計</th>
            <td class="text-right">{{CartItem.total | currency}}</td>
          </tr>
          <tr v-if="couponSuccess" class="text-success">
            <th class="pb-4">折扣價</th>
            <td class="text-right">{{CartItem.final_total | currency}}</td>
          </tr>
          <tr>
            <th class="pb-4">運費</th>
            <td class="text-right">$80</td>
          </tr>
        </table>
        <table class="table">
          <tr class="pt-4">
            <th class="pl-0">總計</th>
            <td class="text-right pr-0">{{CartItem.final_total + 80 | currency}}</td>
          </tr>
        </table>
        <button class="goCheckOut" @click.prevent="goCheckOut">下一步</button>
        <div class="coupons">
          <div class="barcode mt-md-4 mt-2">
            <img src="@/images/checkout/barcode.jpg" alt="條碼" ondragstart="return false;">
          </div>
          <div class="row pl-2 pr-2 couponsInfo" v-if="couponSuccess == false">
            <input
              type="text"
              class="col-9"
              placeholder="輸入折扣碼"
              @keyup.enter="addCoupons()"
              v-model="coupon_code"
            >
            <button class="applyCoupons col-3" @click.prevent="addCoupons()">
              <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <p class="couponCode text-center px-5" v-if="couponSuccess == true">{{coupon_code}}</p>
          <span>
            <p v-if="couponSuccess == true" class="text-success text-center pt-2">已套用優惠券!</p>
            <p
              v-if="couponMessage == '找不到優惠券!' | couponMessage == '優惠券無法使用'"
              class="text-danger text-center pt-2"
            >優惠券輸入錯誤</p>
          </span>
        </div>
      </div>
    </div>
    <div class="main pb-2 col-10" v-else>
      <p class="text-center h5">
      您的購物車目前是空的!!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckProduct",
  data() {
    return {
      isLoading: false,
      CartItem: {},
      coupon_code: "",
      couponSuccess: "",
      couponMessage: ""
    };
  },
  methods: {
    getCart() {
      //取得購物車內容
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        console.log("取得購物車資料", response);
        vm.$bus.$emit("cartitem:push", response.data.data);
        vm.isLoading = false;
      });
    },
    getCartItem(item) {
      const vm = this;
      vm.CartItem = item;
    },
    cartItemDelete(item) {
      const vm = this;
      vm.isLoading = true;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${
        item.id
      }`;
      this.$http.delete(url).then(response => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCoupons() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        console.log("優惠卷套用", response.data);
        console.log(response);
        vm.couponSuccess = response.data.success;
        vm.couponMessage = response.data.message;
        vm.getCart();
        vm.isLoading = false;
      });
    },
    goCheckOut() {
      const vm = this;
      window.scrollTo({
        top: 0
      });
      document.querySelector(".checkInfo").style = `border:3px solid #7c8ec9;`;
      document.querySelector(".checkInfo>i").style = `color:#7c8ec9;`;
      document.querySelector(".checkInfo>p").style = `color:#7c8ec9;`;
      document.querySelector(".checkSchedule>span").style = `
      background:linear-gradient(90deg, #7c8ec9 50%, transparent 0%),
      linear-gradient(90deg, #cecece 100%, transparent 100%)
      `;
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on("cartitem:push", function(item) {
      console.log("抓取購物車資訊", item);
      vm.getCartItem(item);
    });
    this.getCart();
  },
};
</script>
