<template>
    <router-link class="link" to=''>
      <div class="link__text">
        <slot></slot>
      </div>
      <div class="link__arrow">
        <img src="../../assets/images/componentsImg/arrow.png" alt="-->">
      </div>
    </router-link>
</template>

<script>
export default {
  name: "LinkTo",
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';

.link {
  text-decoration: none;
  display: flex;
  align-items: center;
  align-content: center;
  opacity: 0.7;
  transition: text-shadow ease 150ms;
  &__text {
    color: $color-main;
    @include main-font-normal(24px);
    margin-right: 25px;
  }
  &__arrow {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 1px;
    width: 24px;
    height: 15px;
  }
}
.link:hover {
  opacity: 0.9;
  text-shadow: $color-main 0 0 1px;
}
</style>