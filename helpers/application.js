import serverSettingsApi from '../network/apis/serverSettingsApi'
import ApiConstants from '../constants/ApiConstants'
import Locale from '../constants/Locale'
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
  readSettingsFromConfigFile: () => {
    return {
      brandName: Locale.BRAND_NAME,
      baseUrl: ApiConstants.BASE_URL,
      adminPath: ApiConstants.ADMIN_PATH,
      loadedFromFile: true
    }
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
