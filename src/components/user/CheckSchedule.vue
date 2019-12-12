<template>
  <div>
    <div class="row w-100 m-auto pt150">
      <div class="col-sm-8 col-10 m-auto" style="height:140px;">
        <div class="checkSchedule">
          <span></span>
          <div class="checkProduct">
            <i class="fas fa-shopping-cart"></i>
            <p>確認購物車</p>
          </div>
          <div class="checkInfo">
            <i class="fas fa-edit"></i>
            <p>填寫資料</p>
          </div>
          <div class="checkOut">
            <i class="fas fa-comment-dollar"></i>
            <p>確認結帳</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CheckSchedule",
  data(){
      return{
      }
  }
}
</script>

<style lang="scss">
@import "@/assets/helpers/breakpoint.scss";
.checkSchedule{
    position:relative;
    transition:2s;
    &>span{
      transition:2s;
        position:absolute;
        bottom:calc(-1.5rem - 4px);
        display:block;
        width: 100%;
        height:4px;
        background:
        linear-gradient(90deg, $color-gray 0%, transparent 0%),
        linear-gradient(90deg, $color-gray 100%, transparent 100%);
    }
    .checkProduct{
        position:absolute;
        left: 0;
        width:3rem;
        height:3rem;
        border-radius:999%;
        border:3px solid $color-aid;
        background:$color-bg;
        &>i{
            color:$color-aid;
            font-size:1.4rem;
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
        p{
            position: absolute;
            bottom:-40%;
            left:-50%;
            transform:translate(0%,100%);
            white-space: nowrap;
            color:$color-aid;
            font-weight:bold;
        }
    }
    .checkInfo{
        position:absolute;
        left: 50%;
        transform:translateX(-50%);
        width:3rem;
        height:3rem;
        border-radius:999%;
        border:3px solid $color-gray;
        background:$color-bg;
        &>i{
            color:$color-gray;
            font-size:1.4rem;
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
        p{
            position: absolute;
            bottom:-40%;
            left:50%;
            transform:translate(-50%,100%);
            white-space: nowrap;
            color:$color-gray;
            font-weight:bold;
        }
    }
    .checkOut{
        position:absolute;
        right: 0;
        width:3rem;
        height:3rem;
        border-radius:999%;
        border:3px solid $color-gray;
        background:$color-bg;
        &>i{
            color:$color-gray;
            font-size:1.4rem;
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
        p{
            position: absolute;
            bottom:-40%;
            left:50%;
            transform:translate(-50%,100%);
            white-space: nowrap;
            color:$color-gray;
            font-weight:bold;
        }
    }
}
</style>