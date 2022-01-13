import BaseApi from '../BaseApi'
import ApiRoute from '../ApiRoute'

export default {
  api: BaseApi,
  async fetchCustomVariantsList () {
    return await this.api.call({
      apiRoute: ApiRoute.getCurrentlyAppliedCustomRoutesVariants
    })
  },
  async applyCustomVariant (variantId) {
    return await this.api.call({
      apiRoute: ApiRoute.applyCustomRouteVariant,
      data: {
        id: variantId
      }
    })
  },
  async resetCustomVariants () {
    return await this.api.call({
      apiRoute: ApiRoute.resetCurrentlyAppliedCustomRoutesVariants
    })
  }
}
