<template>
  <header class="header">
    <MainHeader class="header__head"></MainHeader>
    <MainNavBar class="header__nav"></MainNavBar>
  </header>
  <main class="main">
    <slot></slot>
  </main>
  <footer>
    <MainFooter class="home__footer"></MainFooter>
  </footer>

</template>

<script>
import MainNavBar from "@/components/MainNavBar";

export default {
  components: {
    MainNavBar
  },
  name: "HomePage"
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index.scss';

.header {
  @include flex-column-center;
  background-color: $background-color;
  padding-bottom: 106px;
}
</style>