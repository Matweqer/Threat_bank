import Views from "@/views";

import paths from "@/constants/paths.js";

// threats children routes
export default [
    {
        path: paths.attacks,
        name: 'Атаки',
        component: Views.AttacksView
    },
    {
        path: paths.attack,
        name: 'Атака',
        component: Views.AttackItemView
    },
    {
        path: paths.vulnerabilities,
        name: 'Уязвимости',
        component: Views.VulnerabilitiesView
    },
    {
        path: paths.sfc,
        name: 'СФХ',
        component: Views.SfcView
    },
    {
        path: paths.object,
        name: 'Объект',
        component: Views.ObjectView
    },
    {
        path: paths.risk,
        name: 'Риск',
        component: Views.RiskView
    },
    {
        path: paths.countermeasures,
        name: 'Контрмеры',
        component: Views.CountermeasuresView
    }
]