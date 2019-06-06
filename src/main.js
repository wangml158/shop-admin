import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

// 1.
import Element from 'element-ui'
// 2.
Vue.use(Element);

// 2.引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
