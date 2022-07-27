<template>
  <ListLayout>
    <ItemsList
      class="attacks__list"
      items-type="А"
      :items="attacks"
    />
  </ListLayout>

  <router-view />
</template>

<script>
import ItemsList from "@/pages/threat-bank/ItemsList";
import ListLayout from "@/layout/ListLayout";

import attacks from '@/constants/attacks.js'

export default {
  name: "AttacksView",
  components: {
    ItemsList,
    ListLayout,
  },
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
  &__list {
    margin-bottom: 66px;
  }
}
</style>