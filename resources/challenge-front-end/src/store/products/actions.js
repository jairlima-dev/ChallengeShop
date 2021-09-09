import axios from 'axios'

export const getProducts = ({ commit }) => {
  commit('SET_LOADING', 'loading')
  axios.get('http://127.0.0.1:8000/api/products')
    .then(response => {
      commit('SET_PRODUCTS', response.data.data)
      commit('SET_LOADING', 'loaded')
    })
    .catch(function (error) {
      console.log('Error loading coupons')
      console.log(error.toJSON())
      commit('SET_LOADING', 'error')
    })
}
export const getCart = ({ commit }) => {
  if (localStorage.getItem('productsInCart')) {
    commit('SET_CART', JSON.parse(localStorage.getItem('productsInCart')))
  }
}

export const setProductsInCart = ({ commit }, product) => {
  commit('ADD_PRODUCTS_IN_CART', product)
}

export const removeProductsFromCart = ({ commit }, product) => {
  commit('REMOVE_PRODUCT_FROM_CART', product)
}

export const addQuantity = ({ commit }) => {
  commit('ADD_QUANTITY')
}
