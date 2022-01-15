import axios from 'axios'
import ApiConstants from '../constants/ApiConstants'
import application from '../helpers/application'

export default {
  config: ApiConstants.DEFAULT_AXIOS_CONFIG(),
  resetConfig () {
    this.config = ApiConstants.DEFAULT_AXIOS_CONFIG()
  },
  async call ({
    apiRoute,
    data = null,
    urlParam = ''
  } = {}) {
    this.config.baseURL = `${application.getSettings().baseUrl}${application.getSettings().adminPath}`
    this.config.url = apiRoute.url + urlParam
    const response = {
      success: false,
      data: null,
      error: null
    }
    try {
      const apiResponse = await this.executeRequest(apiRoute.method, data)
      response.success = true
      response.data = apiResponse
      response.error = null
    } catch (err) {
      response.success = false
      response.data = null
      response.error = this.handleError(err)
    }

    return response
  },
  handleError (err) {
    return err
  },
  async executeRequest (method, data) {
    this.config.method = method
    switch (method) {
      case ApiConstants.GET:
        this.config.params = data
        this.config.data = null
        break
      case ApiConstants.POST:
        this.config.data = data
        this.config.params = null
        break
      case ApiConstants.PUT:
        this.config.data = data
        this.config.params = null
        break
      case ApiConstants.PATCH:
        this.config.data = data
        this.config.params = null
        break
      case ApiConstants.DELETE:
        this.config.data = null
        this.config.params = null
        break
      default:
        return null
    }
    const res = await axios(
      this.config
    )
    return res.data
  }
}
