const quotes = [
  {
    quote: "You only live once, but if you do it right, once is enough.",
    aouthor: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    aouthor: "Mahatma Gandhi",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    aouthor: "Oscar Wilde",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    aouthor: "Mahatma Gandhi",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    aouthor: "Oscar Wilde",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    aouthor: "Elbert Hubbard",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    aouthor: "Mark Twain",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    aouthor: "Dr. Seuss",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    aouthor: "William W. Purkey",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    aouthor: "Robert Frost",
  },
];

const quote = document.querySelector(".quote span:first-child");
const aouthor = document.querySelector(".quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
aouthor.innerText = randomQuote.aouthor;
