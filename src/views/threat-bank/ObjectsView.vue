<template>
  <div class="object">
    <BreadCrumbs></BreadCrumbs>

    <div class="object__container">
      <ItemsList
          class="object__list"
          itemsType="О"
          :items="objects"
      >

      </ItemsList>


    </div>


    <router-view>

    </router-view>
  </div>
</template>

<script>
import objects from "@/constants/objects";
import ItemsList from "@/components/ItemsList";
export default {
  name: "ObjectsView",
  components: {
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