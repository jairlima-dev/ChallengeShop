<template>
  <q-page>
    <div class="row full-width justify-between start-end q-pt-md q-px-md">
      <span class="text-h5 text-weight-bold">Seu carrinho</span>
      <q-btn
        flat
        dense
        rounded
        color="secondary"
        icon="add_shopping_cart"
        label="Voltar"
        class="q-ml-lg align-right"
        @click="this.$router.push('/')"
      />
    </div>

    <div class="row full-width justify-end q-pt-md q-pr-lg">
      <span class="flex text-h6 text-weight-bold">
        Total:
        {{ productsTotal() }}
      </span>
    </div>

    <shop-card :source="productsInCart"/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import ShopCard from '../components/ShopCard.vue'

export default defineComponent({
  components: { ShopCard },
  name: 'PageIndex',

  computed: {
    ...mapGetters('products', [
      'productsInCart'
    ])

  },

  methods: {
    ...mapActions('products', [
      'removeProductsFromCart',
      'getCart'
    ]),

    productsTotal () {
      let total = 0
      this.productsInCart.forEach(item => {
        total += item.price * item.quantity
      })
      return total.toLocaleString('pt-pt', { style: 'currency', currency: 'EUR' })
    }
  },

  beforeMount () {
    this.getCart()
  }

})
</script>
