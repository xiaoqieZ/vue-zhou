import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import HomeOne from '@/components/tabbar1/HomeOne1.vue'
import MenberTow from '@/components/tabbar1/MenberTow2.vue'
import SearchThree from '@/components/tabbar1/SearchThree3.vue'
import ShopcarFour from '@/components/tabbar1/ShopcarFour4.vue'
import Submarine from '@/components/tabbar2/Submarine.vue'
import Lgxinwen from '@/components/tabbar2/Lgxinwen.vue'
import Lliulan from '@/components/Subcomne/Lliulan.vue'
import Tupianliulan from '@/components/tabbar2/Tupianliulan.vue'
import Infotu1 from '@/components/Subcomne/Info-tu1.vue'
import Infotu2 from '@/components/Subcomne/Info-tu2.vue'
import Infotu3 from '@/components/Subcomne/Info-tu3.vue'
import Infotu4 from '@/components/Subcomne/Info-tu4.vue'
import Infotu5 from '@/components/Subcomne/Info-tu5.vue'
import Infotu6 from '@/components/Subcomne/Info-tu6.vue'
import xiaowulang0 from '@/components/subcomponents/tupianxiangqing.vue'
import Shangpin from '@/components/subcomponents/Shangpingoumai.vue'
import Journalisms from '@/components/Subcomne/Journalisms.vue'


export default new Router({
  routes: [   
    {path:'/home',component: HomeOne}, 
    {path:'/member',component: MenberTow}, 
    {path:'/three',component: SearchThree},
    {path:'/three/journalisms',component: Journalisms}, 
    {path:'/four',component: ShopcarFour},
    {path:'/four/submarine',component: Submarine},
    {path:'/home/lgxinwen',component: Lgxinwen},
    {path:'/home/tupianliulan',component: Tupianliulan,
    children:[
      {path:'/home/tupianliulan',redirect:'/home/fenlei1'},
      {path:'/home/fenlei1',component: Infotu1},
      {path:'/home/fenlei2',component: Infotu2},
      {path:'/home/fenlei3',component: Infotu3},
      {path:'/home/fenlei4',component: Infotu4},
      {path:'/home/fenlei5',component: Infotu5},
      {path:'/home/fenlei6',component: Infotu6},
    ]},
    {path:'/home/xiaowulang0',component:xiaowulang0},
    // {path:'/home/lliulan/:id',component: Lliulan},
    {path:'/home/lliulan',component: Lliulan},
    {path:'/home/shangpin',component: Shangpin},
  
    
    {path:'/', redirect: '/home'},
    {path:'**', redirect: '/home'},
    
  ],
  linkActiveClass:'mui-active'//覆盖默认路由的高亮
})
