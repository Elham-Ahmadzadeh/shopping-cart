<template>
  <div class="container">
    <div class="box">
      <span class="text" v-if="!productInCart"> No Products (._.) </span>
      <table class="table">
        <tbody>
          <tr
            class="line"
            v-for="(product, index) in $store.state.cart"
            :key="index"
          >
            <td></td>
            <th scope="row">{{ product.title }}</th>
            <td></td>
            <td class="product-price">€ {{ product.price }}</td>
          </tr>
        </tbody>
      </table>
      <section>
        <router-link to="/cart">
          <cart-icon @click.native="showInvisibleCart" :cartIcon="true">
            show cart
          </cart-icon>
        </router-link>
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartIcon from './CartIcon.vue'
import createdHookMixin from '../created-hook-mixin'
export default {
  components: { CartIcon },
  name: 'PopupBox',
  computed: {
    ...mapGetters(['getProductsInCart']),
  },
  methods: {
    showInvisibleCart() {
      this.showHidenCart
    },
  },
  mixins: [createdHookMixin],
}
</script>

<style scoped>
.container {
  position: relative;
}
.box {
  width: 25rem;
  height: auto;
  z-index: 1;
  background-color: rgb(236, 242, 243);
  border-radius: 4px;
  padding: 1em 0.5em;
  border-radius: 10px;
  position: absolute;
  top: 16px;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: -13px;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
}
.box:after {
  content: '';
  width: 30px;
  height: 30px;
  position: absolute;
  top: -1rem;
  left: 10em;
  background: inherit;
  transform: rotate(45deg);
}
.table td {
  border-top: 1px rgb(233, 228, 228) solid;
}
.product-img {
  width: 2rem;
}
.remove-product {
  background: rgb(68, 71, 71);
}
button {
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 0.6em;
  font-size: 16px;
  margin: 25px 0 15px 0;
  color: white;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
@media (min-width: 900px) {
  .box {
    margin-left: 9rem;
    padding: 3rem;
    margin-top: -2rem;
  }
}
</style>
