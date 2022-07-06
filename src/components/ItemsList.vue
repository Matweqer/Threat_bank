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

    transition: height 0.2s ease-out 0s, margin 0.3s ease-out 0s, padding-left 0.2s ease-out 0s;

    &__id {
      @include main-font(24px, 700)
    }

    &__name {
      margin-left: 20px;
      @include main-font(24px, 500)
    }
  }
  &__item:hover {
    height: 80px;
    margin: 10px 0;
    border-bottom: $color-main solid 4px;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    padding-left: 48px;
  }
  &__item:nth-child(odd) {
    background: rgba(90, 192, 102, 0.25);
  }
}


</style>