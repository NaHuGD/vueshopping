<template>
    <div>
        <Navbar/>
        <Alert/>
        <div>
            <div class="row m-0">
                <Sidebar></Sidebar>
                <main class="col-12">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Alert from './AlertMessage'
export default {
    components:{
        Sidebar,
        Navbar,
        Alert,
    }
}
</script>