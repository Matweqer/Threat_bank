<template>
  <div class="container">
    <BreadCrumbs
      class="bread-crumbs"
    />
    <div class="container__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListLayout",
  components: {}

}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.container {
  margin: 0 auto;
  width: 1200px;

  &__inner {
    width: 1160px;
    min-height: 858px;
    margin-bottom: 203px;
  }
}

.bread-crumbs {
  margin-bottom: 137px;
}

</style>