<template>
  <div
      class="container"
      v-if="!!items"
  >
    <FindInput
        class="input"
    >
    </FindInput>

    <div class="sort">
      Сортировать по:
      <select id="" class="sort__by">
        <option class="sort__by__option" value="increasing">возрастанию</option>
        <option class="sort__by__option" value="decreasing">убыванию</option>
      </select>
      <span class="sort__arrow">
        <img src="../assets/images/icons/selectArrow.png" alt="">
      </span>
    </div>

    <ul
        class="list"
    >
      <router-link
          class="list__item"
          v-for="item in items"
          :key="item.id"
          :to="`${$route.path}/${item.id}`"
      >
        <li>
          <span class="list__item__color" :style="{background: getColor(item.impact_level)} "></span>
          <span class="list__item__id"> {{ itemsType }}-{{ item.id }}.</span>
          <span class="list__item__name"> {{ item.name }} </span>
        </li>
      </router-link>

      <button class="list__more">
        Показать ещё
      </button>

    </ul>

  </div>
  <div class="no-items" v-else> Ошибка загрузки данных, обновите станицу или попробуйте позднее</div>

</template>

<script>
export default {
  name: "ItemsList",
  components: {},

  props: {
    itemsType: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => undefined
    }
  },
  methods: {
    getColor(level) {
      switch (level) {
        case 'Критичный':
          return '#FF1D1D'
        case 'Высокий':
          return '#F9761D'
        case 'Средний':
          return '#FAC712'
        case 'Низкий':
          return '#0FD100'
        default:
          return '#0FD100'
      }
    }
  },

}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

li {
  list-style-type: none;
}


.input {
  margin-top: 50px;
}

.sort {
  padding-left: 32px;
  margin-top: 65px;
  @include main-font(20px, 500);
  display: flex;
  align-items: center;

  &__by {
    appearance: none;
    padding-left: 21px;
    margin-left: 10px;
    background: $background-color;
    @include main-font(20px, 500);
    text-align: start;
    vertical-align: center;
    color: #333333;
    width: 216px;
    height: 42px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;

    &__by:hover {
      cursor: pointer;
    }
  }


  &__arrow {
    @include flex-column-center;
    position: relative;
    left: -30px;

    img {
      height: 5px;
      width: 10px;
    }
  }
}

.list {
  margin-top: 32px;

  &__item {
    text-decoration: none;

    width: 1060px;
    height: 66px;
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    color: $color-main;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin-bottom: 26px;
    position: relative;
    transition: transform 0.2s ease-out 0s;

    &__color {
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 66px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px 0 0 20px;

    }

    &__id {
      margin-left: 44px;
      @include main-font(24px, 700)
    }

    &__name {
      margin-left: 20px;
      @include main-font(24px, 500)
    }

  }

  &__more {
    @include main-font(20px, 600);
    display: block;
    margin: 154px auto 146px;
    width: 171px;
    height: 40px;
    background: rgba(41, 150, 54, 0.5);
    color: #076B13;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease 0s;
  }

  &__more:hover {
    cursor: pointer;
    background: $color-main;
    color: #FFFFFF;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &__item:nth-child(odd) {
    background: rgba(90, 192, 102, 0.25);
  }
}

.no-items {
  margin: 150px auto;
  @include main-font(30px, 500)
}

</style>