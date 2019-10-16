<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <p>lorem2000</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isLoading:false,
        }
    },
}
</script>
