<template>
  <q-page class="q-pa-md">
    <div class="row full-width justify-between q-px-sm">
      <span class="text-h5 text-weight-bold">
        Seu carrinho
      </span>
      <span @click="this.$router.push('/')" class="text-subtitle2 text-secondary cursor-pointer">
       <q-btn flat dense round icon="add_shopping_cart"/>
        Voltar às compras
      </span>
    </div>

    <div class="row justify-end q-pt-md q-pr-sm">
      <span class="text-h6 text-weight-bold">
        Total:
        {{ productsTotal() }}
      </span>
    </div>

    <div v-for="product in productsInCart" :key="product.id" class="q-pa-sm">
      <q-card
        class="full-width q-mb-xs column full-height"
        style="max-height: 450px; max-width: 980px"
      >
        <q-card-section horizontal>
          <q-card-section class="q-py-md q-px-lg col-auto">
            <q-carousel
              animated
              v-model="slide"
              arrows
              navigation
              infinite
              style="width: 220px; height: 150px"
            >
              <q-carousel-slide
                v-for="(image, index) in product.images"
                :key="index"
                :name="index"
                :img-src="image"
              />
            </q-carousel>
          </q-card-section>
          <q-card-section class="q-px-md q-py-sm col">
            <div class="text-subtitle1 text-bold ellipsis-2-lines">{{ product.name }}</div>
            <div class="text-caption ellipsis-2-lines">{{ product.description }}</div>
          </q-card-section>

          <q-separator/>

          <q-card-section class="q-pa-sm justify-center">
            <div class="col text-h6 q-pl-sm">
              <q-btn
                :disabled="product.quantity <= 1"
                @click="product.quantity++"
                dense
                round
                icon="remove"
              />
                {{ product.quantity }}
              <q-btn
                @click="product.quantity++"
                dense
                round
                icon="add"
              />
                {{ product.price
                  .toLocaleString('pt-pt',{
                    style: 'currency',
                    currency: 'EUR'
                  })
                }}
            </div>
            <div class="row justify-center col-auto">
              <q-card-actions>
                <q-btn
                  rounded
                  no-caps
                  label="Remover"
                  @click="removeFromCart(product)"
                  icon="remove_shopping_cart"
                  color="grey"
                  class="q-py-lg"
                />
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    return {
      slide: ref(1)
    }
  },

  computed: {
    ...mapGetters('products', [
      'productsInCart'
    ])

  },

  methods: {
    ...mapActions('products', [
      'removeProductsFromCart'
    ]),

    removeFromCart (product) {
      this.$q.notify({
        position: 'top',
        message: 'Deseja remover o item do Carrinho?',
        color: 'blue',
        timeout: 0,
        icon: 'fas fa-check',
        actions: [
          { label: 'Sim', color: 'white', handler: () => { this.removeProductsFromCart(product) } },
          { label: 'Não', color: 'yellow', handler: () => { } }
        ]
      })
    },

    productsTotal () {
      let total = 0
      this.productsInCart.forEach(item => {
        total += item.price * item.quantity
      })
      return total.toLocaleString('pt-pt', { style: 'currency', currency: 'EUR' })
    }
  }

})
</script>
