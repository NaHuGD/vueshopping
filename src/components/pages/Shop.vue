<template>
  <div id="shop" class="pt150">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="menuBar row mx-0 mb-4 p-0">
        <div class="box1 p-0" @click.prevent="getAll()" :class="{'active':isMenuActive === '全部商品'}">
          <img src="@/images/shop/01.png" alt ondragstart="return false;">
          <p class>全部商品</p>
        </div>
        <div
          class="box2 p-0"
          @click.prevent="getProtective()"
          :class="{'active':isMenuActive === '健身護具'}"
        >
          <img src="@/images/shop/02.png" alt ondragstart="return false;">
          <p class>健身護具</p>
        </div>
        <div
          class="box3 p-0"
          @click.prevent="getWhey()"
          :class="{'active':isMenuActive === '優質乳清'}"
        >
          <img src="@/images/shop/03.png" alt ondragstart="return false;">
          <p class>優質乳清</p>
        </div>
      </div>
      <div class="subcate mb-3">{{isMenuActive}}</div>
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3 mb-4" v-for="(item,key) in filteredProducts" :key="key" :class="{'soldOutStyle':item.is_enabled === 0}">
          <div class="border-0 shadow-sm shop_info" @click="goInside(item.id)">
            <span class="sale_style" v-if="item.origin_price != 0">SALE</span>
            <img :src="item.imageUrl" :alt="item.title">
          </div>
          <div class="item_info" @click="goInside(item.id)">
            <p class="pdname">{{item.title}}</p>
            <p class="price">
              <span :class="{'saleFont':item.origin_price != 0}">{{item.price | currency}}</span>
              <span class="old" v-if="item.origin_price != 0">{{item.origin_price | currency}}</span>
            </p>
          </div>
          <div class="soldOut" v-if="item.is_enabled === 0">
            <p>SOLD OUT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      isMenuActive: "全部商品",
      searchId: ""
    };
  },
  methods: {
    getProducts(page = 1) {
      //取得api資料
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/products/all`;
      vm.isLoading = true; //讀取資料時開起
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false; //完成後關閉loading功能
      });
    },
    getAll() {
      const vm = this;
      vm.$router.push(`/shop/all`);
    },
    getProtective() {
      const vm = this;
      vm.$router.push(`/shop/protective`);
    },
    getWhey() {
      const vm = this;
      vm.$router.push(`/shop/whey`);
    },
    goInside(id) {
      const vm = this;
      vm.$router.push(`/shop_inside/${id}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    filteredProducts() {
      const vm = this;
      const routeName = vm.$route.name;
      console.log("route", vm.$route.name);
      let filtered = "";
      //判斷網頁顯示內容//
      if (routeName === "All") {
        vm.isMenuActive = "全部商品";
        return vm.products;
      } else if (routeName === "Protective") {
        vm.isMenuActive = "健身護具";
        filtered = this.products.filter(function(item) {
          return item.category === "護具";
        });
        return filtered;
      } else if (routeName === "Whey") {
        vm.isMenuActive = "優質乳清";
        filtered = this.products.filter(function(item) {
          return item.category === "乳清";
        });
        return filtered;
      } else {
        filtered = this.products.filter(function(item) {
          return item.title.includes(vm.searchId);
        });
        vm.isMenuActive = `查詢有關"${vm.searchId}"的結果`;
        return filtered;
        console.log("搜尋", vm.searchId);
      }
    }
  },
  created() {
    this.searchId = this.$route.params.id;
    const vm = this;
    vm.getProducts();
    vm.$bus.$on("searchId:push", value => {
      this.searchId = value;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

/*shop*/
#shop {
  // .menu{
  //     div{
  //         @include mobile(){
  //             font-size:.6em;
  //             max-width:30px;
  //         }
  //         margin:.5rem;
  //         font-weight:bold;
  //         color:#000;
  //         text-decoration:none;
  //         display:inline-block;
  //         border-bottom: 2px solid #808080;
  //         border-width:.1rem;
  //         height: 30px;
  //         overflow: hidden;
  //         span{
  //             display:block;
  //             display: block;
  //             transition: all 0.5s ease;
  //             line-height:30px;
  //         }
  //     }
  //     div:hover :nth-child(1){
  //         margin-top: -30px;
  //     }
  //     :hover{
  //         opacity:0.7;
  //     }
  // }
  .menuBar {
    .active {
      img {
        filter: grayscale(0%);
      }
      p {
        opacity: 1;
      }
    }
    cursor: pointer;
    position: relative;
    flex-wrap: nowrap;
    & > div {
      img {
        transition: 0.6s;
        filter: grayscale(100%);
      }
      p {
        transition: 0.6s;
        opacity: 0;
      }
    }
    .box1 {
      position: relative;
      img {
        max-width: 434px;
        width: 125%;
      }
      p {
        position: absolute;
        top: 50%;
        left: calc(50% - 0px);
        transform: translate(0%, -50%);
        letter-spacing: 5px;
        color: #fff;
        font-weight: bold;
        @include mobile() {
          left: 20%;
          width: 90px;
          transform: translate(0%, -50%);
        }
        @include iphone5{
          left: 10%;
        }
      }
    }
    .box2 {
      position: relative;
      transform: translateX(-11.5%);
      img {
        max-width: 496px;
        width: 125%;
      }
      p {
        position: absolute;
        top: 50%;
        left: calc(50% - 0px);
        transform: translate(0%, -50%);
        letter-spacing: 5px;
        color: #fff;
        font-weight: bold;
        @include mobile() {
          left:30%;
          width: 90px;
        }
      }
    }
    .box3 {
      position: relative;
      transform: translateX(-23%);
      img {
        max-width: 434px;
        width: 125%;
      }
      p {
        position: absolute;
        top: 50%;
        left: calc(50% - 5px);
        transform: translate(50%, -50%);
        letter-spacing: 5px;
        color: #fff;
        font-weight: bold;
        @include mobile() {
          left:35%;
          width: 90px;
          transform: translate(0%, -50%);
        }
      }
    }
    & > div:hover {
      img {
        filter: grayscale(0%);
      }
      p {
        opacity: 1;
      }
    }
  }
  .shop_info {
    @include fontStyle;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      vertical-align: bottom;
      transition: 0.6s;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  .activeOpacity {
    opacity: 0.5;
  }
  .sale_style {
    position: absolute;
    z-index: 1;
    right: 5px;
    top: 5px;
    transform: rotate(40deg);
    background: $color-red;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
  .item_info {
    cursor: pointer;
    .pdname {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
      padding: 0.8rem 0;
      font-weight: bold;
    }
    .price {
      .saleFont {
        color: $color-red;
        font-weight: bold;
      }
      .old {
        letter-spacing: 0;
        color: #666;
        margin-left: 0.5rem;
        font-size: 0.8rem;
        text-decoration: line-through;
      }
    }
  }
  .soldOut {
    display: flex;
    position: absolute;
    z-index: 1;
    top: -2%;
    left: 0%;
    width: 100%;
    height: 102%;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
      font-weight: bold;
      text-align: center;
      padding: 15px;
      border:2px solid #fff;
    }
  }
  .soldOutStyle{
    filter: grayscale(.8);
  }
}
</style>
