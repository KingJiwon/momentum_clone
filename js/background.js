const images = ["1.png", "2.jpeg", "4.jpg", "5.png"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;
bgImage.classList.add("background_img");
document.body.prepend(bgImage);
