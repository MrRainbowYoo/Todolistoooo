import Vue from 'vue'
import App from './App.vue'
import './assets/css/iconfont.css'
import { Message } from './components/message.js'

Vue.config.productionTip = false
// Vue.use(Message)
Vue.prototype.$message = Message

new Vue({
  render: h => h(App),
}).$mount('#app')
