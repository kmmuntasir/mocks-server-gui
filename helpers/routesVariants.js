import storage from './storage'

export default {
  setActiveVariants: (variants) => {
    storage.setObject('activeVariants', variants)
  }
}
