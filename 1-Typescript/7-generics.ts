function deger1(x:number):number{
    return x;
}

function deger2(x:string):string{
    return x;
}

function deger3<T>(x:T):T{
    return x;
}

let degisken1=deger1(10);
let degisken2=deger2("asdasd");
let degisken3=deger3<number>(5);//ister number yaz, ister string yaz
let degisken4=deger3<string>("adsasd");

class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<string>();
sinif.fonksiyon('Ankara');

