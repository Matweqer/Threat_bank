import Views from "@/views";

import paths from "@/constants/paths.js";

// threats children routes
export default [
    {
        path: paths.attacks,
        name: 'attacks',
        component: Views.AttacksView
    },
    {
        path: paths.vulnerabilities,
        name: 'vulnerabilities',
        component: Views.VulnerabilitiesView
    },
    {
        path: paths.sfc,
        name: 'SFC',
        component: Views.SfcView
    },
    {
        path: paths.object,
        name: 'object',
        component: Views.ObjectView
    },
    {
        path: paths.risk,
        name: 'risk',
        component: Views.RiskView
    },
    {
        path: paths.countermeasures,
        name: 'countermeasures',
        component: Views.CountermeasuresView
    }
]