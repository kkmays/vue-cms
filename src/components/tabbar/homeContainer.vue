<template>
  <div class="home-container">
    <!-- 这是 轮播图 区域 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "homeContainer"
  }
</script>

<style scoped lang="less">
  .home-container {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red;
      }

      &:nth-child(2) {
        background-color: green;
      }

      &:nth-child(3) {
        background-color: blue;
      }
    }
  }

</style>
