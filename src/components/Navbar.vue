<template>
  <div>
    <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/admin/products" class="nav-link text-light" href="#">後台首頁</router-link>
      <ul class="d-flex m-0">
        <li class="nav-item">
          <router-link to="/home" class="nav-link text-light" href="#">回首頁</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.APIPATH}/logout`; //登出api
      this.$http.post(url).then(response => {
        console.log("logout", response.data);
        if (response.data.success) {
          //確認登出時
          vm.$router.push("/login"); //導致登入頁面
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  ul,li {
    list-style: none;
  }
</style>


