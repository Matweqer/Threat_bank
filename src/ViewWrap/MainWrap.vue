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

export default {
  components: {
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

@media (max-width: 480px) {
  .header{
    padding-bottom: 50px;
  }
}

</style>