const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");


//Click Event
//dblclick çift tıklayınca çalışır
//mousedown,mouseup,mouseover,mouseout
//mouseenter mouseleave sadece belirttiğiniz elemana girdiğinde çalışır, içindeki diğer elementlere girildiğinde veya çıkıldığında çalışmazlar


title.addEventListener("mouseout",run);
function run(e){
    console.log(e.type);
}
