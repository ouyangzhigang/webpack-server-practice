import Main from './main'
import Vue from 'vue'
import routes from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  name: 'name'
})

new Vue({
  store
})
console.log('这个模块叫做：', Main.name)