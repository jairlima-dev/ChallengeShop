<template>

  <div class="flex q-px-lg content-start">
    <div v-for="product in source" :key="product.id" class="q-pa-sm">
      <q-card
        class="full-width q-ma-md q-pb-xs column full-height"
        style="max-width: 270px; max-height: 360px"
      >
        <q-card-section class="q-py-md q-px-lg col-auto">
          <q-img v-if="product.images"
            :src="`http://localhost:8000/storage/${product.images[0].image}`"
            style="max-width: 220px; height: 150px"
            fit="contain"
          />
        </q-card-section>
        <q-card-section class="q-px-md q-py-sm col">
          <div class="text-subtitle1 text-bold ellipsis-2-lines">{{ product.name }}</div>
          <div class="text-caption ellipsis-2-lines">{{ product.description }}</div>
        </q-card-section>

        <q-separator/>

        <div class="row justify-between col-auto">
          <q-card-section class="q-pa-sm">
            <div class="col text-h6 q-pl-sm">
              {{ product.price.toLocaleString('pt-pt',{style: 'currency', currency: 'EUR'}) }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn
              rounded
              no-caps
              label="Comprar"
              v-if="!isInCart(product)"
              @click="setProductsInCart(product)"
              icon="add_shopping_cart"
              color="primary"
              class="q-py-lg"
            />
            <q-btn
              rounded
              no-caps
              label="Remover"
              v-else
              @click="removeFromCart(product)"
              icon="remove_shopping_cart"
              color="grey"
              class="q-py-lg"
            />
          </q-card-actions>
        </div>

      </q-card>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ShopCard',

  props: {
    source: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters('products', [
      'productsInCart',
      'productsLoading'
    ])
  },

  methods: {
    ...mapActions('products', [
      'setProductsInCart',
      'removeProductsFromCart'
    ]),

    isInCart (product) {
      return this.productsInCart.find(item => item.id === product.id)
    },

    removeFromCart (product) {
      this.$q.notify({
        position: 'top',
        message: 'Remover o item do Carrinho?',
        color: 'blue',
        timeout: 0,
        icon: 'fas fa-check',
        actions: [
          { label: 'Sim', color: 'white', handler: () => { this.removeProductsFromCart(product) } },
          { label: 'Não', color: 'yellow', handler: () => { } }
        ]
      })
    }
  }
}
</script>
