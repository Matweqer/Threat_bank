<template>
  <ListLayout>
    <ItemsList
        class="threats__list"
        itemsType="T"
        :items="threats"
    >

    </ItemsList>
  </ListLayout>

  <router-view>

  </router-view>

</template>

<script>
import ItemsList from "@/components/ItemsList";
import ListLayout from "@/layout/ListLayout";

import threats from "@/constants/threats";

export default {
  components: {
    ItemsList,
    ListLayout,
  },
  name: "AttacksView",
  data() {
    return {
      threats
    }
  },
}

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.threats {
  &__list {
    margin-bottom: 66px;
  }
}
</style>