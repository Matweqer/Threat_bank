<template>
  <ListLayout>
    <ItemsList
      class="risk__list"
      items-type="R"
      :items="risks"
    />
  </ListLayout>

  <router-view />
</template>

<script>
import ItemsList from "@/pages/threat-bank/ItemsList";
import ListLayout from "@/layout/ListLayout";

import risks from '@/constants/risks.js'

export default {
  name: "AttacksView",
  components: {
    ItemsList,
    ListLayout,
  },
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