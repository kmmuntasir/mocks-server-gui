import storage from './storage'

export default {
  setActiveVariants: (variants) => {
    storage.setObject('activeVariants', variants)
  },
  getActiveVariants: () => {
    return storage.getObject('activeVariants')
  },
  getRouteAndVariantFromRouteId (routeId) {
    const routeAndVariant = routeId.split(':')
    return {
      route: routeAndVariant[0],
      variant: routeAndVariant[1]
    }
  },
  apply (variantId) {
    const activeVariants = this.getActiveVariants()
    const route = this.getRouteAndVariantFromRouteId(variantId).route
    const idx = activeVariants.findIndex(element => element.includes(route))
    if (idx !== -1) {
      activeVariants.splice(idx, 1)
    }
    activeVariants.push(variantId)
    this.setActiveVariants(activeVariants)
  },
  applyMultipleVariants (variantIds) {
    variantIds.forEach((variantId) => {
      this.apply(variantId)
    })
  }
}
