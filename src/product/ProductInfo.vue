<template>
  <div class="product-info">
    <div class="row" v-if="product">
      <div class="col-md-4">
        <img :src="product.image" class="img-fluid" alt="Product Image" />
      </div>
      <div class="col-md-8 p-5">
        <h1 class="display-4">{{ product.title }}</h1>
        <div class="h3 text-muted mt-5">€ {{ product.price }}</div>
        <div class="mt-5">{{ product.description }}</div>
        <div class="mt-5">
          <router-link to="/product">
            <b-button variant="secondry">Back</b-button>
          </router-link>
          <cart-icon
            class="btn float-right"
            @click.native="addToCart"
            :cartIcon="true"
            >Add to cart
          </cart-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartIcon from '../cart/CartIcon.vue'
export default {
  components: {
    CartIcon,
  },
  name: 'ProductInfo',
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  created() {
    this.$store.watch(
      (state) => state.product,
      (newValue) => {
        console.log(`Objektet har ändrats till
        ${newValue.title}`)
      }
    )
  },
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    addToCart() {
      const item = this.product
      this.$store.dispatch('addProductToCart', item)
    },
  },
}
</script>
<style scoped>
.product-info {
  padding: 5rem;
}
label {
  padding: 1rem;
  margin-left: 2rem;
}

input {
  max-width: 4rem;
  padding-left: 1rem;
}
.btn {
  color: white;
}
</style>
