<template>
  <div
      class="path"
      @click="getPath"
  >

    <span
        class="path__point"
        v-for="(point, index) in path"
        :key="index"
    >
      <router-link
          class="path__link"
          :to="point.link"
      >
        {{ point.name }}
      </router-link>
      <span v-if="index !== path.length - 1">/</span>
    </span>

  </div>
</template>

<script>
import routes from "@/router/routes";

export default {
  name: "CurrentPath",
  props: {
    path: {
      type: Array,
      required: true
    }
  },
  methods: {
    getPath() {
      console.log(routes)
      const path = this.$route.path
      const partOfPath = '/' + path.slice(1).split('/')[0]
      const namesList = []

      for (let i = 0; i < routes.length; i++) {

        if (routes[i].path === partOfPath) {
          namesList.push(routes[i].name);

          if (routes[i].hasOwnProperty.call(routes[i], 'children')) {

            for (let j = 0; j < routes[i].children.length; j++) {

              let child = routes[i].children[j]
              if (child.path === path) {
                namesList.push(child.name);
                break;

              }
            }
          }
        }
      }
      console.log(namesList)
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.path {
  @include main-font-normal(20px);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-bottom: 10px;
  background: $background-color;


  &__link {
    text-decoration: none;
    margin: 5px;
    color: $color-red;
  }

  &__link:hover {
    text-decoration: underline;
  }

  &__link:last-child {
    color: black;
  }

  &__link:last-child:hover {
    text-decoration: none;
  }

}


</style>