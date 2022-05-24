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

::-webkit-scrollbar {
  width: 16px; /* ширина для вертикального скролла */
  background-color: $background-color;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
  display: none;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #888888;
  border-radius: 9px;
  box-shadow: inset 1px 1px 10px #f3faf7;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #656565;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  @include flex-column-center;
  background-color: $background-color;
  padding-bottom: 106px;
}

</style>
