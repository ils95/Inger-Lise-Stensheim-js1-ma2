// Question 1

const button = document.querySelector("#bg");

button.onclick = function () {
  console.log(event.target);
  document.body.style.background = "green";
};

// Question 2
const secondButton = document.querySelector(".toggler");
const toggleDiv = document.querySelector(".togglee");
let count = 0;

function toggleClass() {
  count = count + 1;
  if (count % 2 === 1) {
    toggleDiv.classList.remove("togglee");
    toggleDiv.classList.add("extra");
  } else {
    toggleDiv.classList.remove("extra");
    toggleDiv.classList.add("togglee");
  }
}

secondButton.onclick = toggleClass;

// Question 3

const dropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function () {
  console.log(event.target.value);

  const selectedValue = this.value;

  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    paragraphsContainer.innerHTML += `<p class="content">${i}</p>`;
  }
};

// Question 4

const message = document.querySelector(".input");
const characterCount = document.querySelector(".char-count b");

message.onkeyup = function () {
  console.log(event.target.value.length);

  const len = event.target.value.length;

  characterCount.innerHTML = len;
};

// Question 5

const body = document.querySelector("body");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 35) {
    document.body.classList.add("highlight");
  } else {
    document.body.classList.remove("highlight");
  }
}

window.onscroll = handleScroll;
