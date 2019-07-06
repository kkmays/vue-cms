<template>
  <div class="spgm-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <mt-swipe :auto="2000" class="lunbbo">
          <mt-swipe-item>
            <img src="../lib/images/1.jpg"/></mt-swipe-item>
          <mt-swipe-item>
            <img src="../lib/images/2.jpg"/></mt-swipe-item>
          <mt-swipe-item>
            <img src="../lib/images/3.jpg"/></mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="bollFalg" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-header">华为手机P40</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥4500</del>&nbsp; &nbsp;销售价:<span class="new_price">￥5000</span>
          </p>
          <p>购买数量：
            <span class="mui-numbox" data-numbox-min="0" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button" :disabled="isDisabled"
                      @click="delNum">-</button>
              <input id="test" class="mui-input-numbox" type="number" v-model="numValue">
              <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addNum">+</button>
            </span>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCard">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="">商品货号：SP10000442</p>
          <p class="">库存情况：9999</p>
          <p class="">上架时间：20190705</p>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品情况</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import jpg3 from '../lib/images/3.jpg'

  export default {
    name: "spgm3",
    data() {
      return {
        bollFalg: false,
        numValue: 1,   // 默认输入框的值
        isDisabled: true
      }
    },
    methods: {
      addNum() {
        this.numValue++;
        this.isDisabled = false;
      },
      delNum() {
        if (this.numValue === 2) {
          this.isDisabled = true;
          this.numValue = 1;
        } else {
          this.numValue--;
        }
      },
      addCard() {
        this.bollFalg = true;
        let goodInfo = {id: '1003', count: this.numValue, price: 5000, selected: true, title: '华为P40', url: jpg3};

        //  调用 store 中的 mutations 中 的 方法
        this.$store.commit('addToCar', goodInfo);
      },
      beforeEnter(el) {
        el.style.transform = 'translate(0,0)'
      },
      enter(el, done) {
        el.offsetWidth;
        // 获取小球在页面中的位置
        const ballPostion = this.$refs.ball.getBoundingClientRect();
        // 获取徽标在页面中的位置
        const cartPositon = document.getElementById('badge').getBoundingClientRect();

        const xDist = cartPositon.left - ballPostion.left + 'px';
        const yDist = cartPositon.top - ballPostion.top + 'px';

        el.style.transform = `translate(${xDist},${yDist})`;
        el.style.transition = `all 0.5s cubic-bezier(.4,-0.3,1,.68)`;
        done()
      },
      afterEnter(el) {
        this.bollFalg = !this.bollFalg;
      }
    }
  }
</script>

<style scoped lang="less">
  .spgm-container {
    .lunbbo {
      height: 300px;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .new_price {
      font-size: 16px;
      font-weight: bold;
      color: red;
    }

    .mui-card-footer {
      display: block;

      button {
        margin-top: 10px;
      }
    }

    .ball {
      background-color: red;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      position: absolute;
      z-index: 999;
      top: 450px;
      left: 154px;
    }
  }

</style>
