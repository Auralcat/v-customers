// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  // / is the base of the website. It's set to the Customers component.
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About}
  ]
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <router-link to="/about">This is the About section</router-link>
      <router-view></router-view>
    </div>
`
}).$mount('#app')
