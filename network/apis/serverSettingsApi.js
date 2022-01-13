import BaseApi from '../BaseApi'
import ApiRoute from '../ApiRoute'

export default {
  api: BaseApi,
  async fetchServerVersion () {
    return await this.api.call({
      apiRoute: ApiRoute.getServerVersion
    })
  },
  async fetchSettings () {
    return await this.api.call({
      apiRoute: ApiRoute.getServerSettings
    })
  }
}
