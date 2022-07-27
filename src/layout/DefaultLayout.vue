<template>
  <header class="header">
    <MainHeader class="header__head" />
    <MainNavBar class="header__nav" />
  </header>
  <main class="main">
    <slot />
  </main>
  <footer>
    <MainFooter class="footer" />
  </footer>
</template>

<script>

export default {

  name: "DefaultLayout"
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index';

.header {
  @include flex-column-center;
  flex: 1 0 auto;
  background-color: $background-color;
  padding-bottom: 106px;
}
.footer {
  flex: 0 1 auto;
}

@media (max-width: 700px) {
  .header{
    padding-bottom: 50px;
  }
}

@media (max-width: 480px) {
  .header{
    padding-bottom: 30px;
  }
}

</style>