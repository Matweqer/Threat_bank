<template>
    <nav class="nav">
      <router-link class="nav__item" to='/'>
        Главная
      </router-link >
      <router-link class="nav__item" to='/services'>
        Сервисы
      </router-link>
      <router-link class="nav__item" to='/threats'>
        Быза данных угроз
      </router-link>
    </nav>
</template>

<script>
export default {
  name: "MainNavBar"
}
</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.nav {
  width: 1366px;
  display: flex;
  justify-content: space-around;
  &__item{
    text-decoration: none;
    @include main-font-bold(28px);
    color: #000000;
  }
  &__item:hover {
    color: $main-color
  }
}


</style>