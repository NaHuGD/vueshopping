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
}
</script>


<style lang="scss">
    @import '../../assets/css/user.scss';
</style>