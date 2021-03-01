<template>
  <div>
    <table class="table">
      <tbody>
        <transition-group name="fade">
          <span class="text" v-if="!productInCart"> No Products (._.) </span>
          <tr
            class="line"
            v-for="product in $store.state.cart"
            :key="product.id"
          >
            <td scope="row">
              <img
                :src="product.image"
                class="product-img"
                alt="Product Image"
              />
            </td>
            <td scope="row">{{ product.title }}</td>
            <td class="product-price">€ {{ product.price }}</td>
            <td class="product-quantity">
              <amount-product
                :quantity="quantity"
                @increase-value="add"
                @decrease-value="subtract"
              >
              </amount-product>
            </td>
            <td>
              <button class="remove-product" @click="removeItem(index)">
                X
              </button>
            </td>
          </tr>
        </transition-group>
      </tbody>
    </table>
    <section>
      <span class="total" v-if="productInCart">Total: €{{ total }}</span>
      <span class="total" v-else>Total: 00 </span>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import AmountProduct from '../product/AmountProduct.vue'
import createdHookMixin from '../created-hook-mixin'
export default {
  name: 'ShoppingCart',
  components: {
    AmountProduct,
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    total() {
      let cost = 0
      this.cart.forEach((product) => {
        cost += product.price * this.quantity
      })
      return cost.toFixed(2)
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    ...mapActions(['removeProduct']),
    add() {
      this.quantity++
    },
    subtract() {
      this.quantity--
    },
  },
  mixins: [createdHookMixin],
}
</script>
<style lang="scss" scoped>
$red: red;
$mellow: rgb(13, 9, 243);
table {
  margin-top: 2rem;
}
.product-image {
  margin: 2rem;
}
.table th,
.table td {
  font-size: 22px;
}
span {
  font-size: 2rem;
}
.product-img {
  width: 3rem;
}
.text {
  color: $red;
}
.remove-product {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translate(-30%);
  opacity: 0;
}
@media (min-width: 814px) {
  .table th,
  .table td {
    padding: 2.75rem;
  }
  h3 {
    padding-top: 2rem;
  }
  .remove-product {
    display: block;
    text-align: center;
    border-radius: 50%;
    background: transparent;
    font-size: 30px;
    border: none;
    color: $mellow;
  }
  .buttons {
    margin-left: 2rem;
  }
}
</style>
