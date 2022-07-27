<template>
  <ListLayout>
    <ItemsList
      class="countermeasures__list"
      items-type="С"
      :items="countermeasures"
    />
  </ListLayout>

  <router-view />
</template>

<script>
import ItemsList from "@/pages/threat-bank/ItemsList";
import ListLayout from "@/layout/ListLayout";

import countermeasures from "@/constants/countermeasures";

export default {
  name: "CountermeasuresView",
  components: {
    ItemsList,
    ListLayout,
  },
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