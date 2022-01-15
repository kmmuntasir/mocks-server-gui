import storage from './storage'

export default {
  getAll: () => {
    return storage.getObject('customMocks') ?? []
  },
  setAll: (customMocks) => {
    storage.setObject('customMocks', customMocks)
  },
  add: (customMock) => {
    const customMocks = this.getAll()
    customMocks.push(customMock)
    this.setAll(customMocks)
  },
  delete: (customMock) => {
    const customMocks = this.getAll()
    const index = customMocks.indexOf(customMock)
    if (index > -1) {
      customMocks.splice(index, 1)
    }
    this.setAll(customMocks)
  },
  getActiveId: () => {
    return storage.get('activeCustomMockId')
  }
}
