<template>
  <section class="container">
    <div class="left">
      <img
        :src="imgSrc"
        alt="image"
      >
    </div>
    <div class="right">
      <h2 class="title">
        <slot name="title" />
      </h2>
      <p class="text">
        <slot name="text" />
      </p>
      <LinkTo :to="link">
        <slot name="link" />
      </LinkTo>
    </div>
  </section>
</template>

<script>

export default {
  name: "InfoSection",
  components: {
  },
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
@import '../../assets/scss/index';

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
  @include main-font(48px, 500);
  font-style: italic;
}
.text{
  width: 590px;
  height: 320px;
  margin-top: 134px;
  @include main-font(24px, 400);
  text-align: left;
  vertical-align: center;
}
</style>