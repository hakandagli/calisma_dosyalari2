//Event Bubbling
/*
document.querySelector(".container").addEventListener("click",function(){
    console.log("div container");
});

document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card Row");
});


document.querySelectorAll(".card-body")[1].addEventListener("click",e=>{
    console.log("card body");
})*/

//Event Capturing - Event delegation

const cardbody = document.querySelectorAll(".card-body")[1].addEventListener("click",function(e){
    if(e.target.className ==="fa fa-remove"){
        console.log("silme işlemi");
    }

    if(e.target.id==="filter"){
        console.log("filtreleme işlemi");
    }
    if(e.target.id==="clear-todos"){
        console.log("Tüm taskları silme işlemi");
    }
});
