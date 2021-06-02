## 使用

安装完本组件库之后在main.js中引入样式文件
```
import 'g-weui/package/lib/g-weui.css'
```

Vue单文件组件中使用

```
<template>
  <Button>按钮</Button>
</template>

<script>
import {Button} from 'g-weui'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>
```

下一节：[组件](#/doc/get-started)
