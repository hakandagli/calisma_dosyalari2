function topla(x,y){
    return x+y;
}

function topla2(x:number,y:number):number{
    return x+y;
}

let topla3 = function(x:number,y:number):number{
    return x+y;
}

function topla4(x:number,y?:number):number{// ? varsa kullan yoksa kullanma demek
    if(y){
        return x+y
    }
    return x;
}

function deneme(x:number,y:number):void{
    console.log("void fonksiyon deger dönmez");
    return;// return deger döndürmez ancak fonksiyonu sonlandırmak için kullanılır.
}

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}

function davetEt2(...digerleri:string[]):string{
    return digerleri.join(" ");
}

console.log("hakan");
console.log(topla(2,"ankara"));
console.log(topla2(2,3)); //string verirsek hata verir
console.log(topla3(2,3));
console.log(topla4(7));
console.log(davetEt("Engin","Derin","Salih","Hakan"));
