import Vue from 'vue'
import App from './App.vue'

import '@/style/index.less'

// 完整的引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// @是某一个路径别名 src路径别名 在vue-cli创建的项目下才可以使用
// 目录下有默认的索引文件index.js，就是索引文件   .js  .vue  .json
import router from '@/router'

// 控制台提示信息，开发环境来提示，详细一些
Vue.config.productionTip = false

Vue.use(ElementUI)
// main.js的职责：1导入项目需要依赖的资源  2：创建一个根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
