<template>
  <div id="login">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">KaizBB會員登入</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      >
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      >
      <div class="checkbox mb-3 text-danger">{{isMessage}}</div>
      <button class="btn-lg btn-block" type="submit">Sign in</button>
      <button class="goBack" @click.prevent="goBack">回上一頁</button>
      <p class="my-3 text-muted">&copy; 2017-2019</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isMessage: "",
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        vm.isMessage = response.data.message;
        console.log(response.data);
        if (response.data.success) {
          //帳號登入成功時(true)
          vm.$router.push("/admin/products"); //將路由導致首頁
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";
#login {
  background: $color-lightYellow;
  height: 100vh;
}
.goBack {
  background: transparent;
  color: black;
  border: 0;
  padding-top: 5px;
  @include focusNone;
  &:hover {
    opacity: 0.7;
  }
}
h1 {
  color: $color-green;
  color: #0d423e;
  font-family: impact;
}
button {
  background: $color-green;
  color: $color-lightYellow;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
