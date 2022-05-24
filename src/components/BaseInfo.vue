<template>
  <div class="base">
    <div class="base__left">
      <img src="../assets/images/home-view/threatBase.png" alt="stats">
    </div>
    <div class="base__right">
      <h2 class="base__title">
        База данных угроз
      </h2>
      <div class="base__text">
        <p>
          Использование компьютера требует специальных навыков. Людей, достигших в этом мастерства,
          иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное обеспечение
          на специальном компьютерном языке. Но слово «хакер» также применимо к человеку,
          который пытается украсть информацию из компьютерных систем.
        </p>
      </div>
      <LinkTo class="base__link" v-bind:to="LinkTo">Перейти в "Базы данных угроз"</LinkTo>

    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  data() {
    return {
      LinkTo: '/threats'
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

.base{
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
}
</style>