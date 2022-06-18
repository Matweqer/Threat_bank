import Views from "@/views";

import ThreatsRoutes from "@/router/threats-routes";
import ServicesRoutes from "@/router/services-routes";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Views.HomeView
    },
    {
        path: '/home',
        name: 'home',
        component: Views.HomeView
    },
    {
        path: '/auth',
        name: 'auth',
        component: Views.AuthView
    },
    {
        path: '/services',
        name: 'services',
        component: Views.ServicesView,
        children: ServicesRoutes
    },
    {
        path: '/threats-bank',
        name: 'threats',
        component: Views.ThreatsView,
        children: ThreatsRoutes,
    },
    {
        path: '/dev',
        name: 'development',
        component: Views.DevView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: Views.NotFoundView
    },
]

export default routes