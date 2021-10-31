//Klavye Eventleri

//keypress 
/*document.addEventListener("keypress",run);
function run(e){
    
    console.log(e.which);//ascii değeri
    console.log(e.key);//Tuşun kendi değeri
}*/

//keydown basınca çalışıyor
/*document.addEventListener("keydown",run);
function run(e){
    console.log(e.key);
}*/

//keyup elimizik kaldırınca çalışır
/*document.addEventListener("keyup",e=>{
    console.log(e.key);
});*/


//örnek
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);
function changeText(e){
    header.textContent=e.target.value;
    console.log(e.target.value);
}



