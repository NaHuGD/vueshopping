<template>
  <div id class="pt150">
    <div class="gameScratch">
      <canvas id="bottom"></canvas>
      <canvas id="top"></canvas>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.gameScratch {
  height: 300px;
}
canvas {
  position: fixed;
  left: 50%;
  margin-left: -200px;
  top: calc(0% + 150px);
  cursor: pointer;
}
.gameScratch img {
  width: 400px;
  height: 200px;
  display: none;
}

#bottom {
  background-size: 400px 200px;
}
</style>
