const todoInput = document.getElementById("todo");
let element;

/*
element = todoInput;
element = todoInput.classList;
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control");
*/


element=todoInput;
element=todoInput.placeholder;
element=todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naberr");

todoInput.setAttribute("title","Input");
todoInput.hasAttribute("required");
todoInput.removeAttribute("name");
console.log(element);