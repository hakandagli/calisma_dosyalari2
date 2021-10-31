//Break ve Continue Kullanımı
/*let i=0;
while(i<10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}*/

/*let j=0;
while(j<10){
    
    if(j==3 || j==7){
        j++;
        continue;
    }
    console.log(j);
    j++;
}*/

//////////////////7

//Do While döngüsü
/*let i=0;
do{
    console.log(i);
    i++;
}while(i<10);
*/

//////////////////////

//Dizi ve döngüler
/*const langs=["A","B","C"];*/
/*let index =0;
while(index<langs.length){
    console.log(langs[index]);
    index++;
}*/

/*for(let index=0;index<langs.length;index++){
    console.log(langs[index]);
}*/

/*langs.forEach(function(lang,index){
    console.log(lang,index);
});*/

///////////////////7

//map döngüsü
const users=[
    {name:"hakan",age:25},
    {name:"murat",age:19}
];

const names = users.map(function(user){
    return user.name;
});

console.log(names);

// let in döngüsü

const user={
    name:"hakan",
    age:22
};

for(let key in user){
    console.log(key);
}

for(let key in user){
    console.log(key,user[key]);
}
