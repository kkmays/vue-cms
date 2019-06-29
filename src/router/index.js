import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// 导入vue -resource
Vue.use(VueResource);

Vue.use(Router);
// 导入 路由模块
import HomeContainer from '../components/tabbar/homeContainer.vue'
import CartContainer from '../components/tabbar/cartContainer.vue'
import SearchContainer from '../components/tabbar/searchContainer.vue'
import MemberContainer from '../components/tabbar/memberContainer.vue'

export default new Router({
  routes: [
    {path: '/home', component: HomeContainer},
    {path: '/cart', component: CartContainer},
    {path: '/search', component: SearchContainer},
    {path: '/member', component: MemberContainer}
  ],
  linkActiveClass: 'mui-active'  // 默认覆盖高亮的类 router-link-active
})
