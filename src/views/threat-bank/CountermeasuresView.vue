<template>
  <ListLayout>
    <ItemsList
        class="countermeasures__list"
        itemsType="С"
        :items="countermeasures"
    >

    </ItemsList>
  </ListLayout>

  <router-view>

  </router-view>

</template>

<script>
import ItemsList from "@/components/ItemsList";
import ListLayout from "@/layout/ListLayout";

import countermeasures from "@/constants/countermeasures";

export default {
  components: {
    ItemsList,
    ListLayout,
  },
  name: "CountermeasuresView",
  data() {
    return {
      countermeasures
    }
  },
}

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.countermeasures {
  &__list {
    margin-bottom: 66px;
  }
}
</style>