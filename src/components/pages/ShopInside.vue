<template>
  <div id="shopInside" class="pt150">
    <loading :active.sync="isLoading"></loading>
    <div>
      <div>
        <ul class="navColumn">
          <router-link tag="li" to="/shop" class="title pointer">商品列表</router-link>
          <li @click="back" class="title pointer">{{product.category}}</li>
          <li class="title">{{product.title}}</li>
        </ul>
      </div>
      <div class="row mb-5 mt-4 align-items-center">
        <div class="col-md-6">
          <img :src="product.imageUrl" :alt="product.title">
          <span class="like">
            <i class="fas fa-heart text-danger" v-if="getIfLocalData(product)"></i>
            <i class="far fa-heart" v-else></i>
          </span>
        </div>
        <div class="shopInside_info col-md-6 col-xl-4">
          <div>
            <h2 class="h2 mb-3 mt-xl-0">{{product.title}}</h2>
            <!-- <div class="mb-3">商品存貨:</div> -->
            <span>購買數量:</span>
            <div class="row">
              <div class="addSize mt-2 col-6">
                <select
                  :class="{'redBorder':isSize}"
                  class="form-control"
                  id="tasteValue"
                  @change.prevent="tasteValue"
                  v-if="product.category !== '護具'"
                >
                  <option value selected disabled>口味</option>
                  <option value="草莓">草莓</option>
                  <option value="巧克力">巧克力</option>
                  <option value="香草">香草</option>
                </select>
                <select
                  :class="{'redBorder':isSize}"
                  class="form-control"
                  id="protectiveValue"
                  @change.prevent="protectiveValue"
                  v-else
                >
                  <option value selected disabled>尺寸</option>
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                </select>
              </div>
              <div class="addNumber mt-2 col-6">
                <select name class="form-control" v-model="num">
                  <option :value="num" v-for="num in 10" :key="num.id">{{num}}</option>
                </select>
              </div>
            </div>
            <p class="h3 pt-2 pb-2 mb-4">NT.{{product.price}}</p>
          </div>
          <div class="text-danger text-center" v-if="product.in_stock === 0">商品已售完</div>
          <div class="addShop text-center" v-else>
            <button class="col-6 col-md-5" @click.prevent="addtoCart(product.id,num)">加入購物車</button>
            <button class="col-5" @click.prevent="buyNow(product.id)">直接購買</button>
          </div>
          <h6 class="h5 mt-4">商品描述:</h6>
          <ul class="ml-2">
            <li class="productWrite mb-3">{{product.description}}</li>
          </ul>
          <h6 class="h5 mb-3">商品資訊:</h6>
          <ul class="ml-2">
            <li class="mb-3">實品顏色依照片為主</li>
            <li class="mb-3">厚薄:適中</li>
            <li class="mb-3">彈性:佳</li>
            <li class="mb-3">素材產地 / 中國</li>
            <li class="mb-3">加工產地 / 中國</li>
          </ul>
        </div>
      </div>
      <div class="aboutLike">
        <h2 class="h2 mb-3 text-center">
          <span>MORE LOOK</span>
        </h2>
        <div class="info row">
          <div class="col-6 col-lg-3 mt-4" v-for="(item,key) in moreLook" :key="key">
            <div @click.prevent="goPath(item.id)">
              <img :src="item.imageUrl" alt>
              <p class="text-left py-2">{{item.title}}</p>
              <p class="text-left">NT.{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isSize: false,
      itemId: "",
      products: "", //全部商品
      product: "", //單筆商品
      moreLook: [],
      num: "1",
      size: "null",
      likeData: []
    };
  },
  methods: {
    getProduct(id) {
      //取得指定商品資料
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        let newArray = response.data.products.filter(function(
          item,
          index,
          arr
        ) {
          if (item.id != id) {
            return item;
          }
        });
        vm.products = newArray;
        for (let i = 0; i < 4; i++) {
          let num = Math.floor(Math.random() * vm.products.length);
          console.log(i, num);
          vm.moreLook.push(vm.products[num]);
          vm.products.splice(num, 1);
        }
      });
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${id}`;
      this.$http.get(api).then(response => {
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    goPath(id) {
      console.log(id);
      const vm = this;
      vm.$router.push({ path: `/shop_inside/${id}` });
      location.reload();
    },
    back(e) {
      const vm = this;
      if (vm.product.category === "護具") {
        vm.$router.push({ path: `/shop/protective` });
      } else if (vm.product.category === "乳清") {
        vm.$router.push({ path: `/shop/whey` });
      }
    },
    tasteValue() {
      const vm = this;
      vm.size = document.querySelector("#tasteValue").value;
      vm.isSize = false;
      console.log("tasteValue", vm.size);
    },
    protectiveValue() {
      const vm = this;
      vm.size = document.querySelector("#protectiveValue").value;
      vm.isSize = false;
      console.log("protectiveValue", vm.size);
    },
    addtoCart(id) {
      //qty加入的數量
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      const cart = {
        product_id: id,
        qty: vm.num,
        size: vm.size
      };
      if (vm.size === "null") {
        alert("請選擇尺寸/口味");
        vm.isSize = true;
        vm.isLoading = false;
        return;
      } else {
        this.$http.post(url, { data: cart }).then(response => {
          console.log("加入購物車", response.data);
          vm.getCart();
          vm.$bus.$emit("bagToggle:push", false);
          vm.isLoading = false;
        });
      }
    },
    buyNow(id) {
      console.log(id);
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty: vm.num,
        size: vm.size
      };
      if (vm.size === "null") {
        alert("請選擇尺寸/口味");
        vm.isSize = true;
        vm.isLoading = false;
        return;
      } else {
        this.$http.post(url, { data: cart }).then(response => {
          console.log(response.data);
          vm.getCart();
        });
        this.$router.push("/checkProduct");
      }
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
    getLocalData() {
      const vm = this;
      vm.likeData = JSON.parse(localStorage.getItem("likeData")) || [];
    },
    getIfLocalData(item) {
      const vm = this;
      return vm.likeData.some(function(ele) {
        return item.id === ele.id;
      });
    }
  },
  created() {
    this.itemId = this.$route.params.itemId;
    this.getProduct(this.itemId); //將指定商品id帶入
    this.getCart();
    this.getLocalData();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";
/*shopInside*/
#shopInside {
  max-width: 80%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
  .navColumn {
    max-width: 100%;
    display: flex;
    .title::after {
      content: "/";
      font-family: cursive;
      margin: 0 0.5rem;
    }
    .title:last-child::after {
      content: "";
    }
  }
  .like {
    position: absolute;
    top: 3%;
    right: 3%;
    padding-right: 15px;
    & > i {
      font-size: 1.5rem;
    }
  }
  .shopInside_info {
    div:nth-child(1) {
      p {
        color: red;
        font-weight: bold;
        text-align: right;
        border-bottom: 1px solid black;
      }
    }
    div:nth-child(2) {
      :hover {
        opacity: 0.75;
      }
      button {
        background: #666;
        color: #fff;
        padding: 1rem;
        border-radius: 8px;
      }
    }
    .productWrite {
      line-height: 1.5rem;
      letter-spacing: 0.1rem;
      text-align: justify;
    }
  }
  .aboutLike {
    h2 {
      position: relative;
      span {
        position: absolute;
        background: $color-bg;
        padding: 0 0.5rem;
        transform: translate(-50%, -50%);
      }
    }
    .info {
      padding: 3rem 0;
      border-top: 1px solid black;
      cursor: pointer;
    }
  }
}
.redBorder {
  border: 1px solid $color-red;
}
</style>
