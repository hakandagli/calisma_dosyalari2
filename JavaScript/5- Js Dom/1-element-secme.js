let element;

element = document.getElementById("todo-form");
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByTagName("li");

//Qurey Selector - Css selector - Tek bir elenent (ilk elemmanı seçer)
element = document.querySelector("#todoform");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");

//QuerySelectorAll (Tüm Elementleri Seçer)
element = document.querySelectorAll(".list-group-item");
element.forEach(function(el){
    console.log(el);
});

console.log(elememt);
