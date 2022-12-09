import Vue from 'vue'
import VueRouter from "vue-router";
import NotFound from '../views/NotFound.vue';
import ContactForm from '../views/ContactForm.vue';
import TheHome from '../views/TheHome.vue';




Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'Thehome', component: TheHome, alias: '/home'},
    {path: '/contact', name: 'ContactForm', component: ContactForm},
    {path: '*', name: 'NotFound', component: NotFound}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router