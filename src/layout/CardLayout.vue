<template>
  <div class="container">

    <BreadCrumbs
        :page="page"
    >
    </BreadCrumbs>

    <div class="container__inner">
      <slot>

      </slot>
    </div>
  </div>

</template>

<script>
import BreadCrumbs from "@/components/UI/BreadCrumbs";

export default {
  name: "CardLayout",
  components: {
    BreadCrumbs,
  },
  props: {
    page: {
      type: Object,
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';


.container {
  margin: 0 auto;
  width: 1200px;


  &__inner {
    margin: 96px auto 197px;
    width: 1136px;
  }
}
</style>