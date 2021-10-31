var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//"this" Kullanımı
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + ". katda yemek yenildi");
        console.log(this._kat + ". katda yemek yenildi2"); //ters noktalama işareti kullanarak yazdık.
    };
    return Ev;
}());
/*
//örnekler
let hakaninEvi = new Ev(3,4,5);
hakaninEvi.yemekYe();
console.log(hakaninEvi._kat);*/
/********************************************************************************************************/
//--Erişim Bildirgeçleri - Access Modifier - Authentication--//
//private sadece tanımlandığı class'ın içinde çalışır.
//protecded tanımlandığı class ve türetildiği class içinde de çalışır.
//public herkes erişebilir.
var Kisi = /** @class */ (function () {
    function Kisi(isim2) {
        this.isim2 = isim2;
        console.log(this.isim2 + " isim2'li ki\u015Fi olu\u015Fturuldu");
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    return Kisi;
}());
//İnheritance
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri(isim2, musteriNo) {
        var _this = _super.call(this, isim2) || this;
        _this.musteriNo = musteriNo;
        console.log(+_this.musteriNo + " musteriNo'lu müşteri oluşturuldu");
        return _this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("satis yapildi");
    };
    return Musteri;
}(Kisi));
var musteri = new Musteri("hakanbaba", 10);
musteri.isim = "hakan"; //Set
console.log(musteri.isim); //Get
console.log(musteri.isim2);
musteri.satisYap();
