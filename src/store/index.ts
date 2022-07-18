import { createStore } from 'vuex'
import i18n from '../assets/lang'
function getCacheFromStorage<T>(key: string, defaultValue: T): T {
  const cache = localStorage.getItem(key);
  return cache ? JSON.parse(cache) : defaultValue
}
export default createStore({
  state: {
    lang: getCacheFromStorage('lang', 'zh')
  },
  getters: {
  },
  mutations: {
    SET_GLOBAL_LANG: (state, lang) => {
      state.lang = lang
      i18n.global.locale = lang
      localStorage.setItem('lang', JSON.stringify(lang))
    }
  },
  actions: {
  },
  modules: {
  }
})
