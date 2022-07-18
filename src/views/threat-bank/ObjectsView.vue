<template>
  <ListLayout>
    <ItemsList
        class="object__list"
        itemsType="О"
        :items="objects"
    >

    </ItemsList>

    <router-view>

    </router-view>

  </ListLayout>

</template>

<script>
import objects from "@/constants/objects";
import ListLayout from "@/layout/ListLayout";
import ItemsList from "@/components/ItemsList";

export default {
  name: "ObjectsView",
  components: {
    ListLayout,
    ItemsList
  },
  data() {
    return {
      objects
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.object {

  margin: 0 auto;
  width: 1200px;

  &__container {
    @include flex-column-center
  }

}
</style>