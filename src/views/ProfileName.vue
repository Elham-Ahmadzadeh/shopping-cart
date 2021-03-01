<template>
  <div class="user">
    <button>
      <slot></slot>
      <img
        v-if="userIcon"
        class="user-img"
        src="../assets/customer.png"
        alt="shopping-cart"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: "ProfileName",
  props: {
    userIcon: {
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
.user-img {
  max-width: 2.5rem;
}
</style>
