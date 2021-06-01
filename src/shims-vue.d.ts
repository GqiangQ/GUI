declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
declare module "*.md" {
  const value: any;
  export default value;
}
// declare module "*.vue" {
//   import Vue from 'vue'
//   export default Vue
// }

// declare module "*.md" {
//   import Vue from 'vue'
//   export default Vue
// }