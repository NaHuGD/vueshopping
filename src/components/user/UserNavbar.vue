<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <header id="header">
      <div class="inner">
        <router-link to="/home" class="logo" alt="首頁">
          <h1>Kai ZBB</h1>
        </router-link>
        <nav id="nav">
          <router-link to="/shop">商品列表</router-link>
          <router-link to="/Discount">優惠專區</router-link>
          <router-link to="/home">形像專欄</router-link>
          <router-link to="/Login" class="headerMember">
            <i class="fas fa-user-cog"></i>
          </router-link>
          <a class="headerBag" @click.prevent="bagToggle = !bagToggle">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ CartNumber }}</span>
          </a>
          <div>
            <div id="headerBagInfo" :class="{'bagActive':bagToggle}">
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
                <router-link tag="button" to="/checkout_page" class="d-block">BEGIN CHECKOUT</router-link>
              </div>
            </div>
          </div>
        </nav>
        <button class="mobNavIcan" @click.prevent="mobNav = !mobNav">
          <span class="fa fa-bars"></span>
        </button>
      </div>
    </header>
    <nav id="navMob" :class="{'active':mobNav}">
      <router-link to="/shop">商品列表</router-link>
      <router-link to="/Discount">優惠專區</router-link>
      <router-link to="/Login">形像專欄</router-link>
      <button class="close" @click.prevent="mobNav = false">
        <i class="fas fa-times"></i>
      </button>
    </nav>
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
      CartNumber: "",
      CartItem: {},
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
        console.log("deleteid", item.id);
        console.log("deleteitem", item);
        vm.isLoading = false;
      });
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
    vm.$bus.$on("bagToggle:push", function(item) { //新增後顯示購物車
      vm.bagToggle = item;
      setTimeout(() => {
          vm.bagToggle = !vm.bagToggle;
      },2000);
    });
    this.getCart();
  }
};
</script>

