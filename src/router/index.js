import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroPage from '@/views/HeroPage'
import LoginMember from '@/views/LoginMember'
import ListProducts from '@/product/ListProducts'
import ProductInfo from '@/product/ProductInfo'
import ShoppingCart from '@/cart/ShoppingCart'
import ProfilePage from '@/views/ProfilePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HeroPage',
    component: HeroPage,
  },
  { path: '/log-in', name: 'LoginMember', component: LoginMember },
  {
    path: '/product',
    name: 'ListProducts',
    component: ListProducts,
  },
  {
    path: '/product/:id',
    name: 'ProductInfo',
    component: ProductInfo,
    // ROUTE GUARD to prevent page to load FROM PLURALSIGHT
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id))
      next(isValidId)
    },
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/profile/sima',
    name: 'ProfilePage',
    component: ProfilePage,
  },
]
const router = new VueRouter({
  routes,
})

export default router
