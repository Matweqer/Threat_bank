<template>

  <CardLayout
      class="info"
      :page="{type: 'A', name: attack.name}"
  >
    <div class="info__name">
      {{ attack.name }}
    </div>

    <div class="info__id">
      ID А. {{ attack.id }}
    </div>

    <section class="info__images">
      <div class="info__images__activity">
        <!--        graf -->
        <p class="info__images__activity__subtitle">Активность атаки за 3 года</p>
      </div>
      <div class="info__images__logo">
        <!--        logo -->
        <p class="info__images__logo__subtitle">Место для логотипов</p>
      </div>
    </section>

    <section class="info__attack info__item">
      <p class="info__item__title">Информация об атаке</p>

      <table class="info__attack__table table">
        <tr class="table__row">
          <td class="table__row__name">Описание</td>
          <td class="table__row__content">{{ attack.description }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Цель</td>
          <td class="table__row__content">{{ attack.attack_purpose }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Характер воздействия сценария</td>
          <td class="table__row__content">{{ attack.impact_nature }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Инструментарий</td>
          <td class="table__row__content">{{ attack.tools.join(', ') }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Последствия</td>
          <td class="table__row__content">{{ attack.consequences.join(', ') }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Уровень влияния</td>
          <td class="table__row__content">{{ attack.impact_level }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Архетипы</td>
          <td class="table__row__content">{{ attack.archetypes }}</td>
        </tr>
      </table>
    </section>

    <section class="info__intruder info__item">
      <p class="info__item__title">Информация о нарушителе</p>

      <table class="info__intruder__table table">
        <tr class="table__row">
          <td class="table__row__name">Тип</td>
          <td class="table__row__content"> ????</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Вид</td>
          <td class="table__row__content">{{ attack.intruder }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Мотив</td>
          <td class="table__row__content">{{ attack.intruder_motive }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Возможности</td>
          <td class="table__row__content">{{ attack.intruder_possibility }}</td>
        </tr>
        <tr class="table__row">
          <td class="table__row__name">Уровень потенциала</td>
          <td class="table__row__content"> ????</td>
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
import attacks from '@/constants/attacks.js'

export default {
  name: "AttackItemView",
  components: {
    CardLayout
  },
  data() {
    return {
      attack: getItemById(attacks, this.$route.params.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/index';

// card style pattern
@import '../../../assets/scss/modules/cardInfo';
@import '../../../assets/scss/modules/table';


.info__attack__table .table {
  &__row {
    &__name {
      width: 370px;
    }

    &__content {
      width: 753px;
    }
  }
}

.info__intruder__table .table {
  &__row {
    &__name {
      width: 290px;
    }

    &__content {
      width: 877px;
    }
  }
}

</style>