<template>
  <ListLayout>
    <ItemsList
        class="attacks__list"
        itemsType="А"
        :items="attacks"
    >

    </ItemsList>
  </ListLayout>

  <router-view>

  </router-view>

</template>

<script>
import ItemsList from "@/components/ItemsList";
import ListLayout from "@/layout/ListLayout";

import attacks from '@/constants/attacks.js'


export default {
  components: {
    ItemsList,
    ListLayout,
  },
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


  &__container {

  }

  &__list {
    margin-bottom: 66px;
  }

}
</style>