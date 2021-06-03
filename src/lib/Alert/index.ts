import { createApp, h, onUnmounted } from 'vue'
import Alert from './Alert.vue'
const alert = (options) => {
  let gAlertWrap = document.querySelector('.g-alert-wrap')
  if (!gAlertWrap) {
    gAlertWrap = document.createElement('div')
    gAlertWrap.setAttribute('class', 'g-alert-wrap')
    document.body.insertBefore(gAlertWrap, document.body.firstElementChild)
  }
  const div = document.createElement('div')
  // div.setAttribute('class','g-alert')
  // gAlertWrap.appendChild(div)
  document.body.insertBefore(div, document.body.firstElementChild)
  const app = createApp({
    render() {
      // h 第一个参数是组件 第二个是属性，第三个是solt
      return h(Alert, {
        ...options,
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (!newVisible) {
            app.unmount(div)
            div.remove()
            if (!gAlertWrap.childElementCount) {
              gAlertWrap.remove()
            }
          }
        }
      })
    }
  })
  app.mount(div)
}

alert.success = (options) => {
  alert({ type: 'success', ...options })
}
alert.wraning = (options) => {
  alert({ type: 'wraning', ...options })
}
alert.info = (options) => {
  alert({ type: 'info', ...options })
}
alert.error = (options) => {
  alert({ type: 'error', ...options })
}
export default alert
