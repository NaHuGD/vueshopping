<template>
    <div>
        <!-- Header -->
        <UserNavbar/>
        <main>
            <router-view></router-view>
        </main>
        <UserGotop/>
        <UserFooter/>
    </div>
</template>
<script>
import UserNavbar from './UserNavbar'
import UserGotop from './UserGotop'
import UserFooter from './UserFooter'
export default {
    components:{
        UserNavbar,
        UserGotop,
        UserFooter,
    },
    data(){
        return{

        }
    },
}
</script>


<style lang="scss">
    @import '../../assets/css/user.scss';
</style>