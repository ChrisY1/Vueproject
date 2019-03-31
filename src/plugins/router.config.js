import Vue from 'vue';
import VueRouter from  'vue-router';
Vue.use(VueRouter)

import Home from '../components/Home'
import Category from '../components/Category'
import Detail from '../components/Detail'
import Search from '../components/Search'
import User from '../components/User'
import Login from '../components/Login'
import Reg from '../components/Reg'
import Findpwd from '@/components/Findpwd'
import SearchResult from '@/components/Search-result'
import List from '@/components/List'



import Errorr from '@/common/AppError'



let routes = [
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/detail/:id',component:Detail},
    // {path:'/detail',component:Detail},
    {path:'/list',component:List},
    {path:'/search',component:Search},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/findpwd',component:Findpwd},
    {path:'/searchresult',component:SearchResult},

    {path:'/',redirect:'/home'},
    {path:'*',component:Errorr}


];

let router = new VueRouter({
    mode:'history',
    routes
})

export default router;
