//Spread Operator

const langs=["Php", "Java","Python"];
console.log(langs[0],langs[1],langs[2]);
console.log(...langs)

const langs2=["Javascript","C#",langs[0],langs[1],langs[2]];
console.log(langs2);

const langs3=["Javascript","c#",...langs];
console.log(langs3);

//Destructing ile kullanımı
const numbers =[1,2,3,4,5,6,7,8,9];
const [a,b,...number2]=numbers;
console.log(a,b);
console.log(number2);

//Arrow Fonksiyonu ile kullanımı

const addNumbers=(a,b,c)=>console.log(a+b+c);
const numbers2=[100,200,300];
addNumbers(...numbers2);