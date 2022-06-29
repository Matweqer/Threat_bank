<template>
  <label class="find">
    <input
        class="find__input"
        placeholder="Введите название, ID или ключевые слова"
    >
    <span class="find__icon">
      <img class="find__icon__img" src="@/assets/images/icons/find.png" alt="find">
    </span>
  </label>
</template>

<script>
export default {
  name: "FindInput"
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.find {
  position: relative;
  display: block;
  width: 1060px;
  height: 40px;
  &__input {
    height: 100%;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    padding: 8px 26px;
    @include main-font-normal(20px);
    color: rgba(0, 0, 0, 0.2);
  }

  &__icon {
    width: 18.75px;
    height: 18.75px;
    position: absolute;
    z-index: 10;
    right: 20px;
    top: 10px;
    bottom: 10px;
  }
}
</style>