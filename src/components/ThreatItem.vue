<template >
  <div class="item">
    <img
        class="item__img"
        :src="imgSrc"
        alt=""
    >
    <p class="item__subtitle">
      {{subtitle}}
    </p>
  </div>
</template>

<script>

export default {
  name: "ThreatItem",
  props: {
    imgSrc: {
      type: String,
      default: '../assets/images/threats-view/ThreatIcon.png',
    },
    subtitle: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index.scss';

.item {
  @include flex-column-center;
  width: 360px;
  height: 420px;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 60px 90px;
  &__subtitle {
    @include main-font-normal(28px);
    margin-top: 70px;
  }
}
</style>