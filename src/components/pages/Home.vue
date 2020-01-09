<template>
  <div id="home" class>
    <div id="banner">
      <img src="@/images/index/banner.jpg" alt="">
    </div>
    <div class="row event01">
      <div class="box1 col-12 col-md-6 p-0">
        <p>EVENT1</p>
      </div>
      <div class="box2 col-12 col-md-6 p-0">
        <div class="row m-0">
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt="">
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt="">
        </div>
        <div class="row m-0">
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt="">
          <img class="col-6 p-0" src="@/images/index/e1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="row event02 m-0">
      <div class="box1 col-12 col-md-6 p-0">
        <img class="p-0" src="@/images/index/e2.jpg" alt="">
      </div>
      <div class="box2 col-12 col-md-6">
        <p>EVENT2</p>
      </div>
    </div>
    <div class="row event03 p-0 m-0">
      <div class="col-12 p-0">
        <img class="p-0" src="@/images/index/e3.jpg" alt="">
      </div>
    </div>
    <div class="event04"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  },
  created() {
    const vm = this;

  },
  mounted() {}
};
</script>


<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

#home{
  #banner{
    width: 100%;
    height: 100%;
    vertical-align:bottom;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .event01{
    width: 100%;
    vertical-align:top;
    padding: 0;
    margin: 0;
    img{
      width: 100%;
      height: 100%;
    }
    .box1{
      width: 100%;
      height:100%;
      @include pad{
        // height:750px;
      }
    }
    .box2{

    }
  }
  .event02{
    .box1{
      width: 100%;
      height: 100%;
      @include pad(){
        order:2;
      }
      img{
        width: 100%;
      }
    }
    .box2{
      @include pad(){
        order:1;
      }
    }
  }
  .event03{
    img{
      width: 100%;
    }
  }
}
</style>
