var plusBtn = document.getElementById("plusBtn");
var overlay = document.getElementById("overlay");
var detail = document.getElementById("detail");

plusBtn.addEventListener("click", function () {
  overlay.style.display = "block";
  detail.style.display = "block";
});

//Inside form if we add buttons,it will take that button type as sumbit button as default.so if the button is clicked the page will be reloded if no action attribute is given in form.if action(link) is given it will redirect to that link.so inorder to stop it we can write the below function.
var cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("click", function (event) {
  event.preventDefault();
});
cancelBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  detail.style.display = "none";
});

//Inside form if we add buttons,it will take that button type as sumbit button as default.so if the button is clicked the page will be reloded if no action attribute is given in form.if action(link) is given it will redirect to that link.so inorder to stop it we can write the below function.
var addBtn = document.getElementById("addBtn");
var titleVal = document.getElementById("titleVal");
var authorVal = document.getElementById("authorVal");
var descriptionVal = document.getElementById("descriptionVal");
var container = document.querySelector(".container");
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // Check if any of the fields are empty
  if (
    titleVal.value === "" ||
    authorVal.value === "" ||
    descriptionVal.value === ""
  ) {
    alert("Please fill out all the fields.");
    return;
  }
  let subContainer = document.createElement("div");
  subContainer.setAttribute("class", "book-cointainer");
  subContainer.style.marginLeft = "10px";
  subContainer.innerHTML = `<h2>${titleVal.value}</h2>
        <h5>${authorVal.value}</h5>
        <p>${descriptionVal.value}</p>
        <button onclick="deleting(event)">Delete</button>`;
  container.appendChild(subContainer);
  overlay.style.display = "none";
  detail.style.display = "none";
  titleVal.value = "";
  authorVal.value = "";
  descriptionVal.value = "";
});

//i have used event handler because then only i can use inside line 33 in js.so it will work properly
function deleting(event) {
  event.target.parentElement.remove();
}
