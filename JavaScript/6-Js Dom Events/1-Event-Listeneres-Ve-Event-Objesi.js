const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
});

todoForm.addEventListener("submit",submitForm);
function submitForm(e){
    console.log("Submit Eventi");
    e.preventDefault(); //işlemlerin en altına yazılır.
}