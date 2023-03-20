import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/components/MainPage";
import PageArrival from "@/views/PageArrival";
import PageOrders from "@/views/PageOrders";
import PageOptions from "@/views/PageOptions";
import PageProducts from "@/views/PageProducts";
import PageUsers from "@/views/PageUsers";
import PageProfile from "@/views/PageProfile";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'main-page',
            component: MainPage
        },
        {
            path: '/arrival',
            name: 'PageArrival',
            component: PageArrival
        },
        {
            path: '/orders',
            name: 'PageOrders',
            component: PageOrders
        },
        {
            path: '/options',
            name: 'PageOptions',
            component: PageOptions
        },
        {
            path: '/products',
            name: 'PageProducts',
            component: PageProducts
        },
        {
            path: '/users',
            name: 'PageUsers',
            component: PageUsers
        },
        {
            path: '/profile',
            name: 'PageProfile',
            component: PageProfile
        },
    ]
})
