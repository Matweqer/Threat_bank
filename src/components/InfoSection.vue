<template>
  <section class="container">
    <div class="left">
      <img :src="imgSrc" alt="image">
    </div>
    <div class="right">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <p class="text">
        <slot name="text"></slot>
      </p>
      <LinkTo :to="link">
        <slot name="link"></slot>
      </LinkTo>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  name: "InfoSection",
  props: {
    link: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index.scss';

.container {
  background: $background-color;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 180px;
}
.left{
  min-width: 600px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  min-width: 600px;
  padding-left: 60px;
}
.title {
  margin-left: 20px;
  @include main-font-bold(40px)
}
.text{
  width: 590px;
  height: 320px;
  margin-top: 134px;
  @include main-font-normal(24px);
  text-align: left;
  vertical-align: center;
}
</style>