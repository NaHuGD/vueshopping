<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <header id="header">
      <div class="inner">
        <router-link to="/home" class="logo" alt="首頁">
          <h1>Kai ZBB</h1>
        </router-link>
        <nav id="nav">
          <router-link to="/shop/all">商品列表</router-link>
          <router-link to="/Discount">優惠專區</router-link>
          <router-link to="/home">形像專欄</router-link>
          <button @click="isSearch = !isSearch" class="headerSearch">
            <i class="fas fa-search"></i>
          </button>
          <a class="headerBag" @click.prevent="bagToggle = !bagToggle">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ CartNumber }}</span>
          </a>
            <div id="headerBagInfo" :class="{'bagActive':bagToggle}">
              <div class="text-center mb-3" v-if="CartItem.carts == ''">您的購物車是空的</div>
              <div class="bagItem" v-for="(item,key) in CartItem.carts" :key="key">
                <div>
                  <img :src="item.product.imageUrl" width="50">
                  <div>
                    <div class="cartItemDelete" @click.prevent="cartItemDelete(item)">
                      <i class="fas fa-times"></i>
                    </div>
                    <p>{{item.product.title}}</p>
                    <span class="d-block pt-4">
                      <p>x{{item.qty}}</p>
                      <p>{{item.product.price | currency }}/件</p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="bagPrice">
                <div>
                  <p class="d-inline-block">NTD.</p>
                  <p class="d-inline-block">{{CartItem.total | currency }}</p>
                </div>
                <router-link tag="button" to="/checkProduct" class="d-block">BEGIN CHECKOUT</router-link>
              </div>
            </div>
        </nav>
        <button class="mobNavIcan" @click.prevent="mobNav = !mobNav">
          <span class="fa fa-bars"></span>
        </button>
      </div>
    </header>
    <nav id="navMob" :class="{'active':mobNav}">
      <router-link to="/shop/all">商品列表</router-link>
      <router-link to="/Discount">優惠專區</router-link>
      <router-link to="/Login">形像專欄</router-link>
      <button class="close" @click.prevent="mobNav = false">
        <i class="fas fa-times"></i>
      </button>
    </nav>
    <div id="search" v-if="isSearch">
      <input type="text" placeholder="一鍵搜尋所有商品" v-model="id" @keyup.enter="goProducts">
      <button @click.prevent="goProducts">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div :class="{'bgActive':isSearch}" @click.prevent="isSearch = !isSearch">
      <h2 class="title">KaiZBB健人首選</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNavbar",
  data() {
    return {
      isLoading: false,
      mobNav: false,
      bagToggle: true,
      isAnimateOut: false,
      isCheckOut: false,
      isSearch: false,
      CartNumber: "",
      CartItem: {},
      id: ""
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
        vm.$bus.$emit("cartnum:push", response.data.data.carts.length);
        vm.$bus.$emit("cartitem:push", response.data.data);
        vm.isLoading = false;
      });
    },
    getCartNum(num) {
      const vm = this;
      vm.CartNumber = num;
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
    goProducts() {  //搜尋商品頁
      const vm = this;
      vm.$bus.$emit('searchId:push',vm.id);
      vm.$router.push({
        path: `/search/${vm.id}`
      });
      vm.isSearch = false;
    }
  },
  created() {
    const vm = this;
    vm.$bus.$on("cartnum:push", function(num) {
      console.log("抓取購物車總長", num);
      vm.getCartNum(num);
    });
    vm.$bus.$on("cartitem:push", function(item) {
      console.log("抓取購物車資訊", item);
      vm.getCartItem(item);
    });
    vm.$bus.$on("bagToggle:push", function(item) {
      //新增後顯示購物車
      vm.bagToggle = item;
    });
    this.getCart();
  },
  beforeDestroy() {
    this.goProducts();
  }
};
</script>

<style lang="scss">
@import "@/assets/helpers/breakpoint.scss";

#header {
  background: #4b4b65;
  width: 100%;
  max-width: 100%;
  position: fixed;
  z-index: 510;
  .inner {
    transition: 1s;
    // border-bottom: 2px solid rgba(0, 0, 0, 0.7);
    max-width: 90%;
    position: relative;
    margin: 2rem auto 0 auto;
    padding-bottom: 2rem;
    .logo {
      display: inline-block;
      font-weight: 600;
      font-size: 2em;
      line-height: 10px;
      @include a-text;
      @include pad() {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      }
      @include iphone5() {
        font-size: 1.5em;
      }
    }
    #nav {
      position: absolute;
      top: 0;
      right: 0;
      a:hover,
      button:hover {
        transition: 0.5s;
        opacity: 0.5;
      }
      a,
      button {
        padding: 0 0.75em;
        @include a-text;
        &[class^="header"] {
          font-size: 1.4em;
          @include pad() {
            font-size: 1.2em;
          }
          @include iphone5() {
            font-size: 1em;
          }
        }
        @include mobile() {
          padding: 0 0.2em;
        }
        &:nth-child(-n + 3) {
          @include pad() {
            display: none;
          }
        }
      }
      .headerBag span {
        font-size: 0.8rem !important;
        line-height: 1.1rem;
        color: #fff;
        font-weight: bold;
        font-size: 0.8em;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        background: $color-red;
        border-radius: 999%;
        width: 18px;
        height: 18px;
        text-align: center;
      }
      .bagActive {
        display: none;
      }
      #headerBagInfo {
        position: absolute;
        top: 180%;
        right: 0;
        background: #fff;
        border: 2px solid #000;
        border-radius: 6px;
        overflow-y: auto;
        max-height: 450px;
        padding: 15px 1rem 10px 1rem;
        @include mobile() {
          right: -10%;
        }
        &::before {
          content: "";
          width: 0;
          position: absolute;
          border-bottom: 20px solid #fff;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          top: 1%;
          transform: translateY(-100%);
          right: 5%;
          @include mobile() {
            right: 0%;
          }
        }
        .animateOut {
          transform: translateX(-100px);
          opacity: 0;
        }
        .bagItem {
          padding: 5px;
          margin-bottom: 5%;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.4);
          transition: 2s ease;
          .cartItemDelete {
            cursor: pointer;
            position: absolute;
            right: 0;
          }
          & > div:nth-child(1) {
            display: flex;
            & > div {
              position: relative;
              padding-left: 5%;
              width: 170px;
              & > p {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              span {
                p:nth-child(1) {
                  float: left;
                }
                p:nth-child(2) {
                  float: right;
                }
              }
            }
          }
        }
        .bagPrice {
          div {
            border-top: 1px solid rgba(0, 0, 0, 0.2);
            padding: 1rem 0 0.5rem 0;
            p:nth-child(2) {
              float: right;
              font-weight: bold;
            }
          }
          button {
            white-space: nowrap;
            background: $color-navyBlue;
            color: #fff;
            padding: 0.6rem 3.2rem;
            border-radius: 6px;
            width: 100%;
            @include mobile() {
              letter-spacing: 1px;
              font-size: 0.5rem;
            }
          }
        }
      }
    }
    .mobNavIcan {
      @include a-text;
      display: none;
      @include pad() {
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 21px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-25%);
      }
    }
  }
}
#search {
  white-space: nowrap;
  position: fixed;
  z-index: 510;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  input {
    position: relative;
    border: 2px solid #000;
    border-radius: 18px;
    height: 35px;
    padding-left: 20px;
    background: rgba(255,255,255,0.4);;
    color: #000;
    &::placeholder {
      color: #000;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    &:focus {
      outline: none;
    }
  }
}
</style>
