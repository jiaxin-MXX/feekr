import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from 'views/index'
import Holiday from 'views/holiday'
import Strategy from 'views/strategy'
import Mine from 'views/mine'
import Detail2 from 'views/strategy-detail'
import Guide from 'views/guide'
import Article from 'views/article'

import Themelist from 'views/themelist'
import Meijing from 'components/themelist/meijing'
import Meishi from 'components/themelist/meishi'
import Meisu from 'components/themelist/meisu'
import Meiwu from 'components/themelist/meiwu'

import Product from 'views/product'
import Contain from 'components/product/contain'
import Detail from 'components/product/detail'
import Notice from 'components/product/notice'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name:'home',
    component: Index
  },
  {
    path: '/holiday',
    name:'holiday',
    component: Holiday
  },
  {
    path: '/strategy',
    name:'strategy',
    component: Strategy,
  },
  {
    path:'/mine',
    name:'mine',
    component: Mine
  },
  {
    path:'/Sdetail/:id',
    name:'Sdetail',
    component: Detail2
  },
  {
    path:'/article/:id',
    name:'article',
    component: Article
  },
  {
    path:'/themelist/:id',
    name:'themelist',
    component: Themelist,
    redirect:'/themelist/:id/meijing/1',
    children:[
      {
        path:'meijing/:cid',
        name:'meijing',
        component:Meijing
      },
      {
        path:'meishi/:cid',
        name:'meishi',
        component:Meishi
      },
      {
        path:'meisu/:cid',
        name:'meisu',
        component:Meisu
      },
      {
        path:'meiwu/:cid',
        name:'meiwu',
        component:Meiwu
      }
    ]
  },
  {
    path:'/guide/:id',
    name:'guide',
    component: Guide
  },
  {
    path:'/product/:id',
    name:'product',
    component: Product,
    // redirect:'/product/:id/contain',
    children:[
      {
        path:'contain',
        name:'contain',
        component: Contain,
      },
      {
        path:'detail',
        name:'detail',
        component: Detail,
      },
      {
        path:'notice',
        name:'notice',
        component: Notice,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
