<template>
  <div class="cart-container">
    <div class="goods-list">
      <!-- 商品购买区 -->
      <div class="mui-card" v-for="(item,i) in goodList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">

            <mt-switch v-model="$store.getters.getCarSelect[item.id]"
                       @change="selectedChange(item.id,$store.getters.getCarSelect[item.id])"></mt-switch> &nbsp;
            <img :src="item.url"/>
            &nbsp;
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.price}}</span>&nbsp;
                <span class="mui-numbox" data-numbox-min="0" data-numbox-max="9">
                    <button class="mui-btn mui-btn-numbox-minus" type="button"
                            @click="delNum(item.id)">-</button>
                    <input id="test" class="mui-input-numbox" type="number"
                           v-model="$store.getters.getCarCount[item.id]" onchange="countbox" readonly>
                   <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addNum(item.id)">+</button>
                </span>&nbsp;
                <a href="" @click.prevent="remove(item.id,i)">删除 </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--结算 区-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{$store.getters.getCountsAndPrice.count}}</span> 件，
                总价 ￥<span class="red">{{$store.getters.getCountsAndPrice.amount}}</span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "cartContainer",
    data() {
      return {
        swithFlag: true,
        carNum: 1,
        id: '1001',
        goodList: []
      }
    },
    methods: {
      getCar() {
        this.goodList = this.$store.state.car;
      },
      addNum(item) {
        this.goodList.forEach(i => {
          if (i.id === item) {
            let cou = this.$store.getters.getCarCount[item];
            cou++;
            this.$store.commit('updateGoods', {id: item, count: cou});
          }
        });
      },
      delNum(item) {
        this.goodList.forEach(i => {
          if (i.id === item) {
            let cou = this.$store.getters.getCarCount[item];
            if (cou <= 2) {
              cou = 1;
            } else {
              cou--;
            }
            this.$store.commit('updateGoods', {id: item, count: cou});
          }
        });
      },
      remove(id, index) {
        // 点击删除 要根据传入的 id 删除store和 组件 goodsList中的对应的商品
        this.goodList.splice(index, 1);
        this.$store.commit('removeCar', id);
      },
      selectedChange(id, value) {
        //  点击开关 通过id 去 改变store 中的值
        this.$store.commit('updateSelected', {id, selected: value});
      }
    },
    mounted() {
      this.getCar();
    }
  }
</script>

<style scoped lang="less">
  .cart-container {
    background-color: #eee;
    overflow: hidden;

    .goods-list {
      .mui-card-content-inner {
        display: flex;
        align-items: center;

        .mui-numbox {
          height: 34px;
        }
      }

      img {
        width: 60px;
        height: 60px;
      }

      h1 {
        font-size: 13px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .price {
          color: red;
          font-weight: bold;

        }
      }
    }

    .jiesuan {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .red {
        color: red;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

</style>
