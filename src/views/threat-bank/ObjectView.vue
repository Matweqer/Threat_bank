<template>

  <CardLayout
      class="info"
      :page="{type: 'O', name: object.name}"
  >


  </CardLayout>

</template>

<script>
import CardLayout from "@/layout/CardLayout";
import {getItemById} from "@/controller/data";
import objects from "@/constants/objects";

export default {
  name: "ObjectView",
  components: {
    CardLayout
  },
  data() {
    return {
      object: getItemById(objects, this.$route.params.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

</style>