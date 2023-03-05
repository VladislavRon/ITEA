//1. Принять от пользователя имена людей для набора в команду. 
// Имена принять и сохранить в новом массиве. 
// Количество имён должно соответсвовать количеству должностей. 
// Массив с должностями - 7
// ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].

const employees = [];

for(let i=1;i<8;i++){
    let newPerson = prompt('Enter your name');
    employees.push(newPerson);
}

//2. Создать объект team в котором будут храниться новые объекты-сотрудники с параметрами
// name и position, данные для этих свойств добавляем из массивов.
const positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
const team = {};
for (let i = 0; i < 7; i++) {
    team[i + 1] = {name: employees[i], position: positions[i]};
}

//3. Добавить сотрудникам зарплаты (свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
// если в должности есть слово "junior" сумма будет от 500 до 1000;
// если в должности есть слово "middle" сумма будет от 1500 до 2000;
// если в должности есть слово "senior" сумма будет от 2500 до 3000;
// для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска'). Например:
//    var name = 'Junior developer';
//    name.indexOf('Junior'); 
//    //в данном случае вернет 0, если такая строка отсутсвует вернет -1. 
//    //Регистр имеет значение, по этому строка "junior" вернет -1

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let elem in team){
    let position = team[elem].position;

    if(position.indexOf('Junior') === 0){
        team[elem].salary = getRandomInt(500, 1000);
    }else if(position.indexOf('Middle') === 0){
        team[elem].salary = getRandomInt(1500, 2000);
    }else if(position.indexOf('Senior') === 0){
        team[elem].salary = getRandomInt(2500, 3000);
    }else{
        team[elem].salary = getRandomInt(4000, 4500);
    }
}

//4. Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию
// о пользователе (например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").

for(let elem in team){
    team[elem].tellAboutYourSelf =  () => `"Меня зовут ${team[elem].name} и я - ${team[elem].position}. Я зарабатываю ${team[elem].salary}."`

}
for(let elem in team){
    console.log(team[elem].tellAboutYourSelf())
}

//5. Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках
// в консоль в формате: "John - Project manager. Зарплата - 4863$."*
// Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций
// в логическом порядке. Например:
//
// getNames();
// createTeam();
// setSalary();
// создание цикла для установки метода tellAboutYourSelf();
// создание team.showTeam = function() {...};
// вызов метода showTeam();

team.showTeam = () => {
    for(let elem in team){
        typeof team[elem] !== "function" &&
        console.log(`${team[elem].name} - ${team[elem].position}. Зарплата - ${team[elem].salary}.`)
    }
}
team.showTeam();
