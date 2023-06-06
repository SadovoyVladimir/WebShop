import httpService from './http.service'

const categoryEndpoint = 'category/'

const categoriesService = {
  get: async () => {
    const { data } = await httpService.get(categoryEndpoint)
    return data
  },
  create: async payload => {
    const { data } = await httpService.post(categoryEndpoint, payload)
    return data
  }
}

export default categoriesService
