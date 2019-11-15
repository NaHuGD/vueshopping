<template>
    <div>
        <!-- Header -->
        <UserNavbar/>
        <!-- <header id="header">
            <div class="inner">
                <router-link to="/home" class="logo" alt="首頁"><h1>Kai ZBB</h1></router-link>
                <nav id="nav">
                    <router-link to="/shop">商品列表</router-link>
                    <router-link to="/Discount">優惠專區</router-link>
                    <router-link to="/home">形像專欄</router-link>
                    <router-link to="/Login" class="headerMember">
                            <i class="fas fa-user-cog"></i>
                    </router-link>
                    <a class="headerBag"
                    @click.prevent="bagToggle = !bagToggle">
                            <i class="fas fa-shopping-cart"></i>
                            <span :v-text="cartitem"></span>
                    </a>
                    <div>
                    <div id="headerBagInfo"
                    :class="{'bagActive':bagToggle}">
                        <div class="bagItem" v-for="(item,key) in cart.carts" :key="key">
                            <div>
                                <img :src="item.product.imageUrl" width="50">
                                <div>
                                    <div class="cartItemDelete">
                                        <i class="fas fa-times"></i>
                                    </div>
                                    <p>{{item.product.title}}</p>
                                    <span class="d-block pt-4">
                                        <p>x{{item.qty}}</p>
                                        <p>${{item.product.price}}</p>
                                    </span>
                                </div>
                            </div>
                        </div> 
                        <div class="bagPrice">
                            <div>
                                <p class="d-inline-block">NTD.</p>
                                <p class="d-inline-block">${{cart.total}}</p>
                            </div>
                            <button class="d-block">BEGIN CHECKOUT</button>
                        </div> 
                    </div>
                    </div>
                </nav>
                <button class="mobNavIcan" @click.prevent="mobNav = !mobNav">
                    <span class="fa fa-bars "></span>
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
        </nav> -->
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import UserNavbar from './UserNavbar'
export default {
    components:{
        UserNavbar,
    },
    // props:[`cartLength`],
    // data(){
    //     return{
    //         mobNav:false,
    //         bagToggle:true,
    //         cart:{},
    //     }
    // },
    // methods:{
    //     getCart(){//取得購物車內容
    //         const vm = this;
    //         const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
    //         vm.isLoading = true;
    //         this.$http.get(url).then((response) => {
    //             vm.cart = response.data.data;
    //             console.log('取得購物車資料',response.data.data);
    //             vm.isLoading = false;
    //         })
    //     },
    //     addtoCart(id){//qty加入的數量
    //         const vm = this;
    //         const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
    //         vm.isLoading = true;
    //         const cart ={
    //             product_id:id,
    //             qty:vm.num,
    //         }
    //         this.$http.post(url,{data:cart}).then((response) => {
    //             console.log(response.data);
    //             vm.getCart();
    //             vm.isLoading = false;
    //         });
    //     },
    // },
    // created(){
    //     this.getCart();
    // }
}
</script>


<style lang="scss">
    @import '../../assets/css/user.scss';
</style>