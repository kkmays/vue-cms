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
import SpgmContainer from '../components/spgm.vue'
import SpgmContainer2 from '../components/spgm2.vue'
import SpgmContainer3 from '../components/spgm3.vue'
import SpgmContainer4 from '../components/spgm4.vue'

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/cart', component: CartContainer},
    {path: '/search', component: SearchContainer},
    {path: '/member', component: MemberContainer},
    {path: '/spgm', component: SpgmContainer},
    {path: '/spgm2', component: SpgmContainer2},
    {path: '/spgm3', component: SpgmContainer3},
    {path: '/spgm4', component: SpgmContainer4}
  ],
  linkActiveClass: 'mui-active'  // 默认覆盖高亮的类 router-link-active
})
