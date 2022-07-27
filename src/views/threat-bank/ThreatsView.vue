<template>
  <ListLayout>
    <ItemsList
      class="threats__list"
      items-type="T"
      :items="threats"
    />
  </ListLayout>

  <router-view />
</template>

<script>
import ItemsList from "@/pages/threat-bank/ItemsList";
import ListLayout from "@/layout/ListLayout";

import threats from "@/constants/threats";

export default {
  name: "AttacksView",
  components: {
    ItemsList,
    ListLayout,
  },
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