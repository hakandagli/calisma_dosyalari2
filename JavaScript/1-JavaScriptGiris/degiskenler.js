//Primetive (ilkel) veri tipleri
var a=10;
var b=10.1;
var c="hakan";
var d=true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//Reference veri tipleri
var numbers=[1,2,3,4,5];

var person={
    name:"hakan dagli",
    age:15
}

var date = new Date();

var merhaba = function(){
    console.log("merhaba");
}

//NULL VE Undefined

var e = null;
console.log(typeof e);//object -  içi boş değişken

var h;
console.log(typeof h)//undefined daha değer tanımlanmamış
