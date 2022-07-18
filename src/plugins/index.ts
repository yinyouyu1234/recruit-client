import getLocale from '../assets/lang/locale'

export default {
  install (app: any) {
    console.log(app)
    app.directive('img', {
      mounted(el: any, binding: any, vnode: any, prevVnode: any) {
        const { value } = binding
        el.src = value[getLocale()]
        console.log(getLocale(), value, el, binding, vnode, prevVnode)
      }
    })
  }
}