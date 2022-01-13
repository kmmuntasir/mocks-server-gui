import ApiConstants from '../constants/ApiConstants'

export default {
  getServerVersion: {
    url: '/admin/about/',
    method: ApiConstants.GET
  },
  getServerSettings: {
    url: '/admin/settings/',
    method: ApiConstants.GET
  },
  updateServerSettings: {
    url: '/admin/settings/',
    method: ApiConstants.PATCH
  },
  getListOfMocks: {
    url: '/admin/mocks/',
    method: ApiConstants.GET
  },
  getSingleMock: (mockId) => {
    return {
      url: `/admin/mocks/${mockId}/`,
      method: ApiConstants.GET
    }
  },
  getListOfRoutes: {
    url: '/admin/routes/',
    method: ApiConstants.GET
  },
  getSingleRoute: (routeId) => {
    return {
      url: `/admin/routes/${routeId}/`,
      method: ApiConstants.GET
    }
  },
  getListOfRoutesVariants: {
    url: '/admin/routes-variants/',
    method: ApiConstants.GET
  },
  getSingleRouteVariants: (variantId) => {
    return {
      url: `/admin/routes-variants/${variantId}/`,
      method: ApiConstants.GET
    }
  },
  getCurrentlyAppliedCustomRoutesVariants: {
    url: '/admin/mock-custom-routes-variants/',
    method: ApiConstants.GET
  },
  applyCustomRouteVariant: {
    url: '/admin/mock-custom-routes-variants/',
    method: ApiConstants.POST
  },
  resetCurrentlyAppliedCustomRoutesVariants: {
    url: '/admin/mock-custom-routes-variants/',
    method: ApiConstants.DELETE
  }
}
