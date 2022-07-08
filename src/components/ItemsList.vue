<template>
  <div class="container">
    <FindInput
        class="input"
    >
    </FindInput>

    <div class="sort">
      Сортировать по:
      <select name="" id="" class="sort__by">
        <option class="sort__by__option" value="increasing">возрастанию</option>
        <option class="sort__by__option" value="decreasing">убыванию</option>
      </select>
    </div>

    <ul
        class="list"
        v-if="items"
    >
      <router-link
          class="list__item"
          v-for="item in items"
          :key="item.id"
          :to="`${$route.path}/${item.id}`"
      >
        <li

        >
          <span class="list__item__color" :style="{background: getColor(item.impact_level)} " ></span>
          <span class="list__item__id"> А-{{ item.id }}.</span>
          <span class="list__item__name"> {{ item.name }} </span>
        </li>
      </router-link>

    </ul>

    <div class="no-items" v-else> Ошибка загрузки данных, обновите станицу или попробуйте позднее</div>

  </div>

</template>

<script>
export default {
  name: "ItemsList",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getColor(level) {
      switch (level) {
        case 'Критичный': return '#FF1D1D'
        case 'Высокий': return '#F9761D'
        case 'Средний': return '#FAC712'
        case 'Низкий': return '#0FD100'
        default: return '#0FD100'
      }
    }
  }
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

  &__by {
    border: none;
    background: $background-color;
    @include main-font(20px, 500);
    color: #AAAAAA;
  }

  &__by:hover {
    color: #8a8a8a;
    cursor: pointer;
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
    padding-left: 24px;
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

  &__item:nth-child(odd) {
    background: rgba(90, 192, 102, 0.25);
  }
}


</style>