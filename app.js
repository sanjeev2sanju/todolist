const input = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".input-section button");
const todoForm = document.querySelector(".todo-form");

//preventDefault

todoForm.addEventListener("submit", function (g) {
  g.preventDefault();
});

showTasks();

button.onclick = () => {
  let usertyped = input.value;
  if(usertyped.length == 0){
    window.alert("Please enter a Todolist");
  }else{
  let getLocalStorage = localStorage.getItem("New Todolist");
  if (getLocalStorage == null) {
    arr = [];
  } else {
    arr = JSON.parse(getLocalStorage);
  }
  arr.push(usertyped);
  localStorage.setItem("New Todolist", JSON.stringify(arr));
  showTasks();
}
};

function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todolist");
  if (getLocalStorage == null) {
    arr = [];
  } else {
    arr = JSON.parse(getLocalStorage);
  }
  let newLine = "";
  arr.forEach((element, index) => {
    newLine += `<li>
        ${element} <span onclick="strikeTask(${index})"><i class="fas fa-trash"></i> </span>
      </li>`;
  });
  todoList.innerHTML = newLine;
  input.value = "";
}

function strikeTask(index) {
  let getLocalStorage = localStorage.getItem("New Todolist");
  arr = JSON.parse(getLocalStorage);
  arr.splice(index, 1);
  localStorage.setItem("New Todolist", JSON.stringify(arr));
  showTasks();
}