import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: 'main'
}, {
  path: '/main',
  name: 'main'
}]

export default routes