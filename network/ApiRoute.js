import ApiConstants from '../constants/ApiConstants'

export default {
  getServerVersion: {
    url: '/about/',
    method: ApiConstants.GET
  },
  getServerSettings: {
    url: '/settings/',
    method: ApiConstants.GET
  },
  updateServerSettings: {
    url: '/settings/',
    method: ApiConstants.PATCH
  },
  getListOfMocks: {
    url: '/mocks/',
    method: ApiConstants.GET
  },
  getSingleMock: (mockId) => {
    return {
      url: `/mocks/${mockId}/`,
      method: ApiConstants.GET
    }
  },
  getListOfRoutes: {
    url: '/routes/',
    method: ApiConstants.GET
  },
  getSingleRoute: (routeId) => {
    return {
      url: `/routes/${routeId}/`,
      method: ApiConstants.GET
    }
  },
  getListOfRoutesVariants: {
    url: '/routes-variants/',
    method: ApiConstants.GET
  },
  getSingleRouteVariants: (variantId) => {
    return {
      url: `/routes-variants/${variantId}/`,
      method: ApiConstants.GET
    }
  },
  getCurrentlyAppliedCustomRoutesVariants: {
    url: '/mock-custom-routes-variants/',
    method: ApiConstants.GET
  },
  applyCustomRouteVariant: {
    url: '/mock-custom-routes-variants/',
    method: ApiConstants.POST
  },
  resetCurrentlyAppliedCustomRoutesVariants: {
    url: '/mock-custom-routes-variants/',
    method: ApiConstants.DELETE
  }
}
