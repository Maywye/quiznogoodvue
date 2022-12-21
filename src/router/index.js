import Vue from 'vue'
import VueRouter from "vue-router";
import NotFound from '../views/NotFound.vue';
import ContactForm from '../views/ContactForm.vue';
import TheHome from '../views/TheHome.vue';
import LoginSignin from '../views/LoginSignin.vue';
import TheProfile from '../views/TheProfile.vue';
import AboutUs from '../views/AboutUs.vue';
import CGU from '../views/CGU.vue';


Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'Thehome', component: TheHome, alias: '/home', meta: {authorize: false}},
    {path: '/contact', name: 'ContactForm', component: ContactForm, meta: {authorize: false}},
    {path: '/connexion', name: 'LoginSignin', component: LoginSignin, meta: {authorize: true},  beforeEnter: (to, from, next) => {
        if(localStorage.getItem('userId')){
            return next('/profile')
        }else next()
    }},
    {path: '/profile', name: 'TheProfile', component: TheProfile, meta: {authorize: true},  beforeEnter: (to, from, next) => {
        if(!localStorage.getItem('userId')){
            console.log("if");
            return next('/connexion')
        }else next()
    }},
    {path: '/AboutUs', name: 'AboutUs', component: AboutUs, meta: {authorize: false}},
    {path: '/CGU', name: 'CGU', component: CGU, meta: {authorize: false}},
    {path: '*', name: 'NotFound', component: NotFound, meta: {authorize: false}}
]


const router = new VueRouter({
    mode: 'history',
    routes
})


export default router