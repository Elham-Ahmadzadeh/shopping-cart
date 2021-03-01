export default {
  computed: {
    // TO SEE IN CART

    cart() {
      return this.$store.state.cart;
    },

    product() {
      return this.$store.state.product;
    },

    // TO SEE THE NUMBERS ON THE CART

    productInCart() {
      return this.getProductsInCart.length > 0;
    },

    total() {
      let total = 0;
      this.cart.forEach((product) => {
        total += product.price;
      });
      return total.toFixed(2);
    },
  },

  methods: {
    removeItem(index) {
      return this.removeProduct(index);
    },
  },
};
