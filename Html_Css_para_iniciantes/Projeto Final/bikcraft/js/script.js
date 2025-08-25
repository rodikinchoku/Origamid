// Active menu links
const links = document.querySelectorAll(".header-menu a");

function activelink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activelink);

// Active estimate items

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);

  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProduct);

//Asked questions

const questions = document.querySelectorAll(".question button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");

  const active = answer.classList.contains("active");
  answer.setAttribute("aria-expanded", active);
}

function questionEvents(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(questionEvents);

// Bikes Gallery

const gallery = document.querySelectorAll(".bike-images img");
const galleryContainer = document.querySelector(".bike-images");

function changeImage(event) {
  const image = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(image);
  }
}

function galleryEvents(image) {
  image.addEventListener("click", changeImage);
}

gallery.forEach(galleryEvents);

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}