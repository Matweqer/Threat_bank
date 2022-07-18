<template>
  <ListLayout>
    <ItemsList
        class="vulnerability__list"
        itemsType="V"
        :items="vulnerabilities"
    >

    </ItemsList>
  </ListLayout>

  <router-view>

  </router-view>

</template>

<script>
import ItemsList from "@/components/ItemsList";
import ListLayout from "@/layout/ListLayout";

import vulnerabilities from "@/constants/vulnerabilities";


export default {
  components: {
    ItemsList,
    ListLayout,
  },
  name: "AttacksView",
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