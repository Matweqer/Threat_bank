<template>
  <div class="not-found">
    <div class="not-found__container">
      <p class="not-found__num">
        404
      </p>
      <p class="not-found__text">
        Страница не найдена
      </p>
      <p
        class="not-found__back"
        @click="$router.go(-1)"
      >
        Вернуться назад
        <img
          src="../assets/images/componentsImg/arrow.png"
          alt=">>>"
        >
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFoundView"
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.not-found {
  @include full-display;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: $background-color;
  background-color: $background-color;
  padding: 50px 0;

  &__container {

    background-color: $color-main;
    width: 100%;
    height: 200px;
    padding: 10px 80px;
  }

  &__num {
    @include main-font(72px, 700)
  }

  &__text {
    @include main-font(38px, 400);
  }

  &__back {
    @include main-font(32px, 400);
    transition: text-shadow 0.2s ease-out 0s;

    img {
      transition: margin-left 0.3s ease-out 0s;

    }
  }
  &__back:hover {
    text-shadow: black 0 0 1px;
    cursor: pointer;
    img {
      margin-left: 25px;
    }
  }
}
</style>