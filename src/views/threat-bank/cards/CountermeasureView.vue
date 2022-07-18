<template>
  <CardLayout
      class="info"
      :page="{type: 'С', name: countermeasure.name}"
  >
    <div class="info__name">
      {{ countermeasure.name }}
    </div>

    <div class="info__id">
      ID С. {{ countermeasure.id }}
    </div>

    <section class="info__sfc info__item">
      <table class="info__sfc__table table">
        <tr class="table__row">
          <td class="table__row__name">Описание</td>
          <td class="table__row__content">{{ countermeasure.description }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Угроза</td>
          <td class="table__row__content">{{ countermeasure.threat }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Архетипы</td>
          <td class="table__row__content">{{ countermeasure.archetypes }}</td>
        </tr>
      </table>
    </section>

    <section class="info__origins">
      Ссылки на источники:
      <a href="https://bdu.fstec.ru/threat" class="info__origins__link">https://bdu.fstec.ru/threat</a>
    </section>

  </CardLayout>
</template>

<script>
import CardLayout from "@/layout/CardLayout";
import {getItemById} from "@/controller/data";
import countermeasures from "@/constants/countermeasures";

export default {
  name: "ObjectView",
  components: {
    CardLayout
  },
  data() {
    return {
      countermeasure: getItemById(countermeasures, this.$route.params.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/index';

// card style pattern
@import '../../../assets/scss/modules/cardInfo';
@import '../../../assets/scss/modules/table';

.info__sfc__table .table {
  &__row {
    &__name {
      width: 279px;
    }

    &__content {
      width: 832px;
    }
  }
}
</style>