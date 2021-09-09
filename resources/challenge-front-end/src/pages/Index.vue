<template>
  <q-page class="flex q-pa-lg content-start">
    <div class="row full-width justify-between q-px-sm">
      <span class="text-h5 text-weight-bold">
        Lista de Produtos
      </span>
    </div>

    <div v-for="product in products" :key="product.id" class="q-px-sm">
      <q-card
        class="full-width q-ma-md q-pb-xs column full-height"
        style="max-width: 270px; max-height: 360px"
      >
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
      'products',
      'productsInCart',
      'productsLoading'
    ])
  },

  methods: {
    ...mapActions('products', [
      'getProducts',
      'getCart',
      'setProductsInCart',
      'removeProductsFromCart'
    ]),

    isInCart (product) {
      return this.productsInCart.find(item => item.id === product.id)
    },

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
    }
  },

  beforeMount () {
    this.getProducts()
    this.getCart()
  }
})

// {
//   id: 1,
//   name: 'Smartphone Motorola Moto G30 128GB White Lilac 4G',
//   description: '4GB RAM Tela 6,5” Câm. Quádrupla + Selfie G30 128GB White Lilac 4G',
//   price: 25197.54,
//   images: [
//     'https://image.freepik.com/fotos-gratis/fones-de-ouvido-sem-fio-em-fundo-amarelo_176402-7160.jpg',
//     'https://thumbs.dreamstime.com/z/fones-de-ouvido-sem-fio-modernos-azuis-no-fundo-amarelo-123108542.jpg',
//     'https://thumbs.dreamstime.com/z/fones-de-ouvido-sem-fio-modernos-azuis-com-um-telefone-celular-no-fundo-alaranjado-vermelho-escuta-o-conceito-da-m%C3%BAsica-123108553.jpg'
//   ]
// },
// {
//   id: 2,
//   name: 'iPhone 11 Apple 64GB Amarelo',
//   description: 'Grave vídeos 4K, faça belos retratos',
//   price: 249,
//   images: [
//     'https://cdn.quasar.dev/img/parallax1.jpg',
//     'https://cdn.quasar.dev/img/mountains.jpg',
//     'https://cdn.quasar.dev/img/parallax2.jpg'
//   ]
// },
// {
//   id: 3,
//   name: 'iPhone XR Apple 64GB Preto 6,1” 12MP iOS',
//   description: 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo',
//   price: 549.9,
//   images: [
//     'https://cdn.quasar.dev/img/mountains.jpg',
//     'https://cdn.quasar.dev/img/parallax1.jpg',
//     'https://cdn.quasar.dev/img/parallax2.jpg'
//   ]
// },
// {
//   id: 4,
//   name: 'Jaqueta de couro masculina em couro',
//   description: 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo',
//   price: 200,
//   images: [
//     'https://cdn.quasar.dev/img/mountains.jpg',
//     'https://cdn.quasar.dev/img/parallax1.jpg',
//     'https://cdn.quasar.dev/img/parallax2.jpg'
//   ]
// },
// {
//   id: 6,
//   name: 'Smartphone Motorola Moto E6i 32GB Cinza Titanium',
//   description: '4G 2GB RAM Tela 6,1” Câm. Dupla + Selfie 5MP Moto E6i 32GBDupla + Selfie 5MP Moto E6i 32GB',
//   price: 200,
//   images: [
//     'https://cdn.quasar.dev/img/mountains.jpg',
//     'https://cdn.quasar.dev/img/parallax1.jpg',
//     'https://cdn.quasar.dev/img/parallax2.jpg'
//   ]
// },
// {
//   id: 7,
//   name: 'iPhone 11 Apple 64GB Branco 6,1” 12MP iOS Moto E6i 32GB',
//   description: '',
//   price: 3000,
//   images: [
//     'https://cdn.quasar.dev/img/mountains.jpg',
//     'https://cdn.quasar.dev/img/parallax1.jpg',
//     'https://cdn.quasar.dev/img/parallax2.jpg'
//   ]
// }
</script>
