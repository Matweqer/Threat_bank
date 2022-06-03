<template>
  <MainWrap>
    <div class="threats">
      Страница угроз
    </div>
  </MainWrap>
</template>

<script>
import MainWrap from "@/ViewWrap/MainWrap";

export default {
  components: {
    MainWrap,
  },
  name: "ThreatsView"
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/index';

.threats {
    background-color: $background-color;
    height: 500px;
  }
</style>