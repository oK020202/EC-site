import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top.vue'
import shopDetail from '@/components/shopDetail'
import goodsDetail from '@/components/goodsDetail'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'top',
      component: top,
    },
    {
      path: '/shop/:id',
      name: 'shopDetail',
      component: shopDetail,
    },
    {
      path: '/goods/:id',
      name: 'goodsDetail',
      component: goodsDetail,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
