import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Header,Button } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.config.productionTip = true;

// 导入 mui 样式
import './lib/css/mui.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
