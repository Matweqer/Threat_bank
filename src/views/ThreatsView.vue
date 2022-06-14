<template>
  <MainWrap>
    <div class="threats">
      <ThreatItem
          subtitle="Атаки"
          :img-src="images.attack"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Уязвимости"
          :img-src="images.weak"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="СФХ"
          :img-src="images.sfh"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Объект"
          :img-src="images.obj"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Риск"
          :img-src="images.risk"
      >

      </ThreatItem>

      <ThreatItem
          subtitle="Контрмеры"
          :img-src="images.contr"
      >

      </ThreatItem>
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
      images: {
        attack: '../assets/images/threats-view/ThreatIcon.png',
        weak: '../assets/images/threats-view/weakness.png',
        sfh: '../assets/images/threats-view/sfh.png',
        obj: '../assets/images/threats-view/obj.png',
        risk: '../assets/images/threats-view/risk.png',
        contr: '../assets/images/threats-view/contr.png',
      }
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