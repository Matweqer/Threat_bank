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
          :to="point.path"
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
    page: {
      type: Object,
    }
  },
  data() {
    return {
      path: this.getPath()
    }
  },
  methods: {
    pathIsLong() {
      return this.$route.path.match(new RegExp('/', 'g')).length > 2
    },
    getPath() {
      let fullPath = this.$route.path;
      let isLong = this.pathIsLong();

      let pathWithoutId = fullPath.slice(0, fullPath.lastIndexOf('/'));

      const firstPartOfPath = '/' + fullPath.slice(1).split('/')[0];

      const pathsList = [{}, {}];

      for (let i = 0; i < routes.length; i++) {

        if (routes[i].path === firstPartOfPath) {
          pathsList[0].name = routes[i].name;
          pathsList[0].path = routes[i].path;

          if (routes[i].hasOwnProperty.call(routes[i], 'children')) {

            for (let j = 0; j < routes[i].children.length; j++) {

              let child = routes[i].children[j];
              if (child.path === (isLong ? pathWithoutId : fullPath)) {
                pathsList[1].name = child.name;
                pathsList[1].path = child.path;
                break;
              }
            }
          }
        }
      }
      return pathsList
    },
    updatePathList() {
      if (this.pathIsLong()) {
        this.path.push({
          name: `${this.$props.page.type}-${this.$route.params.id} ${this.$props.page.name}`,
          path: ''
        })
      }
    }
  },
  mounted() {
    this.updatePathList()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.path {
  @include main-font(20px, 400);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-bottom: 10px;
  background: $background-color;


  &__link {
    text-decoration: none;
    margin: 5px;
    color: $color-main;
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