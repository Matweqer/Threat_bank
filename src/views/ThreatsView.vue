<template>
  <MainWrap>
    <div
        class="threats"
        v-if="$route.path === '/threats-bank' "
    >
      <ThreatItem
          subtitle="Атаки"
          :img-src="image.attack"
          :link-to="link.toAttacks"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Уязвимости"
          :img-src="image.vuln"
          :link-to="link.toVuln"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="СФХ"
          :img-src="image.sfh"
          :link-to="link.toSFC"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Объект"
          :img-src="image.obj"
          :link-to="link.toObj"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Риск"
          :img-src="image.risk"
          :link-to="link.toRisk"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Контрмеры"
          :img-src="image.countr"
          :link-to="link.toCountr"
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
      link: {
        toAttacks: '/threats-bank/attacks',
        toVuln: '/threats-bank/vulnerabilities',
        toSFC: '/threats-bank/SFC',
        toObj: '/threats-bank/object',
        toRisk: '/threats-bank/risk',
        toCountr: '/threats-bank/countermeasures',
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