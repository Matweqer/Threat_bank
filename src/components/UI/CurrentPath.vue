<template>
  <div
      class="path"
  >

    <span
        class="path__point"
        v-for="(point, index) in path"
        :key="index"
    >
      <router-link
          class="path__link"
          :to="point.link"
      >
        {{ point.name }}
      </router-link>
      <span v-if="index !== path.length - 1">/</span>
    </span>

  </div>
</template>

<script>
export default {
  name: "CurrentPath",
  props: {
    path: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.path {
  @include main-font-normal(20px);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-bottom: 10px;
  background: $background-color;


  &__link {
    text-decoration: none;
    margin: 5px;
    color: $color-red;
  }

  &__link:hover {
    text-decoration: underline;
  }
  &__link:last-child {
    color: black;
  }
  &__link:last-child:hover {
    text-decoration: none;
  }

}


</style>