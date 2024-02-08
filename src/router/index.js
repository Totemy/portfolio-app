import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/MainPage.vue';
import AboutMePage from "@/components/AboutMePage.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import ContactMe from "@/components/ContactMe.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: AboutMePage
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage
    },
    {
        path: '/contact-me',
        name: 'Contact Me',
        component: ContactMe
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router
