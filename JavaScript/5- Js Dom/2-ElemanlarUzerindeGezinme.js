let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

//ChildNodes
value=todoList.childNodes;//9 tane eleman bulur,boşlukları da elemandan sayar.

//Children - Element
value=todoList.children;
value=todoList.children[2].textContent="Değişti";

value=cardrow.children[2].children[1].textContent="Burası da değişti";


value=todoList.firstElementChild;
value=todoList.lastElementChild;
value=todoList.children.length;
value=todoList.childElementCount;

//Parent Ebeven element
value = cardrow.parentElement.parentElement;

//Element kardeşleri Ebeveynleri ortak olan elementler

value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;

console.log(value);