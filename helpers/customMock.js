import storage from './storage'
import routesVariants from './routesVariants'

export default {
  getAll: () => {
    return storage.getObject('customMocks') ?? []
  },
  setAll: (customMocks) => {
    storage.setObject('customMocks', customMocks)
  },
  add (customMock) {
    // ToDo: Check if same custom mock already exists
    // ToDo: Check if the custom mock name conflicts with any real mock
    const customMocks = this.getAll()
    customMocks.push(customMock)
    this.setAll(customMocks)
  },
  delete (customMock) {
    const customMocks = this.getAll()
    const index = customMocks.findIndex(mock => mock.id === customMock.id)
    if (index > -1) {
      customMocks.splice(index, 1)
    }
    this.setAll(customMocks)
    if (customMock.id === this.getActiveId()) {
      this.removeActiveId()
    }
  },
  apply (mock) {
    this.setActiveId(mock.id)
    routesVariants.applyMultipleVariants(mock.routesVariants)
  },
  setActiveId (id) {
    storage.set('activeCustomMockId', id)
  },
  getActiveId: () => {
    return storage.get('activeCustomMockId')
  },
  removeActiveId: () => {
    storage.remove('activeCustomMockId')
  }
}
