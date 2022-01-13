import SystemConstants from '../constants/SystemConstants'
import Locale from '../constants/Locale'

export const state = () => ({
  visible: false,
  message: {
    title: Locale.TOAST_TITLE,
    text: Locale.TOAST_TEXT,
    variant: SystemConstants.TOAST_VARIANT,
    autoHide: true
  }
})

export const mutations = {
  show (state, message) {
    if (message.title) { state.message.title = message.title }
    if (message.text) { state.message.text = message.text }
    if (message.variant) { state.message.variant = message.variant }
    if (message.autoHide !== undefined) { state.message.autoHide = message.autoHide }
    state.visible = true
  },
  hide (state) {
    state.visible = false
  },
  reset (state) {
    state.message.title = Locale.TOAST_TITLE
    state.message.text = Locale.TOAST_TEXT
    state.message.variant = SystemConstants.TOAST_VARIANT
    state.message.autoHide = true
  }
}

export const actions = {
  show (state, message) {
    state.commit('show', message)
  },
  hide (state) {
    state.commit('hide')
    state.commit('reset')
  }
}
