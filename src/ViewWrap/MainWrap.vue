<template>
  <header class="header">
    <MainHeader class="header__head"></MainHeader>
    <MainNavBar class="header__nav"></MainNavBar>
  </header>
  <main class="main">
    <slot></slot>
  </main>
  <footer>
    <MainFooter class="footer"></MainFooter>
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
  flex: 1 0 auto;
  background-color: $background-color;
  padding-bottom: 106px;
}
.footer {
  flex: 0 1 auto;
}
</style>