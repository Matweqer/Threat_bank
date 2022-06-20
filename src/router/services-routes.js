import Views from "@/views";

import paths from "@/constants/paths.js";

// services children routes
export default [
    {
        path: paths.threatsModel,
        name: 'threats-model',
        component: Views.ThreatsModelView
    },
    {
        path: paths.intruderModel,
        name: 'intruder-model',
        component: Views.IntruderModelView
    },
    {
        path: paths.attackVector,
        name: 'attack-vector',
        component: Views.AttackVectorView
    },
]