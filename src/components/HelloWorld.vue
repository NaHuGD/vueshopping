<template>
  <div class="hello">
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    signout(){
      const api = `${process.env.APIPATH}/logout`
      const vm = this;
      this.$http.post(api).then((response) => { //傳入api就好不需user資料
        console.log(response.data)
        if(response.data.success){ //帳號登出成功時(true)
          alert(response.data.message)
          vm.$router.push('/login') //將路由導致登入頁面
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
