<template>
  <div class="about-us">
    <div class="about-us__title">
      <span>О нас</span>
    </div>
    <div class="about-us__container">
      <div class="about-us__left">
        <p class="about-us__text">Использование компьютера требует специальных навыков.
          Людей, достигших в этом мастерства, иногда называют «хакерами».
          Обычно хакер – это человек, который создаёт программное обеспечение на специальном компьютерном языке.
          Но слово «хакер» также применимо к человеку, который пытается украсть информацию из компьютерных систем.
        </p>
        <LinkTo class="about-us__link" v-bind:to="linkToAuth">Узнать больше</LinkTo>
      </div>
      <div class="about-us__right">
        <img src="../assets/images/home-view/about.png" alt="about us">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAboutUs",
  data() {
    return {
      linkToAuth: '/auth'
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index.scss';

.about-us {
  @include flex-column-center;
  height: 720px;
  padding-top: 77px;
  margin-bottom: 170px;
  &__container {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    width: 1100px;
    display: flex;
    justify-content: flex-start;
    @include main-font(48px, 500);
    font-style: italic;

  }
  &__text {
    margin: 107px 24px 65px;
    @include main-font(24px, 400);
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

</style>