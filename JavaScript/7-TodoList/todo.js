
//Element Seçim Kısmı
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosUI);//Sayfa Yüklenince Çalışacak
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keydown",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

//Todoları temizleme
function clearAllTodos(e){
    if(confirm("Tümünü silmek istediğinize emin misiniz")){
        //todoList.innerHTML="";//bu yavaş
        while(todoList.firstElementChild!=null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

//Filtreleme kısmı
function filterTodos(e){
    const filterValue=e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            listItem.setAttribute("style","display:none !important");
        }else{
            listItem.setAttribute("style","display:block");
        }
    });
}

//sayfa yüklendiğinde çalışacak fonksiyon, localdeki verileri arayüze ekliycek
function loadAllTodosUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

//Todo ekleme ve kontrol fonksiyonu
function addTodo(e){
    const newTodo = todoInput.value.trim();
    if(newTodo===""){
        showAlert("danger","lütfen bir todo girin");
    }else{
        showAlert("success","todo başarıyla eklendi");
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
    }
    e.preventDefault();
}

//Todo arayüze ekleme fonksiyonu
function addTodoToUI(newTodo){
    //List Item Oluşturma
    const listItem = document.createElement("li");
    listItem.className="list-group-item d-flex justify-content-between";
    
    //Link oluşturma
    const link = document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML ="<i class = 'fa fa-remove'></i>";

    //Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todolist'e ekleme
    todoList.appendChild(listItem);
    
    //inputdaki yazıyı silme
    todoInput.value="";
    //console.log(listItem);
}

//todo silme fonksiyonu
function deleteTodo(e){
    //console.log(e.target);
    if(e.target.className==="fa fa-remove"){
        console.log("silme işlemi");
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","todo başarıyla silindi");
    }
}

//todoları localstorage den silme fonksiyonu
function deleteTodoFromStorage(deletetodo){
    let todos= getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo===deletetodo){
            todos.splice(index,1);//Arraydan değer silme
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}

//todo local storage ekleme
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

//local storageden todo çekme
function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

//uyarı fonksiyonu
function showAlert(type,message){
    const alert= document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    firstCardBody.appendChild(alert);
    //setTimeout metodu
    setTimeout(function(){
        alert.remove();
    },1000);
}