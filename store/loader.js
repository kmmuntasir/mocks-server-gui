import ApiConstants from '../constants/ApiConstants'

export const state = () => ({
  loading: false,
  countdown: null,
  timedOut: false
})

export const mutations = {
  show (state) {
    state.loading = true
    state.countdown = setTimeout(
      function () {
        state.timedOut = true
      },
      ApiConstants.TIMEOUT * 1000
    )
  },
  hide (state) {
    state.loading = false
    clearTimeout(state.countdown)
    state.countdown = null
    state.timedOut = false
  }
}
