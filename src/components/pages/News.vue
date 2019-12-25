<template>
  <div id="news" class="pt150">
    <div class="row">
      <div class="box col-12 col-md-6">
        <img src="@/images/news/01.jpg" alt>
        <h2 class="py-2">TITLE1</h2>
        <p class="mb-2">內文123456789內文</p>
        <div class="more">See More</div>
      </div>
      <div class="box col-12 col-md-6">
        <img src="@/images/news/02.jpg" alt>
        <h2 class="py-2">TITLE1</h2>
        <p class="mb-2">內文123456789內文</p>
        <div class="more">See More</div>
      </div>
    </div>
    <div class="row">
      <div class="box col-12 col-md-6">
        <img src="@/images/news/03.jpg" alt>
        <h2 class="py-2">TITLE1</h2>
        <p class="mb-2">內文123456789內文</p>
        <div class="more">See More</div>
      </div>
      <div class="box col-12 col-md-6">
        <img src="@/images/news/04.jpg" alt>
        <h2 class="py-2">TITLE1</h2>
        <p class="mb-2">內文123456789內文</p>
        <div class="more">See More</div>
      </div>
    </div>
    <div class="row">
      <div class="box col-12 col-md-6">
        <img src="@/images/news/05.jpg" alt>
        <h2 class="py-2">TITLE1</h2>
        <p class="mb-2">內文123456789內文</p>
        <div class="more">See More</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    document.querySelector("html").classList.contains("box");
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

#news {
  max-width: 1200px;
  margin: 0 auto 1rem auto;
  .box {
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-align: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .more {
    transition: 0.6s;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    color: #fff;
    font-family: impact;
    font-size: 2rem;
    letter-spacing: 0.5rem;
    width: calc(80% - 30px);
    border: 5px solid #fff;
    padding: 25px 0;
  }
  .box:hover {
    img {
      filter: grayscale(.3);
    }
    .more {
      opacity: 1;
    }
  }
}
</style>
