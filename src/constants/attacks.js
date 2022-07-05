// import getAttacks from "@/controller/attacks";

// const axios = require('axios').default;
//
// const http = axios.create({
//     baseURL: 'http://5.188.118.169:8000'
// })
//
// async function getAttacksResponse() {
//     try {
//         const response = await http.get("/api/attacks/attacks/",
//             {
//                 headers: {
//                     'Access-Control-Allow-Origin': '*',
//                     'Content-Type': 'application/json',
//                 },
//             })
//         console.log(response.data.results);
//         // return response.data.results
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// async function getAttacks() {
//     await getAttacksResponse()
//     //     .then(attacks => {
//     //         attacks.forEach((attack) => {
//     //             switch (attack.attack_purpose) {
//     //                 case 0:
//     //                     attack.attack_purpose = 'Конфиденциальность';
//     //                     break;
//     //                 case 1:
//     //                     attack.attack_purpose = 'Целостность';
//     //                     break;
//     //                 case 2:
//     //                     attack.attack_purpose = 'Доступность';
//     //                     break;
//     //             }
//     //             switch (attack.impact_nature) {
//     //                 case 0:
//     //                     attack.impact_nature = 'Активный';
//     //                     break;
//     //                 case 1:
//     //                     attack.impact_nature = 'Пассивный';
//     //                     break;
//     //             }
//     //             for (let i = 0; i < attack.tools.length; i++) {
//     //                 switch (attack.tools[i]) {
//     //                     case '0':
//     //                         attack.tools[i] = 'Свободное ПО';
//     //                         break;
//     //                     case '1':
//     //                         attack.tools[i] = 'Коммерческое ПО';
//     //                         break;
//     //
//     //                     case '2':
//     //                         attack.tools[i] = 'Вспомогательные средства';
//     //                         break;
//     //                     case '3':
//     //                         attack.tools[i] = 'Специальное ПО';
//     //                         break;
//     //                     case '4':
//     //                         attack.tools[i] = 'Самостоятельно разработанное ПО';
//     //                         break;
//     //                 }
//     //             }
//     //             for (let i = 0; i < attack.consequences.length; i++) {
//     //                 switch (attack.consequences[i]) {
//     //                     case '0':
//     //                         attack.consequences[i] = 'Влияние на человека';
//     //                         break;
//     //                     case '1':
//     //                         attack.consequences[i] = 'Влияние на информацию';
//     //                         break;
//     //                     case '2':
//     //                         attack.consequences[i] = 'Влияние на окружающую среду';
//     //                         break;
//     //                 }
//     //             }
//     //             for (let prop in attack) {
//     //                 if (prop.match(/level/)) {
//     //
//     //                     switch (attack[prop]) {
//     //                         case 0:
//     //                             attack[prop] = 'Низкий';
//     //                             break;
//     //                         case 1:
//     //                             attack[prop] = 'Средний';
//     //                             break;
//     //                         case 2:
//     //                             attack[prop] = 'Высокий';
//     //                             break;
//     //                         case 3:
//     //                             attack[prop] = 'Критичный';
//     //                             break;
//     //                     }
//     //                 }
//     //             }
//     //         })
//     //     })
//     //     .then(attacks => attacks)
// }
//
// export default getAttacks

const attacks =  [
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
]

attacks.forEach((attack) => {
    switch (attack.attack_purpose) {
        case 0:
            attack.attack_purpose = 'Конфиденциальность';
            break;
        case 1:
            attack.attack_purpose = 'Целостность';
            break;
        case 2:
            attack.attack_purpose = 'Доступность';
            break;
    }
    switch (attack.impact_nature) {
        case 0:
            attack.impact_nature = 'Активный';
            break;
        case 1:
            attack.impact_nature = 'Пассивный';
            break;
    }
    for (let i = 0; i < attack.tools.length; i++) {
        switch (attack.tools[i]) {
            case '0':
                attack.tools[i] = 'Свободное ПО';
                break;
            case '1':
                attack.tools[i] = 'Коммерческое ПО';
                break;

            case '2':
                attack.tools[i] = 'Вспомогательные средства';
                break;
            case '3':
                attack.tools[i] = 'Специальное ПО';
                break;
            case '4':
                attack.tools[i] = 'Самостоятельно разработанное ПО';
                break;
        }
    }
    for (let i = 0; i < attack.consequences.length; i++) {
        switch (attack.consequences[i]) {
            case '0':
                attack.consequences[i] = 'Влияние на человека';
                break;
            case '1':
                attack.consequences[i] = 'Влияние на информацию';
                break;
            case '2':
                attack.consequences[i] = 'Влияние на окружающую среду';
                break;
        }
    }
    for (let prop in attack) {
        if (prop.match(/level/)) {

            switch (attack[prop]) {
                case 0:
                    attack[prop] = 'Низкий';
                    break;
                case 1:
                    attack[prop] = 'Средний';
                    break;
                case 2:
                    attack[prop] = 'Высокий';
                    break;
                case 3:
                    attack[prop] = 'Критичный';
                    break;
            }
        }
    }
})

export default attacks
