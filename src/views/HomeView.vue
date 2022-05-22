<template>
  <div class="home">
    <img class="home__desktop" src="../assets/images/home-view/desktop.png" alt="desktop">
    <div class="home__about-us">
      <div class="home__about-us__title">
        <h2>О нас</h2>
      </div>
      <div class="home__about-us__container">
        <div class="home__about-us__left">
          <p class="home__about-us__text">Использование компьютера требует специальных навыков.
            Людей, достигших в этом мастерства, иногда называют «хакерами».
            Обычно хакер – это человек, который создаёт программное обеспечение на специальном компьютерном языке.
            Но слово «хакер» также применимо к человеку, который пытается украсть информацию из компьютерных систем.
          </p>
          <LinkTo class="home__about-us__link" v-bind:to="linkToAuth">Узнать больше</LinkTo>
        </div>
        <div class="home__about-us__right">
          <img src="../assets/images/home-view/about.png" alt="about us">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {

  },
  data() {
    return {
      linkToAuth: '/auth'
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';
.home {
  background: $background-color;
  &__desktop {
    width: 100%;
  }
  &__about-us {
    height: 720px;
    padding-top: 77px;
    &__container {
      width: 98%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__title {
      @include main-font-normal(44px);
      margin-left: 200px;
    }
    &__text {
      margin: 107px 24px 65px;
      @include main-font-normal(24px);
      text-align: left;
      vertical-align: center;
    }
    &__left {
      position: relative;
      right: -5px;
      z-index: 0;
      width: 637px;
      height: 492px;
      background: rgba(253, 229, 106, 0.24);
      box-shadow: 0 4px 10px rgba(0, 18, 109, 0.67);
    }
    &__right {
      position: relative;
      z-index: 1;
    }
    &__link{
      margin-left: 40px;
    }
  }
}
</style>