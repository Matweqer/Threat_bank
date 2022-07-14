<template>

  <div class="attacks">
    <CurrentPath></CurrentPath>

    <div class="attacks__container">
      <ItemsList
          class="attacks__list"
          itemsType="А"
          :items="attacks"
      >

      </ItemsList>


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

}
</style>