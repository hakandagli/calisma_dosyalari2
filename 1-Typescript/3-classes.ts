//"this" Kullanımı
class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._kat=kat;
        this._pencereSayisi=pencereSayisi;
    }

    yemekYe(){
        console.log(this._kat + ". katda yemek yenildi");
        console.log(`${this._kat}. katda yemek yenildi2`);//ters noktalama işareti kullanarak yazdık.
    }
}

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

class Kisi{
    //Getter ve Setter kullanımı, encapsulation Not: ES5 uyarısı verebilir.
    private _isim:string;
    get isim():string{
        return this._isim;
    }
    set isim(ad:string){
        this._isim=ad;
    }

    isim2 :string

    constructor(isim2:string){
        this.isim2=isim2;
        console.log(`${this.isim2} isim2'li kişi oluşturuldu`);
    }
}

//İnheritance
class Musteri extends Kisi{
    musteriNo:number;
    
    constructor(isim2:string,musteriNo:number){
        super(isim2); //super metodu kullanımı
        this.musteriNo=musteriNo;
        console.log(+this.musteriNo+ " musteriNo'lu müşteri oluşturuldu");
    }
    satisYap(){//bu sınıfın kendine özel metodu
        console.log("satis yapildi");
    }
}

let musteri = new Musteri("hakanbaba",10);
musteri.isim="hakan"; //Set
console.log(musteri.isim);//Get
console.log(musteri.isim2);
musteri.satisYap();







 