<template>
  <div
      class="numbers"
      @click="toggleCounter"
  >
    <span
        class="numbers__item -active"
    >10</span>

    <span
        class="numbers__item"
    >20</span>

    <span
        class="numbers__item"
    >50</span>

    <span
        class="numbers__item"
    >100</span>

  </div>

</template>

<script>
export default {
  name: "PaginationCount",
  data() {
    return {
      countOfItems: 10,
    }
  },
  methods: {
    toggleCounter(event) {
      //TODO write logic of pagination

      const target = event.target
      if (target.classList.contains('numbers')) return
      if (target.classList.contains('-active')) return

      let nodeList = target.parentNode.childNodes;
      for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].classList.contains('-active')) {
          nodeList[i].classList.remove('-active');
          break;
        }
      }

      target.classList.add('-active');

    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.numbers {

  &__item {
    @include main-font(20px, 500);
    margin-right: 21px;
    width: 24px;
    height: 24px;
    text-align: center;
    transition: font-size 0.2s ease-out 0.1s;
  }

  &__item:hover {
    cursor: pointer;
    font-size: 24px;

  }
}

.-active {
  text-decoration-line: underline;
  color: $color-main;
  @include main-font(24px, 500);
}


</style>