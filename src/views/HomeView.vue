<template>
  <div class="home">
    <img class="home__desktop" src="../assets/images/home-view/desktop.png" alt="desktop">
    <AboutUs class="home__about"></AboutUs>
    <YearStats class="home__stats"></YearStats>
    <ServicesInfo class="home__services-info"></ServicesInfo>
    <BaseInfo class="home__base-info"></BaseInfo>
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs";
import YearStats from "@/components/YearStats";
import ServicesInfo from "@/components/ServicesInfo";
import BaseInfo from "@/components/BaseInfo";

export default {
  name: "HomeView",
  components: {
    AboutUs,
    YearStats,
    ServicesInfo,
    BaseInfo,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';
.home {
  background: $background-color;

  &__desktop {
    width: 100%;
  }
  &__base-info{
    padding-bottom: 300px;
  }
}
</style>