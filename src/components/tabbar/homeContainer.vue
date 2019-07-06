<template>
  <div class="home-container">
    <!-- 这是 轮播图 区域 -->
    <mt-swipe :auto="2000" class="lunbbo">
      <mt-swipe-item>
        <img src="../../lib/images/indexImg(5).jpg"/></mt-swipe-item>
      <mt-swipe-item>
        <img src="../../lib/images/indexImg(7).jpg"/></mt-swipe-item>
      <mt-swipe-item>
        <img src="../../lib/images/indexImg(6).jpg"/></mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 改造成 六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <span class="mui-icon mui-icon-map"></span>
        <div class="mui-media-body">新闻资讯</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <span class="mui-icon mui-icon-videocam"><span class="mui-badge">5</span></span>
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/spgm">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/spgm2">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">商品购买2</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/spgm3">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">商品购买3</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/spgm4">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">商品购买4</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "homeContainer",
    data() {
      return {
        picArray: [],
      }
    },
    created() {
      this.getPic()
    },
    methods: {
      getPic() {
        // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result =>{
        //   if(result.body.status === 0){
        //        this.picArray = result.body.message;
        //   }else{
        //     Toast('轮播图加载失败！');
        //   }
        // })
      }
    }
  }
</script>

<style scoped lang="less">
  .home-container {
    .lunbbo {
      height: 200px;
    }

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

      img {
        width: 100%;
      }
    }
  }

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
  }

  .mui-grid-view.mui-grid-9 .mui-media {
    border: none;
  }
</style>
