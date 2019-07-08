import homepage from './components/homepage.vue'
import login from './components/login.vue'
import college from './components/college.vue'
import icollege from './components/icollege.vue'
import forum from './components/forum.vue'
import profile from './components/ProfilePage.vue'
import sprofile from './components/SearchProfile.vue'


//  router.beforeEach((to, from, next) => {
//    const currentUser = firebase.auth().currentUser;
//      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//      if (requiresAuth && !currentUser) next('/');
//     else if (!requiresAuth && currentUser) next('/profile');
//     else next();
//   });
export default[
    {path:'/', component: homepage },
    {path:'/login', component:login },
    {path:'/college', component: college },
    {path:'/icollege', component: icollege },
    {path:'/forum',component:forum 
    // ,meta: {
    //      requiresAuth: true,
    //      currentUser:true
    // }
},
    {path:'/profile',component:profile},
    {path:'/sprofile',component:sprofile}
]
