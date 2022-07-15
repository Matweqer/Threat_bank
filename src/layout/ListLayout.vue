<template>
  <div class="container">
    <BreadCrumbs></BreadCrumbs>
    <div class="container__inner">
      <slot>

      </slot>
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
    width: 1060px;
    margin: 0 auto;
    @include flex-column-center;
  }
}

</style>