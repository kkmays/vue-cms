import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {Header, Swipe, SwipeItem, Button} from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;


// 导入 mui 样式
import './lib/css/mui.min.css'
// 引入 mui 图标样式
import './lib/css/icons-extra.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
