<template>
  <ListLayout>
    <ItemsList
        class="sfc__list"
        itemsType="SFC"
        :items="sfc"
    >

    </ItemsList>

    <router-view>

    </router-view>
  </ListLayout>

</template>

<script>
import ListLayout from "@/layout/ListLayout";
import ItemsList from "@/components/ItemsList";

import sfc from "@/constants/sfc";

export default {
  name: "SfcView",
  components: {
    ListLayout,
    ItemsList
  },
  data() {
    return {
      sfc
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.sfc {
  &__list {
    margin-bottom: 66px;
  }
}
</style>