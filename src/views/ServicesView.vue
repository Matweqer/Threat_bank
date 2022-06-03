<template>
  <MainWrap>
    <div class="services">
      <ServiceItem subtitle="Модель угроз" ></ServiceItem>
      <ServiceItem subtitle="Модель нарушителя" ></ServiceItem>
      <ServiceItem subtitle="Вектор атаки" ></ServiceItem>
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