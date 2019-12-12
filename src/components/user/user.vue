<template>
    <div>
        <!-- Header -->
        <UserNavbar/>
        <main>
            <router-view></router-view>
        </main>
        <UserFooter/>
    </div>
</template>
<script>
import UserNavbar from './UserNavbar'
import UserFooter from './UserFooter'
export default {
    components:{
        UserNavbar,
        UserFooter,
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