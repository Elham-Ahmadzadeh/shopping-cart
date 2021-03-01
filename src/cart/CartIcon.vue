<template>
  <button>
    <slot></slot>
    <img
      v-if="cartIcon"
      class="cart-img"
      src="../assets/cart.svg"
      alt="shopping-cart"
    />
  </button>
</template>
<script>
export default {
  props: {
    cartIcon: {
      type: Boolean,
    },
  },
}
</script>
<style scoped>
button {
  background: #343a40;
  border: none;
}
.cart-img {
  max-width: 1.75rem;
}
</style>
