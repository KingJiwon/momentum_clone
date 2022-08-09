const images = ["0.png", "1.png", "2.jpeg", "3.jpeg", "4.jpg", "5.png"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
