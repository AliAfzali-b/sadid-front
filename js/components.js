window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0px";
    document.getElementById("nav-icon").style.top = "-400px";
  } else {
    document.getElementById("nav").style.top = "-200px";
    document.getElementById("nav-icon").style.top = "1%";
  }
}

/* .....m.......... */
/* video-slider-div
video-slider-video global-active 
vsv1  vsv2  vsv3*/
// اسلایدر بالا خبر
let slideIndexPic = 3;
function setSlideNews(input1, input2, index) {
  slideIndexPic = index;
  let item1 = document.querySelector(`#${input1}`);
  let item2 = document.querySelector(`#${input2}`);
  let slides1 = [...document.querySelector(".slide-3").children];
  let slides2 = [...document.querySelector(".slide-3-navigation-img").children];
  slides1.forEach((element) => {
    element.classList.remove("slide-3-pages-active");
  });
  slides2.forEach((element) => {
    element.classList.remove("slide-3-navigation-img-selected");
  });

  item1.classList.add("slide-3-pages-active");
  item2.classList.add("slide-3-navigation-img-selected");
}
function jam() {
  slideIndexPic += 1;
  if (slideIndexPic == 6) {
    slideIndexPic = 1;
  }
  setSlideNews(
    `slide-3-page${slideIndexPic}`,
    `slide-3-navigation-img${slideIndexPic}`,
    slideIndexPic
  );
}
function menha() {
  slideIndexPic -= 1;
  if (slideIndexPic == 0) {
    slideIndexPic = 5;
  }
  setSlideNews(
    `slide-3-page${slideIndexPic}`,
    `slide-3-navigation-img${slideIndexPic}`,
    slideIndexPic
  );
}
setInterval(() => {
  slideIndexPic += 1;
  if (slideIndexPic == 6) {
    slideIndexPic = 1;
  }
  setSlideNews(
    `slide-3-page${slideIndexPic}`,
    `slide-3-navigation-img${slideIndexPic}`,
    slideIndexPic
  );
}, 6000);
// اسلایدر خبر انتها
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* slide4 top site start */

let slideIndexM = 1;
function setSlideSim(input, index) {
  slideIndexM = index;
  let item = document.querySelector(`#${input}`);
  let slides = [
    ...document.querySelector(".sliderImageTrain-frame-image").children,
  ];
  slides.forEach((element) => {
    element.classList.remove("activeSit");
  });
  item.classList.add("activeSit");
}

setInterval(() => {
  slideIndexM += 1;
  if (slideIndexM == 6) {
    slideIndexM = 1;
  }
  setSlideSim(`sim${slideIndexM}`, slideIndexM);
}, 10000);

function ziad() {
  slideIndexM += 1;
  if (slideIndexM == 6) {
    slideIndexM = 1;
  }
  setSlideSim(`sim${slideIndexM}`, slideIndexM);
}
function kam() {
  slideIndexM -= 1;
  if (slideIndexM == 6) {
    slideIndexM = 1;
  }
  setSlideSim(`sim${slideIndex}`, slideIndex);
}

/*  end slide4 top site */

/* ..... social > ....... */

const slideshow = document.querySelector(".slideshow");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;

  firstIcon.classList.add("faded-out");

  const thirdIcon = slideshow.children[3];

  thirdIcon.classList.add("light");

  thirdIcon.previousElementSibling.classList.remove("light");

  setTimeout(() => {
    slideshow.removeChild(firstIcon);

    slideshow.appendChild(firstIcon);

    setTimeout(() => {
      firstIcon.classList.remove("faded-out");
    }, 500);
  }, 500);
}, 3000);

/* ... < social   ....... */
// humburg menue

//

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// slider img slide2

// slide por

function Porbazdid(input, kod) {
  let aa = document.querySelector(`#${input}`);
  let bb = document.querySelector(`#${kod}`);
  let aa2 = [...document.querySelector(".porbazdid-sectionC").children];
  let bb2 = [...document.querySelector(".porbazdid-footer-iconC").children];
  aa2.forEach((element) => {
    element.classList.remove("porbazdid-activ");
  });
  bb2.forEach((element) => {
    element.classList.remove("porbazdid-footer-iconC-activate");
  });
  aa.classList.add("porbazdid-activ");
  bb.classList.add("porbazdid-footer-iconC-activate");
}
// اسلایدر بالا خبر
let slideIndexPic1 = 3;
function setSlideNews1(input1, input2, index) {
  slideIndexPic1 = index;
  let item1 = document.querySelector(`#${input1}`);
  let item2 = document.querySelector(`#${input2}`);
  let slides1 = [...document.querySelector(".slide-31").children];
  let slides2 = [
    ...document.querySelector(".slide-3-navigation-img1").children,
  ];
  slides1.forEach((element) => {
    element.classList.remove("slide-3-pages-active1");
  });
  slides2.forEach((element) => {
    element.classList.remove("slide-3-navigation-img-selected1");
  });

  item1.classList.add("slide-3-pages-active1");
  item2.classList.add("slide-3-navigation-img-selected1");
}
function jam1() {
  slideIndexPic1 += 1;
  if (slideIndexPic1 == 6) {
    slideIndexPic1 = 1;
  }
  setSlideNews1(
    `slide-3-page1${slideIndexPic1}`,
    `slide-3-navigation-img1${slideIndexPic1}`,
    slideIndexPic1
  );
}
function menha1() {
  slideIndexPic1 -= 1;
  if (slideIndexPic1 == 0) {
    slideIndexPic1 = 5;
  }
  setSlideNews1(
    `slide-3-page1${slideIndexPic1}`,
    `slide-3-navigation-img1${slideIndexPic1}`,
    slideIndexPic1
  );
}
setInterval(() => {
  slideIndexPic1 += 1;
  if (slideIndexPic1 == 6) {
    slideIndexPic1 = 1;
  }
  setSlideNews1(
    `slide-3-page1${slideIndexPic1}`,
    `slide-3-navigation-img1${slideIndexPic1}`,
    slideIndexPic
  );
}, 6000);


// For Live Projects
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("preloader-done");
  document.getElementById("loaderContainer").style.display = "none";
});


