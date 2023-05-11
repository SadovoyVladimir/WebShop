import httpService from './http.service'

const categoryEndpoint = 'category/'

const categoriesService = {
  get: async () => {
    const { data } = await httpService.get(categoryEndpoint)
    return data
  }
}

export default categoriesService
