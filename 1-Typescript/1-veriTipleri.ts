//NUMBER
let sayi:number;
sayi = 10;
sayi = 10.4;
//sayi ="hakan"; //hatalı

//STRİNG
let sehir : string;
sehir = "ankara";
let isim:string="sehir";

//BOOLEAN
let dogruMu:boolean
dogruMu = false
dogruMu = true

//DİZİLER
let sayilar:number[] =[1,2,3,4,5];
let sayilar2:Array<number>=[1,2,3,4,5];
//console.log(...sayilar); diziler bu şekilde de çağrılabilir.

//let dizi=[2,"Ankara"]; 
let dizi2:[number,string]=[2,"Ankara"];

//ENUM
enum Renk{Kirmizi=1,Siyah,Mavi}
let renk1:Renk=Renk.Kirmizi;

//ANY
let deger : any="Ankara";
deger=2;
deger={};

//VOİD
let deger2:void =undefined
function selamVer2(){
    console.log("Merhaba")
}

//UNDEFİNED
let yas:number//undefined
yas = 10;

//NULL
class Musteri{}


