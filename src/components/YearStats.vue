<template>
  <div class="stats">
    <div class="stats__left">
      <img src="../assets/images/home-view/stats.png" alt="stats">
    </div>
    <div class="stats__right">
      <h2 class="stats__title">
      Статистика за год
      </h2>
      <div class="stats__text">
        <p>
          Использование компьютера требует специальных навыков. Людей, достигших в этом мастерства,
          иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное обеспечение
          на специальном компьютерном языке. Но слово «хакер» также применимо к человеку,
          который пытается украсть информацию из компьютерных систем.
        </p>
      </div>
      <LinkTo class="stats__link" v-bind:to="LinkTo">Узнать больше</LinkTo>

    </div>
  </div>
</template>

<script>
export default {
  name: "YearStats",
  data() {
    return {
      LinkTo: '/auth'
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

.stats{
  display: flex;
  justify-content: center;
  margin-top: 177px;
  &__left {
    margin-top: 35px;
  }
  &__right {
    padding-left: 60px;
  }
  &__title{
    @include main-font-bold(40px)
  }
  &__text {
    width: 590px;
    height: 320px;
    margin-top: 134px;
    @include main-font-normal(24px);
    text-align: left;
    vertical-align: center;
  }
  &__link {
    margin-top: 43px;
  }
}
</style>