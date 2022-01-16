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
  compareSettingsWithMemory (newSettings) {
    const currentSettings = this.readServerSettingsFromMemory()
    const keys1 = Object.keys(currentSettings)
    const keys2 = Object.keys(newSettings)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      if (currentSettings[key] !== newSettings[key]) {
        return false
      }
    }
    return true
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
      'activeVariants',
      'customMocks',
      'activeCustomMockId'
    ]
    settingsKeyList.forEach((key) => {
      storage.remove(key)
    })
  }
}
