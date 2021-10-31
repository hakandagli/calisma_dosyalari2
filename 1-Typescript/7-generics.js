function deger1(x) {
    return x;
}
function deger2(x) {
    return x;
}
function deger3(x) {
    return x;
}
var degisken1 = deger1(10);
var degisken2 = deger2("asdasd");
var degisken3 = deger3(5); //ister number yaz, ister string yaz
var degisken4 = deger3("adsasd");
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon('Ankara');
