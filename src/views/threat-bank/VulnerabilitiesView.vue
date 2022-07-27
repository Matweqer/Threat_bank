<template>
  <ListLayout>
    <ItemsList
      class="vulnerability__list"
      items-type="V"
      :items="vulnerabilities"
    />
  </ListLayout>

  <router-view />
</template>

<script>
import ItemsList from "@/pages/threat-bank/ItemsList";
import ListLayout from "@/layout/ListLayout";

import vulnerabilities from "@/constants/vulnerabilities";


export default {
  name: "AttacksView",
  components: {
    ItemsList,
    ListLayout,
  },
  data() {
    return {
      vulnerabilities
    }
  },
}

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.vulnerability {
  &__list {
    margin-bottom: 66px;
  }
}
</style>