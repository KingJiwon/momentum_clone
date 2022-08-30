const change = document.querySelector(".change_background");
const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.png"];
const bgImg = document.getElementById("background_image");
const backgrounds = {
  optionBg: document.querySelectorAll(".option_bar span"),
  loginBg: document.querySelectorAll(".login-form input"),
  todoBg: document.querySelectorAll(".todo-form input"),
  todoListBg: document.querySelector(".todo-list"),
};

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

/// function for chage background color
function chageColorFunc(tar) {
  for (let i = 0; i < tar.length; i++) {
    let remove = tar[i].classList[1];
    tar[i].classList.remove(`${remove}`);
    tar[i].classList.add(`${event.target.classList[0]}_pick`);
  }
}

function changeColor(event) {
  for (key in backgrounds) {
    chageColorFunc(backgrounds[key]);
  }
  const remove = backgrounds.todoListBg.classList[1];
  backgrounds.todoListBg.classList.remove(`${remove}`);
  backgrounds.todoListBg.classList.add(`${event.target.classList[0]}_pick`);
}

/// set click event for change background
for (key in colors) {
  colors[key].addEventListener("click", changeColor);
}
