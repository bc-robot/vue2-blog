import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import routes from './routes'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import Velocity from 'velocity-animate/velocity.min.js'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)


global.Velocity = Velocity

var router = new VueRouter({
  // mode: 'history',
  routes: routes
});

// router.beforeEach((to, from, next) => {}).afterEach(route => {})

router.afterEach($route => {
  if(['login','register'].indexOf($route.name) > -1) {
    Velocity($('#banner').find('img'), { width:'430px', fontSize: '1.4em', rotateY: "360deg"}, { duration: 1000 })
  }else {
    Velocity($('#banner').find('img'), { width:'100%', fontSize: '1.4em', rotateY: "0deg" }, { duration: 1000 })
  }
})

// router.beforeEach((to, from, next) => {
//   console.log('i am in globaly');
//   console.log(to, from);
//   next()
//   // if(this.$route.path == '/register' || this.$route .path == '/login') {
//   //   Velocity($(this.$el).find('img'), { height: '160px',width:'430px', fontSize: '1.4em' }, { duration: 3000 })
//   // }
//   // next()
// })

// router.beforeEach((to, from, next) => {
  // if(to.matched.some(record => record.meta.requiresAuth)) {
  //   if(!true) {
  //     next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     })
  //   }else {
  //     next()
  //   }
  // }
// })

// router.afterEach(route => {
//   console.log(route, 'after each!')
// })

/* eslint-disable no-new */
// 这灵活得亮瞎了
/*new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});

 new Vue(Vue.util.extend({
   router
 }, App)).$mount('#app');

new Vue({
  el:'#app',
  router,
  render:h => h(App)
});*/

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
