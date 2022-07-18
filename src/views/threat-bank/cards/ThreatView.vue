<template>
  <CardLayout
      class="info"
      :page="{type: 'T', name: threat.name}"
  >
    <div class="info__name">
      {{ threat.name }}
    </div>

    <div class="info__id">
      ID T. {{ threat.id }}
    </div>

    <section class="info__threat info__item">
      <table class="info__threat__table table">
        <tr class="table__row">
          <td class="table__row__name">Описание</td>
          <td class="table__row__content">{{ threat.description }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Атака</td>
          <td class="table__row__content">{{ threat.attack }}</td>
        </tr>

        <tr class="table__row">
          <td class="table__row__name">Уязвимость</td>
          <td class="table__row__content">{{ threat.vulnerability }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">СФХ</td>
          <td class="table__row__content">{{ threat.sfc }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Объект</td>
          <td class="table__row__content">{{ threat.object }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Риск</td>
          <td class="table__row__content">{{ threat.risk }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Контрмеры</td>
          <td class="table__row__content">{{ threat.countermeasure }}</td>
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
import threats from "@/constants/threats";

export default {
  name: "ObjectView",
  components: {
    CardLayout
  },
  data() {
    return {
      threat: getItemById(threats, this.$route.params.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/index';

// card style pattern
@import '../../../assets/scss/modules/cardInfo';
@import '../../../assets/scss/modules/table';

.info__threat__table .table {
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