<template>
  <ListLayout>
    <ItemsList
      class="sfc__list"
      items-type="SFC"
      :items="sfc"
    />

    <router-view />
  </ListLayout>
</template>

<script>
import ListLayout from "@/layout/ListLayout";
import ItemsList from "@/pages/threat-bank/ItemsList";

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