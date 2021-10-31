
//YAZIM 1
function merhaba(name,age=15){
    console.log(`İsim: ${name} Yaş: ${age}`);
}

merhaba("hakan",25);
merhaba("hakan");// age değeri= yapılarak varsayılan olarak verilir yoksa undefined değer alır.


function square(x){
    return x*x;
    ///Buraya yazılan kod hiçbir zaman çalıştırılmaz
}

function cube(x){
    return x*x*x;
}

let value=cube(square(2));
console.log(value);

//YAZIM2
const merhaba2 = function(name){
    console.log("merhaba "+ name );
};

merhaba2("hakan");

//Immediately Invoked Function Expression (IIFE)

(function(name){
    console.log("merhaba"+name);
})("hakan2");

////////////////////////////////

const database={
    host:"localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi");
    },
    update:function(id){
        console.log(`id: ${id} Güncellendi`);
    },
    delete:function(){
        console.log("Silindi");
    }
};

console.log(database.host);
database.add();
database.update(55);

