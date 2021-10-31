//Break ve Continue Kullanımı





//////////////////////

//Dizi ve döngüler


///////////////////7
/*
//map döngüsü
const users=[
    {name:"hakan",age:25},
    {name:"murat",age:19}
];

const names = users.map(function(user){
    return user.name;
});

console.log(names);
*/

// let in döngüsü

const user={
    name:"hakan",
    age:22
};
/*
for(let key in user){
    console.log(key);
}
*/
for(let key in user){
    console.log(key,user[key]);
}
