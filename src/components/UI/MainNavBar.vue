<template>
  <nav class="nav">
    <router-link class="nav__item" :class="{_active: !!this.$route.path.match(/home/g)}" to='/home'>
      Главная
    </router-link>
    <router-link class="nav__item" :class="{_active: !!this.$route.path.match(/services/g)}" to='/services'>
      Сервисы
    </router-link>
    <router-link class="nav__item" :class="{_active: !!this.$route.path.match(/threats-bank/g)}" to='/threats-bank'>
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
  width: 1300px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__item {
    width: 315px;
    height: 78px;
    padding: 20px;
    margin: 0 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @include main-font(28px, 600);
    color: #000000;
  }

  &__item:hover {
    color: $color-main
  }
}

._active {
  color: $color-main;
  background: rgba(41, 150, 54, 0.25);
  border-radius: 40px;
}


@media (max-width: 1250px) {
  .nav {
    width: 1100px;

    &__item {
      @include main-font(24px, 600);
      margin: 0 10px;

    }
  }
}

@media (max-width: 1100px) {
  .nav {
    width: 900px;

    &__item {
      @include main-font(24px, 600);
      margin: 0 10px;

    }
  }
}

@media (max-width: 900px) {
  .nav {
    width: 700px;

    &__item {
      @include main-font(24px, 600);
    }
  }
}

@media (max-width: 700px) {
  .nav {
    width: 500px;

    &__item {
      margin: 0 5px;
      @include main-font(18px, 600);
    }
  }
}

@media (max-width: 480px) {
  .nav {
    width: 320px;

    &__item {
      @include main-font(12px, 600);
    }
  }
}


</style>