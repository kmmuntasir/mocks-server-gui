import storage from './storage'

export default {
  update: (settings) => {
    for (const [key, value] of Object.entries(settings)) {
      storage.set(key, value)
    }
  },
  readServerSettingsFromMemory () {
    const readKeyList = [
      'cors',
      'corsPreFlight',
      'delay',
      'path'
    ]
    const settings = {}
    readKeyList.forEach((key) => {
      const value = storage.get(key)
      if (value) {
        settings[key] = value
      }
    })
    return settings
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
