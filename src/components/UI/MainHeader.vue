<template>
  <header class="header">
    <div class="header__user">
      <img src="" alt="" class="header__user__icon">
    </div>
    <div class="header__modal">
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
  }
</style>