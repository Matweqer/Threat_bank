<template>
  <div class="service">
    <div class="service__left">
      <h2 class="service__title">
        Сервисы
      </h2>
      <div class="service__text">
        <p>
          Использование компьютера требует специальных навыков. Людей, достигших в этом мастерства,
          иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное обеспечение
          на специальном компьютерном языке. Но слово «хакер» также применимо к человеку,
          который пытается украсть информацию из компьютерных систем.
        </p>
      </div>
      <LinkTo class="service__link" v-bind:to="LinkTo">Перейти в "Сервисы"</LinkTo>
    </div>
    <div class="service__right">
      <img src="../assets/images/home-view/service.png" alt="services">
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesInfo",
  data() {
    return {
      LinkTo: '/services'
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

.service {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  &__left {
    width: 590px;
  }
  &__right {
    width: 590px;
    @include flex-column-center;
    img {
      height: 200px;
    }
  }
  &__title {
    @include main-font-bold(40px)
  }
  &__text {
    margin-top: 115px;
    @include main-font-normal(24px);
    text-align: left;
    vertical-align: center;
  }
  &__link {
    margin-top: 60px;
  }
}
</style>