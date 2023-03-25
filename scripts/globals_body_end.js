// preloader starts
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("preloader-done");
});
// preloader ends
//window events starts
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  let offsetTop = document.body.scrollTop || document.documentElement.scrollTop;
  let headerElement = document.querySelector(".site-header");
  if (headerElement) {
    if (offsetTop > 50) {
      headerElement.classList.add("sticky-header");
    } else {
      headerElement.classList.remove("sticky-header");
    }
  }
}
//window events ens
//jquery lazy loading starts
$(function () {
  $(".lazy").lazy();
});
//jquery lazy loading ends
window.addEventListener("load", () => {
  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector("#modal-navbar").classList.toggle("active");
    document.querySelector(".hamburger-menu").classList.toggle("active");
  });
  document.querySelector(".show-events-btn").addEventListener("click", () => {
    document.querySelector(".show-events-btn").classList.toggle("active");
    document.querySelector(".events-modal").classList.toggle("active");
  });
  document.querySelector(".hide-events-btn").addEventListener("click", () => {
    document.querySelector(".show-events-btn").classList.toggle("active");
    document.querySelector(".events-modal").classList.toggle("active");
  });
});
