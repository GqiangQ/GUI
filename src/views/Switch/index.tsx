import Use from './use.md'
import Demo1 from './components/Dome1.tsx'
import CodeCard from '../Card.vue'
import md1 from './components/demo1.md'

import { defineComponent } from 'vue'
export default defineComponent({
  setup(props) {
    return () => (
      <>
      <h1>Switch 组件示例</h1>
      <CodeCard  component={Demo1} describe={md1}/>
        <div class="title">props.pageTitle</div>
        <Use/>
      </>
    )
  }
})
