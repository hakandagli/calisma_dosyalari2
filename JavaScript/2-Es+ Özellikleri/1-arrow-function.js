//Normal de nasıl kullanıyoruz

const merhaba = function(){
    console.log("merhaba");
}
merhaba();

//Arrow Kullanımları
const merhaba2 =()=>{
    console.log("merhaba2");
}
merhaba2();

const merhaba3=(firstName)=>{
    console.log("Merhaba",firstName);
}
merhaba3("hakan");

const merhaba4=firstname=>console.log("merhaba",firstname);
merhaba4("hakan");

//Return ve Arrow
const cube = function(x){
    return x*x*x;
}
console.log(cube(2));

const cube2 =x=>x*x*x;
console.log(cube2(2));

