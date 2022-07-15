<template>
  <DefaultLayout>
    <section
        class="services"
        v-if="$route.path === '/services' "
    >
      <ServiceItem
          subtitle="Модель угроз"
          :link="links.threatsModel"
          link-title="Реализовать модель угроз"
          title-red="Модель угроз (безопасности информации)"
          :img-src="images.threat"

      >
        — это физическое, математическое, описательное представление
        свойств или характеристик угроз безопасности информации.
      </ServiceItem>

      <ServiceItem
          subtitle="Модель нарушителя"
          :link="links.intruderModel"
          link-title="Реализовать модель нарушителя"
          title-red="Модель нарушителя"
          :img-src="images.intruder"
      >
        представляет собой  совокупность предположений о
        возможностях нарушителя, которые он может использовать для разработки
        и проведения атак, а также об ограничениях на эти возможности.
      </ServiceItem>

      <ServiceItem
          subtitle="Вектор атаки"
          :link="links.attackVector"
          link-title="Рассчитать вектор атаки"
          title-red="Вектор атаки"
          :img-src="images.vector"
      >
        определяет путь, которым злоумышленники доставляют
        полезную нагрузку на компьютер. Для одного и того же устройства
        или программы может существовать несколько векторов атаки.

      </ServiceItem>

    </section>

    <section
        class="service"
        v-else
    >
      <router-view>

      </router-view>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout";
import ServiceItem from "@/components/ServiceItem";

import paths from "@/constants/paths";

export default {
  name: "ServicesView",
  components: {
    DefaultLayout,
    ServiceItem,
  },
  data() {
    return {
      links: {
        ...paths
      },
      images: {
        threat: '../assets/images/services-view/threat.png',
        intruder: '../assets/images/services-view/intruder.png',
        vector: '../assets/images/services-view/selectArrow.png',
      }
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