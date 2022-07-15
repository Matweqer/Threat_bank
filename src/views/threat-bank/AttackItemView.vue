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

    <section class="info__attack">
      <p class="info__attack__title">Информация об атаке</p>

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

    <section class="info__intruder">
      <p class="info__intruder__title">Информация о нарушителе</p>

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
import attacks from '@/constants/attacks.js'

export default {
  name: "AttackItemView",
  components: {
    CardLayout
  },
  props: {},
  data() {
    return {
      attack: this.getAttack(),
    }
  },
  methods: {
    getAttack() {
      return attacks.find(item => item.id === +this.$route.params.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.info {

  &__name {
    @include main-font(36px, 700);
    margin-left: 20px;
    margin-bottom: 20px;
    color: $color-main;
  }

  &__id {
    @include main-font(24px, 300);
    margin-left: 20px;

    margin-bottom: 60px;
  }

  &__images {
    display: flex;
    justify-content: space-between;
    margin-bottom: 93px;

    &__activity, &__logo {
      @include flex-column-center;
      width: 518px;
      height: 290px;
      background: #EDEDED;
    }
  }

  &__attack, &__intruder {
    @include flex-column-center;
    margin-bottom: 118px;

    &__title {
      color: $color-main;
      @include main-font(20px, 800);
      font-style: italic;
      padding-bottom: 15px;
    }
  }

  &__origins {
    @include main-font(24px, 600);
    color: $color-main;

    &__link {
      @include main-font(20px, 400);
      font-style: italic;
      color: black;
    }
  }

}

.table {
  border-spacing: 14px 0;

  &__row {
    min-height: 36px;

    &__name {
      @include main-font(20px, 800);
      font-style: italic;
      padding-right: 15px;
      color: $color-main;
      border-bottom: 0.5px solid $color-main;
    }

    &__content {
      @include main-font(20px, 500);
      padding: 6px 0 6px 36px;

      border-left: solid 0.5px $color-main;
    }
  }

  &__row:nth-child(odd) &__row__content {
    background-color: rgba(90, 192, 102, 0.25);
  }
}

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