import Views from "@/views";


import paths from "@/constants/paths.js";


import ThreatsRoutes from "@/router/threats-routes";
import ServicesRoutes from "@/router/services-routes";

const routes = [
    {
        path: paths.main,
        name: 'main',
        component: Views.HomeView
    },
    {
        path: paths.home,
        name: 'home',
        component: Views.HomeView
    },
    {
        path: paths.auth,
        name: 'auth',
        component: Views.AuthView
    },
    {
        path: paths.services,
        name: 'services',
        component: Views.ServicesView,
        children: ServicesRoutes
    },
    {
        path: paths.threats,
        name: 'threats',
        component: Views.ThreatsView,
        children: ThreatsRoutes,
    },
    {
        path: paths.development,
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