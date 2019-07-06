<template>
  <div id="app" class="app-container">
    <!--这是 Header区域 -->

    <mt-header fixed title="vue-cms学习">
      <span slot="left" v-show="flag">
        <mt-button icon="back" @click="goBack">返回</mt-button>
      </span>
    </mt-header>

    <!--这是路由 router-view 区域-->
    <transition>
      <router-view></router-view>
    </transition>

    <!--这是 Tabbar 区-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getCount}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        flag: true
      }
    },
    created() {
      this.flag = this.$route.path === '/home' ? false : true
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
    watch: {
      "$route.path": function (newVal) {
        if (newVal === '/home') {
          this.flag = false;
        } else {
          this.flag = true;
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 100%;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-leave-active, .v-leave-active {
    transition: all 0.5s ease;
  }
</style>
