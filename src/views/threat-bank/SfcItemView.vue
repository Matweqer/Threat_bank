<template>
  <CardLayout
      class="info"
      :page="{type: 'SFC', name: sfcItem.name}"
  >


  </CardLayout>
</template>

<script>
import CardLayout from "@/layout/CardLayout";
import {getItemById} from "@/controller/data";
import sfc from "@/constants/sfc";

export default {
  name: "ObjectView",
  components: {
    CardLayout
  },
  data() {
    return {
      sfcItem: getItemById(sfc, this.$route.params.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

</style>