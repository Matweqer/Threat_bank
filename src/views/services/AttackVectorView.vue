<template>
  <ServiceLayout />
</template>

<script>
import ServiceLayout from "@/layout/ServiceLayout";

export default {
  name: "AttackVectorView",
  components: {ServiceLayout},
  data() {
    return {}
  }


}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.vector {
  width: 100%;
  background: $background-color;
  padding-bottom: 200px;

  &__path {
    width: 1160px;
    margin: 0 auto;
  }

  &__container {
    margin: 0 auto;

    width: 1160px;
    height: 858px;
    border: 0.5px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
}

</style>