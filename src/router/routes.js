import Views from "@/views";

import paths from "@/constants/paths.js";

import ThreatsRoutes from "@/router/threats-routes";
import ServicesRoutes from "@/router/services-routes";

const routes = [
  {
    path: paths.main,
    name: "Основная",
    component: Views.HomeView,
  },
  {
    path: paths.home,
    name: "Домашняя",
    component: Views.HomeView,
  },
  {
    path: paths.auth,
    name: "Авторизация",
    component: Views.AuthView,
  },
  {
    path: paths.services,
    name: "Сервисы",
    component: Views.ServicesView,
    children: ServicesRoutes,
  },
  {
    path: paths.threatsBank,
    name: "База данных угроз",
    component: Views.ThreatsBankView,
    children: ThreatsRoutes,
  },
  {
    path: paths.development,
    name: "Разработка",
    component: Views.DevView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Страница не найдена",
    component: Views.NotFoundView,
  },
];

export default routes;
