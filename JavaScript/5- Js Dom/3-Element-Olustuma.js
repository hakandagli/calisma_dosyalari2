const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newLink);
