import Views from "@/views";


// threats children routes
export default [
    {
        path: '/threats-bank/attacks',
        name: 'attacks',
        component: Views.AttacksView
    },
    {
        path: '/threats-bank/vulnerabilities',
        name: 'vulnerabilities',
        component: Views.VulnerabilitiesView
    },
    {
        path: '/threats-bank/SFC',
        name: 'SFC',
        component: Views.SfcView
    },
    {
        path: '/threats-bank/object',
        name: 'object',
        component: Views.ObjectView
    },
    {
        path: '/threats-bank/risk',
        name: 'risk',
        component: Views.RiskView
    },
    {
        path: '/threats-bank/countermeasures',
        name: 'countermeasures',
        component: Views.CountermeasuresView
    }
]