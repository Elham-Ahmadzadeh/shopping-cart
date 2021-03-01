<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-btn @click="decrease" :disabled="minusNumber" variant="outline-info"
        >-</b-btn
      >
    </b-input-group-prepend>
    <b-form-input v-model="quantity" readonly min="1"></b-form-input>
    <b-input-group-append>
      <b-btn @click="increase" variant="outline-secondary">+</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>
<script>
export default {
  computed: {
    minusNumber() {
      return this.quantity < 1
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    increase() {
      this.quantity = this.quantity + 1
      this.$emit('increase-value', this.quantity)
    },
    decrease() {
      this.quantity = this.quantity - 1
      this.$emit('decrease-value', this.quantity)
    },
  },
}
</script>
<style scoped>
.input-group {
  display: none;
  width: 8rem;
  margin-left: 21rem;
}
@media (min-width: 704px) {
  .input-group {
    display: flex;
  }
}
</style>
