import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    product: null,
    showInvisibleCart: false,
  },
  getters: {
    getProductsInCart: (state) => state.cart,

    getCurrentItem: (state) => state.product,

    getInvisibleCart: (state) => state.showInvisibleCart,
  },

  mutations: {
    FETCH_PRODUCTS: (state, products) => {
      state.products = products
    },
    PRODUCT_INFO: (state, product) => {
      state.product = product
    },
    ADD_PRODUCT: (state, product) => {
      state.cart.push(product)
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cart.splice(index, 1)
    },
    SHOW_INVISIBLE_CART: (state) => {
      state.showInvisibleCart = !state.showInvisibleCart;
    },
  },
  actions: {
    fetchProducts(context) {
      axios
        .get("https://fakestoreapi.com/products")

        .then((response) => context.commit("FETCH_PRODUCTS", response.data))

        .catch(console.error);
    },
    productInfo({ commit }, id) {
      commit("PRODUCT_INFO", {}) // OTHERWISE IT SHOWS BRIEFLY THE PRE FETCH
      axios
        .get(`https://fakestoreapi.com/products/${id}`)

        .then((response) => commit("PRODUCT_INFO", response.data))

        .catch(console.error);
    },
    removeProduct: (context, index) => {
      context.commit("REMOVE_PRODUCT", index);
    },
    showHidenCart: (context) => {
      context.commit("SHOW_INVISIBLE_CART");
    },
    addProductToCart(context, product) {
      context.commit("ADD_PRODUCT", product);
    },
  },
});
