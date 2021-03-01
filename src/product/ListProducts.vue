<template>
  <div class="list-products">
    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="product in $store.state.products"
        :key="product.id"
      >
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" class="product-img" alt="Product Image" />
            <h3 class="mt-4">{{ product.title }}</h3>
            <div class="my-4 text-muted">€ {{ product.price }}</div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <router-link :to="`/product/${product.id}`">
                <b-button variant="primary" @click="itemDetail(product.id)">
                  More Detail
                </b-button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListProducts',
  methods: {
    itemDetail(id) {
      this.$store.dispatch('productInfo', id)
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
}
</script>
<style lang="scss" scoped>
.card {
  max-width: 31rem;
  height: 36rem;
  border: none;
  background: #fcfcfc;
  margin-top: 2rem;
  border-radius: 0.75rem;
}
.card-body {
  margin-top: 4rem;
}
.product-img {
  height: 12rem;
  width: 10rem;
}
</style>
