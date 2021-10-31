//NUMBER
var sayi;
sayi = 10;
sayi = 10.4;
//sayi ="hakan"; //hatalı
//STRİNG
var sehir;
sehir = "ankara";
var isim = "sehir";
//BOOLEAN
var dogruMu;
dogruMu = false;
dogruMu = true;
//DİZİLER
var sayilar = [1, 2, 3, 4, 5];
var sayilar2 = [1, 2, 3, 4, 5];
//console.log(...sayilar); diziler bu şekilde de çağrılabilir.
//let dizi=[2,"Ankara"]; 
var dizi2 = [2, "Ankara"];
//ENUM
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk1 = Renk.Kirmizi;
//ANY
var deger = "Ankara";
deger = 2;
deger = {};
//VOİD
var deger2 = undefined;
function selamVer2() {
    console.log("Merhaba");
}
//UNDEFİNED
var yas; //undefined
yas = 10;
//NULL
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
