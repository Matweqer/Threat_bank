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
      default: '../assets/images/threats-view/attack.png',
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
  color: #000000;
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
    @include main-font(28px, 600);
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

@media (max-width: 1100px) {
  .item {
    width: 280px;
    height: 330px;
    margin: 0 25px 41px;
    &__img {
      width: 135px;
      height: 135px;
    }
    &__subtitle {
      @include main-font(26px, 600);
      margin-top: 60px;
    }
  }
}

@media (max-width: 900px) {
  .item {
    width: 230px;
    height: 270px;
    margin: 0 15px 41px;
    &__img {
      width: 110px;
      height: 110px;
    }
    &__subtitle {
      @include main-font(24px, 600);
      margin-top: 45px;
    }
  }
}
@media (max-width: 700px) {
  .item {
    width: 180px;
    height: 210px;
    margin: 0 15px 41px;
    &__img {
      width: 90px;
      height: 90px;
    }
    &__subtitle {
      @include main-font(20px, 500);
      margin-top: 35px;
    }
  }
}


@media (max-width: 480px) {
  .item {
    width: 115px;
    height: 146px;
    margin: 0 15px 41px;
    &__img {
      width: 41px;
      height: 41px;
    }
    &__subtitle {
      @include main-font(14px, 500);
      margin-top: 26px;
    }
  }
}


</style>