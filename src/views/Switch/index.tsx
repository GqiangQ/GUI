import { defineComponent } from 'vue'
export default defineComponent({
  setup(props) {
    return () => (
      <>
      <h1>Switch 组件示例</h1>
        <div class="title">props.pageTitle</div>
      </>
    )
  }
})
