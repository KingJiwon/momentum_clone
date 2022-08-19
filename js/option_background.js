const change = document.querySelector(".change_background");
const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.png"];
const bgImg = document.getElementById("background_image");
const optionBg = document.querySelectorAll(".option_bar span");
const loginBg = document.querySelectorAll(".login-form input");
const todoBg = document.querySelectorAll(".todo-form input");
const todoListBg = document.querySelector(".todo-list");

const colors = {
  white: document.querySelector(".white"),
  lightpurple: document.querySelector(".lightpurple"),
  blue: document.querySelector(".blue"),
  lightgreen: document.querySelector(".lightgreen"),
  tomato: document.querySelector(".tomato"),
  darkpink: document.querySelector(".darkpink"),
};

function getRandomImage() {
  return (randomImage = images[Math.floor(Math.random() * images.length)]);
}

function changeBackground(event) {
  getRandomImage();
  bgImg.src = `img/${randomImage}`;
}
change.addEventListener("click", changeBackground);

function changeColor(event) {
  for (let i = 0; i < loginBg.length; i++) {
    let remove = loginBg[i].classList[1];
    loginBg[i].classList.remove(`${remove}`);
    loginBg[i].classList.add(`${event.target.classList[0]}_pick`);
  }
  for (let i = 0; i < optionBg.length; i++) {
    let remove = optionBg[i].classList[1];
    optionBg[i].classList.remove(`${remove}`);
    optionBg[i].classList.add(`${event.target.classList[0]}_pick`);
  }
  for (let i = 0; i < todoBg.length - 1; i++) {
    let remove = todoBg[i].classList[1];
    todoBg[i].classList.remove(`${remove}`);
    todoBg[i].classList.add(`${event.target.classList[0]}_pick`);
  }
  const remove = todoListBg.classList[1];
  todoListBg.classList.remove(`${remove}`);
  todoListBg.classList.add(`${event.target.classList[0]}_pick`);
}

colors.white.addEventListener("click", changeColor);
colors.lightpurple.addEventListener("click", changeColor);
colors.blue.addEventListener("click", changeColor);
colors.lightgreen.addEventListener("click", changeColor);
colors.tomato.addEventListener("click", changeColor);
colors.darkpink.addEventListener("click", changeColor);
