<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <router-view></router-view>
  </div>
  
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: 'App',
  // components:{
  //   HelloWorld
  // },
  // created(){
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`//'https://vue-course-api.hexschool.io/api/apple/products';
  //   console.log(process.env.APIPATH,process.env.CUSTOMPATH)
  //   this.$http.get(api).then((response) => {
  //     console.log(response.data)
  //   })
  // },
}
</script>

<style lang="scss">
@import "./assets/all"; //載入bootstrap(node_modules下的bs.scss)
</style>
