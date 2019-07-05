import homepage from './components/homepage.vue'
import login from './components/login.vue'
import college from './components/college.vue'
import icollege from './components/icollege.vue'
import forum from './components/forum.vue'
import profile from './components/ProfilePage.vue'
export default[
    {path:'/', component: homepage },
    {path:'/login', component:login },
    {path:'/college', component: college },
    {path:'/icollege', component: icollege },
    {path:'/forum',component:forum},
    {path:'/profile',component:profile}
]