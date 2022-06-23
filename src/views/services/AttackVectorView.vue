<template>
  <div class="vector">
    <CurrentPath
        class="vector__path"
        :path="path"
    >
    </CurrentPath>
    <div class="vector__container">

      Вектор атаки
    </div>
  </div>
</template>

<script>
import paths from "@/constants/paths";

const {services, attackVector} = paths

export default {
  name: "AttackVectorView",
  components: {},
  data() {
    return {
      path: [
        {
          name: 'Сервисы',
          link: services
        },
        {
          name: 'Вектор атаки',
          link: attackVector
        }
      ]
    }
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