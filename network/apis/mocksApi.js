import BaseApi from '../BaseApi'
import ApiRoute from '../ApiRoute'

export default {
  api: BaseApi,
  async fetchMocksList () {
    return await this.api.call({
      apiRoute: ApiRoute.getListOfMocks
    })
  }
}
