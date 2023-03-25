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
const handle_home_page_sec_1_button_click = (el) => {
  let index = el.getAttribute("data-index");
  handle_home_page_sec_1_go_to_index(index);
};
const handle_home_page_sec_1_next_click = () => {
  let buttons = document.querySelectorAll(
    ".buttons-container .single-tabs-btn"
  );
  let index = 0;
  buttons.forEach((btn) => {
    if (btn.classList.contains("active"))
      index = btn.getAttribute("data-index");
  });
  if (Number(index) > 3) {
    index = 1;
  } else {
    index = Number(index) + 1;
  }
  handle_home_page_sec_1_go_to_index(index);
};
const handle_home_page_sec_1_go_to_index = (
  index //number is 1 - 4
) => {
  console.log("index", index);
  let tab_btn = document.querySelector(
    `.buttons-container .single-tabs-btn:nth-child(${index})`
  );
  let dot_btn = document.querySelector(
    `.sec-1-tab-dots .sec-1-tab-single-dot:nth-child(${index})`
  );
  let tab_content = document.querySelector(
    `.sec-1-content-container .single-tab-content[data-index="${index}"]`
  );
  $(".sec-1-tab-dots .sec-1-tab-single-dot").removeClass("active");
  $(".buttons-container .single-tabs-btn").removeClass("active");
  $(".sec-1-content-container .single-tab-content").removeClass("active");
  tab_btn.classList.add("active");
  dot_btn.classList.add("active");
  tab_content.classList.add("active");
};
