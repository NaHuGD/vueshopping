<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <header id="header">
      <div class="inner">
        <router-link to="/home" class="logo" alt="首頁">
          <h1>Kai ZBB</h1>
        </router-link>
        <nav id="nav">
          <button
            @click.prevent="goShop"
            :class="{'menuActive':isMenuActive === '商品列表',menuActiveFn}"
          >商品列表</button>
          <button
            @click.prevent="goDiscount"
            :class="{'menuActive':isMenuActive === '優惠專區',menuActiveFn}"
          >優惠專區</button>
          <button
            @click.prevent="goNews"
            :class="{'menuActive':isMenuActive === '最新消息',menuActiveFn}"
          >最新消息</button>
        </nav>
        <button class="mobNavIcan" @click.prevent="isMobNav = !isMobNav">
          <span class="fa fa-bars"></span>
        </button>
      </div>
    </header>
    <div :class="{'zindex':!bagToggle}">
      <div :class="{'bagBg':bagToggle === false}" @click.prevent="bagToggle = true"></div>
      <a class="headerBag" @click.prevent="bagToggle = !bagToggle">
        <i :class="{'iconActive':!bagToggle}" class="fas fa-shopping-cart"></i>
        <span>{{ CartNumber }}</span>
      </a>
      <div id="headerBagInfo" :class="{'bagActive':bagToggle}">
        <div class="bagBgActive"></div>
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
          <button class="d-block" @click.prevent="goCheckProduct">BEGIN CHECKOUT</button>
        </div>
      </div>
    </div>
    <div :class="{'zindex':isSearch}">
      <label for="inSearch" @click="isSearch = !isSearch" class="headerSearch">
        <i :class="{'iconActive':isSearch}" class="fas fa-search"></i>
      </label>
      <div id="search" v-if="isSearch">
        <input
          id="inSearch"
          type="text"
          placeholder="一鍵搜尋所有商品"
          v-model="id"
          @keyup.enter="goProducts"
        >
        <button @click.prevent="goProducts">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div :class="{'bgActive':isSearch,}" @click.prevent="isSearch = !isSearch"></div>
    </div>
    <div :class="{'navMobBg':isMobNav,}" @click.prevent="mobNavFn"></div>
    <nav id="navMob" :class="{'active':isMobNav}">
      <div class="logo">
        <span>KizZ BB</span>
        <span></span>
      </div>
      <div class="menuButton">
        <button
          @click.prevent="goShop"
          :class="{'menuActive':isMenuActive === '商品列表',menuActiveFn}"
        >商品列表</button>
        <button
          @click.prevent="goDiscount"
          :class="{'menuActive':isMenuActive === '優惠專區',menuActiveFn}"
        >優惠專區</button>
        <button
          @click.prevent="goNews"
          :class="{'menuActive':isMenuActive === '最新消息',menuActiveFn}"
        >最新消息</button>
        <router-link to="/login" tag="button">會員登入</router-link>
        <button>其他</button>
      </div>
      <button class="close" @click.prevent="mobNavFn">
        <i class="fas fa-times"></i>
      </button>
      <div id="footer">
        <button>About</button>
        <button>Event</button>
        <button>FAQs</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "UserNavbar",
  data() {
    return {
      isLoading: false,
      isMobNav: false,
      bagToggle: true,
      isAnimateOut: false,
      isCheckOut: false,
      isSearch: false,
      isMenuActive: "",
      isMenuActiveMob: "",
      CartNumber: "",
      CartItem: {},
      id: ""
    };
  },
  methods: {
    goShop() {
      const vm = this;
      vm.$router.push({
        path: `/shop/all`
      });
      // vm.isMenuActive = "商品列表";
      vm.isMobNav = false;
    },
    goDiscount() {
      const vm = this;
      vm.$router.push({
        path: `/Discount`
      });
      // vm.isMenuActive = "優惠專區";
      vm.isMobNav = false;
    },
    goNews() {
      const vm = this;
      vm.$router.push({
        path: `/News`
      });
      // vm.isMenuActive = "最新消息";
      vm.isMobNav = false;
    },
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
    mobNavFn() {
      const vm = this;
      vm.isMobNav = false;
    },
    goProducts() {
      //搜尋商品頁
      const vm = this;
      vm.$bus.$emit("searchId:push", vm.id);
      vm.$router.push({
        path: `/search/${vm.id}`
      });
      vm.isSearch = false;
    },
    goCheckProduct() {
      const vm = this;
      vm.bagToggle = true;
      vm.$router.push({
        path: `/checkProduct`
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    menuActiveFn() {
      const vm = this;
      let routeName = vm.$route.name;
      if (
        routeName === "All" ||
        routeName === "Protective" ||
        routeName === "Whey" ||
        routeName === "ShopSearch" ||
        routeName === "ShopInside"
      ) {
        return (vm.isMenuActive = "商品列表");
      } else if (routeName === "Discount") {
        return (vm.isMenuActive = "優惠專區");
      } else if (routeName === "News") {
        return (vm.isMenuActive = "最新消息");
      } else {
        return (vm.isMenuActive = "");
      }
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
  }
};
</script>

<style lang="scss">
@import "@/assets/helpers/breakpoint.scss";

#header {
  position: fixed;
  background: $color-lightYellow;
  width: 100%;
  max-width: 100%;
  max-height: 60px;
  padding: 1.6rem 0;
  z-index: 2;
  .inner {
    transition: 1s;
    // border-bottom: 2px solid rgba(0, 0, 0, 0.7);
    max-width: 90%;
    position: relative;
    margin: 0 auto;
    display: flex;
    .logo {
      display: block;
      font-weight: bold;
      font-size: 2em;
      line-height: 10px;
      h1 {
        color: $color-green;
        font-family: impact;
      }
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
      right: 50%;
      transform: translateX(50%);
      line-height: 10px;
      @include pad() {
        right: 0%;
      }
      button:hover {
        border-bottom: 2px solid $color-green;
      }
      .menuActive {
        border-bottom: 2px solid $color-green;
      }
      button {
        padding-bottom: 5px;
        transition: 0.5s;
        color: $color-green;
        font-weight: 500;
        margin: 0 0.75rem;
        @include fontStyle;
        @include a-text;
        @include focusNone;
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
    }
    .mobNavIcan {
      color: $color-green;
      @include a-text;
      display: none;
      @include pad() {
        cursor: pointer;
        font-size: 1.5rem;
        display: inline-block;
        position: absolute;
        top: 0;
        transform: translateY(-25%);
      }
    }
  }
}
.zindex {
  .headerBag {
    z-index: 511;
  }
  #headerBagInfo {
    z-index: 511;
  }
}
.iconActive {
  font-size: 1.5rem;
}
.bagBg {
  position: fixed;
  transition: 1s;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 510;
}
.headerBag {
  cursor: pointer;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: transparent;
  font-size: 1.3rem;
  margin-right: 5%;
  @include iphoneX {
    width: 30px;
  }
  &:hover i {
    font-size: 1.5rem;
  }
  & i {
    transition: 0.5s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-green;
  }
  & span {
    font-size: 0.8rem;
    line-height: 1.1rem;
    color: #fff;
    font-weight: bold;
    transform: translateX(-50%);
    background: $color-red;
    border-radius: 999%;
    width: 18px;
    height: 18px;
    text-align: center;
    position: absolute;
    top: calc(50% - 0px);
    left: calc(50% + 9px);
    transform: translate(-50%, -50%);
  }
}
.bagActive {
  display: none;
}
#headerBagInfo {
  position: fixed;
  top: 6%;
  right: 5%;
  background: #fff;
  border: 2px solid $color-green;
  border-radius: 6px;
  overflow-y: auto;
  max-height: 450px;
  padding: 15px 1rem 10px 1rem;
  @include mobile() {
    top: 7%;
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
      background: $color-green;
      color: #fff;
      padding: 0.6rem 3.2rem;
      margin: 0;
      border-radius: 6px;
      width: 100%;
      @include mobile() {
        letter-spacing: 1px;
        font-size: 0.5rem;
      }
    }
  }
}
.zindex {
  .headerSearch {
    z-index: 511;
  }
  #search {
    z-index: 511;
  }
}
.headerSearch {
  cursor: pointer;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 60px;
  width: 60px;
  height: 60px;
  background: transparent;
  color: $color-green;
  font-size: 1.3rem;
  margin-right: calc(5% + 0px);
  &:hover i {
    font-size: 1.5rem;
  }
  & > i {
    transition: 0.5s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include focusNone;
  @include iphoneX {
    width: 30px;
    margin-right: 0;
  }
}
#search {
  white-space: nowrap;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  input {
    position: relative;
    border: 2px solid #000;
    border-radius: 18px;
    height: 35px;
    padding-left: 20px;
    background: rgba(255, 255, 255, 0.4);
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
#navMob {
  &.active {
    transform: translateX(0%);
  }
  display: none;
  transform: translateX(-100%);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  transition: 1s;
  height: 100vh;
  background: $color-lightYellow;
  padding: 0.5em 1.25em;
  z-index: 2;
  & > .logo {
    position: relative;
    margin-top: 15px;
    opacity: 0.6;
    & span:nth-child(1) {
      position: relative;
      z-index: 1;
      top: 0%;
      left: 5%;
      color: #235a55;
      background: $color-lightYellow;
      font-family: impact;
      display: inline-block;
      font-weight: bold;
      font-size: 1.2rem;
    }
    & span:nth-child(2) {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background: transparent;
      border: 4px solid $color-red;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 0;
      transform: translate(10%, -50%);
    }
  }
  .menuButton {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
  }
  .menuActive {
    color: $color-red !important;
  }
  .menuButton > button {
    color: $color-green;
    display: block;
    padding: 0.75em 0;
    width: 100%;
    text-align: left;
    font-size: 1.4rem;
    font-weight: bold;
    @include focusNone;
  }
  .close {
    color: $color-green;
    position: absolute;
    top: 0%;
    right: 0;
    padding: 15px;
    @include focusNone;
  }
  @include pad() {
    display: block;
    min-width: 60%;
  }
  @include mobile() {
    min-width: 80%;
  }
  #footer {
    color: $color-lightYellow;
    position: absolute;
    bottom: 10px;
    left: 0%;
    & > button {
      width: 100%;
      color: $color-green;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0.5rem 1.25rem;
      text-align: left;
      @include focusNone;
    }
  }
}
.navMobBg {
  display: none;
  @include pad() {
    display: block;
    position: fixed;
    transition: 1s;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
