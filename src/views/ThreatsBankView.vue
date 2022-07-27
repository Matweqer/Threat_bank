<template>
  <DefaultLayout>
    <section
      v-if="$route.path === '/threats-bank' "
      class="threats"
    >
      <ThreatItem
        subtitle="Объект"
        :img-src="image.obj"
        :link-to="links.objects"
      />

      <ThreatItem
        subtitle="СФХ"
        :img-src="image.sfh"
        :link-to="links.sfc"
      />

      <ThreatItem
        subtitle="Атаки"
        :img-src="image.attack"
        :link-to="links.attacks"
      />

      <ThreatItem
        subtitle="Уязвимости"
        :img-src="image.vuln"
        :link-to="links.vulnerabilities"
      />


      <ThreatItem
        subtitle="Риск"
        :img-src="image.risk"
        :link-to="links.risk"
      />

      <ThreatItem
        subtitle="Контрмеры"
        :img-src="image.countr"
        :link-to="links.countermeasures"
      />

      <ThreatItem
        subtitle="Угрозы"
        :img-src="image.threat"
        :link-to="links.threats"
      />
    </section>

    <section
      v-else
      class="threat"
    >
      <router-view />
    </section>
  </DefaultLayout>
</template>


<script>
import DefaultLayout from "@/layout/DefaultLayout";
import ThreatItem from "@/pages/threat-bank/ThreatItem";
import paths from "@/constants/paths";


export default {
  name: "ThreatsBankView",
  components: {
    DefaultLayout,
    ThreatItem
  },
  data() {
    return {
      image: {
        attack: '../assets/images/threats-view/attack.png',
        vuln: '../assets/images/threats-view/weakness.png',
        sfh: '../assets/images/threats-view/sfh.png',
        obj: '../assets/images/threats-view/obj.png',
        risk: '../assets/images/threats-view/risk.png',
        countr: '../assets/images/threats-view/contr.png',
        threat: '../assets/images/threats-view/threat.png',

      },
      links: {
        ...paths
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.threats {
  background-color: $background-color;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>