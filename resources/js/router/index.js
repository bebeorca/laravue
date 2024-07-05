import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../components/HomeView.vue';
import ProfileView from '../components/ProfileView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;