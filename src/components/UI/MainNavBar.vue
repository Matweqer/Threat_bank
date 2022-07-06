<template>
    <nav class="nav">
      <router-link class="nav__item" to='/home'>
        Главная
      </router-link >
      <router-link class="nav__item" to='/services'>
        Сервисы
      </router-link>
      <router-link class="nav__item" to='/threats-bank'>
        База данных угроз
      </router-link>
    </nav>
</template>

<script>
export default {
  name: "MainNavBar"
}
</script>

<style lang="scss" scoped>

@import "../../assets/scss/variables";

.nav {
  width: 1366px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__item{
    margin: 0 20px;
    text-decoration: none;
    @include main-font(28px, 600);
    color: #000000;
  }
  &__item:hover {
    color: $color-main
  }
}

@media (max-width: 1100px) {
  .nav {
    width: 1000px;
    &__item{
      @include main-font(24px, 600);
    }
  }
}
@media (max-width: 900px) {
  .nav {
    width: 700px;
    &__item{
      @include main-font(24px, 600);
    }
  }
}

@media (max-width: 700px) {
  .nav {
    width: 500px;
    &__item{
      @include main-font(18px, 600);
    }
  }
}
@media (max-width: 480px) {
  .nav {
    width: 320px;
    &__item{
      @include main-font(12px, 600);
    }
  }
}



</style>