import Views from "@/views";


// services children routes
export default [
    {
        path: '/services/threats-model',
        name: 'threats-model',
        component: Views.ThreatsModelView
    },
    {
        path: '/services/intruder-model',
        name: 'intruder-model',
        component: Views.IntruderModelView
    },
    {
        path: '/services/attack-vector',
        name: 'attack-vector',
        component: Views.AttackVectorView
    },
]