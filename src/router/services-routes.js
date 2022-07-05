import Views from "@/views";

import paths from "@/constants/paths.js";

// services children routes
export default [
    {
        path: paths.threatsModel,
        name: 'Модель угрозы',
        component: Views.ThreatsModelView
    },
    {
        path: paths.intruderModel,
        name: 'Модель нарушителя',
        component: Views.IntruderModelView
    },
    {
        path: paths.attackVector,
        name: 'Вектор атаки',
        component: Views.AttackVectorView
    },
]