import Dialog from './Dialog.vue'
import { createApp, h} from 'vue'
export default (options) => {
  const { title, content, maskClosable, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render () {
      // h 第一个参数是组件 第二个是属性，第三个是solt
      return h(Dialog,
        {
          visible:true,
          'onUpdate:visible': (newVisible) => {
            if (!newVisible){
              app.unmount(div)
              div.remove()
            }
          },
          cancel,
          ok
        },
        {
          title, content ,maskClosable
        }
      )
    }
  }
  )
  app.mount(div)
}