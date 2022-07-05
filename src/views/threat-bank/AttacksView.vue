<template>

  <div class="attacks">
    <CurrentPath></CurrentPath>

    <div class="attacks__container">
      <ItemsList
          class="attacks__list"
          :items="attacks"
      >

      </ItemsList>

      <button class="attacks__more">
        Показать ещё
      </button>

    </div>

  </div>

  <router-view>

  </router-view>
</template>

<script>
import ItemsList from "@/components/ItemsList";

import attacks from '@/constants/attacks.js'


export default {
  components: {ItemsList},
  name: "AttacksView",
  data() {
    return {
      attacks
    }
  },
}

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';


.attacks {
  margin: 0 auto;
  width: 1200px;

  &__container {
    width: 1060px;
    margin: 0 auto;
    @include flex-column-center;

  }

  &__list {
    margin-bottom: 66px;
  }

  &__more {
    @include main-font-normal(20px);
    color: #FFFFFF;
    margin: 0 auto 165px;
    width: 171px;
    height: 40px;
    background: $color-main;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease 0s;
  }

  &__more:hover {
    cursor: pointer;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  }

}
</style>