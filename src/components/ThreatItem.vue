<template >
  <router-link
      class="link"
      :to="linkTo"
  >
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
  </router-link>
</template>

<script>

export default {
  name: "ThreatItem",

  props: {
    linkTo: {
      type: String,
      default: '/dev'
    },
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

.link {
  text-decoration: none;
  color: $color-main;
}
.item {
  @include flex-column-center;
  width: 360px;
  height: 420px;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 60px 90px;
  transition: box-shadow 0.3s ease-in 0s;
  &__img {
    width: 170px;
    height: 170px;
  }
  &__subtitle {
    @include main-font-normal(28px);
    margin-top: 70px;
    transition: font-size 0.3s ease-out 0s;
  }
  &__subtitle:hover {
    font-size: 32px;
  }
}

.item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}


</style>