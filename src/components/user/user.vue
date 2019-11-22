<template>
    <div>
        <!-- Header -->
        <UserNavbar/>
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
    data(){
        return{
            mobNav:false,
            bagToggle:true,
        }
    },
    methods:{
        // getCart(){//取得購物車內容
        //     const vm = this;
        //     const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        //     vm.isLoading = true;
        //     this.$http.get(url).then((response) => {
        //         console.log('取得購物車資料',response);
        //         vm.cart = response.data.data;
        //         vm.$bus.$emit("cartnum:push", response.data.data.carts.length);
        //         vm.$bus.$emit("cartitem:push", response.data.data.carts);
        //         vm.isLoading = false;
        //     })
        // },
    },
    created(){
        // this.getCart();
    }
}
</script>


<style lang="scss">
    @import '../../assets/css/user.scss';
</style>