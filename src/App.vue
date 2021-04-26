<template>
  <div id="app">
    <navigation-bar />
    <header>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <span class="circle-btn" v-if="productInCart">
          {{ getProductsInCart.length }}</span
        >
        <cart-icon
          class="cart-btn"
          @click.native="showInvisibleCart"
          :cart-icon="true"
        />
      </b-navbar>
    </header>
    <main>
      <popup-box v-if="getInvisibleCart"></popup-box>
      <router-view />
    </main>
  </div>
</template>
<script>
import CartIcon from "./cart/CartIcon.vue"
import { mapActions, mapGetters } from "vuex"
import NavigationBar from "./views/NavigationBar.vue"
import PopupBox from "./cart/PopupBox.vue"
import createdHookMixin from "./created-hook-mixin"
export default {
  name: "App",
  components: {
    CartIcon,
    PopupBox,
    NavigationBar,
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getInvisibleCart"]),
  },
  methods: {
    ...mapActions(["showHidenCart"]),
    showInvisibleCart() {
      this.showHidenCart()
    },
  },
  mixins: [createdHookMixin],
}
</script>
<style>
#app {
  color: rgb(36, 48, 65);
}
.container {
  position: relative;
}
 .cart-btn,
.circle-btn {
  position: absolute;
 z-index: 9999;
}
.cart-btn {
 top: 1rem;
left: 13rem;
  position: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1px 1px;

}
.circle-btn {
  background: #43f6ff;
  padding: 2px 10px;
  border-radius: 50%;
  color: rgb(17, 0, 0);
  top: 0;
  left: 15rem;
  position: fixed;
}
@media (min-width: 900px) {
  .cart-btn {
    left: 30rem;
    top: 1.5rem;
  }
  .circle-btn {
    left: 32rem;
    top: 1rem;
  }
}
</style>
