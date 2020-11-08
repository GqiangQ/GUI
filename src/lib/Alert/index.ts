import { createApp, h, onUnmounted} from 'vue'
import Alert from './Alert.vue'
const alert = (options) => {
  let gAlertWrap = document.querySelector('.g-alert-wrap')
  if(!gAlertWrap) {
    gAlertWrap = document.createElement('div')
    gAlertWrap.setAttribute('class','g-alert-wrap')
    document.body.insertBefore(gAlertWrap,document.body.firstElementChild); 
  }
  const div = document.createElement('div')
  div.setAttribute('class','g-alert')
  gAlertWrap.appendChild(div)
  // document.body.insertBefore(div,document.body.firstElementChild); 
  const app = createApp({
    render () {
      // h 第一个参数是组件 第二个是属性，第三个是solt
      return h(Alert,
        {
          ...options,
          visible:true,
          'onUpdate:visible': (newVisible) => {
            if (!newVisible){
              app.unmount(div)
              div.remove()
            }
          },
        }
      )
    },
    // mounted() {
    // },
    // updated(){
    //   visible:()=>{
    //     console.log('updated')
    //   app.unmount(div)
    //   }
      
    // },
    // beforeCreate (){
    //   console.log('beforeCreate')
    // },
    // onBeforeUnmount () {
    //   console.log('onBeforeUnmount')
    // }
  }
  )
  console.log(app)
  app.mount(div)
}

alert.success = (a)=>{
  console.log(a)
}
alert.wraning = (a)=>{
  console.log(a)
}
alert.info = (a)=>{
  console.log(a)
}
alert.error = (a)=>{
  console.log(a)
}
export default alert
