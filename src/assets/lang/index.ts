import { createI18n } from 'vue-i18n'
import getLocale from './locale'
import zh from './package/zh'
import en from './package/en'
import vi from './package/vi'
import tc from './package/tc'
const messages = {
  zh,
  vi,
  tc,
  en
}
const i18n = createI18n({
  locale: getLocale(), // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: 'en', // 设置备用语言
  messages, 
})
export default i18n