<template>

  <CardLayout
      class="info"
      :page="{type: 'O', name: object.name}"
  >

    <div class="info__name">
      {{ object.name }}
    </div>

    <div class="info__id">
      ID O. {{ object.id }}
    </div>

    <section class="info__object info__item">
      <p class="info__item__title">Информация об атаке</p>

      <table class="info__object__table table">
        <tr class="table__row">
          <td class="table__row__name">Описание</td>
          <td class="table__row__content">{{ object.description }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Домен</td>
          <td class="table__row__content">{{ object.domain }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Характеристики</td>
          <td class="table__row__content">{{ object.characteristics.join(', ') }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Уровень критичности</td>
          <td class="table__row__content">{{ object.criticality_level }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Архетипы</td>
          <td class="table__row__content">{{ object.archetypes }}</td>
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
@import '../../../assets/scss/index';

// card style pattern
@import '../../../assets/scss/modules/cardInfo';
@import '../../../assets/scss/modules/table';

.info__object__table .table {
  &__row {
    &__name {
      width: 250px;
    }

    &__content {
      width: 877px;
    }
  }
}

</style>