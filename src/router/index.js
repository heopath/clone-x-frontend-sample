import DemoPage from "@/views/DemoPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./MainPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component:LoginPage
        },
        {
            path: '/demo',
            component: DemoPage
        },
        {
            path: '/login',
            component:LoginPage
        },
        {
            path: '/signup',
            component:SignUpPage
        },
        {
            path: '/main',
            component: MainPage
        }
    ]
})

export default router;