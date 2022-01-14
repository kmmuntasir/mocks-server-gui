export default {
  get: (key) => {
    return localStorage.getItem(key)
  },
  getObject: (key) => {
    return JSON.parse(localStorage.getItem(key))
  },
  set: (key, value) => {
    localStorage.setItem(key, value)
  },
  setObject: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove: (key) => {
    localStorage.removeItem(key)
  }
}
