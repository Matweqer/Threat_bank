import Views from "@/views";

import paths from "@/constants/paths.js";

// threats children routes
export default [
  {
    path: paths.objects,
    name: "Объекты",
    component: Views.ObjectsView,
  },
  {
    path: paths.object,
    name: "Объект",
    component: Views.ObjectView,
  },

  {
    path: paths.sfc,
    name: "СФХ",
    component: Views.SfcView,
  },
  {
    path: paths.sfcItem,
    name: "Элемент СФХ",
    component: Views.SfcItemView,
  },

  {
    path: paths.attacks,
    name: "Атаки",
    component: Views.AttacksView,
  },
  {
    path: paths.attack,
    name: "Атака",
    component: Views.AttackItemView,
  },

  {
    path: paths.vulnerabilities,
    name: "Уязвимости",
    component: Views.VulnerabilitiesView,
  },
  {
    path: paths.vulnerability,
    name: "Уязвимость",
    component: Views.VulnerabilityView,
  },

  {
    path: paths.risk,
    name: "Риск",
    component: Views.RiskView,
  },
  {
    path: paths.riskItem,
    name: "Элемент риска",
    component: Views.RiskItemView,
  },

  {
    path: paths.countermeasures,
    name: "Контрмеры",
    component: Views.CountermeasuresView,
  },
  {
    path: paths.countermeasure,
    name: "Контрмера",
    component: Views.CountermeasureView,
  },

  {
    path: paths.threats,
    name: "Угрозы",
    component: Views.ThreatsView,
  },
  {
    path: paths.threat,
    name: "Угроза",
    component: Views.ThreatView,
  },
];
