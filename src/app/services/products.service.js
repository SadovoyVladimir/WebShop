import httpService from './http.service'

const productEndpoint = 'product/'

const productsService = {
  get: async () => {
    const { data } = await httpService.get(productEndpoint)
    return data
  }
}

export default productsService
