import storage from './storage'

export default {
  update: (settings) => {
    for (const [key, value] of Object.entries(settings)) {
      storage.set(key, value)
    }
  },
  getCurrentMock: () => {
    return storage.get('mock')
  },
  clear: () => {
    const settingsKeyList = [
      'version',
      'mock',
      'delay',
      'host',
      'port',
      'log',
      'cors',
      'corsPreFlight',
      'behavior',
      'pathLegacy',
      'watchLegacy',
      'path',
      'watch',
      'adminApiPath',
      'cli',
      'activeVariants'
    ]
    settingsKeyList.forEach((key) => {
      storage.remove(key)
    })
  }
}
