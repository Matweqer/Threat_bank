<template>
  <div class="container">
    <div class="footer" />
  </div>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';
.container{
  padding-top: 200px;
  background-color: $background-color;
}
.footer {
  width: 100%;
  height: 230px;
  background: $color-main;

}
</style>