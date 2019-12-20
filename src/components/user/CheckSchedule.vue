<template>
  <div>
    <div class="row w-100 m-auto pt150">
      <div class="col-sm-8 col-10 m-auto" style="height:140px;">
        <div class="checkSchedule">
          <span class=""></span>
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
  name: "CheckSchedule",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "@/assets/helpers/breakpoint.scss";
.scheduleInfoAnimation {
  animation-name: scheduleInfo;
  animation-iteration-count: infinite;
  animation-duration: .5s;
}
.scheduleConfirmAnimation {
  animation-name: scheduleConfirm;
  animation-iteration-count: infinite;
  animation-duration: .5s;
}
.checkSchedule {
  position: relative;
  & > span {
    position: absolute;
    bottom: calc(-1.5rem - 4px);
    display: block;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, $color-gray 0%, transparent 100%),
      linear-gradient(90deg, $color-gray 100%, transparent 100%);
    background-size: 30px 30px;
  }
  .checkProduct {
    position: absolute;
    left: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 999%;
    border: 3px solid $color-green;
    background: $color-bg;
    & > i {
      color: $color-green;
      font-size: 1.4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    p {
      position: absolute;
      bottom: -40%;
      left: -50%;
      transform: translate(0%, 100%);
      white-space: nowrap;
      color: $color-green;
      font-weight: bold;
    }
  }
  .checkInfo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3rem;
    height: 3rem;
    border-radius: 999%;
    border: 3px solid $color-gray;
    background: $color-bg;
    & > i {
      color: $color-gray;
      font-size: 1.4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    p {
      position: absolute;
      bottom: -40%;
      left: 50%;
      transform: translate(-50%, 100%);
      white-space: nowrap;
      color: $color-gray;
      font-weight: bold;
    }
  }
  .checkOut {
    position: absolute;
    right: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 999%;
    border: 3px solid $color-gray;
    background: $color-bg;
    & > i {
      color: $color-gray;
      font-size: 1.4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    p {
      position: absolute;
      bottom: -40%;
      left: 50%;
      transform: translate(-50%, 100%);
      white-space: nowrap;
      color: $color-gray;
      font-weight: bold;
    }
  }
}
@keyframes scheduleInfo {
  0% {
    background: linear-gradient(45deg, #91afaf 10%, transparent 10%),
      linear-gradient(45deg, #235a55 20%, transparent 20%),
      linear-gradient(45deg, #91afaf 30%, transparent 30%),
      linear-gradient(45deg, #235a55 40%, transparent 40%),
      linear-gradient(90deg, #91afaf 50%, transparent 50%),
      linear-gradient(45deg, #d4d4d4 100%, transparent 100%);
  }
  25% {
    background: linear-gradient(45deg, #235a55 5%, transparent 5%),
      linear-gradient(45deg, #91afaf 15%, transparent 15%),
      linear-gradient(45deg, #235a55 25%, transparent 25%),
      linear-gradient(45deg, #91afaf 35%, transparent 35%),
      linear-gradient(45deg, #235a55 45%, transparent 45%),
      linear-gradient(90deg, #91afaf 50%, transparent 50%),
      linear-gradient(45deg, #d4d4d4 100%, transparent 100%);
  }
  50% {
    background: linear-gradient(45deg, #235a55 10%, transparent 10%),
      linear-gradient(45deg, #91afaf 20%, transparent 20%),
      linear-gradient(45deg, #235a55 30%, transparent 30%),
      linear-gradient(45deg, #91afaf 40%, transparent 40%),
      linear-gradient(90deg, #235a55 50%, transparent 50%),
      linear-gradient(45deg, #d4d4d4 100%, transparent 100%);
  }
  75% {
    background: linear-gradient(45deg, #91afaf 5%, transparent 5%),
      linear-gradient(45deg, #235a55 15%, transparent 15%),
      linear-gradient(45deg, #91afaf 25%, transparent 25%),
      linear-gradient(45deg, #235a55 35%, transparent 35%),
      linear-gradient(45deg, #91afaf 45%, transparent 45%),
      linear-gradient(90deg, #235a55 50%, transparent 50%),
      linear-gradient(45deg, #d4d4d4 100%, transparent 100%);
  }
  100% {
    background: linear-gradient(45deg, #91afaf 10%, transparent 10%),
      linear-gradient(45deg, #235a55 20%, transparent 20%),
      linear-gradient(45deg, #91afaf 30%, transparent 30%),
      linear-gradient(45deg, #235a55 40%, transparent 40%),
      linear-gradient(90deg, #91afaf 50%, transparent 50%),
      linear-gradient(45deg, #d4d4d4 100%, transparent 100%);
  }
}
@keyframes scheduleConfirm {
  0% {
    background: linear-gradient(45deg, #91afaf 10%, transparent 10%),
      linear-gradient(45deg, #235a55 20%, transparent 20%),
      linear-gradient(45deg, #91afaf 30%, transparent 30%),
      linear-gradient(45deg, #235a55 40%, transparent 40%),
      linear-gradient(45deg, #91afaf 50%, transparent 50%),
      linear-gradient(45deg, #235a55 60%, transparent 60%),
      linear-gradient(45deg, #91afaf 70%, transparent 70%),
      linear-gradient(45deg, #235a55 80%, transparent 80%),
      linear-gradient(45deg, #91afaf 90%, transparent 90%),
      linear-gradient(90deg, #235a55 100%, transparent 100%);
  }
  25% {
    background: linear-gradient(90deg, #235a55 5%, transparent 5%),
      linear-gradient(45deg, #91afaf 15%, transparent 15%),
      linear-gradient(45deg, #235a55 25%, transparent 25%),
      linear-gradient(45deg, #91afaf 35%, transparent 35%),
      linear-gradient(45deg, #235a55 45%, transparent 45%),
      linear-gradient(45deg, #91afaf 55%, transparent 55%),
      linear-gradient(45deg, #235a55 65%, transparent 65%),
      linear-gradient(45deg, #91afaf 75%, transparent 75%),
      linear-gradient(45deg, #235a55 85%, transparent 85%),
      linear-gradient(45deg, #91afaf 95%, transparent 95%),
      linear-gradient(90deg, #235a55 100%, transparent 100%);
  }
  50% {
    background: linear-gradient(90deg, #235a55 10%, transparent 10%),
      linear-gradient(45deg, #91afaf 20%, transparent 20%),
      linear-gradient(45deg, #235a55 30%, transparent 30%),
      linear-gradient(45deg, #91afaf 40%, transparent 40%),
      linear-gradient(45deg, #235a55 50%, transparent 50%),
      linear-gradient(45deg, #91afaf 60%, transparent 60%),
      linear-gradient(45deg, #235a55 70%, transparent 70%),
      linear-gradient(45deg, #91afaf 80%, transparent 80%),
      linear-gradient(45deg, #235a55 90%, transparent 90%),
      linear-gradient(45deg, #91afaf 100%, transparent 100%);
  }
  75% {
    background: linear-gradient(45deg, #91afaf 5%, transparent 5%),
      linear-gradient(90deg, #235a55 15%, transparent 15%),
      linear-gradient(45deg, #91afaf 25%, transparent 25%),
      linear-gradient(45deg, #235a55 35%, transparent 35%),
      linear-gradient(45deg, #91afaf 45%, transparent 45%),
      linear-gradient(45deg, #235a55 55%, transparent 55%),
      linear-gradient(45deg, #91afaf 65%, transparent 65%),
      linear-gradient(45deg, #235a55 75%, transparent 75%),
      linear-gradient(45deg, #91afaf 85%, transparent 85%),
      linear-gradient(45deg, #235a55 95%, transparent 95%),
      linear-gradient(45deg, #91afaf 100%, transparent 100%);
  }
  100% {
    background: 
    linear-gradient(45deg, #91afaf 10%, transparent 10%),
      linear-gradient(90deg, #235a55 20%, transparent 20%),
      linear-gradient(45deg, #91afaf 30%, transparent 30%),
      linear-gradient(45deg, #235a55 40%, transparent 40%),
      linear-gradient(45deg, #91afaf 50%, transparent 50%),
      linear-gradient(45deg, #235a55 60%, transparent 60%),
      linear-gradient(45deg, #91afaf 70%, transparent 70%),
      linear-gradient(45deg, #235a55 80%, transparent 80%),
      linear-gradient(45deg, #91afaf 90%, transparent 90%),
      linear-gradient(45deg, #235a55 100%, transparent 100%),
  }
}
</style>