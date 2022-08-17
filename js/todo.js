const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector(".todo-input");
const todoMonth = todoForm.querySelector(".todo-month");
const todoDay = todoForm.querySelector(".todo-day");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.classList.add("todo_li");
  li.id = newTodoObj.id;
  const dateSpan = document.createElement("span");
  dateSpan.classList.add("todo_date_span");
  dateSpan.innerText = `${newTodoObj.month.padStart(
    2,
    0
  )} - ${newTodoObj.day.padStart(2, 0)}`;
  const span = document.createElement("span");
  span.classList.add("todo_span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("div");
  button.classList.add("del_button");
  button.innerText = "DEL";
  button.addEventListener("click", deleteToDo);
  li.appendChild(dateSpan);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newMonth = todoMonth.value;
  const newDay = todoDay.value;
  todoInput.value = "";
  const newTodoObj = {
    month: newMonth,
    day: newDay,
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
