<template>
  <div
      class="item"
      style="width: 410px"
  >
      <div class="item__left">
        <img class="item__left__img" :src="imgSrc" alt="service img">
        <div class="item__left__subtitle">{{subtitle}}</div>
      </div>

      <div class="item__right">
        <div class="item__right__content">
          <p class="item__right__text">
            <span class="item__right__text__red">{{titleRed}}</span>
            <slot></slot>
          </p>
          <LinkTo :to="link"> {{linkTitle}} </LinkTo>
        </div>
      </div>

      <button
          class="item__button"
          @click="toggleService"
      >
        <img src="../assets/images/services-view/Vector.png" alt="==>">
      </button>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  components: {},
  props: {
    subtitle: {
      type: String,
      required: true
    },
    titleRed:{
      type: String,
      required: true
    },
    linkTitle:{
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      default: "../assets/images/services-view/threat.png"
    }
  },
  methods: {
    toggleService(event) {
      let box = event.target.parentNode;
      if (!box.classList.contains("item")) box = box.parentNode;

      let button = box.lastChild;
      let hiddenContent = box.childNodes[1]

      if (box.style.width === "410px") {
        box.style.width = "1200px";
        button.style.transform = "rotate(0.5turn)";
        hiddenContent.style.transition = 'opacity 0.5s ease-out 0.4s'
        hiddenContent.style.opacity = '1'
      } else {
        box.style.width = "410px";
        button.style.transform = "rotate(1turn)";
        hiddenContent.style.transition = 'opacity 0.25s ease-in 0s'
        hiddenContent.style.opacity = '0'
      }
    },
  }
}

</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index.scss';

.item {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 420px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 86px 106px 104px;
  transition: width 0.4s ease-out 0.1s;
  &__left {
    width: 408px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__img{
      width: 160px;
      height: 161px;
    }
    &__subtitle {
      margin-top: 20px;
      @include main-font-normal(24px);
    }
  }
  &__right {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;


    &__content {
      @include main-font-normal(24px);
      position: absolute;
      left: 560px;
      top: 100px;
      width: 520px;
      height: 300px;
    }
    &__text {
      margin-bottom: 85px;
      &__red {
        color: #B70303;
      }
    }
  }

  &__button {
    position: absolute;
    z-index: 10;
    right: -35px;
    top: 185px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background-color: $color-main;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s ease-in 0s,
                transform 0.5s ease-out 0.4s;
  }
  &__button:hover {
    box-shadow: gray 0 0 5px;
    cursor: pointer;
  }
  &__subtitle {
    margin-top: 55px;
    @include main-font-normal(28px)
  }
}
</style>