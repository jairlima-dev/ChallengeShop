export const SET_PRODUCTS = (state, products) => {
  state.products = products
}

export const SET_CART = (state, products) => {
  state.productsInCart = products
}

export const SET_LOADING = (state, payload) => {
  state.loading = payload
}

export const ADD_PRODUCTS_IN_CART = (state, product) => {
  product.quantity = 1
  state.productsInCart.push(product)
  localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  const updatedCart = state.productsInCart.filter(item => item.id !== product.id)
  state.productsInCart = updatedCart
  localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
}
