import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module'

Vue.use(Vuex)
const myVuex  = new Vuex.Store({
    modules:{
        modules
    }
})
export default myVuex;