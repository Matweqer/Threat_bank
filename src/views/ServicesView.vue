<template>
  <div class="services">
    <ServiceItem subtitle="Модель угроз" ></ServiceItem>
    <ServiceItem subtitle="Модель нарушителя" ></ServiceItem>
    <ServiceItem subtitle="Вектор атаки" ></ServiceItem>
  </div>
</template>

<script>
import ServiceItem from "@/components/ServiceItem";
export default {
  name: "ServicesView",
  components: {
    ServiceItem,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

.services {
  background-color: $background-color;
  overflow: hidden;
}
</style>