const cardbody = document.querySelectorAll(".card-body")[1];

//Yeni element
const newElement = document.createElement("h3");
newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni Todolar";

//Eski Element
const oldElement=cardbody.children[1];
cardbody.replaceChild(newElement,oldElement);
