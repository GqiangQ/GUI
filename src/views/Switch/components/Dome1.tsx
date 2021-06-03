import Use from './use.md'
import { ref } from 'vue'
import Switch from '../../../lib/Switch.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  setup(props) {
    const value = ref(true)

    return () => (
      <>
        <demo>常规用法</demo>
        <template>
          <Switch value={value}/>
        </template>
      </>
    )
  }
})
