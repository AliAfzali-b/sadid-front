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
  if (offsetTop > 50) {
    headerElement.classList.add("sticky-header");
    /* document.getElementById("nav").style.top = "0px";
    document.getElementById("nav-icon").style.top = "-400px"; */
  } else {
    headerElement.classList.remove("sticky-header");

    /* document.getElementById("nav").style.top = "-200px";
    document.getElementById("nav-icon").style.top = "1%"; */
  }
}
//window events ens
//jquery lazy loading starts
$(function () {
  $(".lazy").lazy();
});
//jquery lazy loading ends
