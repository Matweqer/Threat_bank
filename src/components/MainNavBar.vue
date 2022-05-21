<template>
  <div class="main">
    <nav class="main__nav">
      <router-link to='/'>
        Главная
      </router-link>
      <router-link to='/services'>
        Сервисы
      </router-link>
      <router-link to='/threats'>
        Быза данных угроз
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNavBar"
}
</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.main {
  width: 1366px;
  @include flex-column-center;
  &__nav {
    @include main-font-bold(28px);
     width: 80%;
     margin-top: 60px;
     display: flex;
     justify-content: space-around;
   }
}

</style>