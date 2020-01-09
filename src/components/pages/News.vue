<template>
  <div id="news" class="pt150">
    <div class="row m-0 p-0">
      <div class="box col-12 col-md-6">
        <img src="@/images/news/01.jpg" alt>
        <div class="info">
          <h2 class="py-2 h4">健身飲食篇</h2>
          <p class="mb-2">不管你是要減重、增肌或是為了健康，運動後的30分鐘到1小時內，聰明攝取一份,運動後補充一份均衡營養的輕食很重要，內容以碳水化合物與蛋白質的</p>
        </div>
        <div class="more">See More</div>
      </div>
      <div class="box col-12 col-md-6">
        <img src="@/images/news/02.jpg" alt>
        <div class="info">
          <h2 class="py-2 h4">有氧運動迷失</h2>
          <p class="mb-2">提到有氧運動，相信許多人都會想到減肥（減重），因為有氧運動的確是可以，健身之前要先了解什麼是核心肌</p>
        </div>
        <div class="more">See More</div>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="box col-12 col-md-6">
        <img src="@/images/news/03.jpg" alt>
        <div class="info">
          <h2 class="py-2 h4">適合老人的運動有哪些？</h2>
          <p class="mb-2">所謂要活就要動，老了也別忘記運動。適合老人的運動類型有3種，包含可提升心肺功能的有氧運動、可強化骨頭和肌肉的肌力訓練，及幫助保</p>
        </div>
        <div class="more">See More</div>
      </div>
      <div class="box col-12 col-md-6">
        <img src="@/images/news/04.jpg" alt>
        <div class="info">
          <h2 class="py-2 h4">吃蛋白棒前要搞清楚的5件事情</h2>
          <p class="mb-2">隨著食品加工業的發展，以及人們對營養食品需求的增進，熱愛健康的人群已經不再滿足於簡單的多種維生素以及乳清蛋白粉產品。各類蛋白</p>
        </div>
        <div class="more">See More</div>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="box col-12 col-md-6">
        <img src="@/images/news/05.jpg" alt>
        <div class="info">
          <h2 class="py-2 h4">第一次健身就上手</h2>
          <p class="mb-2">下一站，我們即將帶領大家走入健身房，提供獨家的「攻略要點」，協助「健身房新手」不再像無頭蒼蠅於健身房裡亂竄</p>
        </div>
        <div class="more">See More</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.querySelector("html").classList.contains("box");
  }
};
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
    @include pad(){
      margin:15px 0;
    }
    img {
      width: 100%;
    }
    &>.info{
      @include pad(){
        position:absolute;
        bottom:0;
        color:white;
        background:$color-bgActive;
        margin-right:15px;
      }
    }
    h2{
      font-weight:bold;
    }
    p {
      line-height: 1.5rem;
      overflow: hidden;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp:1;
      -webkit-box-orient: vertical; 
      @include pad(){
        // max-width: 345px;
        padding:0 15px;
      }
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
      filter: grayscale(0.3);
    }
    .more {
      opacity: 1;
      @include pad(){
        display:none;
      }
    }
  }
}
</style>
