<template>
  <main class="main">
    <MainHeader class="main__header" ></MainHeader>
    <MainNavBar class="main__nav" ></MainNavBar>
  </main>
  <router-view/>
</template>

<script>
import MainNavBar from "@/components/MainNavBar";

export default {
  name: "App",
  components: {
    MainNavBar
  },
}
</script>

<style lang="scss">
@import  'src/assets/scss/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
}

.main {
  @include flex-column-center;

  padding-bottom: 106px;
}

</style>
