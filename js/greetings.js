const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const logOut = document.querySelector(".logout");
const todo = document.querySelector(".todo");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  todo.classList.remove(HIDDEN_CLASS);
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username}! What is your plan today?`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  todo.classList.add(HIDDEN_CLASS);
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  todo.classList.remove(HIDDEN_CLASS);
  paintGreetings(savedUsername);
}

function logOutBtn() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASS);
  greeting.classList.add(HIDDEN_CLASS);
  todo.classList.add(HIDDEN_CLASS);
  loginInput.value = "";
}

logOut.addEventListener("click", logOutBtn);
