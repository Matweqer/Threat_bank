<template>
  <div class="item">
    <img class="item__img" src="../assets/images/home-view/service.png" alt="service img">
    <div class="item__subtitle"> {{subtitle}}</div>
    <button class="item__button">
      <img src="../assets/images/services-view/Vector.png" alt="==>">
    </button>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    subtitle: String,
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

.item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 408px;
  height: 420px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 86px 106px 104px;
  &__img{
    width: 160px;
    height: 161px;
  }
  &__button {
    position: absolute;
    right: -35px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: $color-main;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>