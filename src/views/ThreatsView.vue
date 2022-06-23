<template>
  <MainWrap>
    <div
        class="threats"
        v-if="$route.path === '/threats-bank' "
    >
      <ThreatItem
          subtitle="Атаки"
          :img-src="image.attack"
          :link-to="links.attacks"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Уязвимости"
          :img-src="image.vuln"
          :link-to="links.vulnerabilities"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="СФХ"
          :img-src="image.sfh"
          :link-to="links.sfc"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Объект"
          :img-src="image.obj"
          :link-to="links.object"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Риск"
          :img-src="image.risk"
          :link-to="links.risk"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Контрмеры"
          :img-src="image.countr"
          :link-to="links.countermeasures"
      >

      </ThreatItem>
    </div>
    <div
        class="threat"
        v-else
    >
      <router-view>

      </router-view>
    </div>
  </MainWrap>
</template>

<script>
import MainWrap from "@/ViewWrap/MainWrap";
import ThreatItem from "@/components/ThreatItem";
import paths from "@/constants/paths";



export default {
  components: {
    MainWrap,
    ThreatItem
  },
  name: "ThreatsView",
  data() {
    return {
      image: {
        attack: '../assets/images/threats-view/ThreatIcon.png',
        vuln: '../assets/images/threats-view/weakness.png',
        sfh: '../assets/images/threats-view/sfh.png',
        obj: '../assets/images/threats-view/obj.png',
        risk: '../assets/images/threats-view/risk.png',
        countr: '../assets/images/threats-view/contr.png',
      },
      links: {
        ...paths
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index';

.threats {
  background-color: $background-color;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>