function setSlide(input, index) {
  let item = document.querySelector(`#${input}`);
  let itemBtn = document.querySelector(`#${index}`);
  let slides = [...document.querySelector(".slides").children];
  let slideIndex = [...document.querySelector(".slider-btns").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  slideIndex.forEach((element) => {
    element.classList.remove("selected");
  });
  item.classList.add("active");
  itemBtn.classList.add("selected");
}

/* ....... footer ....... */

function setSlideVideo(input1, input2) {
  let item1 = document.querySelector(`#${input1}`);
  let item2 = document.querySelector(`#${input2}`);
  let slides1 = [...document.querySelector(".video-slider").children];
  let slides2 = [...document.querySelector(".video-photos-div").children];
  slides1.forEach((element) => {
    element.classList.remove("global-active");
  });
  slides2.forEach((element) => {
    element.classList.remove("video-photo-selected");
  });
  item1.classList.add("global-active");
  item2.classList.add("video-photo-selected");
}

function setSlide(input, index) {
  let item = document.querySelector(`#${input}`);
  let itemBtn = document.querySelector(`#${index}`);
  let slides = [...document.querySelector(".slides").children];
  let slideIndex = [...document.querySelector(".slider-btns").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  slideIndex.forEach((element) => {
    element.classList.remove("selected");
  });
  item.classList.add("active");
  itemBtn.classList.add("selected");
}

const msg = document.querySelector(".message");
function Message() {
  msg.classList.add;
}

// mohem component
let mohemIndex = 1;
function setMohem(input, index) {
  mohemIndex = index;
  let item = document.querySelector(`#${input}`);
  let slide = [...document.querySelector(".mohem-container").children];
  slide.forEach((element) => {
    element.classList.remove("mohem-activate");
  });
  item.classList.add("mohem-activate");
}
setInterval(() => {
  mohemIndex += 1;
  if (mohemIndex == 7) {
    mohemIndex = 1;
  }
  setMohem(`ms${mohemIndex}`, mohemIndex);
}, 4000);
// vahedha component
let vahedIndex = 1;
function setVahed(input, index) {
  vahedIndex = index;
  let item = document.querySelector(`#${input}`);
  let slide = [...document.querySelector(".vahedha-container").children];
  slide.forEach((element) => {
    element.classList.remove("frame-vahedha-activate");
  });
  item.classList.add("frame-vahedha-activate");
}
setInterval(() => {
  vahedIndex += 1;
  if (vahedIndex == 4) {
    vahedIndex = 1;
  }
  setVahed(`va${vahedIndex}`, vahedIndex);
}, 8000);

function vahedPluse() {
  vahedIndex += 1;
  if (vahedIndex == 4) {
    vahedIndex = 1;
  }
  setVahed(`va${vahedIndex}`, vahedIndex);
}
function vahedMinus() {
  vahedIndex -= 1;
  if (vahedIndex == 0) {
    vahedIndex = 3;
  }
  setVahed(`va${vahedIndex}`, vahedIndex);
}

/* message */
function messageOn() {
  document.getElementById("message-btn-on").style.display = "flex";
}
function messageOff() {
  document.getElementById("message-btn-on").style.display = "none";
}

/* message */
/* message */
function roydadOn() {
  document.getElementById("roydad-div-on").style.display = "flex";
}
function roydadOff() {
  document.getElementById("roydad-div-on").style.display = "none";
}

/* message */
