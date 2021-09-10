<template>
  <q-page>

    <shop-title title="Produtos em destaque"/>

    <shop-card :source="products" />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import ShopCard from '../components/ShopCard.vue'
import ShopTitle from '../components/ShopTitle.vue'

export default defineComponent({
  components: { ShopTitle, ShopCard },
  name: 'PageIndex',

  computed: {
    ...mapGetters('products', [
      'products'
    ])
  },

  methods: {
    ...mapActions('products', [
      'getProducts',
      'getCart'
    ])

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
//   name: 'Fone de ouvido over-ear sem fio Philco Wave PFO01B preto',
//   description: 'Fone de ouvido over-ear sem fio Philco Wave PFO01B preto, excelente surround play plus extra full',
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
