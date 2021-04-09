
//1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого
/*
let array=[2,7,8,17,3,0,1,4,15,12,19,16,5,10,6,9,11,13,14,18,20];
let sort=array.sort((a, b) => a-b)
console.log(sort);
*/
//  b) відсортувати його від більшого до меншого.
/*
let sort=array.sort((a, b) => b-a)
console.log(sort);
*/
//  c) Відфілтрувати числа які є кратними 3.
/*
let filtr=array.filter(value => value%3===0);
console.log(filtr);
*/
//  d) Відфілтрувати числа які є більшими за 10.
/*
let filter=array.filter(value => value>10);
console.log(filter);
*/
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
/*
array.forEach(value =>console.log(value));
*/
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
/*
let maps=array.map(value =>value*3 );
console.log(maps);
*/
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
/*
let reduce=array.reduce((acc, currentValue) => acc+currentValue );
console.log(reduce);
*/

//2) Створити масив з 20 стрічок та:
/*
let mas=['Andrey','Oleg','Dimas','Nazar','Max','Oksana','Igor','Anna','Sergiy','Olena','Roman','Victor','Oleksandr',
    'Alina','Karina','Bogdan','Sonya','Veronika','Rita','Nataliya'];

//  a) Відсортувати його в алфавітному порядку
let sort=mas.sort();
console.log(sort);
//  b) Відсортувати в зворотньому порядку
let sorts=mas.sort((a, b) => a<b?1:-1);
console.log(sorts);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let filter=mas.filter(value => value.length>4);
console.log(filter);
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let map=mas.map(value => value=`Sam says ${value}`);
console.log(map);
*/

/*
//3) Все робити тільки за допомогою методів масивів!
// Дано масив :
 const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
 ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let sort=users.sort((a, b) => a.age-b.age);
console.log(sort);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sorts=users.sort((a, b) => b.age-a.age);
console.log(sorts);
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

 let jsonClone = JSON.stringify(users) ;
let usersClone = JSON.parse(jsonClone);

usersClone.map((value, index) => value.id=index+1);

console.log(usersClone);

// d) відсортувати його за індентифікатором
 let sorting=usersClone.sort((a, b) => b.id-a.id);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let newClone = JSON.stringify(users) ;
let usersNewClone = JSON.parse(newClone);
let flat=[];
let reduce=usersNewClone.reduce((a,b)=>{
   if(a.isMarried){
      a.hasWife=true;
      flat.push(a);
   }
   return b;
})
console.log(flat);
*/

/*

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//  ];

// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів

// let filter1=cars.filter(value => value.volume>3);
// console.log(filter1);

// // - двигун = 2л

// let filter2=cars.filter(value => value.volume=2);
// console.log(filter2);

// // - виробник мерс

// let filter3=cars.filter(value => value.producer==='mercedes');
// console.log(filter3);


// - двигун більше 3х літрів + виробник мерседес

// let filter4=cars.filter(value =>value.volume>=3 && value.producer==='mercedes');
// console.log(filter4);

// - двигун більше 3х літрів + виробник субару

// let filter5=cars.filter(value => value.producer==='subaru' && value.volume >=3 );
// console.log(filter5);

// - сили більше ніж 300

// let filter6=cars.filter(value => value.power>300 );
// console.log(filter6);

// - сили більше ніж 300 + виробник субару

// let filter7=cars.filter(value => value.power>300 && value.producer==='subaru' );
// console.log(filter7);

// - мотор серіі ej

// let filter9=cars.filter(value => value.engine.startsWith('ej'));
// console.log(filter9);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter10=cars.filter(value => value.engine.startsWith('ej')&& value.power>300 && value.producer==='subaru');
// console.log(filter10);
//
// // - двигун меньше 3х літрів + виробник мерседес

// let filter11=cars.filter(value => value.volume<3 && value.producer==='mercedes');
// console.log(filter11);

// // - двигун більше 2л + сили більше 250

// let filter12=cars.filter(value => value.volume>2 && value.power>250);
// console.log(filter12);

// // - сили більше 250  + виробник бмв
// let filter13=cars.filter(value => value.power>250 && value.producer==='bmw');
// console.log(filter13)
*/
//- взять слдующий массив
/*
 const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
 ];
 */
//
// -- Відсортувати їх по ID
/*
 let sort1=usersWithAddress.sort((a, b) => a.id-b.id);
console.log(sort1);
 // -- Відсортувати їх по ID в зворотньому порядку
 let sort2=usersWithAddress.sort((a, b) => b.id-a.id);
console.log(sort2);
 // -- Відсортувати по віку
 let sort3=usersWithAddress.sort((a, b) => a.age-b.age);
console.log(sort3);
 // -- Відсортувати по віку в зворотньому порядку
 let sort4=usersWithAddress.sort((a, b) => b.age-a.age);
console.log(sort4);
 // -- Відсорутвати по імені
 let sort5=usersWithAddress.sort((a, b) => a.name>b.name?1:-1);
console.log(sort5);
 // -- Відсорутвати по назві вулиці
 let sort6=usersWithAddress.sort((a, b) => a.address.street>b.address.street?1:-1);
console.log(sort6);
 // -- Відсорутвати по номеру будинку
 let sort7=usersWithAddress.sort((a, b) => a.address.number>b.address.number?1:-1);
console.log(sort7);
 // -- Залигити тільки тих, хто молодший ніж 30 (filter)
 let filtr1=usersWithAddress.filter(value => value.age<30);
console.log(filtr1);
 // -- Залишити тільки одружених
 let filtr2=usersWithAddress.filter(value => value.isMarried);
console.log(filtr2);
 // -- Залишити тільки одружених, які молодні за 30
 let filtr3=usersWithAddress.filter(value => value.isMarried && value.age<30);
console.log(filtr3);
 // -- Залишити лише тих, в кого парні номери будинків.
 let filtr4=usersWithAddress.filter(value => value.address.number%2===0);
console.log(filtr4);
 // -- Порахувати загальний вік всіх людей. (reduce)
 let reduce=usersWithAddress.reduce((acc, currentValue) =>{
   return acc+currentValue.age;
},0);
console.log(reduce);
 */
 // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
/*
let newClone = JSON.stringify(usersWithAddress) ;
let usersNew = JSON.parse(newClone);
let children=[];
let reduces=usersNew.reduce((a,b)=>{
    if(a.isMarried && a.age>=30){
        a.child=true;
        children.push(a);
    }
    return b;
})
console.log(children);
*/
//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
/*
let Car1 = {marka: 'bmv', power: 200, owner: {name: 'Igor', age: 34, experience: 5}, price: 4000, year: 2012};
let Car2= {marka: 'reno', power: 310, owner: {name: 'Andriy', age: 21, experience: 2}, price: 3000, year: 2018};
let Car3 = {marka: 'audi', power: 280, owner: {name: 'Max', age: 27, experience: 3}, price: 7300, year: 2009};
let Car4 = {marka: 'lexus', power: 150, owner: {name: 'Nazar', age: 31, experience: 1}, price: 3800, year: 2010};
let Car5 = {marka: 'mercedes', power: 400, owner: {name: 'Ostap', age:29, experience: 7}, price: 5600, year: 2007};
let Car6 = {marka: 'opel', power: 220, owner: {name: 'Oleg', age: 23, experience: 4}, price: 4500, year: 2015};
let Car7 = {marka: 'porsche', power: 500, owner: {name: 'Ruslan', age: 19, experience: 1}, price: 6300, year: 2021};
*/
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
/*
function powerAndDriver(car,driver){
    car.power+=(car.power/100*10);
    car.owner.name=driver;
}
powerAndDriver(Car1,'Oksana');
powerAndDriver(Car2,'Taras');
powerAndDriver(Car3,'Roman');
powerAndDriver(Car4,'Sasha');
*/

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
/*
let cars=[Car1,Car2,Car3,Car4,Car5,Car6,Car7];
 for (let i = 2; i < cars.length; i+=2) {
    cars[i].power+=(cars[i].power/100)*10;
    cars[i].price+=(cars[i].price/100)*10;console.log(cars);
     console.log(cars[i]);
 }
 */

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
/*
 let filter=cars.filter((value)=>(value.owner.experience<2 && value.owner.age>25)?value.owner.experience+=1:value);
console.log(filter);
*/

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
/*
let suma=cars.reduce((acc, currentValue) =>{
   return acc+currentValue.price
},0 );
console.log(suma);
 */



