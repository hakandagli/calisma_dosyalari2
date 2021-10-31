//Destructing

let number,number2;

//Normal Yapım
arr=[100,200,300,400];
number1=arr[0];
number2=arr[1];
console.log(number1,number2);

//Destructing Hali
//ŞEKİL 1
[number1,number2]=arr;
console.log(number1,number2);

//ŞEKİL2
const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const{c,d}=numbers;
const{a:hakan}=numbers;
console.log(c,d);
console.log(hakan);

//ŞEKİL 3 arrow ile kullanımı
const getLangs=()=>["Python","Java","Javascript"];
const[lang1,lang2,lang3]=getLangs();
console.log(lang1,lang2,lang3);

//ŞEKİL 4Obje ve Obje içindeki arrow metodi
const person={
    name:"hakan dağlı",
    showInfos:()=>console.log("Bilgiler Gösteriliyor...")
}
const{name,showInfos:bilgileriGoster}=person;
console.log(name);
bilgileriGoster();


