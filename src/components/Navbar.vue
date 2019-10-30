<template>
    <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">後台首頁</a>
        <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
            <a class="nav-link" href="#" @click.prevent="signout">登出</a>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    methods:{
        signout(){
            const vm = this;
            const url = `${process.env.APIPATH}/logout`;    //登出api
            this.$http.post(url).then((response) => {
                console.log('logout',response.data);
                if(response.data.success){ //確認登出時
                    vm.$router.push('/login'); //導致登入頁面
                }
            })
        }
    }
}
</script>



