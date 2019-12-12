<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <CheckSchedule/>
    <form @submit.prevent="paying">
      <div class="mx-auto mb-4 col-10 ">
        <div id="Confirm">
          <div class="row p-2 p-md-4">
            <span class="col-12 col-md-6 pb-2 pb-md-0">
              <p>訂購人:{{order.user.name}}</p>
            </span>
            <span class="col-12 col-md-6 text-md-right">
              <p>訂購日期:2019/08/78</p>
            </span>
          </div>
          <div class="product py-2">
            <div class="row text-center p-2">
              <p class="col text-secondary">項目</p>
              <p class="col text-secondary">數量</p>
              <p class="col text-secondary">單價</p>
            </div>
            <div class="row text-center p-2" v-for="(item,key) in order.products" :key="key">
              <p class="col">{{item.product.title}}</p>
              <p class="col">{{item.qty}}/件</p>
              <p class="col">{{item.product.price | currency}}</p>
            </div>
          </div>
          <div class="info py-2">
            <div class="row text-center p-2">
              <p class="col">收件人姓名 :</p>
              <p class="col">{{order.user.name}}</p>
            </div>
            <div class="row text-center p-2">
              <p class="col">收件人電話 :</p>
              <p class="col">{{order.user.tel}}</p>
            </div>
            <div class="row text-center p-2">
              <p class="col">收件人地址 :</p>
              <p class="col">{{order.user.addres}}</p>
            </div>
            <div class="row text-center p-2">
              <p class="col">收件人郵件 :</p>
              <p class="col">{{order.user.email}}</p>
            </div>
          </div>
          <div class="total py-2">
            <div class="row text-center p-2">
              <p class="col">總價</p>
              <p class="col">{{order.total | currency}}</p>
            </div>
            <div class="row text-center p-2">
              <p class="col">折扣金額</p>
              <p class="col">$320</p>
            </div>
            <div class="row text-center p-2">
              <p class="col">運費</p>
              <p class="col">$80</p>
            </div>
            <div class="row text-center p-2">
              <p class="col">小計</p>
              <p class="col">$320</p>
            </div>
          </div>
          <div class="pt-3">
            <p class="d-inline">訂單編號 :</p>
            <p class="d-inline px-2">{{orderId}}</p>
          </div>
          <div
            class="pt-2"
            :class="{'text-danger':order.is_paid===false,'text-success':order.is_paid===true}"
          >
            <p class="d-inline">付款狀態 :</p>
            <p class="d-inline px-2" v-if="order.is_paid===true">完成付款</p>
            <p class="d-inline px-2" v-else>尚未付款</p>
          </div>
          <button
            class="paying"
            :class="{'active':order.is_paid===false,'active':order.is_paid===true}"
          >
            <span class="box">
              <i class="fas fa-check" v-if="order.is_paid===true"></i>
              <i class="fas fa-times" v-else></i>
            </span>
            <p v-if="order.is_paid===true">結帳完成</p>
            <p v-else>點擊付款</p>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CheckSchedule from "../user/CheckSchedule";
export default {
  components: {
    CheckSchedule
  },
  data() {
    return {
      isLoading: false,
      payingCheck: true,
      order: {
        user: {}
      },
      orderId: "" //取得orderId
    };
  },
  methods: {
    getOrder() {
      //取得訂單資料
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${
        vm.orderId
      }`;
      console.log(url);
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        console.log("order", response);
        vm.order = response.data.order;
        vm.isLoading = false;
        vm.payingCheck = !vm.order.is_paid;
      });
    },
    paying() {
      const vm = this;
      if (vm.payingCheck) {
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${
          vm.orderId
        }`;
        console.log(url);
        vm.isLoading = true;
        this.$http.post(url).then(response => {
          console.log("pay", response);
          if (response.data.success) {
            //付款完成時
            vm.getOrder(); //重新取得訂單資料，
          }
        });
        document.querySelector(".paying").classList.add("active");
        vm.isLoading = false;
        vm.payingCheck = false;
      }
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  mounted(){
    document.querySelector(".checkOut").style = `border:3px solid #7c8ec9;`;
    document.querySelector(".checkOut>i").style = `color:#7c8ec9;`;
    document.querySelector(".checkOut>p").style = `color:#7c8ec9;`;
    document.querySelector(".checkInfo").style = `border:3px solid #7c8ec9;`;
    document.querySelector(".checkInfo>i").style = `color:#7c8ec9;`;
    document.querySelector(".checkInfo>p").style = `color:#7c8ec9;`;
    document.querySelector(".checkSchedule>span").style = `
    background:linear-gradient(90deg, #7c8ec9 100%, transparent 0%),
    linear-gradient(90deg, #cecece 100%, transparent 100%)
    `;
  }
};
</script>

<style lang="scss" secoped>
@import "@/assets/helpers/breakpoint.scss";

// .checkSchedule {
//   & > span {
//     background: linear-gradient(90deg, #7c8ec9 100%, transparent 0%),
//       linear-gradient(90deg, #cecece 100%, transparent 100%) !important;
//   }
//   .checkInfo {
//     border: 3px solid #7c8ec9 !important;
//     & > i {
//       color: #7c8ec9 !important;
//     }
//     & > p {
//       color: #7c8ec9 !important;
//     }
//   }
//   .checkOut {
//     border: 3px solid #7c8ec9 !important;
//     & > i {
//       color: #7c8ec9 !important;
//     }
//     & > p {
//       color: #7c8ec9 !important;
//     }
//   }
// }
#Confirm {
  background: #fff;
  padding: 15px;
  border-radius: 8px 8px 0 0;
  .product,
  .info,
  .total {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .product {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
  .paying {
    &:focus {
      outline: none;
    }
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-20%, -50%);
    width: 150px;
    height: 40px;
    background: #16111f;
    color: #fff;
    border-radius: 30rem;
    padding: 10px;
    @include mobile() {
      position: static;
      transform: translate(0%, 0%);
      display: block;
      margin: 1rem auto 0 auto;
    }
    .box {
      transition: 2s;
      background: #69666f;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0%, -50%);
      height: 30px;
      width: 30px;
      margin-left: 3px;
      border-radius: 20px;
      z-index: 2;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    p {
      transition: 2s;
      position: absolute;
      transform: translatey(-50%);
      top: 50%;
      left: 40%;
      z-index: 1;
    }
    &.active {
      background: green;
      .box {
        transform: translate(0%, -50%) rotate(2turn);
        background: #fff;
        position: absolute;
        left: calc(100% - 36px);
        i {
          color: #150f24;
        }
      }
      p {
        left: 20%;
      }
    }
  }
}
</style>
