/**
 * Created by kevin on 16/12/15.
 */
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import LogTime from './components/LogTime.vue'
import NotFound from './components/404'

const User = {
    // http://localhost:3000/#/user/1b2#abc?aa=bb
    // template: '<div>User{{$route.params.id}} {{$route.hash}} {{$route.query}}<div> <router-link to="/user/121">user121</router-link>',
    template: `
    <div class="user">
      <h2>User </h2>
      <h1>111{{$route.params.id}}</h1>
      <router-view></router-view>
    </div>
  `,
    watch: {
        '$route' (to, from) {
            console.log(to, from)
        }
    }
}

export default [
    {
        path: '/user/:id',
        component: User,
        // beforeEnter: (to, from, next) => {
        //
        // },
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                template: '<div>this is profile - -!</div>'
            }
            // ,
            // {
            //     // 当 /user/:id/posts 匹配成功
            //     // UserPosts 会被渲染在 User 的 <router-view> 中
            //     path: 'posts',
            //     // component: UserPosts
            // }
        ]
    },
    // {
    //     path: '/auth',
    //     // component: Foo
    //     template: '<div>this is auth</div>',
    //     meta: { requiresAuth: true}
    // },
    // // {
    // //     path: '/a',
    // //     component: A,
    // //     alias: '/b'
    // // },
    // {
    //     path: '/redirect',
    //     redirect: '/redirect1'
    //     // redirect: { name: 'foo'}
    //     // redirect:: to => {}
    // },
    {
        path: '/',
        // components: {
        //     default: Home,
        //     a: Bar,
        //     b: for
        // }
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        // components: {
        //     default: Home,
        //     a: Bar,
        //     b: for
        // }
        component: Login
    },
    // {
    //     path: '/home',
    //     component: Home
    // },
    {
        path: '/time-entries',
        component: TimeEntries,
        children: [{
            path: 'log-time',
            component: LogTime,
        }]
    },
    {
        path: '*',
        component: NotFound
    }
]