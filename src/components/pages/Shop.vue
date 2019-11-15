<template>
    <div id="shop">
        <loading :active.sync="isLoading"></loading>
        <div class="container">
        <div class="menu text-center mb-4">
            <div @click.prevent="getProducts">
                <span>全部</span>
                <span>All</span>
            </div>
            <div @click.prevent="categoryTop">
                <span>上身</span>
                <span>Top</span>
            </div>
            <div @click.prevent="categoryBottom">
                <span>下身</span>
                <span>Bottom</span>
            </div>
            <div @click.prevent="categoryFitting">
                <span>配件</span>
                <span>Fitting</span>
            </div>
        </div>
        <div class="subcate mb-3">商品頁</div>
            <div class="row">
                <div class="col-md-4 col-sm-6 mb-4" v-for="(item,key) in products" :key="key">
                    <div class="border-0 shadow-sm shop_info" @click="goInside(item.id)">
                        <img :src="item.imageUrl" :alt="item.title">
                        <div class="item_info">
                            <p class="pdname">{{item.title}}</p>
                            <p class="price">
                                <span class="old" v-if="item.origin_price != 0">NT.{{item.origin_price}}</span>
                                NT.{{item.price}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            isLoading:false,
            products:'',
            pagination:'',
            Top:[],
            Bottom:[],
            Fitting:[],
            isOpacity:true,
            category:'all',
        }
    },
    computed:{

    },
    methods:{
        getProducts(page = 1){ //取得api資料
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`
            console.log(process.env.APIPATH,process.env.CUSTOMPATH)
            vm.isLoading = true;//讀取資料時開起
            this.$http.get(api).then((response) => {
                vm.products = response.data.products;
                console.log(response);
                vm.isLoading = false;//完成後關閉loading功能
                // vm.pagination = response.data.pagination;
            }); 
        },
        getCategory(page = 1){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`
            vm.isLoading = true;//讀取資料時開起
            this.$http.get(api).then((response) => {
                response.data.products.forEach(function(item,index,array) {
                    if(item.category === '上衣'){
                        vm.Top.push(item);
                    }else if(item.category === '下身'){
                        vm.Bottom.push(item);
                    }else if(item.category === '配件'){
                        vm.Fitting.push(item);
                    }
                    vm.isLoading = false;
                });
            });
        },
        categoryTop(){
            const vm = this;
            vm.products = vm.Top;
        },
        categoryBottom(){
            const vm = this;
            vm.products = vm.Bottom;
        },
        categoryFitting(){
            const vm = this;
            vm.products = vm.Fitting
        },
        goInside(id){
            const vm = this;
            vm.$router.push(`/shop_inside/${id}`);
        },
    },
    
    created(){
        this.getProducts();
        this.getCategory();
    }
}
</script>
