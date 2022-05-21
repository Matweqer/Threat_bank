<template>
  <header class="header">
    <div class="header__container"></div>
    <div class="header__user">
      <img src="" alt="" class="header__user__icon">
      111
    </div>
    <div class="header__modal">
      2
    </div>
  </header>
</template>

<script>

export default {
  name: "MainHeader"
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

  .header {
    height: 60px;
    width: 100%;
    background-color: $main-color;
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 44px;
    &__user {
      margin-right: 16px;
    }
  }
</style>