<template>
  <DefaultLayout>
    <div class="home">
      <img
        class="home__desktop"
        src="../assets/images/home-view/desktop.png"
        alt="desktop"
      >
      <AboutUs class="home__about" />
      <div class="home__container">
        <InfoSection
          style=""
          class="home__stats"
          :img-src="image.statDiagram"
          :link="links.auth"
        >
          <template #title>
            Статистика за год
          </template>
          <template #text>
            Использование компьютера требует специальных навыков. Людей, достигших в этом
            иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное
            обеспечение на специальном компьютерном языке. Но слово «хакер» также применимо
            к человеку, который пытается украсть информацию из компьютерных систем.
          </template>
          <template #link>
            Узнать больше
          </template>
        </InfoSection>

        <InfoSection
          style="flex-direction: row-reverse"
          class="home__services"
          :img-src="image.service"
          :link="links.services"
        >
          <template #title>
            Сервисы
          </template>
          <template #text>
            Использование компьютера требует специальных навыков. Людей, достигших в этом
            иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное
            обеспечение на специальном компьютерном языке. Но слово «хакер» также применимо
            к человеку, который пытается украсть информацию из компьютерных систем.
          </template>
          <template #link>
            Перейти в "Сервисы"
          </template>
        </InfoSection>

        <InfoSection
          style=""
          class="home__threats"
          :img-src="image.threat"
          :link="links.threatsBank"
        >
          <template #title>
            База данных угроз
          </template>
          <template #text>
            Использование компьютера требует специальных навыков. Людей, достигших в этом
            иногда называют «хакерами». Обычно хакер – это человек, который создаёт программное
            обеспечение на специальном компьютерном языке. Но слово «хакер» также применимо
            к человеку, который пытается украсть информацию из компьютерных систем.
          </template>
          <template #link>
            Перейти в "Базы данных угроз"
          </template>
        </InfoSection>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout";
import AboutUs from "@/pages/home/AboutUs";
import InfoSection from "@/pages/home/InfoSection";

import paths from "@/constants/paths";


export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    AboutUs,
    InfoSection,
  },
  data() {
    return {
      links: {
        ...paths
      },
      image: {
        statDiagram: '/assets/images/home-view/stats.png',
        service: '',
        threat: '/assets/images/home-view/threatBase.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

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