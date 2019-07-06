import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuex from 'vuex'
import {Header, Swipe, SwipeItem, Button, Switch} from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.config.productionTip = false;
Vue.use(Vuex);

// 导入 mui 样式
import './lib/css/mui.min.css'
// 引入 mui 图标样式
import './lib/css/icons-extra.css'
// 每次 进入都会调用 main.js ， 然后就先从本地存储中读取数据到购物车
let car = JSON.parse(localStorage.getItem('car') || '[]');
const store = new Vuex.Store({
  //  大家把 state 想象成 组件中的  data，专门用来存储数据的，如果再组件中想要访问 state中的数据，
  //  只能通过 this.$store.state.***
  state: {
    car: car,   // 存储 商品 对象数据
  },
  mutations: {
    //  注意 要操作 state中的 值，只能通过 mutations 中提供的方法，才能操作对应的数据，不推荐直接
    //       操作state 中的数据，因为，万一导致数据的紊乱，不能快速定位到错误的原因
    //   注意 如果要调用 mutations中的方法，只能 使用 this.$store.commit(' 方法名' )；
    //   这种调用方式 的格式，和 this.$emit('父组件的方法名') 类似
    addToCar(state, goodsInfo) {
      // 点击 加入购物车，把商品保存 到store 中
      //   分析：
      //   如果购物车中已经有 数据了  ，那么只要更新 数量就行
      //    如果没有，直接把商品数据push到 car 中
      let flag = false;  // 认为 在购物车中没有找到这个 对应的 商品
      state.car.some(item => {
        if (item.id === goodsInfo.id) {
          item.count += parseInt(goodsInfo.count);

          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsInfo);
      }

      // 当更新car 之后 存储到 本地的 localStorage
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateGoods(state, goodsList) {
      state.car.forEach(item => {
        if (item.id === goodsList.id) {
          item.count = parseInt(goodsList.count);
          return true
        }
      });

      localStorage.setItem('car', JSON.stringify(state.car));
    },
    removeCar(state, id) {
      state.car.some((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1);
          return true;
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateSelected(state, info) {

      state.car.some((item) => {
        if (item.id === info.id) {
          item.selected = info.selected;
          return true;
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
  getters: {
    //  这里的 getters 只对外 提供数据 不修改数据 ，组件 访问 通过 this.$store.getters.***
    //  经过对比发现，这里的 getters 方法和 组件中的过滤器比较像，都是 对原数据进行了包装，提供给调用者
    //  其次，getters 也和 computed(计算属性)比较像，只要 state中的值 发生变化了，如果getters 中引用了这个变量，
    //  那么会 立即 触发 getters 重新请求值
    getCount(state) {
      let sumCount = 0;
      state.car.forEach(item => {
        sumCount += item.count;
      });
      return sumCount;
    },
    getCarCount(state) {
      let o = {};
      state.car.forEach(item => {
        o[item.id] = item.count;
      });
      return o;
    },
    getCarSelect(state) {
      let o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      });
      return o;
    },
    getCountsAndPrice(state) {
      let o = {
        count: 0,  // 勾选的数量
        amount: 0  // 勾选的总价
      };
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count;
          o.amount += item.count * item.price;
        }
      });
      return o;
    },
  }


});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
