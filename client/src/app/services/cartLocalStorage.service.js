const CART_KEY = 'cart'

function getCartInfo() {
  const allProducts = localStorage.getItem(CART_KEY)
  if (!allProducts) return null
  return JSON.parse(allProducts)
}

function addProductsToStorage(products) {
  if (!products.length) return localStorage.removeItem(CART_KEY)
  localStorage.setItem(CART_KEY, JSON.stringify(products))
}

function addProductIdToStorage(_id) {
  let allProducts = getCartInfo()
  if (!allProducts) allProducts = []

  if (!allProducts.filter(p => p._id === _id).length) {
    allProducts.push({ _id, count: 1 })
  } else {
    allProducts.map(p => p._id === _id && ++p.count)
  }

  addProductsToStorage(allProducts)
}

function subProductFromStorage(_id) {
  let allProducts = getCartInfo()
  allProducts.map(p => p._id === _id && --p.count)
  allProducts = allProducts.filter(p => p.count !== 0)

  addProductsToStorage(allProducts)
}

function deleteProductFromStorage(_id) {
  let allProducts = getCartInfo()
  allProducts = allProducts.filter(p => p._id !== _id)

  addProductsToStorage(allProducts)
}

function clearCart() {
  localStorage.removeItem(CART_KEY)
}

const cartLocalStorageService = {
  getCartInfo,
  addProductIdToStorage,
  subProductFromStorage,
  deleteProductFromStorage,
  clearCart
}

export default cartLocalStorageService
