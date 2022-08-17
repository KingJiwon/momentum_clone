const change = document.querySelector(".change_background");
const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.png"];

function getRandomImage() {
  return (randomImage = images[Math.floor(Math.random() * images.length)]);
}

function changeBackground(event) {
  getRandomImage();
  document.getElementById("background_image").src = `img/${randomImage}`;
}
change.addEventListener("click", changeBackground);
