<template>
  <ListLayout>
    <ItemsList
        class="risk__list"
        itemsType="R"
        :items="risks"
    >

    </ItemsList>
  </ListLayout>

  <router-view>

  </router-view>

</template>

<script>
import ItemsList from "@/components/ItemsList";
import ListLayout from "@/layout/ListLayout";

import risks from '@/constants/risks.js'

export default {
  components: {
    ItemsList,
    ListLayout,
  },
  name: "AttacksView",
  data() {
    return {
      risks
    }
  },
}

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.risk {
  &__list {
    margin-bottom: 66px;
  }
}
</style>