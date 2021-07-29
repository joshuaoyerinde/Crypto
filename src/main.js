import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate';
import myVuex  from './store/store';

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  // Vuelidate,
  store:myVuex ,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
