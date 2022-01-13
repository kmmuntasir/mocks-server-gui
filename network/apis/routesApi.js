import BaseApi from '../BaseApi'
import ApiRoute from '../ApiRoute'

export default {
  api: BaseApi,
  async fetchRoutesList () {
    return await this.api.call({
      apiRoute: ApiRoute.getListOfRoutes
    })
  }
}
