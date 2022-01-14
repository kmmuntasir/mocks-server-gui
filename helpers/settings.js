import storage from './storage'

export default {
  update: (settings) => {
    for (const [key, value] of Object.entries(settings)) {
      storage.set(key, value)
    }
  },
  getCurrentMock: () => {
    return storage.get('mock')
  }
}
