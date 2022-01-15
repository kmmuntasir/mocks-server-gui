import serverSettingsApi from '../network/apis/serverSettingsApi'
import storage from './storage'
import settings from './settings'

export default {
  updateSettings: (settings) => {
    storage.setObject('application', settings)
  },
  getSettings: () => {
    return storage.getObject('application')
  },
  removeSettings: () => {
    storage.remove('application')
    settings.clear()
  },
  async validateSettings (settings) {
    if (!settings) {
      settings = this.getSettings()
    }
    if (settings && settings.baseUrl && settings.adminPath) {
      this.updateSettings(settings)
      const response = await serverSettingsApi.fetchServerVersion()
      return response.success && response.data.version
    } else {
      return false
    }
  }
}
