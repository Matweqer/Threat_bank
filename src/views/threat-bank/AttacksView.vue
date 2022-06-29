<template>

  <div class="attacks">
    <CurrentPath :path="path"></CurrentPath>

    <div class="attacks__container">
      <ItemsList
          class="attacks__list"
          :items="attacksList"
      >

      </ItemsList>

      <button class="attacks__more">
        Показать ещё
      </button>

    </div>

  </div>
</template>

<script>
import ItemsList from "@/components/ItemsList";
import paths from "@/constants/paths";

const {threats, attacks} = paths
export default {
  components: {ItemsList},
  name: "AttacksView",
  data() {
    return {
      path: [
        {
          name: 'Банк угроз',
          link: threats
        },
        {
          name: 'Список атак',
          link: attacks
        }
      ],
      attacksList: [
        {
          "id": 1,
          "name": "TEST",
          "description": "TEST Description",
          "attack_purpose": 0,
          "impact_nature": 0,
          "tools": [
            "0",
            "4"
          ],
          "consequences": [
            "1"
          ],
          "impact_level": 3,
          "destabilization_level": 3,
          "archetypes": "TEST Архетип",
          "intruder": 1,
          "intruder_motive": 1,
          "intruder_possibility": 1
        },
        {
          "id": 2,
          "name": "Атака на БПЛА для перехвата управления другими БПЛА",
          "description": "Используется дрон, который летает, ищет беспроводной сигнал любого другого дрона радиусе своего действия, принудительно отключает беспроводное соединение легитимного пользователя целевого дрона, затем аутентифицируется с целевым дроном, представляет себя его владельцем, затем передает команды ему и всем другим дронам-зомби, которых он сумел захватить.",
          "attack_purpose": 2,
          "impact_nature": 0,
          "tools": [
            "3",
            "4"
          ],
          "consequences": [
            "0"
          ],
          "impact_level": 1,
          "destabilization_level": 1,
          "archetypes": "технологическая уязвимость:\r\n – уязвимость системы связи;\r\n – физическая незащищенность беспроводных каналов связи. \r\n\r\nэксплуатационная уязвимость:\r\n – использование слабых паролей.",
          "intruder": 7,
          "intruder_motive": 17,
          "intruder_possibility": 2
        },
        {
          "id": 3,
          "name": "TEST",
          "description": "TEST Description",
          "attack_purpose": 0,
          "impact_nature": 0,
          "tools": [
            "0",
            "4"
          ],
          "consequences": [
            "1"
          ],
          "impact_level": 3,
          "destabilization_level": 3,
          "archetypes": "TEST Архетип",
          "intruder": 1,
          "intruder_motive": 1,
          "intruder_possibility": 1
        },
        {
          "id": 4,
          "name": "TEST",
          "description": "TEST Description",
          "attack_purpose": 0,
          "impact_nature": 0,
          "tools": [
            "0",
            "4"
          ],
          "consequences": [
            "1"
          ],
          "impact_level": 3,
          "destabilization_level": 3,
          "archetypes": "TEST Архетип",
          "intruder": 1,
          "intruder_motive": 1,
          "intruder_possibility": 1
        },
        {
          "id": 5,
          "name": "TEST",
          "description": "TEST Description",
          "attack_purpose": 0,
          "impact_nature": 0,
          "tools": [
            "0",
            "4"
          ],
          "consequences": [
            "1"
          ],
          "impact_level": 3,
          "destabilization_level": 3,
          "archetypes": "TEST Архетип",
          "intruder": 1,
          "intruder_motive": 1,
          "intruder_possibility": 1
        },

      ]
    }
  },
  methods: {
    getAttacks() {
      fetch('http://5.188.118.169:8000/api/attacks/attacks/')
          .then((response) => {
            console.log(response.json())
          }).catch((error) => console.log(error))

    },
  },

  beforeMount() {
    this.getAttacks()
  },

}

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';


.attacks {
  margin: 0 auto;
  width: 1200px;

  &__container {
    width: 1060px;
    margin: 0 auto;
    @include flex-column-center;

  }

  &__list {
    margin-bottom: 66px;
  }

  &__more {
    @include main-font-normal(20px);
    color: #FFFFFF;
    margin: 0 auto 165px;
    width: 171px;
    height: 40px;
    background: $color-main;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease 0s;
  }

  &__more:hover {
    cursor: pointer;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  }

}
</style>