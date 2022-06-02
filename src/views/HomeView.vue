<template>
  <div class="home">
    <img class="home__desktop" src="../assets/images/home-view/desktop.png" alt="desktop">
    <AboutUs class="home__about"></AboutUs>
    <div class="home__container">

      <InfoSection
          style=""
          class="home__stats"
          :img-src="image.statDiagram"
          :link="link.toAuth">
        <template v-slot:title>Статистика за год</template>
        <template v-slot:text>
          Использование компьютера требует специальных навыков. Людей, достигших в этом
          иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное
          обеспечение на специальном компьютерном языке. Но слово «хакер» также применимо
          к человеку, который пытается украсть информацию из компьютерных систем.
        </template>
        <template v-slot:link>Узнать больше</template>

      </InfoSection>

      <InfoSection
          style="flex-direction: row-reverse"
          class="home__services"
          :img-src="image.service"
          :link="link.toServices">
        <template v-slot:title>Сервисы</template>
        <template v-slot:text>
          Использование компьютера требует специальных навыков. Людей, достигших в этом
          иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное
          обеспечение на специальном компьютерном языке. Но слово «хакер» также применимо
          к человеку, который пытается украсть информацию из компьютерных систем.
        </template>
        <template v-slot:link>Перейти в "Сервисы"</template>
      </InfoSection>

      <InfoSection
          style=""
          class="home__threats"
          :img-src="image.threat"
          :link="link.toThreats">
        <template v-slot:title>База данных угроз</template>
        <template v-slot:text>
          Использование компьютера требует специальных навыков. Людей, достигших в этом
          иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное
          обеспечение на специальном компьютерном языке. Но слово «хакер» также применимо
          к человеку, который пытается украсть информацию из компьютерных систем.
        </template>
        <template v-slot:link>Перейти в "Базы данных угроз"</template>
      </InfoSection>
    </div>
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs";
import InfoSection from "@/components/InfoSection";

export default {
  name: "HomeView",
  components: {
    AboutUs,
    InfoSection,
  },
  data() {
    return {
      link: {
        toAuth: '/auth',
        toServices: '/services',
        toThreats: '/threats'
      },
      image: {
        statDiagram: '/assets/images/home-view/stats.png',
        service: '/assets/images/home-view/service.png',
        threat: '/assets/images/home-view/threatBase.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import  'src/assets/scss/variables.scss';
.home {
  background: $background-color;
  &__container {
    margin: 0 auto;
    width: 1366px;
  }
  &__desktop {
    width: 100%;
  }
}
</style>