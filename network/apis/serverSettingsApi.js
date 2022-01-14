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
  },
  async updateSettings (settings) {
    return await this.api.call({
      apiRoute: ApiRoute.updateServerSettings,
      data: settings
    })
  }
}
