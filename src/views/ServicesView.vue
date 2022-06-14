<template>
  <MainWrap>
    <div class="services">
      <ServiceItem
          subtitle="Модель угроз"
          :link="linkToThreats"
          link-title="Реализовать модель угроз"
          title-red="Модель угроз (безопасности информации)"
      >
        — это физическое, математическое, описательное представление
        свойств или характеристик угроз безопасности информации.
      </ServiceItem>

      <ServiceItem
          subtitle="Модель нарушителя"
          :link="linkToThreats"
          link-title="Реализовать модель нарушителя"
          title-red="Модель нарушителя"
      >
        представляет собой  совокупность предположений о
        возможностях нарушителя, которые он может использовать для разработки
        и проведения атак, а также об ограничениях на эти возможности.
      </ServiceItem>

      <ServiceItem
          subtitle="Вектор атаки"
          :link="linkToThreats"
          link-title="Рассчитать вектор атаки"
          title-red="Вектор атаки"
      >
        определяет путь, которым злоумышленники доставляют
        полезную нагрузку на компьютер. Для одного и того же устройства
        или программы может существовать несколько векторов атаки.

      </ServiceItem>

    </div>
  </MainWrap>
</template>

<script>
import MainWrap from "@/ViewWrap/MainWrap";
import ServiceItem from "@/components/ServiceItem";

export default {
  name: "ServicesView",
  components: {
    MainWrap,
    ServiceItem,
  },
  data() {
    return {
      linkToThreats: '/threats'
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index';

.services {
  background-color: $background-color;
  overflow: hidden;
}
</style>