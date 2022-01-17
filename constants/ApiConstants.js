export default {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  TIMEOUT: 30,
  DEFAULT_AXIOS_CONFIG () {
    return {
      url: '',
      method: this.GET,
      headers: {
        Accept: 'application/json'
      },
      params: null,
      data: null,
      timeout: this.TIMEOUT * 1000,
      validateStatus (status) {
        return status >= 200 && status < 300 // default
      },
      cancelToken: null
    }
  }
}
