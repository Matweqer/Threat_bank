<template>
  <CardLayout
      class="info"
      :page="{type: 'SFC', name: sfcItem.name}"
  >
    <div class="info__name">
      {{ sfcItem.name }}
    </div>

    <div class="info__id">
      ID SFC. {{ sfcItem.id }}
    </div>

    <section class="info__sfc info__item">
      <p class="info__item__title">Информация об атаке</p>

      <table class="info__sfc__table table">
        <tr class="table__row">
          <td class="table__row__name">Описание</td>
          <td class="table__row__content">{{ sfcItem.description }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Тип</td>
          <td class="table__row__content">{{ sfcItem.type }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Объект СФХ</td>
          <td class="table__row__content">{{ sfcItem.evaluation_object }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Уровень критичности</td>
          <td class="table__row__content">{{ sfcItem.security_level }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Уровень дестабилизации</td>
          <td class="table__row__content">{{ sfcItem.destabilization_level }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Архетипы</td>
          <td class="table__row__content">{{ sfcItem.archetypes }}</td>
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