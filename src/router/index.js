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
    {path: '/', name: 'Thehome', component: TheHome, alias: '/home'},
    {path: '/contact', name: 'ContactForm', component: ContactForm},
    {path: '/connexion', name: 'LoginSignin', component: LoginSignin},
    {path: '/profile', name: 'TheProfile', component: TheProfile},
    {path: '/AboutUs', name: 'AboutUs', component: AboutUs},
    {path: '/CGU', name: 'CGU', component: CGU},
    {path: '*', name: 'NotFound', component: NotFound}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router