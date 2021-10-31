//interfaceden farkı ortak metodları, her sınıf tekrar tanımlamak zorunda değil, sadece soyut sınıfları tanımlamak yeterli olacaktır.
//sadece kalıtım yoluyla kullanılabilirler, doğrudan kullanılamazlar
abstract class KrediBase {
    constructor() {
    }

    kaydet():void{
        console.log("kaydedildi");
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase {
    constructor(){
        super();//extends edilen class'ın constroctur'ında deger tanımsız oldugu için tanımladık
    }

    hesapla():void{
        console.log("tüketici kredisine göre hesaplama yapıldı");
    }
}

let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();