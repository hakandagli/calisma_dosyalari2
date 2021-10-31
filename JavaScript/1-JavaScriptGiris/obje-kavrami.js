let value;

const programmer={
    name: "hakan dağlı",
    age: "22",
    email:"webdeveloper@hakandagli.net",
    langs:["html", "css", "javascript"],

    address:{
        city:"Ankara",
        street: "Bahçelievler"
    },

    work:function(){
        console.log("programcı çalışıyor...");
    }
}


value=programmer;
value=programmer.name;
value=programmer.langs;
value=programmer.address.city;
programmer.work();
console.log(value);

const programmers=[
    {name:"Hakan DAĞLI",age:25},
    {name:"Oğuz", age:25}
]

value=programmers[0].name;
console.log(value);

