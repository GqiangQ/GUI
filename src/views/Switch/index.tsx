import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <div class="title">{props.pageTitle}</div>
      </div>
    )
  },
})