// var anahtar kelimesi
var a=10;
var a=15;//tekrar tanımlanabilir


if(a==15){
    var a2=a;
}

console.log(a2);

// let anahtar kelimesi
let b=10;
//let b=11; let değer sadece 1 kere tanımlabilir
b=20; // bu doğru olan

if(b>0){
    let b2=b;
    //console.log(b2); // burada tanımlı olduğu için hata vermez
}

//console.log(b2);// hata verir çünkü sadece if içinde tanımlı idi

//const anahtar kelimesi

const c=10;
//c=11; tekrar üstüne değer yazılamaz

const number=[1,2,3,4];
console.log(number);

number.push(5); //Hata vermez çünkü değişkenin adres değeri değişmedi
